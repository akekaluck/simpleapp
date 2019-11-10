const { app, BrowserWindow, Menu, ipcMain} = require('electron');
const dockMenu = Menu.buildFromTemplate([
  {
    label: 'New Window',
    click () { console.log('New Window') }
  }, {
    label: 'New Window with Settings',
    submenu: [
      { label: 'Basic' },
      { label: 'Pro' }
    ]
  },
  { label: 'New Command...' }
])

// app.dock.setMenu(dockMenu);

console.log('hi')

ipcMain.on('ondragstart', (event, filePath) => {
  console.log(`ondragstart ${filePath}`);
  event.sender.startDrag({
    file: filePath,
    icon: 'angularjs.png'
  })
})

app.on('ready', () => {
    app.dock.setMenu(dockMenu);
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        // frame: false,
        webPreferences: {
          nodeIntegration: true
        }
      })
      win.webContents.on('did-finish-load', () => {
        win.webContents.send('ping', 'whoooooooh!')
      })
      // and load the index.html of the app.
      win.loadFile('index.html')
      // win.openDevTools()
      // win.loadURL('https://wwww.pantip.com')
      // and load the index.html of the app.
      // win.setProgressBar(0.5)
})