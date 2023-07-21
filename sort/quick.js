async function quickSort() {
    disabler()
    let start = 0
    let end = arr.length - 1
    await sorter(start, end)
    await changeColor(end, "#00FFCA")
    enabler()
}

async function sorter(start, end) {
    if (start < end) {
        let pindex = await partition(start, end)
        await sorter(start, pindex - 1)
        await sorter(pindex + 1, end)
    }
    else {
        if (start >= 0) {
            await changeColor(start, "#00FFCA")
        }
        if (end >= 0) {
            await changeColor(end, "#00FFCA")
        }
        return
    }
}
async function partition(start, end) {
    let pivot = arr[end]
    await changeColor(end, "blue")
    let pindex = start
    await changeColor(pindex, "black")
    for (let i = start; i < end; i++) {
        if (elemarr[i].style.backgroundColor != "black") {
            await changeColor(i, "yellow")
        }
        if (arr[i] <= pivot) {
            await changeColor(i, "black")
            let temp = arr[i]
            arr[i] = arr[pindex]
            arr[pindex] = temp
            await swap(i, pindex, "#62CDFF", "#62CDFF")
            pindex++
            await changeColor(pindex, "black")
        }
        if (elemarr[i].style.backgroundColor != "black") {
            await changeColor(i, "#62CDFF")
        }
    }
    let temp = arr[pindex]
    arr[pindex] = pivot
    arr[end] = temp
    await swap(pindex, end, "#00FFCA", "#62CDFF")
    if (elemarr[pindex].style.backgroundColor != "#00FFCA") {
        await changeColor(pindex, "#00FFCA")
    }
    return pindex
}