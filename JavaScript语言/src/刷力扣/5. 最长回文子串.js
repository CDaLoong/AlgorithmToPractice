// 给你一个字符串 s，找到 s 中最长的回文子串。

// 示例 1：

// 输入：s = "babad"
// 输出："bab"
// 解释："aba" 同样是符合题意的答案。
// 示例 2：

// 输入：s = "cbbd"
// 输出："bb"

// 提示：

// 1 <= s.length <= 1000
// s 仅由数字和英文字母组成
const s = "aacabdkacaa";
const func = (s) => {
  if (typeof s !== "string" || s.length === 0) return "";
  if (s.length === 1) return s[0];
  const check = (s1, s2) => {
    if (s1.length !== s2.length) return false;
    for (let i = 0; i < s1.length; i++) {
      if (s1[i] !== s2[s1.length - 1 - i]) return false;
    }
    return true;
  };
  let num = 1,
    str = s[0];
  for (let i = 0; i < s.length; i++) {
    if (num > s.length - i) break;
    let index = s.lastIndexOf(s[i]),
      sl = "";
    while (index > i) {
      sl = s.slice(i, index + 1);
      if (sl.length % 2 === 0) {
        if (check(sl.slice(0, sl.length / 2), sl.slice(sl.length / 2))) {
          if (sl.length > num) {
            num = sl.length;
            str = sl;
          }
          index = -1;
        } else {
          index = s.lastIndexOf(s[i], index - 1);
        }
      } else {
        if (
          check(sl.slice(0, (sl.length - 1) / 2), sl.slice((sl.length + 1) / 2))
        ) {
          if (sl.length > num) {
            num = sl.length;
            str = sl;
          }
          index = -1;
        } else {
          index = s.lastIndexOf(s[i], index - 1);
        }
      }
    }
  }
  return str;
};
console.log(func(s));
