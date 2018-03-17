function Stack() {
  let items = []

  this.push = (el) => {
    items.push(el)
  }

  this.pop = () => {
    console.log('--pop--')
    return items.pop()
  }

  this.peek = () => {
    return items[items.length -1]
  }

  this.isEmpty = () => {
    return items.length == 0
  }

  this.size = () => {
    return items.length
  }

  this.clear = () => {
    items = []
  }

  this.print = () => {
    console.log(items.toString())
  }
}

let stack = new Stack()

console.log('isEmpty: ',stack.isEmpty())
stack.push(5)
stack.push(8)
console.log('peek: ', stack.peek())
stack.push(11)
console.log('size: ', stack.size())
console.log('isEmpty: ', stack.isEmpty())
stack.push(15)
stack.print()
console.log('----------')
stack.pop()
stack.pop()
console.log('size: ', stack.size())
stack.print()
