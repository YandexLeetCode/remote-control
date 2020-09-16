import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ipcRenderer } from 'electron';
import { MainLayout } from './layout/layout.js'
// const {ipcRenderer} = window.require('electron')
function App() {
  return (
    <div className="App">
      <MainLayout body_left_width={"100"}/>
    </div>
  );
}
window.addEventListener("resize",function() {
  
})
export default App;
