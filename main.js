const { app, BrowserWindow } = require('electron')
const isDev = require('electron-is-dev')

function createWindow () {
  // Create the browser window.
  let win = new BrowserWindow({
    width: 500,
    height: 625,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // and load the index.html of the app.
  win.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`,
  )
}

app.whenReady().then(createWindow)