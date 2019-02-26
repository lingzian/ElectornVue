'use strict'

import { app, BrowserWindow, ipcMain, screen, Tray, Menu } from 'electron'

// 静态资源路径
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path')
    .join(__dirname, '/static')
    .replace(/\\/g, '\\\\')
}

// 渲染线程的文件路径
const winURL =
  process.env.NODE_ENV === 'development'
    ? `http://localhost:9080`
    : `file://${__dirname}/index.html`

let mainWindow
function createWindow () {
  // 创建窗口
  const width = 500
  const height = 500
  const workAreaSize = screen.getPrimaryDisplay().workAreaSize // 屏幕对象
  mainWindow = new BrowserWindow({
    width,
    height,
    x: workAreaSize.width - width,
    y: workAreaSize.height - height,
    show: false,
    useContentSize: false, // width 和 height 将使用 web 页面的尺寸, 这意味着实际窗口的尺寸应该包括窗口框架的大小，稍微会大一点
    center: false, // 窗口在屏幕居中
    resizable: false, //  窗口是否可以改变尺寸
    movable: false, // 窗口是否可以移动. 在 Linux 中无效
    minimizable: false, // 窗口是否可以最小化. 在 Linux 中无效.
    maximizable: false, // 窗口是否可以最大化动. 在 Linux 中无效.
    closable: true, // 窗口是否可以关闭. 在 Linux 中无效.
    alwaysOnTop: true, // 窗口是否永远在别的窗口的上面
    skipTaskbar: true, //  是否在任务栏中隱藏显示窗口
    frame: false,
    transparent: true,
    webPreferences: {
      devTools: true
    }
  })

  mainWindow.loadURL(winURL)

  mainWindow.on('closed', () => {
    mainWindow = null
  })
  createdTray()
}
// 系统托盘
function createdTray () {
  let tray = null
  tray = new Tray(__static + '/icons/icon.ico')
  const contextMenu = Menu.buildFromTemplate([{ label: '退出' }])
  tray.on('click', () => {
    if (mainWindow === null) {
      // 如果主窗口不存在就创建一个
      createWindow()
      mainWindow.show()
    } else if (mainWindow.isVisible()) {
      // 如果主窗口可视状态就隐藏
      mainWindow.hide()
    } else {
      mainWindow.show()
      mainWindow.focus()
    }
  })
  tray.setContextMenu(contextMenu)
}

// 监听渲染线程发出的 APP_SHOW 请求
ipcMain.on('APP_SHOW', event => {
  mainWindow.show()
})

// 监听渲染线程发出的 APP_HIDE 请求
ipcMain.on('APP_HIDE', event => {
  mainWindow.hide()
})

// 主线程准备完毕后执行
app.on('ready', createWindow)

// 在最后一个窗口被关闭时执行
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

/*
  【MacOS】
  当应用被激活时发出
  各种操作都可以触发此事件
  例如：
    1、首次启动应用程序
    2、尝试在应用程序已运行时或单击应用程序的坞站或任务栏图标时重新激活它
*/
app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})
