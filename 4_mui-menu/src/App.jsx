import './App.css'
import ContextMenu from './components/ContextMenu'
import FloatingMenu from './components/FloatingMenu'
import { useState } from 'react'

const App = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  
  const handleButtonMenu = (e) => {
    setAnchorEl(e.currentTarget);
  }

  return (
    <div className="wrapper">
      <main className="container">
          <nav className="navbar">
            <p className="navbar__title">
              <span className="navbar__title__main">lichess</span>
              <span className="navbar__title__extension">.org</span>
            </p>
            <ul className="navbar__menu">
              <li className="navbar__menu__item">
                Play
                <ul className="submenu">
                  <li className="submenu__item">Option 1</li>
                  <li className="submenu__item">Option 2</li>
                </ul>
              </li>
              <li className="navbar__menu__item">
                Puzzles
                <ul className="submenu">
                  <li className="submenu__item">Option 1</li>
                  <li className="submenu__item">Option 2</li>
                </ul>
              </li>
              <li className="navbar__menu__item">
                Learn
                <ul className="submenu">
                  <li className="submenu__item">Option 1</li>
                  <li className="submenu__item">Option 2</li>
                </ul>
              </li>
              <li className="navbar__menu__item">
                Watch
                <ul className="submenu">
                  <li className="submenu__item">Option 1</li>
                  <li className="submenu__item">Option 2</li>
                </ul>
              </li>
              <li className="navbar__menu__item">
                Community
                <ul className="submenu">
                  <li className="submenu__item">Option 1</li>
                  <li className="submenu__item">Option 2</li>
                </ul>
              </li>
              <li className="navbar__menu__item">
                Tools
                <ul className="submenu">
                  <li className="submenu__item">Option 1</li>
                  <li className="submenu__item">Option 2</li>
                </ul>
              </li>
            </ul>
          </nav>
          <main>
            <section className="big-text">
              <button onClick={handleButtonMenu}>Click to see a floating menu</button> 
            </section>
          </main>
      </main>
      <FloatingMenu isOpen={Boolean(anchorEl)} anchorEl={anchorEl} onClose={() => setAnchorEl(null)} />
      <ContextMenu />
    </div>
  )
}

export default App
