import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Cadastro from './pages/Cadastro/Cadastro'


function App() {

  return (
    <main className='container'>

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home /> }></Route>
      <Route path='/cadastro' element={<Cadastro /> }></Route>
    </Routes>
    </BrowserRouter>
    </main>
  )
}

export default App
