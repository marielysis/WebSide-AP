import React from 'react';
import { graphql } from 'gatsby';
import Layout from './layout';
import Image from 'gatsby-image';
import { css } from '@emotion/core';

export const query = graphql`
query($slug: String!) {
  allDatoCmsPlan(filter: { slug: { eq: $slug } }) {
    nodes {
        titulo
        id
        slug
        descripcion
        imagen {
          fluid(maxWidth:1200) {
            ...GatsbyDatoCmsFluid
          }
        }
     }
  }
}
`

const PlanesTemplate = ({data: { allDatoCmsPlan: { nodes } }}) => {

  const { titulo, descripcion, imagen } = nodes[0];
  return ( 
  <Layout>
    <main 
      css={css`
      margin: 0 auto;
      max-width: 1200px;
      width: 95%;
  `}
    >
      <h1
        css={css`
        text-align: center;
        margin-top: 4rem;
    `}
      >{titulo}</h1>
      <p>{descripcion}</p>
      <Image 
        fluid={imagen.fluid} 
       />
    </main>

  </Layout>
   );
}
 
export default PlanesTemplate;