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
        > create a monitor variable for current node and set it as the head, (latest head after the removal above)
        > loop through as long as there is a 'next' value
            > if currentNode's NEXT value is equal to VAL, push it to deletedArray, set current's NEXT to current NEXT-NEXT
            > else, set currentNode to currentNode's NEXT
        > set tail value to be the current Head, then look trough as long as Tail NEXT is existing.
            > set tail's value to be the Tail(currently value as the HEAD)'s NEXT value.
        > RETURN deletedNodes if exists, null if array is empty.
    - Find => value, callback (both can be undefined)
        > check the head first if existing, else return null
        > create a variable with the Head's value
        > as long as currentVariable exists, else return null
            > check callback if exist or truthy once inputted the current value, return currentVariable Value
            > check if VALUE we are looking for is provided and equal to currentVariable's value, return currentVariable value
            > reset the currentVariable to the currentVariable NEXT value.

    - DeleteTail
        > create a variable for the deletedTail (the current Tail of the LL)
        > add condition if the LL contains only one item (what will you do??)
            > return the deletel Tail after
        > traverse through the LL items until reach the second last item
            > how can you tell if its the last item?
            > set currentNode's next value to null if the currentNode's next next value is null
        > set the new tail to the 2nd to the last item then return the deleted Tail.
    - deleteHead
        > return null if there is no head
        > what will you do if there is only one item??
        > return the deleted Head
    - FromArray -> values (Array to Linked List)
        > LL.append for each value
    - ToArray 
        > push every item to new array then return
    - ToString -> callback
        > call to Array method the stringify array
    - Reverse 
        > monitor 3 variables, current (head), prev, next
        > 4 -> 2 -> 5 -> 1 -> 3
        > while currentNode exist (traverse through the list)
            > set next node to currentNode's next value
            > change current's node next to previous node
            > set previous and currentNode one step forward
        > reset tail to be head and head to be previus node

note: use function documentation
ex.
   /**
   * @param {*} value
   * @param {number} index
   * @return {LinkedList}
   *
   * other types are @var
   */

