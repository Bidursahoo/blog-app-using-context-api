import React, { useContext } from "react";
import styled from "styled-components";
import BlogContext from "../Store/Blogs-store";

const Blog = styled.div`
margin:1rem;
  max-width: 50%;
  border: 4px solid black;
  padding: 6px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 1.7em;
  colur: black;
  text-transform: capitalize;
`;

const Content = styled.p`
  color: rgb(45, 45, 45);
`;
export default function BlogSection() {
  const { blogs } = useContext(BlogContext);
  return <>
  {
    blogs.length !== 0 ? (
        blogs.map((blg) => (
          <Blog>
            <Title>{blg.title}</Title>
            <Content>{blg.content}</Content>
          </Blog>
        ))
      ) : <h1>No Blogs</h1>
  }
  
  </>
}
