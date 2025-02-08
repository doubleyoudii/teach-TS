type StrNum = string | number;

export default class Comparator {
  compare: Function;
  //   this.compare;

  constructor(compareFn?: Function) {
    this.compare = compareFn || Comparator.defaultCompareFn;
  }

  static defaultCompareFn(a: StrNum, b: StrNum) {
    if (a === b) {
      return 0;
    }

    return a < b ? -1 : 1;
  }

  equal(a: StrNum, b: StrNum) {
    return this.compare(a, b) === 0;
  }

  lessThan(a: StrNum, b: StrNum) {
    return this.compare(a, b) < 0;
  }

  greaterThan(a: StrNum, b: StrNum) {
    return this.compare(a, b) > 0;
  }

  lessThanOrEqual(a: StrNum, b: StrNum) {
    return this.lessThan(a, b) || this.equal(a, b);
  }

  greaterThanOrEqual(a: StrNum, b: StrNum) {
    return this.greaterThan(a, b) || this.equal(a, b);
  }

  reverse() {
    const checkOriginal = this.compare;
    this.compare = (a: StrNum, b: StrNum) => checkOriginal(b, a);
  }
}
