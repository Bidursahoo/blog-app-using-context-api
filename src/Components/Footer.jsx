import React from "react";
import styled from "styled-components";

const Foot = styled.div`
  height: 10vh;
  background-color: antiquewhite;
  display: flex;
  justify-content: space-around;
  align-items: center;
  bottom:0;
  left:0;
  right:0;
  margin-top: 14vh;
`;
const FootText = styled.h3`
color: black;`;

export default function Footer() {
  return (
    <Foot>
      <FootText>Bidur</FootText>
      <FootText>Bibhab</FootText>
      <FootText>Sahoo</FootText>
    </Foot>
  );
}
