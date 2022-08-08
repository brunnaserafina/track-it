import { useState, useContext } from 'react';
import UserContext from '../../context/UserContext';
import { postCreateHabits } from '../../services/trackit';
import { ThreeDots } from 'react-loader-spinner';
import Button from '../common/Button';
import Input from '../common/Input';
import { Dayy, Form, DaysWeek, Cancel } from './HabitsStyled';

export default function RegisterHabit({
  newhabit,
  setNewhabit,
  reloadHabits,
  setReloadHabits,
  habitname,
  setHabitname,
}) {
  const [loading, setLoading] = useState(true);
  const [save, setSave] = useState(false);
  const [dias, setDias] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const { week, setWeek } = useContext(UserContext);
  const { token } = useContext(UserContext);

  const daysWeek = [
    { num: 0, day: 'D', selected: false },
    { num: 1, day: 'S', selected: false },
    { num: 2, day: 'T', selected: false },
    { num: 3, day: 'Q', selected: false },
    { num: 4, day: 'Q', selected: false },
    { num: 5, day: 'S', selected: false },
    { num: 6, day: 'S', selected: false },
  ];

  const [reset, setReset] = useState(daysWeek);
  const body = {
    name: habitname,
    days: week.sort(),
  };

  function saveHabit(event) {
    event.preventDefault(event);
    setSave(true);
    setLoading(false);
    setDisabled(true);

    if (week.length === 0) {
      alert('Digite o nome do hábito e selecione no mínimo um dia da semana!');
      setSave(false);
      setLoading(true);
      setDisabled(false);
    } else if (habitname.length === 0) {
      alert('Digite o nome do hábito');
      setSave(false);
      setLoading(true);
      setDisabled(false);
    } else {
      postCreateHabits(body, token)
        .catch(() => {
          alert('Algo deu errado!');
          setDisabled(false);
          setSave(false);
          setLoading(true);
        })
        .then((response) => {
          setNewhabit(!newhabit);
          setReloadHabits(!reloadHabits);
          setSave(false);
          setHabitname('');
          setDisabled(false);
          setLoading(true);
          setWeek([]);
          setReset(daysWeek);
        });
    }
  }

  function cancelHabit() {
    setNewhabit(!newhabit);
  }

  return (
    <Form onSubmit={(event) => event.preventDefault()} $newhabit={newhabit}>
      <Input
        $loading={loading}
        type="text"
        placeholder="nome do hábito"
        required
        value={habitname}
        onChange={(e) => setHabitname(e.target.value)}
        disabled={disabled}
      />
      <DaysWeek>
        {reset.map((day, index) => (
          <Day
            key={index}
            day={day}
            dias={dias}
            setDias={setDias}
            disabled={disabled}
            reloadHabits={reloadHabits}
            setReloadHabits={setReloadHabits}
          />
        ))}
      </DaysWeek>
      <span>
        <Cancel disabled={disabled} onClick={cancelHabit}>
          Cancelar
        </Cancel>

        {save ? (
          <Button opacity={'0.7'} width={'84px'} height={'35px'}>
            <ThreeDots color="#FFFFFF" height={15} />
          </Button>
        ) : (
          <Button
            width={'84px'}
            height={'35px'}
            fontSize={'16px'}
            onClick={saveHabit}
            type="submit"
          >
            Salvar
          </Button>
        )}
      </span>
    </Form>
  );
}

function Day({ day, disabled, reloadHabits, setReloadHabits }) {
  const { week } = useContext(UserContext);
  const colorir = day.selected;

  function choose() {
    if (day.selected === true) {
      day.selected = false;
      week.splice(week.indexOf(day.num), 1);
    } else {
      day.selected = true;
      week.push(day.num);
    }
    setReloadHabits(!reloadHabits);
  }

  return (
    <>
      <Dayy onClick={choose} disabled={disabled} state={colorir}>
        {day.day}
      </Dayy>
    </>
  );
}
