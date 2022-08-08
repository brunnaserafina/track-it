import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../context/UserContext';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Footer() {
  const { percentage } = useContext(UserContext);

  return (
    <FooterContainer>
      <Link to={`/habitos`}>
        <p>Hábitos</p>
      </Link>

      <Link to={`/hoje`}>
        <span>
          <CircularProgressbar
            value={percentage}
            text="Hoje"
            background
            backgroundPadding={6}
            styles={buildStyles({
              backgroundColor: '#52B6FF',
              textColor: '#ffffff',
              pathColor: '#ffffff',
              trailColor: 'transparent',
            })}
          />
        </span>
      </Link>

      <Link to={`/historico`}>
        <p>Histórico</p>
      </Link>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  background-color: #ffffff;
  width: 100vw;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 35px;
  box-sizing: border-box;
  position: fixed;
  bottom: 0;

  a {
    text-decoration: none;
    color: #52b6ff;
    font-size: 18px;
  }

  span {
    width: 91px;
    height: 91px;
    background-color: #52b6ff;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    font-size: 18px;
    border-radius: 60px;
    margin-bottom: 30px;
  }
`;
