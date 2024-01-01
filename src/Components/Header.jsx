import React from "react";
import styled from "styled-components";
const Head = styled.header`
  position: fixed;
  height: 10vh;
  background-color: rgb(24, 24, 24);
  display: flex;
  justify-content: center;
  align-items: center;
  top:0;
  left:0;
  right:0;
  font-family: 'Rubik Doodle Shadow';
`;

const HeadText = styled.h1`
color: white;

`
export default function Header() {
  return (
    <Head>
      <HeadText>Blog Website</HeadText>
    </Head>
  );
}
