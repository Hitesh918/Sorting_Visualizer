async function insertionSort() {
    disabler()
    let n = arr.length
    await changeColor(0, "green")
    for (let i = 1; i < n; i++) {
        await changeColor(i, "yellow")
        let value = arr[i]
        let k = i - 1
        while (value < arr[k] && k >= 0) {
            await swap(k, k + 1, "yellow", "green")
            let temp = arr[k + 1]
            arr[k + 1] = arr[k]
            arr[k] = temp
            k--
        }
        await changeColor(k + 1, "green")
    }
    enabler()
}