function getName(node) {
    return node.name
}

function headNode(linkedList, collection) {
    return collection[linkedList]
}

function next(node, collection) {
    return collection[node.next]
}

function nodeAt(index, linkedList, collection) {
    let node = headNode(linkedList, collection)
    for (let i = 0; i < index; i++) {
        node = next(node, collection)
    }
    return node
}

function addressAt(index, linkedList, collection) {
    let address = linkedList
    for (let i = 0; i < index; i++) {
        address = collection[address].next
    }
    return address
}

function indexAt(node, collection, linkedList) {
    let i = 0
    let currentNode = headNode(linkedList, collection)
    for (i; i < Object.keys(collection).length; i++) {
        if(Object.is(node, currentNode)) {
            return i
        }
        currentNode = next(currentNode, collection)
    }
    return false
}

function insertNodeAt(index, newAddress, linkedList, collection) {
    let nextAddress = addressAt(index, linkedList, collection)
    collection[newAddress].next = nextAddress
    let previousNode = nodeAt(index - 1, linkedList, collection)
    previousNode.next = newAddress
}

function deleteNodeAt(index, linkedList, collection) {
    let previousNode = nodeAt(index - 1, linkedList, collection)
    previousNode.next = addressAt(index + 1, linkedList, collection)
}