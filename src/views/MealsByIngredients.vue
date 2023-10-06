<template>
  <div
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8 px-2 md:px-8 lg:px-16"
  >
    <MealItem v-for="meal in meals" :key="meal.idMeal" :meal="meal" />
  </div>
  <div v-if="!meals.length" class="flex justify-center text-gray-600">
    <p>There no meals</p>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import MealItem from "../components/MealItem.vue";
import store from "../store";
import { useRoute } from "vue-router";

const route = useRoute();
const meals = computed(() => store.state.mealsByIngredients);

onMounted(() => {
  store.dispatch("searchMealsByIngredients", route.params.ingredient);
});
</script>
