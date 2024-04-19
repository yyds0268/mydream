function bubbleSort(array) {
    let n = array.length;
    let swapped;

    do {
        swapped = false;
        for (let i = 1; i < n; i++) {
            // 比较相邻的元素
            if (array[i - 1] > array[i]) {
                // 交换元素
                [array[i - 1], array[i]] = [array[i], array[i - 1]];
                swapped = true;
            }
        }
        // 减少下一次循环的次数，因为每次循环都会把最大的元素排到最后
        n--;
    } while (swapped);
    return array;
}

// 示例数组
let array = [64, 34, 25, 12, 22, 11, 90];
console.log("Original array:", array);
let sortedArray = bubbleSort(array);
console.log("Sorted array:", sortedArray);