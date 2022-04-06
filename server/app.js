const http = require('http');
const path = require('path');
const fs = require('fs');
const ES = require('./variables/es.json');
const EN = require('./variables/en.json');
const RU = require('./variables/ru.json');

const server = http.createServer((req, res) => {
  let filePath = path.join(__dirname, 'dest', req.url === '/' ? 'index.html' : req.url);
  let ext = path.extname(filePath);
  let contentType = 'text/html'

  switch (ext) {
    case '.css':
    contentType = 'text/css'
    break;
    case '.js':
    contentType = 'text/javascript'
    default:
    contentType = 'text/html'
  }
  // if(!ext) filePath += '.html'
  fs.readFile(path.join(filePath), (err, data) => {
    // if(err){
    //   throw err
    // }
    res.writeHead(200, {
      'Content-Type': contentType
    })
    res.end(data)
  })
})

const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
  console.log(`Server has been started on ${PORT}`)
})

const serverForJson = http.createServer((req, res) => {
  // let filePath = path.join(__dirname, 'variables', req.url);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
  if(req.url === '/es'){
    res.writeHead(200, {
      'Content-Type': 'application/json'
    })
    res.end(JSON.stringify(ES))
  }else if(req.url === '/en'){
    res.writeHead(200, {
      'Content-Type': 'application/json'
    })
    res.end(JSON.stringify(EN))
  }else if(req.url === '/ru'){
    res.writeHead(200, {
      'Content-Type': 'application/json'
    })
    res.end(JSON.stringify(RU))
  }
})

const PORT1 = process.env.PORT || 4000

serverForJson.listen(PORT1, () => {
  console.log(`Server has been started on ${PORT1}`)
})
