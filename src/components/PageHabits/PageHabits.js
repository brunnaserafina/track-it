import Header from '../Header';
import Footer from '../Footer';
import RenderHabits from './RenderHabits';
import styled from 'styled-components';
import { useState } from 'react';
import Input from '../common/Input';
import Button from '../common/Button';
import { useContext } from 'react';
import UserContext from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function PageHabits() {
  const [newhabit, setNewhabit] = useState(false);

  function addHabit() {
    setNewhabit(true);
  }

  return (
    <>
      <Header />
      <HabitsContainer>
        <div>
          <h4>Meus hábitos</h4>
          <Button
            width={'40px'}
            height={'35px'}
            fontSize={'27px'}
            onClick={addHabit}
          >
            +
          </Button>
        </div>

        {newhabit ? (
          <RegisterHabit newhabit={newhabit} setNewhabit={setNewhabit} />
        ) : (
          ''
        )}

        <RenderHabits />
      </HabitsContainer>
      <Footer />
    </>
  );
}

function RegisterHabit({ newhabit, setNewhabit }) {
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState(true);
  const { token } = useContext(UserContext);
  const [dias, setDias] = useState([]);
  const [habitname, setHabitname] = useState('');
  const [weekdays, setWeekdays] = useState('');

  const daysWeek = [
    { num: 0, day: 'D' },
    { num: 1, day: 'S' },
    { num: 2, day: 'T' },
    { num: 3, day: 'Q' },
    { num: 4, day: 'Q' },
    { num: 5, day: 'S' },
    { num: 6, day: 'S' }
  ];

  function select() {
    setColor(!color);
    console.log('Mudar cor');
  }

  function saveHabit() {
    console.log('Salvar hábito');
    setNewhabit(!newhabit);

    const request = axios.post(
      'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits',
      {
        name: "Dormir cedo",
        days: [1, 3, 4],
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    request.catch((response) => {
      console.log(response);
    });

    request.then((response) => {
      console.log(response.data);
    });

    
  }

  function cancelHabit() {
    console.log('Cancelar hábito');
    //resetar todo o objeto;
    setNewhabit(!newhabit);
  }

  return (
    <Form>
      <Input
        $loading={loading}
        type="text"
        placeholder="nome do hábito"
        required
        value={habitname}
        onChange={(e) => setHabitname(e.target.value)}
      />
      <Days>
        {daysWeek.map((day, index) => (
          <Day key={index} day={day.day} dias={dias} setDias={setDias} />
        ))}
      </Days>
      <span>
        <p onClick={cancelHabit}>Cancelar</p>
        <Button
          width={'84px'}
          height={'35px'}
          fontSize={'16px'}
          onClick={saveHabit}
        >
          Salvar
        </Button>
      </span>
    </Form>
  );
}

function Day({ day }) {
  const [background, setBackground] = useState(true);
  const week = [];

  function choose() {
    setBackground(false);
  }

  function unChoose() {
    setBackground(true);
  }

  return (
    <>
      {background ? (
        <Dayy onClick={choose} background={'#ffffff'} cor={'#DBDBDB'}>
          {day}
        </Dayy>
      ) : (
        <Dayy onClick={unChoose} background={'#CFCFCF'} cor={'#ffffff'}>
          {day}
        </Dayy>
      )}
    </>
  );
}

const HabitsContainer = styled.div`
  background-color: #e5e5e5;
  height: 100vh;
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
    width: 100vw;
  }

  > div h4 {
    font-size: 23px;
    color: #126ba5;
  }

  > p {
    padding: 20px;
    font-size: 18px;
    color: #666666;
    line-height: 22.5px;
  }
`;

const Form = styled.span`
  width: 90vw;
  height: 180px;
  background-color: #ffffff;
  align-items: center;
  padding: 18px;
  box-sizing: border-box;
  border-radius: 5px;
  margin-bottom: 10px;

  > span {
    width: 80vw;
    display: flex;
    align-items: center;
    justify-content: end;
    margin-top: 29px;
  }

  p {
    font-size: 16px;
    color: #52b6ff;
    margin-right: 23px;
  }
`;

const Days = styled.div`
  width: 80vw;
  display: flex;
  justify-content: start;
`;

const Dayy = styled.button`
  width: 30px;
  height: 30px;
  background-color: ${(props) => props.background};
  border: solid 1px #d4d4d4;
  border-radius: 5px;
  color: ${(props) => props.cor};
  margin-right: 4px;
  margin-top: 2px;
  font-size: 20px;
  font-weight: 400;
`;
