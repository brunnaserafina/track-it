import styled from 'styled-components';

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
  cursor: pointer;

  @media (max-width: 768px) {
    width: 80vw;
  }
`;

export default Button;
