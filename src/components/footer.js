import React from 'react';
import {css} from '@emotion/core';
import Navegacion from './nav';
import styled from '@emotion/styled';
import{ Link } from 'gatsby';

const EnlaceHome = styled(Link)`
    color: #FFF;
    text-align: center;
    text-decoration: none;
    font-size: 6rem;
`;


const Footer = () => {
  const year = new Date().getFullYear();
  return ( 
    <>
  <footer
    css={css`
    background-color: rgba(44,62,80);
    margin-top: 5rem;
    padding: 1rem;
    border-bottom: 1px solid #fff;
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
      <Navegacion />
      <EnlaceHome
        to='/'
      >AP</EnlaceHome>
    </div>
  </footer>
  <p
    css={css`
    text-align: center;
    color: #fff;
    background-color: rgb(33,44,55);
    margin: 0;
    padding: 1rem;
`}
  >Todos los Derechos Reservados {year} &copy;</p>
  </>
   );
}
 
export default Footer;