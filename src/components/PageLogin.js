import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import axios from 'axios';
import logotrackit from '../assets/imgs/logotrackit.svg';
import HomeContainer from './common/HomeContainer';
import Logo from './common/Logo';
import Input from './common/Input';
import Button from './common/Button';
import { useContext } from 'react';
import UserContext from '../context/UserContext';

export default function PageLogin() {
  const navigate = useNavigate('');
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUserimg } = useContext(UserContext);
  const { setToken } = useContext(UserContext);

  function joinLogin(event) {
    event.preventDefault();
    console.log('alo');
    setLoading(false);

    const promise = axios.post(
      'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login',
      {
        email: email,
        password: password,
      }
    );

    promise.catch(() => {
      alert('E-mail ou senha incorreta!');
      setLoading(true);
      setEmail('');
      setPassword('');
    });

    promise.then((r) => {
      console.log(r);
      setToken(r.data.token);
      setUserimg(r.data.image);
      navigate(`/hoje`);
    });
  }

  return (
    <HomeContainer>
      <Logo src={logotrackit} />

      <form onSubmit={joinLogin}>
        <Input
          $loading={loading}
          type="email"
          placeholder="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          $loading={loading}
          type="password"
          placeholder="senha"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {loading ? (
          <Button type="submit" width={'80vw'} height={'45px'}>
            Entrar
          </Button>
        ) : (
          <Button opacity={'0.7'} width={'80vw'} height={'45px'}>
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
