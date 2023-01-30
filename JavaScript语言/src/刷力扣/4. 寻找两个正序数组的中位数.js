// 给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。

// 算法的时间复杂度应该为 O(log (m+n)) 。

// 示例 1：

// 输入：nums1 = [1,3], nums2 = [2]
// 输出：2.00000
// 解释：合并数组 = [1,2,3] ，中位数 2
// 示例 2：

// 输入：nums1 = [1,2], nums2 = [3,4]
// 输出：2.50000
// 解释：合并数组 = [1,2,3,4] ，中位数 (2 + 3) / 2 = 2.5

// 提示：

// nums1.length == m
// nums2.length == n
// 0 <= m <= 1000
// 0 <= n <= 1000
// 1 <= m + n <= 2000
// -106 <= nums1[i], nums2[i] <= 106

const nums1 = [1, 2],
  nums2 = [3, 4];

const func = (nums1, nums2) => {
  if (nums1.length <= 0 && nums2.length <= 0) return 0;
  const arr = nums1.concat(nums2).sort((a, b) => a - b);
  let n, m;
  if (arr.length > 1) {
    if (arr.length % 2 !== 0) {
      n = m = (arr.length - 1) / 2;
    } else {
      n = arr.length / 2;
      m = n - 1;
    }
  } else {
    return arr[0];
  }
  return (arr[n] + arr[m]) / 2;
};
console.log(func(nums1, nums2));
