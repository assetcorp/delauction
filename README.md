
# Introduction

This is an ERC-721 smart contract I created to teach myself how to interface with the Ethereum blockchain.

## Getting Started

First, clone the repository <https://github.com/assetcorp/delauction> and run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Variables

You will need to specify some environment variables for this application to work well. Please see the example below

```env
# App Secrets
WHITELIST_DOMAINS='[]'
ADMIN_LOGIN_CODE='YOU_WILL_NEED_THIS_CODE_TO_LOGIN_AS_AN_ADMIN'

# JWT Secrets
JWT_SECRET=':)_SOME_RANDOM_CRAP_:p'

```

When you specify environment variables, you need to restart the server for the changes to take effect.

```bash
# Kill the server with CTRL-C on windows or CMD-C on Mac. Then:
yarn start
```

## How it works

DelAuction is an ERC-721 smart contract application that enables people to bid on a digital asset. The contract owner or an admin would have the ability to start the auction. Once that happens, anyone with a crypto wallet (use [MetaMask](https://metamask.io/)) can place a bid.

When the auction is ended, the highest bidder wins the artifact placed for the auction and the auction admin receives the highest bid amount in their crypto wallet.

Those who bid lesser than the highest bidder would be able to `withdraw` their funds once the bid has ended.

## Additional Information

The Smart contract code can be found at `/server/ethereum/contracts/DelAuction.sol`.

### Bugs and Improvements

This is my first ever smart contract so there are a couple of bugs:

#### Ending the auction

When an auction is started, the admin is supposed to be able to end the auction. But there is a bug that prevents that from happening since the code checks to see if the auction end time has been reached before attempting to end the auction.

```js
// Calling onlyAfter(endBidTime) is the bug here
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
```

#### LISTING BIDS

While creating the smart contract, I made it impossible to see the list of bids :(

#### IMPROVING THE WAY ARTIFACT FOR MINTING WORKS WITH THE UI

I made it impossible to see retrieve the `artifactURI` from the contract. :(

```js
string private artifactURI;
```
