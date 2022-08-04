let lengthOfLongestSubstring = function (s) {
  let bank = {};
  let left = (right = 0);
  let result = 0;
  for (right; right < s.length; right++) {
    while (bank.hasOwnProperty(s[right])) {
      delete bank[s[left]];
      left++;
    }

    bank[s[right]] = right;
    result = Math.max(result, right - left + 1);
  }

  return result;
};

let a = "abcabcbb";

let b = lengthOfLongestSubstring(a);

console.log(b);
