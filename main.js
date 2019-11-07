const { app, BrowserWindow, autoUpdater, dialog} = require('electron');
var os = require('os');
const server = 'http://206.189.33.250:5000'

var platform = 'win';
if (process.platform === 'darwin') {
  platform = 'osx';
}
const feed = `${server}/update/${platform}/${app.getVersion()}`

autoUpdater.logger = require('electron-log');
// autoUpdater.logger.transports.file.level = 'info';
autoUpdater.setFeedURL(feed)

autoUpdater.on('checking-for-update', () => {
  console.log(`checking-for-update: ${feed}`)
  console.log('checking-for-update')
})
autoUpdater.on('error', message => {
  console.error('There was a problem updating the application')
  console.error(message)
})


autoUpdater.on('update-available', () => {
  console.log('update-available')
})

autoUpdater.on('update-not-available', () => {
  console.log('update-not-available')
})

autoUpdater.on('update-downloaded', (event, releaseNotes, releaseName) => {
  const dialogOpts = {
    type: 'info',
    buttons: ['Restart', 'Later'],
    title: 'Application Update',
    message: process.platform === 'win32' ? releaseNotes : releaseName,
    detail: 'A new version has been downloaded. Restart the application to apply the updates.'
  }

  dialog.showMessageBox(dialogOpts, (response) => {
    if (response === 0) autoUpdater.quitAndInstall()
  })
})
// require('update-electron-app')({
//   // repo: 'github-user/repo',
//   updateInterval: '1 hour',
//   logger: require('electron-log')
// });

app.on('ready', () => {
  // setInterval(()=> {
    autoUpdater.checkForUpdates();
  // }, 3000)
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