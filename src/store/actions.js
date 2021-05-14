import {
	fetchAskList,
	fetchJobsList,
	fetchNewsList,
  fetchList,
	fetchUserInfo,
	fetchCommentInfo,
} from "../api/index";

export default {
	FETCH_NEWS(context) {
		fetchNewsList()
			.then((response) => {
				console.log(response.data);
				context.commit("SET_NEWS", response.data);
        return response;
			})
			.catch((error) => console.log(error));
	},
	FETCH_JOBS({ commit }) {
		fetchJobsList()
			.then(({ data }) => commit("SET_JOBS", data))
			.catch((error) => console.log(error));
	},
	FETCH_ASK({ commit }) {
		fetchAskList()
			.then(({ data }) => commit("SET_ASK", data))
			.catch((error) => console.log(error));
	},
  FETCH_LIST({ commit }, pageName) {
    fetchList(pageName)
      .then(({ data }) => commit("SET_LIST", data))
			.catch((error) => console.log(error));
  },
	FETCH_USER({ commit }, name) {
		fetchUserInfo(name)
			.then(({ data }) => commit("SET_USER", data))
			.catch((error) => console.log(error));
	},
	FETCH_ITEM({ commit }, id) {
		fetchCommentInfo(id)
			.then(({ data }) => commit("SET_ITEM", data))
			.catch((error) => console.log(error));
	},
};
