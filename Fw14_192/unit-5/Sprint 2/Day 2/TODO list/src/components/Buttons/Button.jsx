import styled from "styled-components";
 
const Button = styled.button`
  /* Adapt the colors based on primary prop */
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  /* border: 2px solid gray; */
  background: transparent;
  text-decoration: none;

  color: ${props => props.primary ? "white" : ""};
  background-color: ${props => props.primary ? "blue" : ""};
 
  
  border: ${props => props.default ? "1px solid silver" : ""};

  border: ${props => props.dashed ? "1px dashed silver" : ""};

  color: ${props => props.text ? "#000000" : ""};
  border: ${props => props.text ? "none" : ""};

  border: ${props => props.link ? "none" : ""};
  color: ${props => props.link ? "blue" : ""};

`;



export {Button}
