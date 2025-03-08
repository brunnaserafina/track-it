import styled from 'styled-components';

const Input = styled.input`
  width: 30vw;
  height: 45px;
  border: solid 1px #d4d4d4;
  border-radius: 5px;
  box-sizing: border-box;
  margin-bottom: 6px;
  padding: 10px;
  box-sizing: border-box;
  font-size: 20px;
  background-color: ${(props) => (props.$loading ? '#ffffff' : '#F2F2F2')};
  color: ${(props) => (props.$loading ? '#666666' : '#AFAFAF')};

  &::placeholder {
    color: #d4d4d4;
  }

  &:focus {
    outline: auto #52b6ff;
  }

  @media (max-width: 768px) {
    width: 80vw;
  }
`;

export default Input;
