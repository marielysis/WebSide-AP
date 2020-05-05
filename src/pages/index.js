import React from "react";
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import Layout from "../components/layout";
import ImagenAlberto from '../components/imagenalberto';
import ContenidoInicio from '../components/contenidoInicio';
import PlanPreview from '../components/planPreview';
import usePlanes from '../hooks/use-planes';

const ListadoPlanes = styled.ul`
    max-width: 1200px;
    width: 95%;
    margin: 4rem auto 0 auto;

    @media (min-width: 768px) {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      column-gap: 3rem;
    }
  `;

const IndexPage = () => {
  
  const planes = usePlanes();

  console.log(planes);

  return (
    <Layout>
      <ImagenAlberto />
      <ContenidoInicio />  

      <h2
        css={css`
          text-align: center;
          margin-top: 5rem;
          font-size: 3rem;
        `}
      >
        Mis Planes  
      </h2> 

      <ListadoPlanes>
        {planes.map(plan => (
          <PlanPreview
            key={plan.id}
            plan={plan}
          />
        ))}  
      </ListadoPlanes> 
    </Layout>
   
  )
}

export default IndexPage
