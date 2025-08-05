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
                return false;
            }

            cur = cur.children[index];
        }
        return cur.isEndOfWord;
    }

    prefixSearch(key) {
        let cur = this.root;

        for (let c of key) {
            let index = c.charCodeAt(0) - "a".charCodeAt(0);

            if (cur.children[index] == null) {
                return false;
            }

            cur = cur.children[index];
        }

        return true;
    }

    isEmpty(root) {
        for (let i = 0; i < 26; i++) {
            if (root.children[i] != null) {
                return false;
            }
        }
        return true;
    }

    remove(root, key, depth) {
        if (root == null) {
            return null;
        }

        if (depth == key.length) {
            if (root.isEndOfWord) {
                root.isEndOfWord = false;
            }

            if (this.isEmpty(root)) {
                root = null;
            }
            return root;
        }

        let index = key[depth].charCodeAt(0) - "a".charCodeAt(0);
        root.children[index] = this.remove(
            root.children[index],
            key,
            depth + 1
        );

        if (this.isEmpty(root) && root.isEndOfWord == false) {
            root = null;
        }
        return root;
    }
}

const trie = new Trie();

trie.insert("aswin");
trie.insert("ass");
trie.insert("war");
let prefix = trie.prefixSearch("as");
console.log(prefix);

trie.remove(trie.root, "ass", 0);
console.log("search " + trie.search("ass"));
let search = trie.search("aswin");
console.log(search);
