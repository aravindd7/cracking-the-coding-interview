const unit2 = require('../Unit-2');

describe('Unit 2 - Linked List Tests', () => {
  beforeAll(() => {
    LL = new unit2.LinkedList();
    LL.insert(1);
    LL.insert(2);
    LL.insert(3);
    LL.insert(4);
    LL.insert(2);
    return LL;
  });
  // describe('2.1 - Remove Dups', () => {
  //   beforeAll(() => {
  //     noDup = new unit2.LinkedList();
  //     noDup.insert(1);
  //     noDup.insert(2);
  //     noDup.insert(3);
  //     noDup.insert(4);
  //   });
  //   test('Should remove duplicates', () => {
  //     expect(LL.removeDuplicates()).toEqual(noDup);
  //   });
  // });

  describe('2.2 - Return kth-to-last Element', () => {
    test('Should return 2nd to last element', () => {
      expect(LL.returnKthToLast(2)).toEqual(4);
    });
    test('Should return undefined if out of range', () => {
      expect(LL.returnKthToLast(16)).toEqual(undefined);
    });
    test('Should return undefined if out of range', () => {
      expect(LL.returnKthToLast(-1)).toEqual(undefined);
    });
    test('Should return undefined if not a number', () => {
      expect(LL.returnKthToLast('two')).toEqual(undefined);
    });
    test('Should return convert int strings to numbers', () => {
      expect(LL.returnKthToLast('2')).toEqual(4);
    });
  });
});