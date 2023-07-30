class LinkedList {
	constructor(listName) {
		this.listName = listName;
		this.head = new Node();
	}
	append(value) {
		let end = this.head
		while(end.nextNode){
			end = end.nextNode;
		}
		end.nextNode = new Node(value)
		// let appended = new Node(value, this.head);
	}
	printNodes() {
		console.log(this.head)
		while(this.head.nextNode){
			this.head = this.head.nextNode
			console.log(this.head)
		}
	}
}

class Node {
	constructor(value = null, nextNode = null) {
		this.value = value;
		this.nextNode = nextNode;
	}
}

let newList = new LinkedList('list');
newList.append('gaga');
newList.append('jaja');
newList.append('baba');
// console.log(newList)
newList.printNodes()