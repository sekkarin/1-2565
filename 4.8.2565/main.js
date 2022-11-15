// console.log("Hello World");
// // document.getElementsByTagName('h1')
// // console.log(document.getElementsByTagName('h1'));
// const header = document.getElementById('tag_1')
// console.log(header);
// const list = document.getElementById('list')
// const list_item = list.getElementsByTagName('li')
// console.log(list_item);


// for (let index = 0; index < list_item.length; index++) {
//     const element = list_item[index];
//     console.log(element.outerText);
// }
// console.log(list.getElementsByTagName('li')[0]);
const header_1 = document.querySelector(".class_t_1")
header_1.classList.add("class_1")
header_1.classList.add("class_2")

let state = false
const change_bg = () => {
    if (state) {
        state = false
        document.getElementById("tag_1").style.cssText =
            "background-color: blueviolet"
        // tag_1.style.cssText = " background-color: blueviolet"
        console.log("pressed true");
    } else {
        state = true
        document.getElementById("tag_1").style.cssText =
            "background-color: red"
        // tag_1.style.cssText = " background-color: blueviolet"
        console.log("pressed flase");
    }
    console.log(state);

}

const m_over = () => {
    console.log("testt over");
    document.getElementById("tag_1").style.cssText =
        "background-color: blue; font-size:20px"
}
const m_out = () => {
    console.log("testt over");
    document.getElementById("tag_1").style.cssText =
        "background-color: white"
}

console.log();
const container = document.querySelector('.container')
const ul = document.createElement('ul')

for (let index = 1; index <= 10; index++) {
    let li = document.createElement('li')
    li.innerText = `list ${index}`
    ul.appendChild(li)
}
container.appendChild(ul)


