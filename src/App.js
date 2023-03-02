import React from 'react'
import MenuBar from './components/sreens/MenuBar'
import Accounting from './components/sreens/comingsoonpages/Accounting'
import Delivery from './components/sreens/comingsoonpages/Delivery'
import Reservation from './components/sreens/comingsoonpages/Reservation'
import TableServices from './components/sreens/comingsoonpages/TableServices'
import Cart from './components/sreens/Cart'
import Helmet from 'react-helmet'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from 'styled-components';
import Menu from './components/sreens/Menu';

function App() {
  return (
    <>
      <Helmet>
        <title>CosyPOS</title>
      </Helmet>
      <Spotlight>
        <Router>
          <MenuBar/>
          <Routes>
            <Route path='menu' element={<Menu/>}/>
            <Route path='accounting' element={<Accounting/>}/>
            <Route path='delivery' element={<Delivery/>}/>
            <Route path='reservation' element={<Reservation/>}/>
            <Route path='tableservices' element={<TableServices/>}/>
         
          </Routes>
        <Cart/>
        </Router>
      </Spotlight>
    </>
  )
}
const Spotlight = styled.section`
  display: flex;

`;
export default App