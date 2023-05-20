function insertionSort() {
    let n = arr.length
    for (let i = 1; i < n; i++) {
        let value = arr[i]
        let k = i-1
        while ( value<arr[k] && k>=0) {
            let temp=arr[k+1]
            arr[k+1]=arr[k]
            arr[k]=temp
            k--
        }
    }
console.log(arr)
}