import React from "react"
import styled from "@emotion/styled"


const YoutubePost = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  width: 95%;
  margin: 2rem auto 0 auto;
`


const ContenidoYoutube = () => {
  return (
    <YoutubePost>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/d7MLvah2b68" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </YoutubePost>
  )
}

export default ContenidoYoutube