import React from 'react';
import {Helmet} from 'react-helmet';
import {Global, css} from '@emotion/core';
import Header from './header';
import Footer from './footer';

const Layout = (props) => {
  return ( 
    <>
      <Global 
        styles={css`
          html {
            font-size: 62.5%;
            box-sizing: border-box;
          }
          *, *:before, *:after {
              box-sizing: inherit;
              }
          body {
              font-size: 16px;
              font-size: 1.6rem;
              line-height: 1.5;
              font-family: 'Montserrat', sans-serif;
              
            }
            h1, h2 {
              font-family: 'Montserrat', serif;
            }
            h3 {
              font-family: 'Montserrat', sans-serif;
            }
            ul {
              list-style: none;
              margin: 0;
              padding: 0;
            }
        `}
      />
      <Helmet>
        <title>Alberto Padron</title>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,100;1,200;1,300;1,400&display=swap" rel="stylesheet"/>
      </Helmet>
    
      <Header />
      {props.children} 
      <Footer />
    </>
  );
}
 
export default Layout;