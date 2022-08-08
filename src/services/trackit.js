import axios from 'axios';

const BASE_URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit';

function createHeaders(token) {
  //const auth = localStorage.getItem('trackit');
  //console.log(auth);

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return config;
}

function postSingUp(body) {
  const promise = axios.post(`${BASE_URL}/auth/sign-up`, body);
  return promise;
}

function postLogin(body) {
  const promise = axios.post(`${BASE_URL}/auth/login`, body);
  return promise;
}

function getHabits(token) {
  const config = createHeaders(token);
  const promise = axios.get(`${BASE_URL}/habits`, config);
  return promise;
}

function postCreateHabits(body, token) {
  const config = createHeaders(token);
  const promise = axios.post(`${BASE_URL}/habits`, body, config);
  return promise;
}

function postDeleteHabit(id, token) {
  const config = createHeaders(token);
  const promise = axios.delete(`${BASE_URL}/habits/${id}`, config);
  return promise;
}

function getTodayHabits(token) {
  const config = createHeaders(token);
  const promise = axios.get(`${BASE_URL}/habits/today`, config);
  return promise;
}

function postCheckHabit(id, token) {
  const config = createHeaders(token);
  const promise = axios.post(`${BASE_URL}/habits/${id}/check`, {}, config);
  return promise;
}

function postUnCheckHabit(id, token) {
  const config = createHeaders(token);
  const promise = axios.post(`${BASE_URL}/habits/${id}/uncheck`, {}, config);
  return promise;
}

export {
  postSingUp,
  postLogin,
  getHabits,
  postCreateHabits,
  postDeleteHabit,
  getTodayHabits,
  postCheckHabit,
  postUnCheckHabit,
};
