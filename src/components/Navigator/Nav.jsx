import React,{ useState } from 'react'
import './Nav.css'

const Nav = () => {
  const [isOpen, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(isOpen => !isOpen);
  }

  return (
    <div className='navi-container'>
      <h2 className='storeTitle'><a href='/'>CutCut</a></h2>
      <div className='menu-container'>
        <p><a href='/'>Home</a></p>
        <p><a href='/styles'>Style</a></p>
        <p><a href='/reserve'>Reserve</a></p>
      </div>
      {/* <p id='menu-btn' onClick={() => toggleMenu()}>
        menu
      </p> */}
    </div>
  )
}

export default Nav