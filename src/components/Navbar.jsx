import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
   const [menuOpen, setMenuOpen] = useState(false);

   function closeMenu() {
      setMenuOpen(false);
   }

   return (
      <nav className="navbar">
         <div className="logo">
            <Link to="/" onClick={closeMenu}>
               <h2>
                  THE JOURNAL<span>.</span>
               </h2>
            </Link>
         </div>

         <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <li>
               <Link to="/" onClick={closeMenu}>
                  Home
               </Link>
            </li>
            <li>
               <Link to="/articles" onClick={closeMenu}>
                  Articles
               </Link>
            </li>
            <li>
               <Link to="/categories" onClick={closeMenu}>
                  Categories
               </Link>
            </li>
            <li>
               <Link to="/about" onClick={closeMenu}>
                  About
               </Link>
            </li>
         </ul>

         <div className="nav-button">
            <Link to="/contact" onClick={closeMenu}>
               <button>Let's Talk</button>
            </Link>
         </div>

         <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
         >
            {menuOpen ? '✕' : '☰'}
         </button>
      </nav>
   );
}

export default Navbar;
