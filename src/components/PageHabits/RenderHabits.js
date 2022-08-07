import axios from 'axios';
import { useState, useContext, useEffect } from 'react';
import UserContext from '../../context/UserContext';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export default function RenderHabits() {
  const { token } = useContext(UserContext);
  const [habitos, setHabitos] = useState([]);

  useEffect(() => {
    const request = axios.get(
      'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits',
      { headers: { Authorization: `Bearer ${token}` } }
    );

    request.catch((response) => {
      console.log('erro', response);
    });

    request.then((response) => {
      //console.log(response);
      setHabitos(response.data);
    });
  }, []);

  if (habitos.length > 0) {
    return (
      <>
        {habitos.map((habit, index) => (
          <MyHabits key={index} habit={habit} id={habit.id} />
        ))}
      </>
    );
  }

  return (
    <>
      <p>
        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
        começar a trackear!
      </p>
    </>
  );
}

function MyHabits({ habit }) {
  const daysWeek = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
  console.log(habit.id);
  const { token } = useContext(UserContext);
  const navigate = useNavigate();

  function deleteHabit() {
    if (window.confirm('Tem certeza que deseja apagar este hábito?')) {
      const delet = axios.delete(
        `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      delet.catch((response) => {
        console.log('erro', response);
      });

      delet.then((response) => {
        console.log(response);
      });
    }

    
  }

  return (
    <Habit>
      <span>
        <p>{habit.name}</p>
        <ion-icon name="trash-outline" onClick={deleteHabit}></ion-icon>
      </span>

      <Days>
        {daysWeek.map((day, index) =>
          habit.days.includes(index) ? (
            <Day key={index} selected={true}>
              {day}
            </Day>
          ) : (
            <Day key={index} selected={false}>
              {day}
            </Day>
          )
        )}
      </Days>
    </Habit>
  );
}

const Habit = styled.span`
  width: 90vw;
  height: 91px;
  border-radius: 5px;
  background-color: #ffffff;
  margin-bottom: 10px;
  padding: 15px;
  box-sizing: border-box;

  span {
    display: flex;
    justify-content: space-between;
  }

  > span > p {
    font-size: 20px;
    color: #666666;
  }
`;

const Days = styled.div`
  display: flex;
`;

const Day = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${(props) => (props.selected ? '#cfcfcf' : '#ffffff')};
  border: solid 1px #d4d4d4;
  border-radius: 5px;
  color: ${(props) => (props.selected ? '#ffffff' : '#dbdbdb')};
  margin-top: 10px;
  margin-right: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 400;
`;
