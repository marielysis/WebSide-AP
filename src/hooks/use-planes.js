import { graphql, useStaticQuery } from 'gatsby';

const usePlanes = () => {

  const data = useStaticQuery(graphql`
  query {
    allDatoCmsPlan {
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
  `);

  return data.allDatoCmsPlan.nodes.map(plan => ({
    titulo: plan.titulo,
    descripcion: plan.descripcion,
    id: plan.id,
    slug: plan.slug,
    imagen: plan.imagen

  }));


}
 
export default usePlanes;