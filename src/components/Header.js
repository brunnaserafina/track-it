import styled from 'styled-components';
import { useContext } from 'react';
import UserContext from '../context/UserContext';

export default function Header() {
  const { userimg } = useContext(UserContext);

  return (
    <HeaderContainer>
      <h1>TrackIt</h1>
      <img src={userimg} alt="picture-user" />
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  width: 100vw;
  background-color: #126ba5;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  padding: 20px;
  box-sizing: border-box;

  h1 {
    font-family: Playball;
    font-size: 39px;
    color: #ffffff;
  }

  img {
    height: 50px;
    width: 50px;
    object-fit: cover;
    border-radius: 98.5px;
  }
`;
