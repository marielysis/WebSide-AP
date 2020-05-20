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

const ContenidoInstagram = () => {
  const resultado = useStaticQuery(graphql`
    query {
      allInstaNode {
        edges {
          node {
            id
            likes
            comments
            mediaType
            preview
            original
            timestamp
            caption
            localFile {
              childImageSharp {
                fluid(maxWidth: 1200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  //  console.log(resultado.allInstaNode.edges);

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
          <Image fluid={inst.node.localFile.childImageSharp.fluid} />
          <div
            css={css`
              padding: 1rem;
            `}
          >
            <p
                          css={css`
                          font-size: 12px;
                        `}
            >{inst.node.caption}</p>
          </div>
        </div>
      ))}
    </InstagramPost>
  )
}

export default ContenidoInstagram
