const http = require('http')

const server = http.createServer(function (req, res) {
  res.setHeader('Set-Cookie', ['type=ninja', 'language=javascript'])
  res.end('( .o.)')
  console.log('message sent!')
})

server.listen(process.env.NODE_ENV || 1337)
