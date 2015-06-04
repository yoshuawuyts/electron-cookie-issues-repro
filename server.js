const http = require('http')

const server = http.createServer(function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'file://')
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  res.setHeader('Set-Cookie', ['type=ninja', 'language=javascript'])
  res.end('whoop!')
})

server.listen(process.env.NODE_ENV || 1337)
