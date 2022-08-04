import styled from 'styled-components';

export default function Header() {
  return (
    <HeaderContainer>
      <h1>TrackIt</h1>
      <img
        src="https://mixdeseries.com.br/wp-content/uploads/2021/07/rick-and-morty-s5-5-1-696x392.jpg"
        alt="picture-user"
      />
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

