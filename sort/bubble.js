async function bubbleSort() {
    disabler()
    let n = arr.length
    for (let i = 0; i < n - 1; i++) {
        let bool = true
        for (let j = 0; j < n - i - 1; j++) {
            await changeColor(j, "#FFD401")
            await changeColor(j + 1, "#FFD401")
            if (arr[j] > arr[j + 1]) {
                await changeColor(j, "#183153")
                await changeColor(j + 1, "#183153")
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
                await swap(j, j + 1, "#62CDFF")
                bool = false
            }
            else {
                await changeColor(j, "#62CDFF")
                await changeColor(j + 1, "#62CDFF")

            }
        }
        await changeColor(n - 1 - i, "#00FFCA")
        if (bool == true) {
            for(let k= n-i-1 ; k>=0 ; k--){
                await changeColor(k,"#00FFCA")
            }
            enabler()
            return
        }
        await changeColor(0, "#00FFCA")
    }
    enabler()
}