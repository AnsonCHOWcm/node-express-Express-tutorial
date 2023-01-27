const http = require('http')
const {readFileSync} = require('fs');

const HomePage = readFileSync('./navbar-app/index.html')
const HomeStyle = readFileSync('./navbar-app/styles.css')
const HomeImage = readFileSync('./navbar-app/logo.svg')
const HomeLogic = readFileSync('./navbar-app/browser-app.js')

//req  : request message and res : response message
const server = http.createServer((req, res) => {
    console.log(req.url)
    if (req.url === '/'){
        res.writeHead(200, {'content-type' : 'text/html'})
        res.write(HomePage)
        res.end()
    }
    else if (req.url === '/styles.css'){
        res.writeHead(200, {'content-type' : 'text/css'})
        res.write(HomeStyle)
        res.end()
    }
    else if (req.url === '/logo.svg'){
        res.writeHead(200, {'content-type' : 'image/svg+xml'})
        res.write(HomeImage)
        res.end()
    }
    else if (req.url === '/browser-app.js'){
        res.writeHead(200, {'content-type' : 'text/javascript'})
        res.write(HomeLogic)
        res.end()
    }
    else if (req.url === '/about'){
        res.writeHead(200, {'content-type' : 'text/html'})
        res.write('<h1>Anson</h1>')
        res.end()
    }
    else {
        res.writeHead(404, {'content-type' : 'text/html'})
        res.write('<h1>404 Not Found</h1>')
        res.end()
    }
})

server.listen(5000)