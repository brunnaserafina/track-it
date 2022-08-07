import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import axios from 'axios';
import logotrackit from '../assets/imgs/logotrackit.svg';
import HomeContainer from './common/HomeContainer';
import Logo from './common/Logo';
import Input from './common/Input';
import Button from './common/Button';


export default function PageRegister() {
  const navigate = useNavigate('');
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [picture, setPicture]  = useState('');

  function joinRegister() {
    setLoading(false);

    const promise = axios.post(
      'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up',
      {
        email: email,
        name: name,
        image: picture,
        password: password,
      }
    );

    promise.catch(() => {
      alert('Confira seus dados!');
      setLoading(true);
      setEmail("");
      setPassword("");
      setName("");
      setPicture("");
    });

    promise.then((response) => {
      console.log(response);
      navigate(`/`);
    });
  }

  return (
    <HomeContainer>
      <Logo src={logotrackit} />

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
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Input
        $loading={loading}
        type="text"
        placeholder="nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <Input
        $loading={loading}
        placeholder="foto"
        type="url"
        value={picture}
        onChange={(e) => setPicture(e.target.value)}
      />

      {loading ? (
        <Button onClick={joinRegister} width={'80vw'} height={'45px'} fontSize={'21px'}>Cadastrar</Button>
      ) : (
        <Button opacity={'0.7'} width={'80vw'} height={'45px'}>
          <ThreeDots color="#FFFFFF" height={15} />
        </Button>
      )}

      <Link to={`/`}>
        <p>Já tem uma conta? Faça login!</p>
      </Link>
    </HomeContainer>
  );
}
