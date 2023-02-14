import axios from 'axios';
import type { LocationQueryValue } from 'vue-router';

const config = {
  baseUrl: 'https://api.hnpwa.com/v0',
};

const fetchNewsList = () => {
  return axios.get(`${config.baseUrl}/news/1.json`);
};

const fetchAskList = () => {
  return axios.get(`${config.baseUrl}/ask/1.json`);
};

const fetchJobsList = () => {
  return axios.get(`${config.baseUrl}/jobs/1.json`);
};

const fetchUserInfo = (user: string | string[]) => {
  return axios.get(`${config.baseUrl}/user/${user}.json`);
};

const fetchAskItem = (id: LocationQueryValue | LocationQueryValue[]) => {
  return axios.get(`${config.baseUrl}/item/${id}.json`);
};

export {
  fetchNewsList,
  fetchAskList,
  fetchJobsList,
  fetchUserInfo,
  fetchAskItem,
};
