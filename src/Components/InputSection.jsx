import React, { useContext, useReducer } from "react";
import styled from "styled-components";
import BlogContext from "../Store/Blogs-store";
const Div = styled.div`
  // border: 2px solid pink;
  height: 20vh;
  margin-top: 12vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

const TextArea = styled.textarea`
  resize: none;
`;

const Input = styled.input``;

const Button = styled.button`
  border: none;
  background-color: green;
  color: white;
  padding: 0.5rem;
  border-radius: 10px;
`;
export default function InputSection() {
  const [inputValues, setInputValues] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    { title: "", content: "" }
  );
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setInputValues({ [name]: value });
  };

  
  const {addAction} = useContext(BlogContext)
  const handleClick = () => {
    if (inputValues.title.length !== 0 && inputValues.content.length !== 0) {
      addAction(inputValues)
    }
  };
  return (
    <Div>
      <Input
        type="text"
        placeholder="Enter the title"
        required
        name="title"
        onChange={handleOnChange}
        value={inputValues.title}
      />
      <TextArea
        placeholder="Enter the blog text"
        rows="2"
        cols="50"
        required
        name="content"
        onChange={handleOnChange}
        value={inputValues.content}
      ></TextArea>
      <Button onClick={handleClick}> Upload </Button>
    </Div>
  );
}
