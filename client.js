require('electron-cookies')
const nets = require('nets')

// `withCredentials` set to true
// allows cookies to be set
nets({
  url: 'http://localhost:1337',
  encoding: null,
  withCredentials: true
}, function (err, res, body) {
  if (err) return console.error(err)
  console.log('res', res)
  console.log('body', body)
  console.log('cookies', res.headers['set-cookie'])
})
