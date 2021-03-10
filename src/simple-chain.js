const chainMaker = {
  itemsOfChain: [],
  getLength() {
    return this.itemsOfChain.length;
  },
  addLink(value) {
    const strFromValue = String(value)
    this.itemsOfChain.push(strFromValue);
    return this;
  },
  removeLink(position) {
    if (Number.isInteger(position) && (position < 1 || position > this.itemsOfChain.length)) {
      this.itemsOfChain = [];
      throw new Error('Wrong position');
    }
    this.itemsOfChain = [...this.itemsOfChain.slice(0, position - 1), ...this.itemsOfChain.slice(position)];
    return this;
  },
  reverseChain() {
    this.itemsOfChain.reverse();
    return this;
  },
  finishChain() {
    const newArr = this.itemsOfChain.map((item, index) => {
      if (index === 0) {
        return `( ${item} )`;
      }
      return `~~( ${item} )`
    })
    this.itemsOfChain = [];
    return newArr.join('');
  }
};

module.exports = chainMaker;
