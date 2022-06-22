const express = require('express')
const app = express()
const path = require('path')

const PORT = process.env.PORT || 3000
const PATH = path.join(__dirname ,'build')

app.use(express.static(PATH))

app.get('*', (req, res)=> {
    res.sendFile(path.join(PATH, 'index.html'))
}) 

app.listen(PORT, ()=>{
    console.log('listening to port ' + PORT)
})