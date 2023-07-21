async function insertionSort() {
    disabler()
    let n = arr.length
    await changeColor(0, "#28a745")
    for (let i = 1; i < n; i++) {
        await changeColor(i, "yellow")
        let value = arr[i]
        let k = i - 1
        while (value < arr[k] && k >= 0) {
            await swap(k, k + 1, "yellow", "#28a745")
            let temp = arr[k + 1]
            arr[k + 1] = arr[k]
            arr[k] = temp
            k--
        }
        await changeColor(k + 1, "#28a745")
    }
    enabler()
}