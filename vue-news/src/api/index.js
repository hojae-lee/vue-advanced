import axios from 'axios';

// Http Request & Response 와 관련된 기본 설정
const config = {
  baseUrl: 'https://api.hnpwa.com/v0/'
};

// API 함수들을 정리
async function fetchList(pageName) {
  try {
    const res = await axios.get(`${config.baseUrl}${pageName}/1.json`);
    return res;
  } catch (error) {
    console.log(error);
  }
}

async function fetchUserInfo(username) {
  try {
    const res = await axios.get(`${config.baseUrl}user/${username}.json`);
    return res;
  } catch (error) {
    console.log(error);
  }
}

async function fetchItemInfo(id) {
  try {
    const res = await axios.get(`${config.baseUrl}item/${id}.json`);
    return res;
  } catch (error) {
    console.log(error);
  }
}

export {
  fetchList,
  fetchUserInfo,
  fetchItemInfo
}