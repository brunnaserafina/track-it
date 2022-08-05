import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageLogin from './components/PageLogin';
import PageRegister from './components/PageRegister';
import PageToday from './components/PageToday';
import PageHabits from './components/PageHabits';
import PageHistory from './components/PageHistory';
import './assets/css/reset.css';
import './assets/css/style.css';
import { useState } from 'react';
import UserContext from './context/UserContext';

export default function App() {
  const [userimg, setUserimg] = useState('');
  const [percentage] = useState(0);

  return (
    <>
      <BrowserRouter>
        <UserContext.Provider value={{ userimg, setUserimg, percentage }}>
          <Routes>
            <Route path="/" element={<PageLogin />} />
            <Route path="/cadastro" element={<PageRegister />} />
            <Route path="/hoje" element={<PageToday />} />
            <Route path="/habitos" element={<PageHabits />} />
            <Route path="/historico" element={<PageHistory />} />
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </>
  );
}
