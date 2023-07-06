import { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from 'react-router-dom';
import axios from 'axios';
import Pages from './Components/All_Pages';
import Home from './Components/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/render-pages/:pageno' element={<Pages/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
