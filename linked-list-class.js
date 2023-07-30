class LinkedList {
	constructor() {
		this.head = new Node();
	}
	append(value) {
		let end = this.head;
		while(end.nextNode){
			end = end.nextNode;
		}
		end.nextNode = new Node(value);
		// let appended = new Node(value, this.head);
	}

	prepend(value) {
		let node = new Node(value, this.head.nextNode);
		this.head.nextNode = node;
	}

	size() {
		let size = 0;
		while(this.head.nextNode){
			this.head = this.head.nextNode;
			size++;
		}
		return size;
	}

	first() {
		if(this.head.nextNode){
			return this.head.nextNode
		}else{
			return 'list is empty'
		}
	}

	tail() {
		let tail;
		if(this.head.nextNode) {
			tail = this.head;
		}else{
			return 'cant call tail on an empty list';
		}
		while(tail.nextNode){
			tail = tail.nextNode
		}
		return tail
	}

	at(index) {
		let node;
		if(this.head.nextNode) {
			node = this.head.nextNode;
		}else{
			return 'list is empty';
		}
		for(let i = 0; i < index; i++){
			if(node.nextNode){
				node = node.nextNode;
			}else{
				return 'index out of range'
			}
		}
		return node
	}

	pop() {
		let node;
		if(this.head.nextNode) {
			node = this.head.nextNode;
		}else{
			return 'cant call pop on an empty list';
		}
		if(node.nextNode === null){
			return this.head.nextNode = null
		}

		while(node.nextNode.nextNode){
			node = node.nextNode
		}
		return node.nextNode = null
	}

	contains(value) {
		let node;
		if(this.head.nextNode) {
			node = this.head.nextNode;
		}else{
			return 'cant call contains on an empty list';
		}

		while(node){
			if(node.value === value){
				return true
			}else{
				node = node.nextNode;
			}
		}
		return false
	}

	find(value) {
		let node;
		let index = 0;

		if(this.head.nextNode) {
			node = this.head.nextNode;
		}else{
			return 'cant call find on an empty list';
		}

		while(node){
			if(node.value === value){
				return index;
			}else{
				node = node.nextNode;
				index++;
			}
		}
		return null
	}

	toString() {
		let node;
		let string;
		if(this.head.nextNode) {
			node = this.head.nextNode;
		}else{
			return 'cant call toString on an empty list';
		}

		while(node){
			if(string){
				string += ` -> ( ${node.value} )`;
			}else{
				string = `( ${node.value} )`;
			}
			node = node.nextNode;	
		}
		return string;
	}

	insertAt(value, index) {
		let node;

		if(this.head.nextNode) {
			node = this.head.nextNode;
		}else{
			if(index === 0){
				return this.head.nextNode = new Node(value);
			}else{
				throw 'index out of range'
			}
		}
		if(index === 0){
			let newNode = new Node(value, node);
			return this.head.nextNode = newNode
		}else if(index < 0 || !Number.isInteger(index)){
			throw 'index must be positive number'
		}

		for(let i = 0; i < index-1; i++){
			if(node.nextNode){
				node = node.nextNode;
			}else{
				throw 'index out of range'
			}
		}
		let newNode = new Node(value, node.nextNode);
		node.nextNode = newNode;
		// console.log(node)
		// node.nextNode = new Node(value.nextNode.nextNode)

	}
}

class Node {
	constructor(value = null, nextNode = null) {
		this.value = value;
		this.nextNode = nextNode;
	}
}

let newList = new LinkedList();
let secList = new LinkedList();

newList.append('gaga');
newList.append('jaja');
newList.append('baba');
newList.prepend('dada');

// newList.pop();
// newList.pop();
// newList.pop();
// newList.pop();

// console.log(newList)
// newList.printNodes()
// console.log(newList);
// console.log(secList.at(0));
console.log(newList.toString());
newList.insertAt('g', 2);
console.log(newList.toString());

// secList.append('ii');
// secList.append('bb');
// secList.append('ll');
// secList.append('kk');
// secList.pop();
// console.log(secList.toString());