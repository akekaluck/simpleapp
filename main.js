const { app, BrowserWindow} = require('electron');
app.on('ready', () => {
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        icon: './demo.png',
        webPreferences: {
          nodeIntegration: true
        }
      })
    
      // and load the index.html of the app.
      win.loadFile('index.html')
})