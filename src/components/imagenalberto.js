import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import styled from '@emotion/styled';

const ImageBackground = styled(BackgroundImage)`
  height: 800px;
`;

const TextoImagen = styled.div`
    background-image: linear-gradient(to top, rgba(34,49,63,.8), rgba(34,49,63,.8) );
    color: #fff;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: flex-start;

    h1 {
      font-size: 6rem;
    
    }
`;

const ImagenAlberto = () => {

  const { image } = useStaticQuery(graphql`
  query { 
    image: file(relativePath: { eq:"alberto.jpg"}) {
      sharp:childImageSharp {
        fluid {
          srcSetWebp
        }
      }
    }
    }
  `);

  return ( 
  <ImageBackground tag="section" fluid={image.sharp.fluid} fadeIn="soft">
    <TextoImagen>
      <h1>ALBERTO PADRÓN</h1>
      <h2>Entrena con el mejor Personal Training Online</h2>
      <button>Comienza Yá</button>
    </TextoImagen>
  </ImageBackground> 
  );
}
 
export default ImagenAlberto;