import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { ipcRenderer } from 'electron';
import MainLayout from './component/main_page.js'
// const {ipcRenderer} = window.require('electron')
function App() {
  return (
    <div className="App">
      <MainLayout userName="MAC-PC"/>
    </div>
  );
}
export default App;
