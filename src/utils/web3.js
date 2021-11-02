import Web3 from 'web3'

let web3 = null

if ( typeof window !== 'undefined' ) {
  web3 = window.web3 ? new Web3( window.web3.currentProvider ) : null
}

export default web3
