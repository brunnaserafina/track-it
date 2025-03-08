import { useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import RenderHabits from './RenderHabits';
import RegisterHabit from './HabitForm';
import styled from 'styled-components';
import Button from '../common/Button';

export default function PageHabits() {
  const [newhabit, setNewhabit] = useState(false);
  const [reloadHabits, setReloadHabits] = useState(false);
  const [habitname, setHabitname] = useState('');

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

        <RegisterHabit
          newhabit={newhabit}
          setNewhabit={setNewhabit}
          reloadHabits={reloadHabits}
          setReloadHabits={setReloadHabits}
          habitname={habitname}
          setHabitname={setHabitname}
        />

        <RenderHabits
          reloadHabits={reloadHabits}
          setReloadHabits={setReloadHabits}
        />
      </HabitsContainer>
      <Footer />
    </>
  );
}

const HabitsContainer = styled.div`
  background-color: #e5e5e5;
  margin-top: 70px;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: hidden;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 0;
    box-sizing: border-box;
    width: 90vw;
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
