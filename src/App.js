import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageLogin from './components/PageLogin';
import PageRegister from './components/PageRegister';
import PageToday from './components/PageToday';
import './assets/css/reset.css';
import './assets/css/style.css';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageLogin />} />
          <Route path="/cadastro" element={<PageRegister />} />
          <Route path="/hoje" element={<PageToday />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
