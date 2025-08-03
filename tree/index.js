const Node = require("./node")

class BST{
    constructor(){
        this.root = null
    }

    insertUsingRecursion(value,node= this.root){
        // This is a recursive method of insertion 
        if(!this.root){
            this.root = new Node(value)
        }
        if(!node) {
            return new Node(value)
        }

        if(node.value == value){
            return node
        }

        if(value < node.value){
            node.left = this.insertUsingRecursion(value,node.left)
        }else{
            node.right = this.insertUsingRecursion(value,node.right)
        }

    }


    insertUsingIteration(value){

        // This is a iterative method of inserting into our tree
        if(!this.root){
            this.root = new Node(value)
            return this.root
        }
        let node = this.root
        while(node){
            if(value < node.value){
                if(!node.left){
                    node.left = new Node(value)
                    return
                }
                node = node.left
            }else{
                if(!node.right){
                    node.right = new Node(value)
                    return
                }
                node = node.right
            }
        }
    }
}


const tr = new BST()
tr.insertUsingIteration(12)
tr.insertUsingIteration(113)
tr.insertUsingRecursion(8)

console.log(tr.root)
console.log(tr.root.left)