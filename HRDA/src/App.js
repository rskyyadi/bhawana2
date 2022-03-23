import React from 'react'
import Routes from './routes'
import {
  AuthContextProvider
} from './utilities'
import './styles/css/App.css'

const App = () => {
  return (
    <AuthContextProvider>
      <Routes />
    </AuthContextProvider>
  )
}

export default App