
import swap from "../script.js"

export default function bubbleSort(arr) {
    let n = arr.length
    for (let i = 0; i < n - 1; i++) {
        let bool=true
        for (let j = 0; j < n-i; j++) {
            if (arr[j] > arr[j+1]) {
                let temp = arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
                swap(j,j+1)
                bool=false
            }
        }
        if(bool==true){
            return
        }
    }
}