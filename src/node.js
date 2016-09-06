class Node {
	constructor(data, priority) {
			this.data =  data;
			this.priority = priority;
			this.parent = null;
			this.left = null;
			this.right = null;
	}

	appendChild(node) {
				
	
		if((this.left == null) && (this.right == null)){
			this.left = node;

		}else{
			this.right = node;
		}
		if((this.left) && (this.right)){
				return false;
		}
			
			
	}

	removeChild(node) {
		 if(node = this.left){
		 	this.left = null;
		}if(node = this.right){
		 	this.right = null;
		}
		// if((node !== this.left)&&(node !== this.right)){
		// 	return false;
		// }
	}
	

	remove(child) {
		if(this.parent !== null){
			this.parent.removeChild(child);
		}

	}

	swapWithParent(parent, left, right) {

	
	}
}

module.exports = Node;
