const { app, BrowserWindow} = require('electron');

require('update-electron-app')({
  // repo: 'github-user/repo',
  updateInterval: '1 hour',
  logger: require('electron-log')
});

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