import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';

export default function PageHabits() {
  return (
    <>
      <HabitsContainer>
        <Header />

        <Footer />
      </HabitsContainer>
    </>
  );
}

const HabitsContainer = styled.div`
  background-color: #e5e5e5;
  height: 100vh;
`;
