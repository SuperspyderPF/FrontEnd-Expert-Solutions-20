class ArrayQueue {
    constructor() {
        this.element = [];
        this.length = 0
        this.frontIndex = 0
        this.backIndex = -1
    }
    isEmpty() {
        return (this.length == 0)
    }
 
    enqueue(value) {
        this.backIndex++
        this.element[this.backIndex] = value
        this.length++
    }
 
  
    dequeue() {
        if(this.isEmpty()) throw(new Error("No elements"))
        const value = this.getFront()
        this.element[this.frontIndex] = null
        this.frontIndex++
        this.length--
        return value
    }

    getFront() {
        if(this.isEmpty()) throw(new Error("No elements"))        
        return this.element[this.frontIndex]
    }
    clear() {
        this.element = []
        this.length = 0
        this.backIndex = 0
        this.frontIndex = -1
    }
}

const queue = new ArrayQueue()
queue.enqueue("hey")
queue.enqueue("you")
queue.enqueue("pretty")
queue.dequeue()
queue.clear()
console.log(queue.element)