import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <header>
      <h1>
        <Link to='/'>Aplikasi Catatan</Link>
      </h1>

      <nav className='navigation'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/archive'>Archive Note</Link>
          </li>
          <li>
            <Link to='/add'>Tambah Note</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
