export default {
  setSearchedMeals: function (state, meals) {
    state.searchedMeals = meals;
  },
  setMealsByLetter: function (state, meals) {
    state.mealsByLetter = meals;
  },
  setMealsByIngredients: function (state, meals) {
    state.mealsByIngredients = meals;
  },
};
