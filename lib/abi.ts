export const NEST_SWITCH_ABI = [{
  "inputs": [],
  "name": "getMerkleRoot",
  "outputs": [{"internalType": "bytes32", "name": "", "type": "bytes32"}],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{"internalType": "address", "name": "newGovernance", "type": "address"}],
  "name": "setGovernance",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{"internalType": "bytes32", "name": "merkleRoot", "type": "bytes32"}],
  "name": "setMerkleRoot",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{"internalType": "uint256", "name": "value", "type": "uint256"}],
  "name": "switchOld",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{"internalType": "address", "name": "governance", "type": "address"}],
  "name": "update",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{"internalType": "bytes32[]", "name": "merkleProof", "type": "bytes32[]"}],
  "name": "withdrawNew",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}]
