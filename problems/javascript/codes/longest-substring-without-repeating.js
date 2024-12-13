/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let maxLen = 0;
  let visitedChars = [];
  let i = 0;
  while (i < s.length) {
    visitedChars.push(s[i]);
    let tempLen = 1;
    for (let j = i + 1; j < s.length; j++) {
      if (visitedChars.includes(s[j])) {
        visitedChars = [];
        i = j + 1;
        break;
      } else {
        visitedChars.push(s[j]);
        tempLen = tempLen + 1;
      }
    }
    visitedChars = [];
    if (tempLen > maxLen) {
      maxLen = tempLen;
    } else {
      i = i + 1;
    }
  }
  return maxLen;
};

let result = lengthOfLongestSubstring("abcabcbb");
console.log(result);

result = lengthOfLongestSubstring("bbbbb");
console.log(result);

result = lengthOfLongestSubstring("pwwkew");
console.log(result);

result = lengthOfLongestSubstring("dvdf");
console.log(result);
