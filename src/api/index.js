import axios from "axios";

const config = {
	baseUrl: "https://api.hnpwa.com/v0/",
};

function fetchNewsList() {
	return axios.get(`${config.baseUrl}news/1.json`);
}

function fetchJobsList() {
	return axios.get(`${config.baseUrl}jobs/1.json`);
}

async function fetchAskList() {
  return axios.get(`${config.baseUrl}ask/1.json`);
}

function fetchList(pageName) {
  try {
    const response = axios.get(`${config.baseUrl}${pageName}/1.json`);
    return response;
  } catch(error) {
    console.log(error);
  }
}

function fetchUserInfo(name) {
  try {
    const response = axios.get(`${config.baseUrl}user/` + name + `.json`);
    return response;
  } catch(error) {
    console.log(error);
  }
}

function fetchCommentInfo(id) {
  try {
    const response = axios.get(`${config.baseUrl}item/` + id + `.json`);
    return response;
  } catch(error) {
    console.log(error);
  }
}

export {
  fetchNewsList,
  fetchJobsList,
  fetchAskList,
  fetchList,
  fetchUserInfo,
  fetchCommentInfo,
};
