import './App.css';
import Nav from './components/Navigator/Nav';
import Banner from './components/Banner/Banner';
import HairStyle from './components/HairStyle/HairStyle'

function App() {
  return (
    <div className="App">
      {/* Nav 부분 */}
      <Nav />

      {/* Banner 부분 */}
      <Banner />
      
      {/* Hairstyle 부분 */}
      <HairStyle />

    </div>
  )
}

export default App;
