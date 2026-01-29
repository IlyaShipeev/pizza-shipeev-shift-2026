import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CssBaseline, ThemeProvider } from '@mui/material'
import {QueryClientProvider } from '@tanstack/react-query'
import {queryClient} from './api/queryClient'
import theme from './styles/theme'
import { store } from './store'
import { ROUTES } from './constants/routes'
import Header from './components/Header/Header'
import HomePage from './pages/HomePage/HomePage'
import './App.scss'

function App() {


  return (
    <QueryClientProvider client = {queryClient}>
    <Provider store = {store}>
      <ThemeProvider theme= {theme}>
        <CssBaseline /> 
        <BrowserRouter>
        <div className="app-container">
          <Header />
          <main className='app-content'>
          <Routes>
            <Route path={ROUTES.HOME} element= {<HomePage/>} />
            <Route path={ROUTES.PROFILE} element= {<div>Profile</div>} /> 
            <Route path={ROUTES.ORDERS} element= {<div>Orders</div>} />
            <Route path={ROUTES.CART} element= {<div>Cart</div>} />
            <Route path={ROUTES.LOGIN} element= {<div>Login</div>} />
            <Route path={ROUTES.REGISTER} element= {<div>Register</div>} />
          </Routes> 
          </main>
        </div>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
    </QueryClientProvider>
  )
}

export default App
