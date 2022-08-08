import { useState, useContext, useEffect } from 'react';
import UserContext from '../../context/UserContext';
import {Habit,Days, Day } from './HabitsStyled';
import { useNavigate } from 'react-router-dom';
import { getHabits } from '../../services/trackit';
import {postDeleteHabit} from '../../services/trackit';

export default function RenderHabits({ reloadHabits, setReloadHabits }) {
  const { token } = useContext(UserContext);
  const [habitos, setHabitos] = useState([]);

  useEffect(
    () => {
      getHabits(token).then((response) => {
        setHabitos(response.data);
      });
    },
    [reloadHabits],
    []
  );

  if (habitos.length > 0) {
    return (
      <>
        {habitos.map((habit) => (
          <MyHabits
            key={habit.id}
            habit={habit}
            reloadHabits={reloadHabits}
            setReloadHabits={setReloadHabits}
          />
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

function MyHabits({ habit, reloadHabits, setReloadHabits }) {
  const daysWeek = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
  const { token } = useContext(UserContext);
  const navigate = useNavigate();

  function deleteHabit() {
    if (window.confirm('Tem certeza que deseja apagar este hábito?')) {
      postDeleteHabit(habit.id, token).then(() => {
        setReloadHabits(!reloadHabits);
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


