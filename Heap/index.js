class Heap {
    constructor() {
        this.heap = [];
    }

    insert(value) {
        this.heap.push(value);
        this._bubleUp();
    }
    _bubleUp() {
        let index = this.heap.length - 1;
        // console.log(index);
        while (index > 0) {
            let parent = this._getParentNodeIndex(index);
            // condition for a min heap -
            // if(this.heap[index] < this.heap[parent])
            // This if condition is for a max heap
            if (this.heap[index] > this.heap[parent]) {
                [this.heap[index], this.heap[parent]] = [this.heap[parent], this.heap[index]];
                index = parent;
            } else {
                break;
            }
        }
    }

    _bubleDown() {
        let index = 0;
        let length = this.heap.length - 1;
        while (index > this.heap.length - 1) {
            let left = this._getLeftChildNodeIndex(index);
            let right = this._getRightChildNodeIndex(index);
            let smallest = index;
            if (left < length && this.heap[smallest] > this.heap[left]) {
                smallest = left;
            } else if (right < length && this.heap[smallest] > this.heap[right]) {
                smallest = right;
            }

            if (smallest != index) {
                [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
                index = smallest;
            } else {
                break;
            }
        }
    }

    getTop() {
        let removed = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._bubleDown();
    }
    peek() {
        return this.heap.at(0);
    }

    _getParentNodeIndex(index) {
        // getting the parent node based on an index
        return Math.floor((index - 1) / 2);
    }

    _getLeftChildNodeIndex(index) {
        return 2 * index + 1;
    }

    _getRightChildNodeIndex(index) {
        return 2 * i + 2;
    }
}

const heap = new Heap();
heap.insert(1);
heap.insert(10);
heap.insert(100);
console.log(heap.peek());
