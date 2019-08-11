function sameFrequency(a, b) {
  const aDigits = a.toString().split("") //.map(char => parseInt(char)) <= not necessary for solution
  const bDigits = b.toString().split("") //.map(char => parseInt(char))
  if (aDigits.length !== bDigits.length) return false;
  const aFreq = {}
  for (let i = 0; i < aDigits.length; i++) {
    aFreq[aDigits[i]] = (aFreq[aDigits[i]] || 0) + 1
  }
  for (let i = 0; i < bDigits.length; i++) {
    if (!aFreq[bDigits[i]]) return false;
    aFreq[bDigits[i]]--
  }
  return true
}

console.log(sameFrequency([12345], [15243])) //true
console.log(sameFrequency([1234], [15243])) //false
