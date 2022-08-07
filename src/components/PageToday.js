import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';

export default function PageToday() {

  return (
    <>
      <TodayContainer>
        <Header />

        <Footer />
      </TodayContainer>
    </>
  );
}

const TodayContainer = styled.div`
  background-color: #e5e5e5;
  height: 100vh;
`;
