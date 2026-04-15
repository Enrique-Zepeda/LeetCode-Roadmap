const isAnagram = (s: string, t: string): boolean => {
  if (s.length !== t.length) return false;

  const counterS: Record<string, number> = {};
  const counterT: Record<string, number> = {};

  for (let i = 0; i < s.length; i++) {
    counterS[s[i]] = (counterS[s[i]] ?? 0) + 1;
    counterT[t[i]] = (counterT[t[i]] ?? 0) + 1;
  }

  for (const key in Object.keys(counterS)) {
    if (counterS[key] !== counterT[key]) return false;
  }

  return true;
};

console.log(isAnagram("anagram", "nagaram"));

export {};
