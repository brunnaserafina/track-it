import styled from 'styled-components';

const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  a {
    text-decoration: underline #52b6ff;
    color: #52b6ff;
    font-size: 14px;
    font-weight: 400;
    margin-top: 25px;
  }
`;

export default HomeContainer;
