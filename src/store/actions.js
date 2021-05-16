import {
	fetchAskList,
	fetchJobsList,
	fetchNewsList,
  fetchList,
	fetchUserInfo,
	fetchCommentInfo,
} from "../api/index";

export default {
	async FETCH_NEWS({ commit }) {
		try {
      const response = await fetchNewsList();
      commit("SET_NEWS", response.data);
      return response;
    } catch(error) {
      console.log(error);
    }
	},
	async FETCH_JOBS({ commit }) {
		try {
      const response = await fetchJobsList();
      commit("SET_JOBS", response.data);
      return response;
    } catch(error) {
      console.log(error);
    }
	},
	async FETCH_ASK({ commit }) {
		try {
      const response = await fetchAskList();
      commit("SET_ASK", response.data);
      return response;
    } catch(error) {
      console.log(error);
    }
	},
  async FETCH_LIST({ commit }, pageName) {
    const response = await fetchList(pageName);
    commit("SET_LIST", response.data);
    return response;
  },
	async FETCH_USER({ commit }, name) {
    const response = fetchUserInfo(name);
    commit("SET_USER", response.data);
    return response;
	},
	async FETCH_ITEM({ commit }, id) {
    const response = fetchCommentInfo(id);
    commit("SET_ITEM", response.data);
    return response;
	},
};
