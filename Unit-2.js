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
    }
    


  },

  Node: class {
    constructor(val) {
      this.value = val;
      this.next = null;
    };
  },


};

module.exports = Unit2;