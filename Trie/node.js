class TreeNode{
    constructor(){
        this.children =  Array(26).fill(null)
        this.isEndOfWord = false
    }
}

module.exports = TreeNode