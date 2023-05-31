// let bool = false
// let marr = []
async function mergeSort() {
    disabler()
    let l = 0
    let r = (arr.length) - 1
    await sort(l, r)
    enabler()
}

async function sort(l, r) {
    if (l == r) {
        await changeColor(l, "red")
        return
    }
    let mid = Math.floor((l + r) / 2)
    await sort(l, mid)
    await sort(mid + 1, r)
    await merge(l, r, mid)
}

async function merge(l, r, mid) {
    // await changeColor(l , "black")
    // await changeColor(r , "black")
    let lSize = mid - l + 1
    let lArray = []
    lArray.length = lSize
    let rSize = r - mid
    let rArray = []
    rArray.length = rSize
    for (let i = 0; i < lSize; i++) {
        lArray[i] = arr[i + l]
    }
    for (let i = 0; i < rSize; i++) {
        rArray[i] = arr[i + mid + 1]
    }
    lArray.push(10000)
    rArray.push(10000)
    let lIndex = 0
    let rIndex = 0
    for (let i = l; i <= r; i++) {
        
        if (lArray[lIndex] <= rArray[rIndex]) {
            // if (bool) {
            //     await changeColor(marr[marr.length - 1], "#ED2B2A")
            // }
            // await changeColor(mid+1+rIndex, "gold")
            // marr.push(mid+1+rIndex)
            // bool = true
            arr[i] = lArray[lIndex]
            await changeHeight(i, `${lArray[lIndex]}px`)
            if (l == 0 && r == arr.length - 1) {
                await changeColor(i, "#00FFCA")
            }
            lIndex++
        }
        else {
            // if (bool) {
            //     await changeColor(marr[marr.length - 1], "#ED2B2A")
            // }
            // await changeColor(l+lIndex, "gold")
            // marr.push(l+lIndex)
            // bool = true
            arr[i] = rArray[rIndex]
            await changeHeight(i, `${rArray[rIndex]}px`)
            if (l == 0 && r == arr.length - 1) {
                await changeColor(i, "#00FFCA")
            }
            rIndex++
        }
    }
}