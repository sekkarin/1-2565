const ex01 = () => {
    console.log("5/2 + 4/3 = ?");
    let arr = [5, 2, 4, 3]
    let answer
    for (let index = 0; index < arr.length; index++) {
        if (index <= 1) {
            // let pre = 0;
            let curr = arr[index]
            arr[index] = curr * 3
        } else {
            let curr = arr[index]
            arr[index] = curr * 2
        }

    }
    if (arr[1] != arr[3]) {
        console.error("Error");
        return 0;
    }

    return `ตอบ ${arr[0] + arr[2]}/${arr[1]}`
}
const ex02 = () => {
    let arr = [5, 4, 2, 2]
    let answer
    for (let index = 0; index < arr.length; index++) {
        if (index <= 1) {
            // let pre = 0;
            let curr = arr[index]
            arr[index] = curr * 2
        } else {
            let curr = arr[index]
            arr[index] = curr * 4
        }

    }
    if (arr[1] != arr[3]) {
        console.error("Error");
        return 0;
    }

    return `ตอบ ${arr[0] - arr[2]}/${arr[1]}`
}
const ex03 = () => {
    let arr = [4, 3]
    let integer = 2
    return `ตอบ ${arr[0] * integer}/${arr[1]}`
}
const ex05 = () => {
    let arr = [5, 2, 4, 3]
    return `ตอบ ${arr[0] * arr[3]}/${arr[1] * arr[2]} `
}
const ex04 = () => {
    let arr = [5, 2, 4, 3]



    return `ตอบ ${arr[0] * arr[2]}/${arr[1] * arr[3]} => ${(arr[0] * arr[2]) / 2}/${(arr[1] * arr[3]) / 2}`
}
const ex10 = () =>{
    let answer = 0
    for (let index = -1000; index < 1000; index++) {
        if (((index**2 ) - 36) == 0){
            console.log("********"+index);
            return `ตอบ ${index}`   
        }
        
    }
    return "Not have answer"
}
// function main() {
//     document.getElementById('ex01').innerText = ex01()
//     document.getElementById('ex02').innerText = ex02()
//     document.getElementById('ex03').innerText = ex03()
//     document.getElementById('ex04').innerText = ex04()
//     document.getElementById('ex05').innerText = ex05()
//     document.getElementById('ex06').innerText = `ตอบ ${1.325 + 28.951}`
//     document.getElementById('ex07').innerText = `ตอบ ${53.21 - 45.951}`
//     document.getElementById('ex08').innerText = `ตอบ ${46.396 * 53.4}`
//     document.getElementById('ex09').innerText = `ตอบ ${12.0 / 1.2}`
//     document.getElementById('ex10').innerText = ex10()
// }
// main()
console.log(ex01());