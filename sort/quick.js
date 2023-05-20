function quickSort(arr) {
    let start=0
    let end=arr.length -1
    sorter(arr , start , end)
}

function sorter(arr , start , end){
    if(start<end){
        let pindex=partition(arr , start , end)
        sorter(arr , start , pindex-1)
        sorter(arr , pindex+1 , end) 
    }
    else{
        return
    }
}

function partition (arr , start , end){
    let pivot = arr[end]
    let pindex=start
    for(let i = start ; i< end ; i++){
        if(arr[i]<=pivot){
            let temp = arr[i]
            arr[i]=arr[pindex]
            arr[pindex]=temp
            pindex++
        }
    }
    let temp=arr[pindex]
    arr[pindex]=pivot
    arr[end]=temp
    return pindex
}