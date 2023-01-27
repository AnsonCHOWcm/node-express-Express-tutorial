const express = require('express');
const path = require('path')
const app = express();


//outputing Home Page based on request

//we get all the static resources by this line therefore we don't need to render the reference request one by one
//set static and middlewave
app.use(express.static('./public'))

app.get('/', (req, res) => {
   res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
})

//unwanted request catching
app.all('*', (req, res) => {
    res.status(404).send('resources not found')
})

app.listen(5000, () => {
    console.log('server is listening on port 5000...')
})