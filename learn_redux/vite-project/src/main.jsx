import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import {configureStore} from '@reduxjs/toolkit'
import UserReducer from './UserReducer.jsx'
import React, { StrictMode } from 'react'; 

const store = configureStore({
  reducer: {
    users: UserReducer
  }
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
