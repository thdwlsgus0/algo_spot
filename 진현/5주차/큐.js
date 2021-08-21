// 큐 구현
class Queue {
	constructor() {
		this._arr = [];
	}
	enqueue(item) {
		this._arr.push(item);
	}
	dequeue() {
		return this._arr.shift();
	}

	toString() {
		return this._arr.join('');
	}

	head() {
		return this._arr[0];
	}

	tail() {
		return this._arr[this._arr.legnth - 1];
	}

	empty() {
		return this._arr.length === 0? true: false;
	}
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue(); // 1 

console.log(queue.toString());
console.log(queue.empty());

queue.dequeue();
queue.dequeue();

console.log(queue.empty());