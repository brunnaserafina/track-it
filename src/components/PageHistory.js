import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';

export default function History() {
  return (
    <>
      <Header />
      <HistoryContainer>
        <h1>Histórico</h1>
        <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
      </HistoryContainer>
      <Footer />
    </>
  );
}

const HistoryContainer = styled.div`
  background-color: #e5e5e5;
  height: 100vh;
  margin-top: 70px;
  padding: 30px 15px;

  h1 {
    font-size: 23px;
    color: #126BA5;
  }

  p {
    font-size: 18px;
    margin-top: 17px;
    color: #666666;
    line-height: 22.5px;
  }
`;
