import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';

export default function History() {
  return (
    <>
      <HistoryContainer>
        <Header />

        <Footer />
      </HistoryContainer>
    </>
  );
}

const HistoryContainer = styled.div`
  background-color: #e5e5e5;
  height: 100vh;
`;
