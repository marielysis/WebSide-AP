import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import  Image  from 'gatsby-image';
import styled from '@emotion/styled';
import {css} from '@emotion/core';

const TextoSobremi = styled.div`
    padding-top: 4rem;
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr) ;
        column-gap: 4rem;
    }
    p {
        line-height: 2;
        margin-top: 2rem;
        
    }
`;


const ContenidoSobremi = () => {

  const resultado = useStaticQuery(graphql`
  query {
    allDatoCmsPagina(filter: { slug: { eq: "me" } }) {
      nodes {
        titulo
        contenido
        imagen {
          fluid( maxWidth: 1000 ){
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  }
  `);

  console.log(resultado.allDatoCmsPagina.nodes[0]);

  const { titulo, contenido, imagen } = resultado.allDatoCmsPagina.nodes[0];

  return ( 

    <>
      <h2

        css={css`
        text-align: center;
        font-size: 4rem;
        margin-top: 4rem;
    `}

      >{titulo}</h2>
      <TextoSobremi>
        <p>{contenido}</p>
        <Image fluid={imagen.fluid} />
      </TextoSobremi>
    </>

   );
}
 
export default ContenidoSobremi;