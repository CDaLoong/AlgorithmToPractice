// 放在开始
// 1. 严谨性判断，不允许任何报错
// 2. 任何递归程序，先写出口
// 3. 任何一种算法，都没有优劣之分，只有是否适合的场景

// push shift pop
function Queue() { // 封装队列，先入先出
    this.arr = [];
    this.push = (data) => {
        this.arr.push(data);
    };
    this.get = () => {
        return this.arr.shift()
    }
}
const testQueue = new Queue();
testQueue.push(3)
testQueue.push(1)
testQueue.push(2)
console.log(testQueue.arr)
console.log(testQueue.get())
console.log(testQueue.get())
console.log(testQueue.get())
console.log(testQueue.arr)

function Stack() { // 封装栈，先入后出
    this.arr = [];
    this.push = (data) => {
        this.arr.push(data);
    };
    this.get = () => {
        return this.arr.pop()
    }
}
const testStack = new Stack();
testStack.push(5)
testStack.push(6)
testStack.push(4)
console.log(testStack.arr)
console.log(testStack.get())
console.log(testStack.get())
console.log(testStack.get())
console.log(testStack.arr)

