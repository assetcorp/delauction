const contractDetails = {
  contractAddress: '0x5f6850338733cE9C464d7BD80970d4464a84ABab',
  contractAbi: [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [], "name": "AuctionAlreadyEnded", "type": "error" }, { "inputs": [{ "internalType": "uint256", "name": "highestBid", "type": "uint256" }], "name": "BidNotHighEnough", "type": "error" }, { "inputs": [], "name": "BidNotStarted", "type": "error" }, { "inputs": [{ "internalType": "uint256", "name": "time", "type": "uint256" }], "name": "BiddingTooEarly", "type": "error" }, { "inputs": [{ "internalType": "uint256", "name": "time", "type": "uint256" }], "name": "BiddingTooLate", "type": "error" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "approved", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" }], "name": "ApprovalForAll", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "winner", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "highestBidAmount", "type": "uint256" }], "name": "AuctionEnded", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "bidder", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "HighestBidIncreased", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "approve", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "beneficiary", "outputs": [{ "internalType": "address payable", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "bid", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "bidEnded", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "bidStarted", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "name": "bids", "outputs": [{ "internalType": "bytes32", "name": "hashed", "type": "bytes32" }, { "internalType": "uint256", "name": "deposit", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "endAuction", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "endBidTime", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "getApproved", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "highestBidAmount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "highestBidder", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "operator", "type": "address" }], "name": "isApprovedForAll", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "ownerOf", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "bytes", "name": "_data", "type": "bytes" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "bool", "name": "approved", "type": "bool" }], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "biddingTime", "type": "uint256" }, { "internalType": "address payable", "name": "beneficiaryAddress", "type": "address" }, { "internalType": "string", "name": "uri", "type": "string" }], "name": "startBid", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" }], "name": "supportsInterface", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "tokenURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "transferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "withdrawBid", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }],
  contractByteCode: '60806040523480156200001157600080fd5b50604080518082018252600a8152692232b620bab1ba34b7b760b11b60208083019182528351808501909452600384526244414360e81b9084015281519192916200005f91600091620000ee565b50805162000075906001906020840190620000ee565b505050620000926200008c6200009860201b60201c565b6200009c565b620001d1565b3390565b600680546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b828054620000fc9062000194565b90600052602060002090601f0160209004810192826200012057600085556200016b565b82601f106200013b57805160ff19168380011785556200016b565b828001600101855582156200016b579182015b828111156200016b5782518255916020019190600101906200014e565b50620001799291506200017d565b5090565b5b808211156200017957600081556001016200017e565b600181811c90821680620001a957607f821691505b60208210811415620001cb57634e487b7160e01b600052602260045260246000fd5b50919050565b611e1780620001e16000396000f3fe60806040526004361061019c5760003560e01c80636352211e116100ec57806395d89b411161008a578063c87b56dd11610064578063c87b56dd14610488578063e985e9c5146104a8578063f2fde38b146104f1578063fe67a54b1461051157600080fd5b806395d89b4114610433578063a22cb46514610448578063b88d4fde1461046857600080fd5b8063715018a6116100c6578063715018a6146103ca5780638da5cb5b146103df5780638f9b4874146103fd57806391f901571461041357600080fd5b80636352211e146103695780636de4721e1461038957806370a08231146103aa57600080fd5b806323b872dd1161015957806338af3eed1161013357806338af3eed146102e85780633ed022571461030857806342842e0e14610329578063539a0c301461034957600080fd5b806323b872dd1461028f57806326746639146102af57806337271cc7146102d357600080fd5b806301495c1c146101a157806301ffc9a7146101db57806306fdde031461020b578063081812fc1461022d578063095ea7b3146102655780631998aeef14610287575b600080fd5b3480156101ad57600080fd5b506101c16101bc366004611a16565b610526565b604080519283526020830191909152015b60405180910390f35b3480156101e757600080fd5b506101fb6101f6366004611a42565b610562565b60405190151581526020016101d2565b34801561021757600080fd5b506102206105b4565b6040516101d29190611b9a565b34801561023957600080fd5b5061024d610248366004611a7c565b610646565b6040516001600160a01b0390911681526020016101d2565b34801561027157600080fd5b50610285610280366004611a16565b6106e0565b005b6102856107f6565b34801561029b57600080fd5b506102856102aa366004611922565b610929565b3480156102bb57600080fd5b506102c5600a5481565b6040519081526020016101d2565b3480156102df57600080fd5b506101fb61095a565b3480156102f457600080fd5b5060085461024d906001600160a01b031681565b34801561031457600080fd5b506009546101fb90600160a81b900460ff1681565b34801561033557600080fd5b50610285610344366004611922565b6109be565b34801561035557600080fd5b50610285610364366004611a95565b6109d9565b34801561037557600080fd5b5061024d610384366004611a7c565b610a35565b34801561039557600080fd5b506009546101fb90600160a01b900460ff1681565b3480156103b657600080fd5b506102c56103c53660046118cc565b610aac565b3480156103d657600080fd5b50610285610b33565b3480156103eb57600080fd5b506006546001600160a01b031661024d565b34801561040957600080fd5b506102c5600b5481565b34801561041f57600080fd5b5060095461024d906001600160a01b031681565b34801561043f57600080fd5b50610220610b69565b34801561045457600080fd5b506102856104633660046119e3565b610b78565b34801561047457600080fd5b50610285610483366004611963565b610c3d565b34801561049457600080fd5b506102206104a3366004611a7c565b610c75565b3480156104b457600080fd5b506101fb6104c33660046118e9565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b3480156104fd57600080fd5b5061028561050c3660046118cc565b610d5d565b34801561051d57600080fd5b50610285610df8565b600e602052816000526040600020818154811061054257600080fd5b600091825260209091206002909102018054600190910154909250905082565b60006001600160e01b031982166380ac58cd60e01b148061059357506001600160e01b03198216635b5e139f60e01b145b806105ae57506301ffc9a760e01b6001600160e01b03198316145b92915050565b6060600080546105c390611cf4565b80601f01602080910402602001604051908101604052809291908181526020018280546105ef90611cf4565b801561063c5780601f106106115761010080835404028352916020019161063c565b820191906000526020600020905b81548152906001019060200180831161061f57829003601f168201915b5050505050905090565b6000818152600260205260408120546001600160a01b03166106c45760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084015b60405180910390fd5b506000908152600460205260409020546001600160a01b031690565b60006106eb82610a35565b9050806001600160a01b0316836001600160a01b031614156107595760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084016106bb565b336001600160a01b0382161480610775575061077581336104c3565b6107e75760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c000000000000000060648201526084016106bb565b6107f18383610f28565b505050565b600954600160a01b900460ff161515600114610825576040516314cfd27560e01b815260040160405180910390fd5b600a5480421061084b5760405163d99cde9f60e01b8152600481018290526024016106bb565b600a5442111561086e5760405163d02e774d60e01b815260040160405180910390fd5b600b54341161089657600b54604051634e12c1bb60e01b81526004016106bb91815260200190565b600b54156108d157600b546009546001600160a01b03166000908152600f6020526040812080549091906108cb908490611c85565b90915550505b600980546001600160a01b0319163390811790915534600b8190556040805192835260208301919091527ff4757a49b326036464bec6fe419a4ae38c8a02ce3e68bf0809674f6aab8ad300910160405180910390a150565b6109333382610f96565b61094f5760405162461bcd60e51b81526004016106bb90611c34565b6107f183838361108d565b336000908152600f602052604081205480156109b657336000818152600f60205260408082208290555183156108fc0291849190818181858888f193505050506109b657336000908152600f6020526040812091909155919050565b600191505090565b6107f183838360405180602001604052806000815250610c3d565b600880546001600160a01b0319166001600160a01b0384161790556109fe8342611c85565b600a558051610a1490600c9060208401906117bd565b50506000600b555050600980546001600160a81b031916600160a01b179055565b6000818152600260205260408120546001600160a01b0316806105ae5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201526832b73a103a37b5b2b760b91b60648201526084016106bb565b60006001600160a01b038216610b175760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604482015269726f206164647265737360b01b60648201526084016106bb565b506001600160a01b031660009081526003602052604090205490565b6006546001600160a01b03163314610b5d5760405162461bcd60e51b81526004016106bb90611bff565b610b67600061122d565b565b6060600180546105c390611cf4565b6001600160a01b038216331415610bd15760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c65720000000000000060448201526064016106bb565b3360008181526005602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b610c473383610f96565b610c635760405162461bcd60e51b81526004016106bb90611c34565b610c6f8484848461127f565b50505050565b6000818152600260205260409020546060906001600160a01b0316610cf45760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201526e3732bc34b9ba32b73a103a37b5b2b760891b60648201526084016106bb565b6000610d0b60408051602081019091526000815290565b90506000815111610d2b5760405180602001604052806000815250610d56565b80610d35846112b2565b604051602001610d46929190611b2e565b6040516020818303038152906040525b9392505050565b6006546001600160a01b03163314610d875760405162461bcd60e51b81526004016106bb90611bff565b6001600160a01b038116610dec5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016106bb565b610df58161122d565b50565b600954600160a01b900460ff161515600114610e27576040516314cfd27560e01b815260040160405180910390fd5b600a54804211610e4d57604051633e3aa0d560e11b8152600481018290526024016106bb565b600954600160a81b900460ff1615610e785760405163d02e774d60e01b815260040160405180910390fd5b600954600b54604080516001600160a01b03909316835260208301919091527fdaec4582d5d9595688c8c98545fdd1c696d41c6aeaeb636737e84ed2f5c00eda910160405180910390a16009805461ffff60a01b1916600160a81b179055600854600b546040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610f12573d6000803e3d6000fd5b50600954610df5906001600160a01b03166113b0565b600081815260046020526040902080546001600160a01b0319166001600160a01b0384169081179091558190610f5d82610a35565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000818152600260205260408120546001600160a01b031661100f5760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084016106bb565b600061101a83610a35565b9050806001600160a01b0316846001600160a01b031614806110555750836001600160a01b031661104a84610646565b6001600160a01b0316145b8061108557506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b949350505050565b826001600160a01b03166110a082610a35565b6001600160a01b0316146111085760405162461bcd60e51b815260206004820152602960248201527f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960448201526839903737ba1037bbb760b91b60648201526084016106bb565b6001600160a01b03821661116a5760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b60648201526084016106bb565b611175600082610f28565b6001600160a01b038316600090815260036020526040812080546001929061119e908490611cb1565b90915550506001600160a01b03821660009081526003602052604081208054600192906111cc908490611c85565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b600680546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b61128a84848461108d565b61129684848484611489565b610c6f5760405162461bcd60e51b81526004016106bb90611bad565b6060816112d65750506040805180820190915260018152600360fc1b602082015290565b8160005b811561130057806112ea81611d2f565b91506112f99050600a83611c9d565b91506112da565b60008167ffffffffffffffff81111561131b5761131b611da0565b6040519080825280601f01601f191660200182016040528015611345576020820181803683370190505b5090505b84156110855761135a600183611cb1565b9150611367600a86611d4a565b611372906030611c85565b60f81b81838151811061138757611387611d8a565b60200101906001600160f81b031916908160001a9053506113a9600a86611c9d565b9450611349565b6006546001600160a01b031633146113da5760405162461bcd60e51b81526004016106bb90611bff565b60006113e560075490565b90506113f18282611596565b61148581600c805461140290611cf4565b80601f016020809104026020016040519081016040528092919081815260200182805461142e90611cf4565b801561147b5780601f106114505761010080835404028352916020019161147b565b820191906000526020600020905b81548152906001019060200180831161145e57829003601f168201915b50505050506115b0565b5050565b60006001600160a01b0384163b1561158b57604051630a85bd0160e11b81526001600160a01b0385169063150b7a02906114cd903390899088908890600401611b5d565b602060405180830381600087803b1580156114e757600080fd5b505af1925050508015611517575060408051601f3d908101601f1916820190925261151491810190611a5f565b60015b611571573d808015611545576040519150601f19603f3d011682016040523d82523d6000602084013e61154a565b606091505b5080516115695760405162461bcd60e51b81526004016106bb90611bad565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050611085565b506001949350505050565b611485828260405180602001604052806000815250611648565b6000828152600260205260409020546001600160a01b03166116295760405162461bcd60e51b815260206004820152602c60248201527f4552433732314d657461646174613a2055524920736574206f66206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084016106bb565b6000828152600d6020908152604090912082516107f1928401906117bd565b611652838361167b565b61165f6000848484611489565b6107f15760405162461bcd60e51b81526004016106bb90611bad565b6001600160a01b0382166116d15760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f206164647265737360448201526064016106bb565b6000818152600260205260409020546001600160a01b0316156117365760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000060448201526064016106bb565b6001600160a01b038216600090815260036020526040812080546001929061175f908490611c85565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b8280546117c990611cf4565b90600052602060002090601f0160209004810192826117eb5760008555611831565b82601f1061180457805160ff1916838001178555611831565b82800160010185558215611831579182015b82811115611831578251825591602001919060010190611816565b5061183d929150611841565b5090565b5b8082111561183d5760008155600101611842565b600067ffffffffffffffff8084111561187157611871611da0565b604051601f8501601f19908116603f0116810190828211818310171561189957611899611da0565b816040528093508581528686860111156118b257600080fd5b858560208301376000602087830101525050509392505050565b6000602082840312156118de57600080fd5b8135610d5681611db6565b600080604083850312156118fc57600080fd5b823561190781611db6565b9150602083013561191781611db6565b809150509250929050565b60008060006060848603121561193757600080fd5b833561194281611db6565b9250602084013561195281611db6565b929592945050506040919091013590565b6000806000806080858703121561197957600080fd5b843561198481611db6565b9350602085013561199481611db6565b925060408501359150606085013567ffffffffffffffff8111156119b757600080fd5b8501601f810187136119c857600080fd5b6119d787823560208401611856565b91505092959194509250565b600080604083850312156119f657600080fd5b8235611a0181611db6565b91506020830135801515811461191757600080fd5b60008060408385031215611a2957600080fd5b8235611a3481611db6565b946020939093013593505050565b600060208284031215611a5457600080fd5b8135610d5681611dcb565b600060208284031215611a7157600080fd5b8151610d5681611dcb565b600060208284031215611a8e57600080fd5b5035919050565b600080600060608486031215611aaa57600080fd5b833592506020840135611abc81611db6565b9150604084013567ffffffffffffffff811115611ad857600080fd5b8401601f81018613611ae957600080fd5b611af886823560208401611856565b9150509250925092565b60008151808452611b1a816020860160208601611cc8565b601f01601f19169290920160200192915050565b60008351611b40818460208801611cc8565b835190830190611b54818360208801611cc8565b01949350505050565b6001600160a01b0385811682528416602082015260408101839052608060608201819052600090611b9090830184611b02565b9695505050505050565b602081526000610d566020830184611b02565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6040820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b606082015260800190565b60008219821115611c9857611c98611d5e565b500190565b600082611cac57611cac611d74565b500490565b600082821015611cc357611cc3611d5e565b500390565b60005b83811015611ce3578181015183820152602001611ccb565b83811115610c6f5750506000910152565b600181811c90821680611d0857607f821691505b60208210811415611d2957634e487b7160e01b600052602260045260246000fd5b50919050565b6000600019821415611d4357611d43611d5e565b5060010190565b600082611d5957611d59611d74565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b0381168114610df557600080fd5b6001600160e01b031981168114610df557600080fdfea2646970667358221220f14582eab016d804316f48165dc9607566f5399974528794c2ac1c7e831490d564736f6c63430008070033'
}

export default contractDetails