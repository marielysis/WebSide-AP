import React from 'react';
import {css} from '@emotion/core';
import Navegacion from './nav';


const Header = () => {
  return ( 
  <header
    css={css`
        background-color: #222;
        padding: .5rem;
        border-bottom: 2px solid #fff;
    `}
  >
    <div
      css={css`
        max-width: 1300px;
        margin: 0 auto;

        @media (min-width: 768px) {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
      `}
    >
      <h1
        css={css`
          color: #fff;
          text-align: center;
          font-size: 4rem;
        `}
      >AP</h1>
      <Navegacion />
    </div>
  </header>
   );
}
 
export default Header;