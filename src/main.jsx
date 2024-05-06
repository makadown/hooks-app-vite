import React from 'react'
import ReactDOM from 'react-dom/client'
import {HooksApp} from './HooksApp.jsx'
import './index.css'
import { CounterApp } from './01-useState/CounterApp.jsx'
import { CounterAppWithCustomHook } from './01-useState/CounterWithCustomHook.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <CounterApp /> */}
    <CounterAppWithCustomHook />
  </React.StrictMode>,
)
