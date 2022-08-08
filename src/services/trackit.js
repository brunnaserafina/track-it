import axios from 'axios';

const BASE_URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit';

function createHeaders() {
  const auth = localStorage.getItem('trackit');
  const config = {
    headers: {
      Authorization: `Bearer ${auth.token}`,
    },
  };
  
  return config;
}

function postSingUp(body) {
  const promise = axios.post(`${BASE_URL}/auth/sign-up`, body);

  return promise;
}

function postLogin(body) {
  const config = createHeaders();
  const promise = axios.post(`${BASE_URL}/auth/login`, body, config);

  return promise;
}

function getHabits() {
  const config = createHeaders();
  const promise = axios.get(`${BASE_URL}/habits`, config);

  return promise;
}

function postDeleteHabit(ID_DO_HABITO) {
  const config = createHeaders();
  const promise = axios.get(`${BASE_URL}/habits/${ID_DO_HABITO}`, config);

  return promise;
}

function getTodayHabits(id) {
  const config = createHeaders();
  const promise = axios.get(`${BASE_URL}/habits/today`, config);

  return promise;
}

function postCheckHabit(ID_DO_HABITO) {
  const config = createHeaders();
  const promise = axios.get(`${BASE_URL}/habits/${ID_DO_HABITO}/check`, config);

  return promise;
}

function postUnCheckHabit(ID_DO_HABITO) {
  const config = createHeaders();
  const promise = axios.get(
    `${BASE_URL}/habits/${ID_DO_HABITO}/uncheck`,
    config
  );

  return promise;
}

export {
  postSingUp,
  postLogin,
  getHabits,
  postDeleteHabit,
  getTodayHabits,
  postCheckHabit,
  postUnCheckHabit,
};
