const { app, BrowserWindow} = require('electron');

app.on('ready', () => {
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        // frame: false,
        webPreferences: {
          nodeIntegration: true
        }
      })
    
      // and load the index.html of the app.
      win.loadFile('index.html')
      // win.loadURL('https://wwww.pantip.com')
})