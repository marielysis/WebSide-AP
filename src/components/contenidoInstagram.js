import React from "react"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import { css } from "@emotion/core"
import styled from "@emotion/styled"


const InstagramPost = styled.div`
  max-width: 1200px;
  width: 95%;
  margin: 2rem auto 0 auto;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 3rem;
  }
`
const ImagenIg = styled(Image)`
  with: 100%;
  height: 200px;
`;

const ContenidoInstagram = () => {
  const resultado = useStaticQuery(graphql`
  query {
    allInstaNode {
      edges {
        node {
          caption
          localFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
  `)



  const insta = resultado.allInstaNode.edges

  console.log(insta)

  return (
    <InstagramPost>
      {insta.map(inst => (
        <div
          css={css`
            border: 1px solid #e1e1e1;
            margin-bottom: 2rem;
          `}
        >
          <ImagenIg tag="img" fluid={inst.node.localFile.childImageSharp.fluid} /> {/* fotos de instagram */}
          <div
            css={css`
              padding: 1rem;
            `}
          >
            {/* <p
                          css={css`
                          font-size: 12px;
                        `}
            >{inst.node.caption}</p> */}
          </div>
        </div>
      ))}
    </InstagramPost>
  )
}

export default ContenidoInstagram
