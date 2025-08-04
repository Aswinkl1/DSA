const TreeNode = require("./node");

class Trie {
  constructor() {
    this.root = new TreeNode();
  }

  insert(key) {
    let cur = this.root;

    for (let c of key) {
      let index = c.charCodeAt(0) - "a".charCodeAt(0);
      
      if (cur.children[index] === null) {

        cur.children[index] = new TreeNode();
      }

      cur = cur.children[index];
    }

    cur.isEndOfWord = true;
  }

  search(key) {
    let cur = this.root;

    for (let c of key) {
      let index = c.charCodeAt(0) - "a".charCodeAt(0);

      if (cur.children[index] == null) {
        return false
      }

      cur = cur.children[index]
    }
    return cur.isEndOfWord;
  }

  prefixSearch(key){
    let cur = this.root

    for(let c of key){
        let index = c.charCodeAt(0) - "a".charCodeAt(0)

        if(cur.children[index] == null){
          return false

        }

        cur = cur.children[index]
    }

    return true
  }

}

const trie = new Trie();

trie.insert("aswin");
let search = trie.search("aswin")
console.log(search)
let prefix = trie.prefixSearch("as")
console.log(prefix)

