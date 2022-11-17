import React from 'react'
import { Provider } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { store } from '../app/Store'
import Home from '../pages/Home'
import Login from '../pages/Login'
import PrivateRouter from './PrivateRouter'


const AppRouter = () => {
  return (
    <Provider store={store}>
    <Routes>
      <Route path='/' element={<Login />}/>
      <Route path="" element={<PrivateRouter />}>
        <Route path="/home" element={<Home/>} />
      </Route>
    </Routes>
    </Provider>
  )
}

export default AppRouter
