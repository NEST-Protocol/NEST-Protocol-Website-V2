const {MerkleTree} = require('merkletreejs')
const {keccak256} = require("@ethersproject/keccak256");

const nodes = ['0x0e20201B2e9bC6eba51bcC6E710C510dC2cFCfA4', '0x2a69bb61416b9eb9582a96eaa63b758c6458a820', '0x496f53bbbe449ff413798d985cd5bd30bc987a94'].map(x => keccak256(x))
const tree = new MerkleTree(nodes, keccak256, {
  sortLeaves: true,
})
const proof = tree.getHexProof(nodes[2])
console.log(proof)
