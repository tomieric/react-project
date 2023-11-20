import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { SafeArea } from 'antd-mobile'
import 'normalize.css'
import './index.css'
import router from './router/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='app'>
      <SafeArea position="top" />
        <div className="container">
          <RouterProvider router={ router }>
          </RouterProvider>
        </div>
      <SafeArea position="bottom" />
    </div>
  </React.StrictMode>,
)
