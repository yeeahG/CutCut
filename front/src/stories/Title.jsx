import React,{ useState } from 'react'
import './Title.css'

const Title = ({ user, onLogin, onLogout,onCreateAccount }) => {

  const [isOpen, setMenu] = useState(true);

  const toggleMenu = () => {
    setMenu(isOpen => !isOpen);
  }

  return (
    <div className='navi-container'>

      <h2 className='storeTitle'><a href='/'>CutCut</a></h2>

      <div className='menu-container'>
        <p onClick={()=>toggleMenu()} id='menu-btn'>✂</p>
      </div>

      <div className={isOpen ? "show-menu" : "hide-menu"}>
        <p><a href='/'>Home</a></p>
        <p><a href='/styles'>Style</a></p>
        <p><a href='/reserve'>Reserve</a></p>

        {user ? (
          <>
            <span className="welcome">
              Welcome, 
              <b>
                <a href='/user'>{user.name}</a>
              </b>!
              
            </span>
            <button onClick={onLogout}>
              logout
            </button>
          </>
        ) : (
          <>
            <button onClick={onLogin}>Log in</button>
            <button onClick={onCreateAccount}>Sign up</button>
          </>
        )}
      </div>
      {/* <p id='menu-btn'> menu </p> */}
    </div>
  )
}

export default Title