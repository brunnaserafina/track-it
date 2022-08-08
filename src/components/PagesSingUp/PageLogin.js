import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import logotrackit from '../../assets/imgs/logotrackit.svg';
import HomeContainer from '../common/HomeContainer';
import Logo from '../common/Logo';
import Input from '../common/Input';
import Button from '../common/Button';
import { useContext } from 'react';
import UserContext from '../../context/UserContext';
import { postLogin } from '../../services/trackit';

export default function PageLogin() {
  const navigate = useNavigate('');
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUserimg } = useContext(UserContext);
  const { setToken } = useContext(UserContext);
  const body = {
    email: email,
    password: password,
  };


  function joinLogin(event) {
    event.preventDefault();

    setLoading(false);

    postLogin(body)
      .catch(() => {
        alert('E-mail ou senha incorreta!');
        setLoading(true);
        setEmail('');
        setPassword('');
      })
      .then((r) => {
        setToken(r.data.token);
        setUserimg(r.data.image);
        localStorage.setItem(
          'trackit',
          JSON.stringify({ token: r.data.token, timestamp: +new Date() })
        );
        localStorage.setItem(
          'user',
          JSON.stringify({ user: r.data })
        );
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
          pattern="[a-z0-9._%+-]+@[a-zLink, 0-9.-]+\.[a-z]{2,4}$"
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
          <Button
            type="submit"
            width={'80vw'}
            height={'45px'}
            fontSize={'21px'}
          >
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
