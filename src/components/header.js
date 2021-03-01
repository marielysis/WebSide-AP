import React from 'react';
import {css} from '@emotion/core';
import Navegacion from './nav';
import styled from '@emotion/styled';
import{ Link } from 'gatsby';

const EnlaceHome = styled(Link)`
    color: #fff;
    text-align: center;
    text-decoration: none;
    font-size: 6rem;
`;


const Header = () => {
  return ( 
  <header
    css={css`
        background-color: #000;
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
      <EnlaceHome
        to='/'
      >AP</EnlaceHome>
      <Navegacion />
    </div>
  </header>
   );
}
 
export default Header;