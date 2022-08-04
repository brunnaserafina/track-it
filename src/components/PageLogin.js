import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import axios from 'axios';
import logotrackit from '../assets/imgs/logotrackit.svg';
import HomeContainer from './common/HomeContainer';
import Logo from './common/Logo';
import Input from './common/Input';
import Button from './common/Button';

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
      alert('E-mail ou senha incorreta!');
      setLoading(true);
      setPassword('');
    });

    promise.then((r) => {
      console.log(r);
      navigate(`/hoje`);
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
