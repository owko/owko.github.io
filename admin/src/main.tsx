// import React from 'react'
import ReactDOM from 'react-dom/client'
//样式初始化
import "reset-css";
//全局样式
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom';
//状态管理
import { Provider } from 'react-redux'
import store from '@/store/index.ts'
import '@/util/axios.config'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
)
