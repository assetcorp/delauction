// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract DelAuction is ERC721, Ownable {
    using Counters for Counters.Counter;
    
    Counters.Counter private _tokenIdCounter;
    struct Bid {
        bytes32 hashed;
        uint deposit;
    }
    
    address payable public beneficiary;
    address public highestBidder;
    bool public bidStarted;
    bool public bidEnded;
    uint public endBidTime;
    uint public highestBidAmount;
    string private artifactURI;
    
    mapping ( uint256 => string ) private _tokenURIs;
    mapping( address => Bid[] ) public  bids;
    mapping( address => uint ) pendingReturns;
    
    event AuctionEnded( address winner, uint highestBidAmount );
    event HighestBidIncreased(address bidder, uint amount);
    
    error BiddingTooEarly( uint time );
    error BiddingTooLate( uint time );
    error BidNotStarted();
    error BidNotHighEnough(uint highestBid);
    error AuctionAlreadyEnded();
    
    modifier onlyBefore( uint time ) {
        if ( block.timestamp >= time ) revert BiddingTooLate(time);
        _;
    }
    
    modifier onlyAfter( uint time ) {
        if ( block.timestamp <= time ) revert BiddingTooEarly(time);
        _;
    }
    
    modifier hasStarted() {
        if ( bidStarted != true ) revert BidNotStarted();
        _;
    }
    
    constructor()  ERC721( "DelAuction", "DAC" ) {}
    
    function startBid( uint biddingTime, address payable beneficiaryAddress, string memory uri ) external {
        beneficiary = beneficiaryAddress;
        endBidTime = block.timestamp + biddingTime;
        artifactURI = uri;
        highestBidAmount = 0;
        highestBidder = address(0);
        
        bidStarted = true;
    }
    
    // Only allow bid if the bidding has not ended
    // The same address can bid multiple times
    function bid() external payable hasStarted() onlyBefore(endBidTime) {
        if ( block.timestamp > endBidTime ) revert AuctionAlreadyEnded();
        
        if ( msg.value <= highestBidAmount ) revert BidNotHighEnough(highestBidAmount);
        
        if ( highestBidAmount != 0 ) {
            pendingReturns[highestBidder] += highestBidAmount;
        }
        highestBidder = msg.sender;
        highestBidAmount = msg.value;
        emit HighestBidIncreased( msg.sender, msg.value );
    }
    
    function placeBid( address bidder, uint value ) internal returns (bool success) {
        // We don't want to allow a bid amount lesser than the highest bid amount
        if ( value <= highestBidAmount ) return false;
        
        // We must check if the highest bidder exists
        if ( highestBidder != address(0) ) {
            pendingReturns[highestBidder] += highestBidAmount;
        }
        
        highestBidAmount = value;
        highestBidder = bidder;
        
        return true;
    }
    
    function safeMint( address to ) internal onlyOwner {
        uint256 currentTokenId = _tokenIdCounter.current();
        _safeMint( to, currentTokenId );
        _setTokenURI( currentTokenId, artifactURI );
    }
    
    function _setTokenURI(uint256 tokenId, string memory _tokenURI) internal virtual {
        require(_exists(tokenId), "ERC721Metadata: URI set of nonexistent token");
        _tokenURIs[tokenId] = _tokenURI;
    }
    
    function withdrawBid() external returns (bool) {
        uint bidAmount = pendingReturns[msg.sender];
        
        if ( bidAmount > 0 ) {
            // Ensure that this is set to zero incase the bidder tries to call this function again
            // before the transfer completes
            pendingReturns[msg.sender] = 0;
            
            // Transfer the bid amount to the bidder
           if ( !payable(msg.sender).send(bidAmount) ) {
               pendingReturns[msg.sender] = bidAmount;
                return false;
           }
        }
        
        return true;
    }
    
    // End the auction only after the time for revealing bids have ellapsed
    // and pay the beneficiary (auction owner)
    function endAuction() external hasStarted() onlyAfter(endBidTime) {
        if ( bidEnded ) revert AuctionAlreadyEnded();
        
        // End the bid
        emit AuctionEnded( highestBidder, highestBidAmount );
        bidEnded = true;
        bidStarted = false;
        
        // Pay the auction owner (beneficiary)
        beneficiary.transfer(highestBidAmount);
        
        // Transfer the asset to the highest bidder
        safeMint(highestBidder);
    }
}

