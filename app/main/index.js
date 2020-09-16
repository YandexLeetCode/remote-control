const {app, BrowserWindow} = require('electron');
const  isDev = require('electron-is-dev');
let win;

/**
 * 创建窗口
 */
function createWindow() {
    win = new BrowserWindow({
        width: 1000,
        height: 800,
        minWidth: 800,
        minHeight: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })
    // 打开开发者工具
    win.webContents.openDevTools();

    if (isDev) {
        win.loadURL('http://yandex.com:3000')
    } else {
        win.loadFile(path.resolve(__dirname, '../renderer/pages/control/index.html'))
    }

    win.on('closed', () => {
        win = null;
    })
}
// 监听 electron 初始化完成
app.on('ready',  createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
})
app.on('activate', () => {
    if (win === null) {
        createWindow();
    }
})