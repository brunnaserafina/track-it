import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';
import { useState, useContext, useEffect } from 'react';
import UserContext from '../context/UserContext';
import axios from 'axios';

export default function PageToday() {
  const { token } = useContext(UserContext);
  const [habitos, setHabitos] = useState([]);
  const [render, setRender] = useState(false);

  useEffect(
    () => {
      const request = axios.get(
        'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today',
        { headers: { Authorization: `Bearer ${token}` } }
      );

      request.catch((response) => {
        console.log('erro', response);
      });

      request.then((response) => {
        console.log(response.data);
        setHabitos(response.data);
      });
    },
    [render],
    []
  );

  return (
    <>
      <Header />
      <TodayContainer>
        {habitos.map((habit, index) => (
          <MyHabits key={index} habit={habit} />
        ))}
      </TodayContainer>
      <Footer />
    </>
  );
}

function MyHabits({ habit }) {
  return (
    <Sequence>
      <div>
        <h4>{habit.name}</h4>
        <p>Sequência atual: {habit.currentSequence} dias</p>
        <p>Seu recorde: {habit.highestSequence} dias</p>
      </div>
      <div>
        <ion-icon name="checkbox"></ion-icon>
      </div>
    </Sequence>
  );
}

const TodayContainer = styled.div`
  background-color: #e5e5e5;
  height: 200vh;
  padding: 30px 15px;
  margin-top: 70px;
`;

const Sequence = styled.div`
  width: 90vw;
  height: 95px;
  background-color: #ffffff;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 15px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h4 {
    font-size: 20px;
    color: #666666;
    margin-bottom: 7px;
  }

  p {
    font-size: 13px;
    color: #666666;
    margin-bottom: 3px;
  }

  ion-icon {
    font-size: 69px;
    color: #e7e7e7;
  }
`;
