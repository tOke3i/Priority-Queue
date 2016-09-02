const Node = require('./node');

class MaxHeap {
	constructor(maxSize) {
		this.root = null;
		this.parentNodes = [];
		// this.node = new Node;
	 	
	}

	push(data, priority) {
		// insertNode();
		// shiftNodeUp();
		}

	pop() {
		this.detachRoot();
		for(var i in this.root)
		return this.root[i];

	}
	detachRoot() {
		this.root = null;
		for (var n = 0 ; n < this.parentNodes.length ; n++) {
    		if (this.parentNodes[n].root) {
     			 // var removedObject = 
     			 this.parentNodes.splice(n,1);
      			// removedObject = null;
      break;
    }
}
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
		this.parentNodes.push(this.root);
		
	}

	shiftNodeUp(node) {
		Node.swapWithParent();
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
