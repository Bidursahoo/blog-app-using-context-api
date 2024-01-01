import BlogSection from "./Components/BlogSection";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import InputSection from "./Components/InputSection";
import styled from "styled-components";
import BlogContext from "./Store/Blogs-store";
import { useState } from "react";
const BlogContainer = styled.div`
margin:1rem;
display:flex;
justify-content:center;
align-items:center;
flex-direction: column;
`;

function App() {
  const [blogs, setBlogs] = useState([]);
  const addAction = (value) => {
    setBlogs([...blogs, value]);
  };
  return (
    <BlogContext.Provider value={{ blogs, addAction }}>
      <Header />
      <InputSection />
      <BlogContainer>
        <BlogSection />
      </BlogContainer>
      <Footer />
    </BlogContext.Provider>
  );
}

export default App;
