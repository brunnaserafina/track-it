import styled from "styled-components";

const Button = styled.button`
  background-color: #52b6ff;
  width: 80vw;
  height: 45px;
  border: none;
  border-radius: 4.6px;
  color: #ffffff;
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${(props) => props.opacity};
`;

export default Button;