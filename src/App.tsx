import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { theme } from './styles/theme'
import { store } from './store'
import { ROUTES } from './constants/routes'
import Header from './components/Header/Header'
import './App.scss'

function App() {


  return (
    <Provider store = {store}>  кто уже начал делать задания учитывайте, что к пути картинки нужно добавить
      <ThemeProvider theme= {theme}>
        <CssBaseline /> 
        <BrowserRouter>
        <div className="app-container">
          <Header />
          <main className='app-content'>
          <Routes>
            <Route path={ROUTES.HOME} element= {<div>Pizza App</div>} />
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
  )
}

export default App
