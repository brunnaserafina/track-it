import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';
import Button from './common/Button';

export default function PageHabits() {
  return (
    <>
      <Header />
      <HabitsContainer>
        <div>
          <h4>Meus hábitos</h4>
          <Button width={'40px'} height={'35px'}>+</Button>
        </div>

        <p>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </p>
      </HabitsContainer>
      <Footer />
    </>
  );
}

const HabitsContainer = styled.div`
  background-color: #e5e5e5;
  height: 100vh;
  margin-top: 70px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
    margin-top: 30px;
  }

  div h4 {
    font-size: 23px;
    color: #126BA5;
  }

  p {
    padding: 20px;
    font-size: 18px;
    color: #666666;
    line-height: 22.5px;
  }

`;
