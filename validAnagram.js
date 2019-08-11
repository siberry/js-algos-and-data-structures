var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;

    const tLetters = t.split("")
    const sFreq = {}

    for (let i = 0; i < s.length; i++) {
      sFreq[s[i]] = (sFreq[s[i]] || 0) + 1
    }

    for (let j = 0; j < t.length; j++) {
      if (!sFreq[t[j]]) return false;
      sFreq[t[j]]--
    }

    return true;

};

console.log(isAnagram("a", "b"));
console.log(isAnagram("anagram", "nagaram"));

console.log(isAnagram("anagram", "nasaram"));
