async function selectionSort() {
    let n = arr.length
    for (let i = 0; i < n - 1; i++) {
        let least = i
        changeColor(i, "#183153")
        for (let j = i + 1; j < n; j++) {
            await changeColor(j, "#FFD401")
            if (arr[j] < arr[least]) {
                changeColor(least, "#62CDFF")
                changeColor(i, "#183153")
                changeColor(j, "#183153")
                least = j
            }
            else {
                await changeColor(j, "#62CDFF")
            }
        }
        await swap(i, least , "#00FFCA")
        let temp = arr[i]
        arr[i] = arr[least]
        arr[least] = temp
        if (i != least) {
            changeColor(least, "#62CDFF")
        }
    }
    changeColor(elemarr.length - 1, "#00FFCA")
}