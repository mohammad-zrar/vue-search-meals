<template>
  <div class="bg-white shadow rounded-xl">
    <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <img
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
        class="rounded-t-xl w-full h-48 object-cover"
      />
    </router-link>

    <div class="p-3">
      <h3 class="font-bold">{{ meal.strMeal }}</h3>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quaerat ea
      explicabo ad recusandae pariatur et quasi, odio sint magnam?
    </div>

    <div class="p-3 flex items-center justify-between">
      <YoutubeButton :href="meal.strYoutube" />
    </div>
  </div>
</template>

<script setup>
import YoutubeButton from "../components/YoutubeButton.vue";

const { meal } = defineProps({
  meal: Object,
});
</script>
