const http = require('http')


//req  : request message and res : response message
const server = http.createServer((req, res) => {
    console.log(req.url)
    if (req.url === '/'){
        res.writeHead(200, {'content-type' : 'text/html'})
        res.write('<h1>home page</h1>')
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