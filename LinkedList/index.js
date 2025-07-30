const node = require("./node")
class LinkedList{
    constructor(){
        this.head = null
    }

    insertAtEnd(value){
        if(!this.head){
            // checking if there is head - if not then insert the node there
            this.head = new node(value)
            return 
        }
        // or else we take the head as current 

        let cur = this.head
        while(cur.next){
            // we loop to the last node ()-> ()-> () -> null
            // the loop stop when the next is null
            cur = cur.next
        }
        // we insert the new node there 

        cur.next = new node(value)


    }

    insertAtBegining(value){
        const no = new node(value)
        if(!this.head){
            this.head = no
        }
        const head = this.head
        this.head = no
        no.next = head
    }








    
}

const ll = new LinkedList()

ll.insertAtEnd(10)
ll.insertAtEnd(20)
ll.insertAtBegining(1)

console.log(ll.head)