import './App.css';
import styled from 'styled-components'
import About from './components/screens/About'
import Contact from './components/screens/Contact'
import Home from './components/screens/Home'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='about' element={<About/>} />
          <Route path='contact' element={<Contact/>} />
      </Routes>
    </Router>
  )
}

const Wrapper = styled.section`
  
`;
export default App;