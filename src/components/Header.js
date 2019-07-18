import React from 'react';
import {Link} from 'react-router-dom';

import Wrap from '../components/Wrap'

export default function Header() {
  return (
    <Wrap>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </Wrap>
  );
}