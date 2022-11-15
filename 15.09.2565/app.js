const http = require('http')
 
const HOST = "localhost"
const PORT = 3000

const server = http.createServer((req,res) =>{
    // res.statusCode = 200
    // res.setHeader("Content-Type","text/plain")
    // res.write(`<h2>Hello world</h2>`)
    const filename = path.join(__dirname,'index.html')
    const indexData = fs.readFileSync(filename)
    res.end(indexData)
})

server.listen(PORT,HOST,()=>console.log(`server running port ${PORT}`))