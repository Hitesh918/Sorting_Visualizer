async function quickSort() {
    let start = 0
    let end = arr.length - 1
    await sorter(start, end)
    await changeColor(end, "green")
}

async function sorter(start, end) {
    if (start < end) {
        let pindex = await partition(start, end)
        await sorter(start, pindex - 1)
        await sorter(pindex + 1, end)
    }
    else {
        if (start >= 0) {
            await changeColor(start, "green")
        }
        if (end >= 0) {
            await changeColor(end, "green")
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
            swap(i, pindex, "#62CDFF", "#62CDFF")
            pindex++
            changeColor(pindex, "black")
        }
        if (elemarr[i].style.backgroundColor != "black") {
            await changeColor(i, "#62CDFF")
        }
    }
    let temp = arr[pindex]
    arr[pindex] = pivot
    arr[end] = temp
    await swap(pindex, end, "green", "#62CDFF")
    if (elemarr[pindex].style.backgroundColor != "green") {
        await changeColor(pindex, "green")
    }
    return pindex
}