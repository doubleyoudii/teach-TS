Tasks
- Linked List Node
    >> needs a value and next property
    - toString -> callback

- Linked List Class (Main)
    >> accepts compareFunction
    >> needs heads, tail (both defaults to null) and comparator (import)
    - Prepend -> value
        > create new node, set it as the head, if no tail then set it as tail also then return this
    - Append -> value
        > create new node, if no head then set the new node to head and tails
        > else, set tail's next value to the created node then set the new node as the new tail
        > return this
    - Insert -> value, index
        > check first the index if greater than 0
        > if index is equal to 0, prepend
        > else, monitor a counter (starts at 1), the current node (set head as the default value) and create a new node
        > traverse through the linked list until you reach specified index, set the currentNode every turn
        > if currentNode is valid, set newNode's next value to the currentNode's next value then, set currentNode's next value to the newly created node
        > else, if tail's exist, set tail's next value to the new node then set the new node as the new tail, else set newNode as the head and tail.
        > return this
    - Delete -> value
        > return null if LL is empty
        > create a monitoring variable for deleted Nodes, empty Array.
        > Delete all matching node at the head
            > as long as head rn and equal to VALUE, set it as deletedNode then reset head to the head's next, don't forget to push to deleted nodes array.
        > create a monitor variable for current node and set it as the head, 
    - Find => value, callback
    - DeleteTail
    - deleteHead
    - FromArray -> values
    - ToArray 
    - ToString -> callback
    - Reverse 

note: use function documentation
ex.
   /**
   * @param {*} value
   * @param {number} index
   * @return {LinkedList}
   *
   * other types are @var
   */

