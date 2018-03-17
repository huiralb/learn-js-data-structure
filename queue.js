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
    return items.shift()
  }

  this.size = () => {
    return items.length
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

function hotPotato (nameList, num){
  let queue = new Queue()
  for (let i = 0; i < nameList.length; i++) {
    queue.enqueue(nameList[i])
  }
  
  let eliminated = ''
  while (queue.size() > 1) {
    
    for (let i = 0; i <num; i++) {
      queue.enqueue(queue.dequeue())
    }
    eliminated = queue.dequeue()
    console.log(eliminated+' was eliminasi')
  }
  return queue.dequeue()
}

let names = ['1.John', '2.Jack', '3.Camila', '4.Ingrid', '5.Carl']

let winner = hotPotato(names, 5)

console.log('The winner is:'+ winner)
