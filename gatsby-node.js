exports.createPages = async ({ actions, graphql, reporter }) => {

  const resultado = await graphql(`
  query {
    allDatoCmsPlan {
      nodes {
          slug
        }
    }
  }`);

  // console.log(resultado.data.allDatoCmsPlan.nodes);

  if(resultado.errors) {
    reporter.panic('No hubo resultados', resultado.errors);
  }

  // Si hay paginas crear los archivos
  const planes = resultado.data.allDatoCmsPlan.nodes;

  planes.forEach(plan => {
    actions.createPage({
        path: plan.slug,
        component: require.resolve('./src/components/planes.js'),
        context: {
          slug: plan.slug
        }
    })
  })
}
