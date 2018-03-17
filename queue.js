function Queue() {
  let items = []
  
  this.enqueue = (element) => {
    items.push(element)
  }

  this.priorityEnqueue = (element, priority) => {
    let newElement = { element, priority}

    if(this.isEmpty()){
      items.push(newElement)
    }
    else{
      let added = false
      for (let i = 0; i < items.length; i++) {
        if(newElement.priority < items[i].priority){
          console.log('nlusup')
          items.splice(i, 0, newElement)
          added = true
          break
        }
      }
      if(!added){
        items.push(newElement)
      }
    }
  }

  this.dequeue = () => {
    console.log(`${this.front()} go enter->`)
    return items.shift()
  }

  this.isEmpty = () => {
    return items.length == 0
  }

  this.front = () => {
    return items[0]
  }

  this.print = () => {
    console.log(items)
  }
}

let queue = new Queue()

queue.priorityEnqueue('John', 2)
queue.priorityEnqueue('Jack', 1)
queue.priorityEnqueue('Camila', 1)
queue.print()
