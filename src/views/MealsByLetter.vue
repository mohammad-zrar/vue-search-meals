<template>
  <div class="flex flex-col p-2 items-center justify-center">
    <div class="flex flex-wrap gap-2 justify-center mt-2">
      <router-link
        v-for="letter in letters"
        :to="{ name: 'byLetter', params: { letter } }"
        :key="letter"
      >
        {{ letter }}
      </router-link>
    </div>
  </div>
  <div
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8 px-2 md:px-8 lg:px-16"
  >
    <MealItem v-for="meal in meals" :key="meal.idMeal" :meal="meal" />
  </div>
</template>

<script setup>
import { onMounted, computed, watch } from "vue";
import store from "../store";
import { useRoute } from "vue-router";
import MealItem from "../components/MealItem.vue";

const route = useRoute();
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const meals = computed(() => {
  return store.state.mealsByLetter;
});

watch(route, () => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});
onMounted(() => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});
</script>
