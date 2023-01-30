/*
 * @Author: DaLoong
 * @Date: 2022-04-23 11:11:33
 * @LastEditors: DaLoong
 * @LastEditTime: 2022-04-23 11:12:35
 * @FilePath: /AlgorithmToPractice/JavaScript语言/src/面试题记录/数组排序.js
 * @Description:
 */

// 已知数组arr=[1,69,4,6,8,10]，对数组进行升序排列

// 冒泡排序
/* for (var i = 0;i<arr.length-1;i++){

    for (var j = 0;j < arr.length-1-i;j++){

        if(arr[j]>arr[j+1]){

            var temp = arr[j];

            arr[j] = arr[j+1];

            arr[j+1] = temp;

        }

    }

}

console.log(arr); */


// 选择排序

/* var minIndex;

var temp;

for(let i = 1; i < arr.length; i++) {

    minIndex = i - 1;

    for(let j = i; j <arr.length; j++) {

        if(arr[j] < arr[minIndex]) minIndex = j;

    }

    if(minIndex != i-1) {

        temp = arr[i-1];

        arr[i-1] = arr[minIndex];

        arr[minIndex] = temp;

    }
}
console.log(arr); */


// 利用数组自身的sort()方法

/* arr.sort((a,b)=>a-b);

console.log(arr); */


// 插入排序

/* for(let i = 1; i < arr.length; i ++) {

    for(let j = i - 1; j>=0 && arr[j] > arr[j+1]; j --) {

        let temp = arr[j];

        arr[j] = arr[j+1];

        arr[j+1] = temp;

    }
}
console.log(arr); */