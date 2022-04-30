import './App.css';
import Home from './components/Layout/Home'
import Nav from './components/Navigator/Nav';
import Banner from './components/Banner/Banner';
import Reserve from './components/Layout/Reserve';
import User from './components/Layout/User'
import Styles from './components/Layout/Styles'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          {/* <Home /> */}
          {/* <Banner /> */}
        </Nav>
        
        <Routes>
            <Route path="/" element={<Home/>}> </Route> 
            <Route path='/styles' element={<Styles/>}></Route>
            <Route path='/reserve' element={<Reserve/>}></Route>
            <Route path='/user' element={<User/>}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App;
