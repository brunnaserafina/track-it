import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import logotrackit from '../assets/imgs/logotrackit.svg';
import styled from 'styled-components';
import axios from 'axios';

export default function PageLogin() {
  const navigate = useNavigate('');
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function joinLogin() {
    setLoading(false);

    const promise = axios.post(
      'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login',
      {
        email: { email },
        password: { password },
      }
    );

    promise.catch(() => {
      alert('Usuário ou senha incorretos!');
      setLoading(true);
      setEmail('');
      setPassword('');
    });

    promise.then((response) => {
      navigate(`/hoje`);
      console.log(response);
    });
  }

  return (
    <HomeContainer>
      <Logo src={logotrackit} />

      <form>
        <Input
          $loading={loading}
          type="email"
          placeholder="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          required
          title="Insira um e-mail válido"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          $loading={loading}
          type="password"
          placeholder="senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {loading ? (
          <Button type="submit" onClick={joinLogin}>
            Entrar
          </Button>
        ) : (
          <Button opacity={'0.7'}>
            <ThreeDots color="#FFFFFF" height={15} />
          </Button>
        )}
      </form>

      <Link to={`/cadastro`}>
        <p>Não tem uma conta? Cadastre-se</p>
      </Link>
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    text-decoration: underline;
    color: #52b6ff;
    font-size: 14px;
    font-weight: 400;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const Logo = styled.img`
  width: 180px;
  height: 178px;
  margin-bottom: 25px;
`;

const Input = styled.input`
  width: 80vw;
  height: 45px;
  border: solid 1px #d4d4d4;
  border-radius: 5px;
  box-sizing: border-box;
  margin-bottom: 6px;
  padding: 10px;
  box-sizing: border-box;
  font-size: 20px;
  background-color: ${(props) => (props.$loading ? '#ffffff' : '#F2F2F2')};
  color: ${(props) => (props.$loading ? '#666666' : '#AFAFAF')};

  &::placeholder {
    color: #d4d4d4;
  }

  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  background-color: #52b6ff;
  width: 80vw;
  height: 45px;
  border: none;
  border-radius: 4.6px;
  color: #ffffff;
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${(props) => props.opacity};
`;
