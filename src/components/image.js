import React from 'react'
import styled from "styled-components";

const ForestImage = styled.img`
    width:50%;
    margin:10px auto;
    display:block;
   
    
`
export default function Image(props) {
  return (
      <ForestImage src={props.src} />
  )
}
