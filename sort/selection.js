
import swap from "../script.js"



export default async function selectionSort(arr) {
    let n = arr.length
    for (let i = 0; i < n - 1; i++) {
        let least = i                  //least is the iindex of smallest element
        const r3 = await swap(least, 0, 100)

        for (let j = i + 1; j < n; j++) {
            const q = await swap(i, j, 5)
            if (arr[j] < arr[least]) {
                const r1 = await swap(least, 1, 100)
                least = j
                const r = await swap(least, 0, 100)
            }
        }

        const x = await swap(i, least)
        let temp = arr[i]
        arr[i] = arr[least]
        arr[least] = temp
        const r2 = await swap(least, 1, 100)
        // let p1 = new Promise((resolve, reject) => {
        //     swap(i, least)
        //     p1.resolve("done")
        // })

        // p1.then(() => {
        //     let temp = arr[i]
        //     arr[i] = arr[least]
        //     arr[least] = temp
        // })

    }
}