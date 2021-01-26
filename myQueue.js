function createStack() {
    return {
        data: [],
        push: function (element) {
            this.data.push(element);
        },
        pop: function () {
            return this.data.pop();
        },
        peek: function () {
            return this.data[data.length - 1];
        },
        isEmpty: function () {
            return this.data.length === 0;
        },
        clear: function () {
            this.data = [];
        },
        size: function () {
            return this.data.length;
        },
        getData: function () {
            return [...this.data];
        }
    }
}

function createQ() {
    return {
        stack1: createStack(),
        stack2: createStack(),
        enqueue: function (element) {

                this.stack1.push(element);

        },
        dequeue: function () {
            while (!this.stack1.isEmpty()) {
                this.stack2.push(this.stack1.pop());
            }
            console.log(this.stack2.pop());
            while (!this.stack2.isEmpty()) {
                this.stack1.push(this.stack2.pop());
            }
        },
        printQ: function () {
            console.log(this.stack1.getData().reverse());
        }
    }
}

let q = createQ();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
q.printQ();
q.dequeue();
q.printQ();
q.dequeue();
q.printQ();
q.dequeue();
q.printQ();
q.dequeue();
q.printQ();