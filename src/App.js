import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageLogin from './components/PageLogin';
import PageRegister from './components/PageRegister';
import PageToday from './components/PageToday';
import PageHabits from './components/PageHabits/PageHabits';
import PageHistory from './components/PageHistory';
import PrivatePage from './components/PrivatePage';
import './assets/css/reset.css';
import './assets/css/style.css';
import { useState } from 'react';
import UserContext from './context/UserContext';

export default function App() {
  const [userimg, setUserimg] = useState('');
  const [percentage] = useState(0);
  const [token, setToken] = useState('');
  const [loading, setLoading] = useState(true);

  return (
    <>
      <BrowserRouter>
        <UserContext.Provider
          value={{
            userimg,
            setUserimg,
            percentage,
            token,
            setToken,
            loading,
            setLoading,
          }}
        >
          <Routes>
            <Route path="/" element={<PageLogin />} />
            <Route path="/cadastro" element={<PageRegister />} />
            <Route
              path="/hoje"
              element={
                <PrivatePage>
                  <PageToday />
                </PrivatePage>
              }
            />
            <Route
              path="/habitos"
              element={
                <PrivatePage>
                  <PageHabits />
                </PrivatePage>
              }
            />
            <Route
              path="/historico"
              element={
                <PrivatePage>
                  <PageHistory />
                </PrivatePage>
              }
            />
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </>
  );
}
