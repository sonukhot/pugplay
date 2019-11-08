const express = require('express')
const app = express()

app.set('view engine', 'pug')

app.get("/", (request, response) => {
    response.send('<h1>Hello from FSU</h1>')
})
app.get('/students', (request, response) => {
    let pageData = {
        students: ['Ujwala', 'Upasana', 'Tatiana', 'Patrick Ohhh', 'Patrick M', 'Caleb']
    }
    response.render('students', pageData)
})
app.listen(1337, () => {
    console.log('Lezzzzz.gooo!!!')
})