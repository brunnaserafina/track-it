import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SEC = 1000;
const MIN_5 = SEC * 60 * 5;
const MIN_1 = SEC * 60 * 1;

function renderError() {
  localStorage.clear('trackit');
  return (
    <ErrorContainer>
      <h4>VOCÊ NÃO É AUTORIZADO!</h4>
      <Link to={`/`}>
        <p>Faça login para continuar acessando</p>
      </Link>
    </ErrorContainer>
  );
}

export default function PrivatePage({ children }) {
  const navigate = useNavigate();
  const auth = JSON.parse(localStorage.getItem('trackit'));

  if (!auth) {
    return renderError();
    navigate('/');
  }

  const now = +new Date();
  const timeLogged = auth.timestamp;

  if (now - timeLogged <= MIN_1) {
    return <>{children}</>;
  } else {
    renderError();
    navigate('/');
  }
}

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #E5E5E5;

  h4 {
    color: #E75766;
  }
  a {
    text-decoration: underline #52b6ff;
    color: #52b6ff;
    font-size: 14px;
    font-weight: 400;
    margin-top: 10px;
  }
`;
