const BrowserWindow = require('browser-window')
const crashReporter = require('crash-reporter')
const app = require('app')

var win = null

// send crash reports as POST data
// https://github.com/atom/electron/blob/master/docs/api/crash-reporter.md
crashReporter.start()

app.on('ready', function () {
  win = new BrowserWindow({
    title: 'debug',
    width: 800,
    height: 600,
    frame: false
  })

  win.loadUrl('file://' + __dirname + '/index.html')
  win.openDevTools({ detach: true })

  win.on('closed', function () {
    win = null
  })
})
