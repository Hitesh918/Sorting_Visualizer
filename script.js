let slider = document.getElementsByClassName("barWidth")[0]
let bw = slider.value
slider.addEventListener("input", () => {
    bw = slider.value
    console.log("container width is" + document.body.getElementsByClassName("arr")[0].offsetWidth)
    newArray()
})

let arr = []
let elemarr = []

var w = window.innerWidth;
console.log(w)

w = w - 0.16 * w
console.log(w)

document.body.onload = () => {
    newArray()
}



//function to generate new array
function newArray() {
    // console.log("this is bw" +bw)
    console.log("this is w" + w)
    // console.log(window.innerWidth)
    let n = w / ((((4 - (bw * 0.14)) / 100) * window.innerWidth + 4))
    console.log("this is n" + n)
    console.log("value px" + (((4 - (bw * 0.14)) / 100) * window.innerWidth))


    elemarr = []
    arr = []
    let y = document.body.getElementsByClassName("arr")[0]
    y.innerHTML = ""
    for (let i = 1; i <= n; i++) {
        let x = document.createElement("div")
        x.style.backgroundColor = "#62CDFF"
        x.classList.add("bar")
        let elem = randomNumber(30, 480)
        arr.push(elem)
        x.style.width = `${4 - (bw * 0.14)}%`
        x.style.height = `${elem}px`
        y.appendChild(x)
        elemarr.push(x)
    }
    // console.log("here is width")
    //     console.log(elemarr[0].offsetWidth)

}

// setTimeout(() => {
//     console.log(document.getElementsByClassName("arr")[0].firstElementChild.offsetWidth)

// }, 5000)

import selectionSort from "./sort/selection.js"
import bubbleSort from "./sort/bubble.js"
import insertionSort from "./sort/insertion.js"
import mergeSort from "./sort/merge.js"
import quickSort from "./sort/quick.js"

document.getElementsByClassName("ss")[0].addEventListener("click", () => {
    selectionSort(arr)
})
document.getElementsByClassName("bs")[0].addEventListener("click", () => {
    bubbleSort(arr)
})
document.getElementsByClassName("is")[0].addEventListener("click", () => {
    insertionSort(arr)
})
document.getElementsByClassName("ms")[0].addEventListener("click", () => {
    mergeSort(arr)
})
document.getElementsByClassName("qs")[0].addEventListener("click", () => {
    quickSort(arr)

})

// Function to generate random number
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


document.getElementsByClassName("new_array")[0].addEventListener("click", () => {
    newArray();
})

//Animations
export default function swap(a, b, d) {
    if (d == 5) {
        return new Promise(res => {
            //         setTimeout(() => {
            //             elemarr[a].style.backgroundColor="black"
            //             elemarr[b].style.backgroundColor="black"
            //             resolve('resolved');
            //         }, 10)


            // })
            let p1 = new Promise((resolve, reject) => {
                setTimeout(() => {
                    elemarr[a].style.backgroundColor = "black"
                    elemarr[b].style.backgroundColor = "black"
                    resolve('resolved');
                }, 10)



            })

            p1.then(() => {
                setTimeout(() => {
                    elemarr[b].style.backgroundColor = "#62CDFF"

                    res("done")

                }, 100)

            })

        })
    }


    else if (d == 100) {
        if (b == 1) {

            return new Promise(resolve => {

                setTimeout(() => {

                    elemarr[a].style.backgroundColor = "#62CDFF"
                    resolve('resolved');
                }, 10);

            });

        }

        else {
            return new Promise(resolve => {

                setTimeout(() => {

                    elemarr[a].style.backgroundColor = "gold"
                    resolve('resolved');
                }, 10);


            });

        }
    }
    return new Promise(resolve => {
        let temp = elemarr[a].style.height
        elemarr[a].style.height = elemarr[b].style.height

        setTimeout(() => {
            elemarr[b].style.height = temp
            elemarr[a].style.backgroundColor = "#00FFCA"
            if (b == elemarr.length - 1 || b==a) {
                elemarr[b].style.backgroundColor = "#00FFCA"
            }
            resolve('resolved');
        }, 300);


    });




    return 0
}

// function col(a,b){

//     console.log("yo")

//     return new Promise(resolve => {

//         setTimeout(() => {
//             elemarr[a].backgroundColor="black"
//             elemarr[b].backgroundColor="#fff"
//             resolve('resolved');
//         }, 10);


// })



// }

