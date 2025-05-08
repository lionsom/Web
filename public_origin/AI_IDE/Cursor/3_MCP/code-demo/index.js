// 多种排序算法实现与demo

// 冒泡排序
function bubbleSort(arr) {
  let n = arr.length;
  let res = arr.slice();
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (res[j] > res[j + 1]) {
        [res[j], res[j + 1]] = [res[j + 1], res[j]];
      }
    }
  }
  return res;
}

// 选择排序
function selectionSort(arr) {
  let n = arr.length;
  let res = arr.slice();
  for (let i = 0; i < n - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < n; j++) {
      if (res[j] < res[minIdx]) {
        minIdx = j;
      }
    }
    [res[i], res[minIdx]] = [res[minIdx], res[i]];
  }
  return res;
}

// 插入排序
function insertionSort(arr) {
  let res = arr.slice();
  for (let i = 1; i < res.length; i++) {
    let key = res[i];
    let j = i - 1;
    while (j >= 0 && res[j] > key) {
      res[j + 1] = res[j];
      j--;
    }
    res[j + 1] = key;
  }
  return res;
}

// 快速排序
function quickSort(arr) {
  if (arr.length <= 1) return arr;
  let pivot = arr[0];
  let left = arr.slice(1).filter(x => x < pivot);
  let right = arr.slice(1).filter(x => x >= pivot);
  return quickSort(left).concat([pivot], quickSort(right));
}

// 测试demo
const arr = [5, 2, 9, 1, 5, 6];
console.log('原数组:', arr);
console.log('冒泡排序:', bubbleSort(arr));
console.log('选择排序:', selectionSort(arr));
console.log('插入排序:', insertionSort(arr));
console.log('快速排序:', quickSort(arr));
