const {MerkleTree} = require('merkletreejs')
const {keccak256} = require("@ethersproject/keccak256");

// const leaves = ["0x3b00ce7e2d0e0e905990f9b09a1f515c71a91c10", "0x496f53bbbe449ff413798d985cd5bd30bc987a94", "0x0e20201B2e9bC6eba51bcC6E710C510dC2cFCfA4"].map(x => keccak256(x))
// const tree = new MerkleTree(leaves, keccak256)
// const root = tree.getHexRoot()
// console.log('root', root)
// const leaf = keccak256('0x496f53BBbe449ff413798d985CD5bd30bc987a94')
// const proof = tree.getProof(leaf)
// const verified = tree.verify(proof, leaf, root)
// console.log(verified)



const leaves = [
  '0x0e20201B2e9bC6eba51bcC6E710C510dC2cFCfA4',
  '0x2a69bb61416b9eb9582a96eaa63b758c6458a820',
  '0x496f53bbbe449ff413798d985cd5bd30bc987a94'
].map(x => keccak256(x))
const tree = new MerkleTree(leaves, keccak256)
const root = tree.getHexRoot()
console.log('root', root)
const leaf = keccak256('0x496f53BBbe449ff413798d985CD5bd30bc987a94')
const proof = tree.getHexProof(leaf)
console.log('proof', proof)
const verified = tree.verify(proof, leaf, root)
console.log(verified)