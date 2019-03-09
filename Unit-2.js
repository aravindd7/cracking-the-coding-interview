const Unit2 = {
  // Linked List Class Definition
  LinkedList: class {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    };

    insert(val) {
      const newNode = new Unit2.Node(val);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
      this.length++;
    };

    // 2.1 - Remove Duplicates
    // I: Linked List 
    // O: Linked List, sans duplicates
    // C: O(1)
    // E: Empty LL, All duplicate LL
    isDuplicate(cache, value) {
      return cache.indexOf(value) !== -1 ? true : false;
    };

    removeDuplicates() {
      let curr = this.head;
      let next = curr.next;
      let seen = [this.head.value];
      while (next) {
        if (this.isDuplicate(seen, next.value)) {
          curr.next = next.next;
          next = curr.next;
          this.length--;
          if (curr.next === null) this.tail = curr;
        } else {
          seen.push(next.value);
          curr = curr.next;
          next = curr.next;
        }
      };
      return this.head;
    };
    
    // 2.2 - Return kth to last
    // I: k - index of value to return
    // O: value at LinkedList[k];
    // C:
    // E: k out of range
    returnKthToLast(k) {
      if (k > this.length || k < 0) return undefined;
      const targetIndex = this.length - k;
      let currIndex = 0;
      let curr = this.head;
      while (currIndex < this.length) {
        if (currIndex === targetIndex) {
          return curr.value;
        } else {
          curr = curr.next;
          currIndex++;
        }
      };
    };

    // 2.3 - Delete Middle
    // I: Node
    // O: None
    // C:
    // E: k out of range
    deleteMiddle(node) {
      let curr = node;
      let next = curr.next;
      curr.value = next.value;
      curr.next = next.next;
    };

    // 2.4 - Partition Array
    // I: Array
    // O: Partitioned Array
    // C:
    // E: k out of range
    partitionList(target) {
      let previous = this.head;
      let current = this.head.next;
      let next = current.next;

      if (current.value < target) {
        previous.next = next;
        current.next = this.head;
        this.head = current;
        current = next;
        next = current.next;
      } else {
        previous = current;
        current = next; 
        next = current.next;
      };
    };

  },

  Node: class {
    constructor(val) {
      this.value = val;
      this.next = null;
    };
  },

  // 2.5 - Sum Lists 
  // Given 2 lists that represent a number where each digit is it's own node, 
  // write a method that adds the two numbers and returns the number as a new
  // Linked List
  // I: 2 linked lists of single-digit integers
  // O: New linked list where it's nodes are the digits of the sum of the inputs
  // C: - 
  // E: un-even digit 
  sumLists: (list1, list2) => {
    let p1 = list1.head;
    let p2 = list2.head;
    let leftover = 0;
    let sum, digitToAdd;
    const listOfSum = new LinkedList();
    
    while (p1 && p2) {
      sum = p1.value + p2.value;
      leftover = Math.floor(sum / 10);
      digitToAdd = sum + leftover % 10;
      listOfSum.insert(digitToAdd);
      p1 = p1.next;
      p2 = p2.next;
    };

    while (p1 || p2) {
      if (p1) {
        listOfSum.insert(p1.val);
        p1 = p1.next;
      } else if (p2) {
        listOfSum.insert(p2.val);
        p2 = p2.next;
      }
    };

    return listOfSum;
  },

  

};

module.exports = Unit2;