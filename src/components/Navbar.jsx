
import { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>THE JOURNAL<span>.</span></h2>
      </div>

     <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li>Home</li>
        <li>Articles</li>
        <li>Categories</li>
        <li>About</li>
      </ul>

      <div className="nav-button">
        <button>Let's Talk</button>
      </div>
      <button
  className="menu-toggle"
  onClick={() => setMenuOpen(!menuOpen)}
>
  ☰
</button>
    </nav>
  );
}

export default Navbar;