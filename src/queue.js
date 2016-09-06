const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize) {
			this.root = null;
			this.parentNodes =[];
			this.maxSize = maxSize;
		if(maxSize == undefined){
			this.maxSize = 30;
		};
		this.heap = new MaxHeap;
		// this.heap.push(data, priority);
	}

	push(data, priority) {
		this.heap.push(data, priority);
		// insertNodeUp(data, priority);
	}

	shift() {
		return this.heap.pop();
	}

	size() {
		return this.parentNodes.length;
	}

	isEmpty() {
		if (this.parentNodes.length == 0){
			return true;
		}

	}
}

module.exports = PriorityQueue;
