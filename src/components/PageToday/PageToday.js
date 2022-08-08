import Header from '../Header';
import Footer from '../Footer';
import { useState, useContext, useEffect } from 'react';
import { getTodayHabits } from '../../services/trackit';
import { postCheckHabit } from '../../services/trackit';
import { postUnCheckHabit } from '../../services/trackit';
import UserContext from '../../context/UserContext';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import { DayWeek, TodayContainer, Concluded, Sequence, Current, Highest, Check } from './TodayStyled';

export default function PageToday() {
  const { token } = useContext(UserContext);
  const [habitos, setHabitos] = useState([]);
  const [reloadHabits, setReloadHabits] = useState(false);
  const [done, setDone] = useState('');
  const containTrue = done.length > 0;
  const { percentage, setPercentage } = useContext(UserContext);

  const date = dayjs().format('DD/MM');
  const day = dayjs().locale('pt-br').format('dddd');
  let deleteFeira = day.replace('-feira', '');
  deleteFeira = deleteFeira.charAt(0).toUpperCase() + deleteFeira.slice(1);

  useEffect(() => {
    function calcPercentage(doneHabits, total) {
      return Math.round((doneHabits / total) * 100);
    }
    setPercentage(calcPercentage(done.length, habitos.length));
  }, [done]);

  useEffect(() => {
    getTodayHabits(token)
      .catch(() => {})
      .then((response) => {
        setHabitos(response.data);
        setDone(response.data.filter((habit) => habit.done));
      });
  }, [reloadHabits]);

  return (
    <>
      <Header />
      <TodayContainer>
        <DayWeek>
          {deleteFeira}, {date}
        </DayWeek>

        {containTrue ? (
          <Concluded color={'#8FC549'}>
            {percentage}% dos hábitos concluídos
          </Concluded>
        ) : (
          <Concluded color={'#BABABA'}>Nenhum hábito concluído ainda</Concluded>
        )}

        {habitos.map((habit) => (
          <MyHabits
            key={habit.id}
            habit={habit}
            reloadHabits={reloadHabits}
            setReloadHabits={setReloadHabits}
          />
        ))}
      </TodayContainer>
      <Footer />
    </>
  );
}

function MyHabits({ habit, reloadHabits, setReloadHabits }) {
  const sameSequence =
    habit.currentSequence === habit.highestSequence &&
    habit.highestSequence !== 0 &&
    habit.done === true;

  const { token } = useContext(UserContext);

  function habitDone() {
    if (habit.done === false) {
      postCheckHabit(habit.id, token).then(() => {
        setReloadHabits(!reloadHabits);
      });
    } else {
      postUnCheckHabit(habit.id, token).then(() => {
        setReloadHabits(!reloadHabits);
      });
    }
  }

  return (
    <Sequence>
      <div>
        <h4>{habit.name}</h4>
        <p>
          Sequência atual:{' '}
          <Current $color={habit.done}>{habit.currentSequence} dias</Current>
        </p>
        <p>
          Seu recorde:{' '}
          <Highest $color={sameSequence}>{habit.highestSequence} dias</Highest>
        </p>
      </div>
      <Check onClick={habitDone} $color={habit.done}>
        <ion-icon name="checkbox"></ion-icon>
      </Check>
    </Sequence>
  );
}
