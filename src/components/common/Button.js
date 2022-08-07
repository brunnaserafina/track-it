import styled from "styled-components";

const Button = styled.button`
  background-color: #52b6ff;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: none;
  border-radius: 4.6px;
  color: #ffffff;
  font-size: ${(props) => props.fontSize};
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${(props) => props.opacity};
`;

export default Button;