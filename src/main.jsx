import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './Pages/Home/Home';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/NavBar/NavBar'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
    <Home />
    <Footer />
</React.StrictMode>,
)
