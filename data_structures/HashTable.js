class HashTable {
  constructor(size=53) {
    this.keyMap = Array.from({length: size}, () => [])
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i]
      let value = char.charCodeAt(0);
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, val) {
    let idx = this._hash(key)
    if (!this.keyMap[idx]) {
      this.keyMap[idx] = []
    }
    this.keyMap[idx].push([key,val])
  }

  get(key) {
    let pair = this.keyMap[this._hash(key)].find(pair => pair[0] === key)
    if (pair) {
      return pair[1]
    }
    return;
  }

  keys() {
    let keys = []
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        this.keyMap[i].forEach(pair => {
          if (!keys.includes(pair[0])) {
            keys.push(pair[0])
          }
        })
      }
    }
    return keys
  }

  values() {
    let values = []
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        this.keyMap[i].forEach(pair => {
          if (!values.includes(pair[1])) {
            values.push(pair[1])
          }
        })
      }
    }
    return values
  }
}

let ht = new HashTable()

ht.set("Pink", "#FFC0CB")
ht.set("AliceBlue", "#F0F8FF")
ht.set("AntiqueWhite", "#FAEBD7")
ht.set("CadetBlue", "#5F9EA0")

console.log(ht.keys())
