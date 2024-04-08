const express = require('express')
const app = express()
const port = 3000

app.get('/', function (req, res) {
  res.send('Hello world')
})
app.get('/sound/:name',(req, res) => {
    const{ name } = req.params

    if(name == "dog"){
        res.json({'sound': '멍멍'})
    } else if(name == "cat") {
        res.json({'sound': '애옹'})
    } else if(name == "pig") {
        res.json({'sound': '꿀'})
    } else {
        res.json({'sound': '알수없음'})
    } 
})

app.listen(port, ()=> {
    console.log('example app listening on port ${port}')
})