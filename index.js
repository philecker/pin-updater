const { app, BrowserWindow, Tray, Menu, nativeImage } = require('electron')
const path = require('path')

let tray

function createWindow () {
  const win = new BrowserWindow({
    width: 300,
    height: 150,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    },
    frame: false,
    tray: true
  })

  win.webContents.openDevTools()
  win.removeMenu()
  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      const icon = nativeImage.createFromPath('./business.png')
      createWindow()

      tray = new Tray(icon)
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
