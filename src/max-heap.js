const Node = require('./node');

class MaxHeap {
	constructor(maxSize) {
		this.root = null;
		this.parentNodes = [];
	
	 	
	}

	push(data, priority) {
		// var node = new Node;
		// var newNode = node.constructor(data, priority);

		// insertNode(newNode);
		// insertNodeUp(newNode);
		}

	pop() {
		this.detachRoot();
		for(var i in this.root)
		return this.root[i];

	}
	detachRoot() {
		this.root = null;
		this.parentNodes.shift();
		return this.root;
	}

	restoreRootFromLastInsertedNode(detached) {

			this.root = this.parentNodes.pop();
		
	}

	size() {
		
	}

	isEmpty() {
		return true;
	}

	clear() {
		this.root = null;
		this.parentNodes =[];
	}

	insertNode(node) {
		this.root = node;
		this.parentNodes.push(node);
		
	}

	shiftNodeUp(node) {
		Node.swapWithParent();
		shiftNodeUp(node);
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
