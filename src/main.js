'use strict'

const electron = require('electron')
const path = require('path')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

let mainWindow = null

app.once('ready', _ => {
  mainWindow = new BrowserWindow()

  mainWindow.loadURL('file://' + path.join(__dirname, 'index.html'))

  mainWindow.once('close', _ => {
    mainWindow = null
  })
})
