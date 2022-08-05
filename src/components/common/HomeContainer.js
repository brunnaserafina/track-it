import styled from 'styled-components';

const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    text-decoration: underline;
    color: #52b6ff;
    font-size: 14px;
    font-weight: 400;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export default HomeContainer;
