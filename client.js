require('electron-cookies')
const nets = require('nets')

// window.fetch does not support
// cookies.
window.fetch('http://localhost:1337')
  .then(function (res) {
    console.log('res', res)
    return res.text()
  })
  .then(function (body) {
    console.log('body', body)
    console.log('cookies', document.cookies)
    callNets()
  })

// `withCredentials` set to true
// allows cookies to be set
function callNets () {
  nets({
    url: 'http://localhost:1337',
    encoding: null,
    withCredentials: true
  }, function (err, res, body) {
    if (err) return console.error(err)
    console.log('res', res)
    console.log('body', body)
    console.log('cookies', document.cookies)
  })
}
