import web3 from './web3'
import contractDetails from '../config/contract.config'

const address = contractDetails.contractAddress
const abi = contractDetails.contractAbi
const contract = web3 ? new web3.eth.Contract( abi, address ) : null

export default contract
