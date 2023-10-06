import axiosClient from "../axiosClient";

export default {
  searchMeals: function ({ commit }, keyword) {
    axiosClient.get(`search.php?s=${keyword}`).then(({ data }) => {
      commit("setSearchedMeals", data);
    });
  },
  searchMealsByLetter: function ({ commit }, letter) {
    axiosClient.get(`search.php?f=${letter}`).then(({ data }) => {
      commit("setMealsByLetter", data.meals);
    });
  },
  searchMealsByIngredients: function ({ commit }, ing) {
    axiosClient.get(`filter.php?i=${ing}`).then(({ data }) => {
      commit("setMealsByIngredients", data.meals);
    });
  },
};
