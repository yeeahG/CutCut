import './App.css';
import Nav from './components/Navigator/Nav';
import Banner from './components/Banner/Banner';
import HairStyle from './components/HairStyle/HairStyle'
import Reservation from './components/Reservation/Reservation'

function App() {
  return (
    <div className="App">
      {/* Nav 부분 */}
      <Nav />

      {/* Banner 부분 */}
      <Banner />

      {/*예약기능 부분*/}
      <Reservation />
      <div className='reserveContent'>
        Select Your Hair Style
      </div>
      
      {/* Hairstyle 부분 */}
      <HairStyle />

    </div>
  )
}

export default App;
