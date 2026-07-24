const express = require('express');

const blog = require('./Routes/blog');


const app = express()
const port = 3000

app.use(express.static("public"))
app.use('/blog', blog);

app.get('/home', (req, res) => {
  res.send('Hello World!')
})
 
app.get('/main', (req, res) => {
  res.sendFile('template/main.html', {root : __dirname})
})


app.post('/', (req, res) => {
    console.log("jrli");
    res.send('Hello World post wali hello print zali!')
})
app.put('/', (req, res) => {
    console.log("jrli");
    res.send('Hello World putty  bhai ne bolavlai mla')
})


app.get("/api/user", (req, res) => {
    res.json({
        name: "Shravan",
        age: 21
    });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})