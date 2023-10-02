import axiosClient from "../axiosClient";

export default {
  searchMeals: function ({ commit }, keyword) {
    axiosClient.get(`search.php?s=${keyword}`).then(({ data }) => {
      commit("setSearchedMeals", data);
    });
  },
};
