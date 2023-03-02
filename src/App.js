import React from 'react'
import MenuBar from './components/sreens/MenuBar'
import Helmet from 'react-helmet'

function App() {
  return (
    <>
      <Helmet>
        <title>CosyPOS</title>
      </Helmet>
      <Spotlight>
        <Router>
          <Routes>
            

          </Routes>
        </Router>
      </Spotlight>
    </>
  )
}
const Spotlight = styled.section`
  display: flex;
`;
export default App