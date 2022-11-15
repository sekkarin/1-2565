const fs = require("fs")

fs.appendFile('hello.txt', 'Hello content!\n', (err,result) => { console.log(err,result)});
// console.log("------------ start----------------------");
// fs.readFile("data.txt", "utf-8",(err, data) => {
//     console.log("data 1",data);
// })
// fs.readFile("data.txt", "utf-8",(err, data) => {
//     console.log("data 2",data);
// })
// console.log("------------ end ----------------------"); 
console.log("#",__dirname ,__filename);