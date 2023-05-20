function mergeSort(arr) {
    let l = 0
    let r = (arr.length) - 1
    sorter(l, r, arr)

}

function sorter(l, r, arr) {
    if (l == r) {
        return
    }
    let mid = Math.floor((l + r) / 2)

    sorter(l, mid, arr)
    sorter(mid + 1, r, arr)
    merge(arr, l, r, mid)
}

function merge(arr, l, r, mid) {
  
    let lSize = mid - l + 1
    let lArray = []
    lArray.length = lSize

    let rSize = r - mid
    let rArray = []
    rArray.length = rSize

    for (let i = 0; i < lSize; i++) {
        lArray[i]=arr[i + l]
    }
    for (let i = 0; i < rSize; i++) {
        rArray[i]=arr[i + mid + 1]
    }
    lArray.push(10000)
    rArray.push(10000)
    let lIndex = 0
    let rIndex = 0
    for (let i = l; i <=r; i++) {
        if (lArray[lIndex] <= rArray[rIndex]) {
            arr[i] = lArray[lIndex]
            // a.push(lArray[lIndex])
            lIndex++
        }
        else {
            arr[i] = rArray[rIndex]
            // a.push(rArray[rIndex])
            rIndex++
        }

    }

}