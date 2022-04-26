import './App.css';
import Home from './components/Layout/Home'
import Nav from './components/Navigator/Nav';
import Banner from './components/Banner/Banner';
import HairStyle from './components/HairStyle/HairStyle'
import Reservation from './components/Reservation/Reservation'
import Reserve from './components/Layout/Reserve';
import Styles from './components/HairStyle/Styles'
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
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App;
