function createStack() {
    function Stack() {
        let data = [];
        let top = 0;

        this.push = function (element) {
            data.push(element);
        }

        this.pop = function () {
            return data.pop();
        }

        this.peek = function () {
            return data[data.length - 1];
        }

        this.isEmpty = function () {
            return data.length - 1 === 0;
        }

        this.clear = function () {
            data = [];
        }

        this.size = function () {
            return data.length;
        }

        this.getData = function () {
            return [...data];
        }

    }

    return new Stack();
}

function createQ() {
    function Queue() {
        let stack1 = createStack();
        let stack2 = createStack();

        this.enqueue = function (element) {
            for (let i = 0; i < stack2.size(); i++) {
                stack1.push(stack2.pop());
            }
            stack1.push(element);
        }

        this.dequeue = function () {
            while (stack1.size() > 0) {
                stack2.push(stack1.pop());
            }

            return stack2.pop();
        }

        this.printQ = function () {
            if (stack1.size() > 0) {
                console.log(stack1.getData().reverse());
            } else {
                console.log(stack2.getData());
            }

        }
    }

    return new Queue();
}

let queue = createQ();

