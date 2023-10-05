<template>
  <div class="w-[100%] md:w-[80%] lg:w-[50%] mx-auto p-8 sm:p-2 text-clip">
    <h1 class="text-5xl font-bold my-5 ml-5 inline-block">
      {{ meal.strMeal }}
    </h1>

    <img
      :src="meal.strMealThumb"
      :alt="meal.strMeal"
      class="mx-auto mb-4 shadow-xl"
    />

    <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
      <div><strong>Category:</strong> {{ meal.strCategory }}</div>
      <div><strong>Area:</strong> {{ meal.strArea }}</div>
      <div><strong>Tags:</strong> {{ meal.strTags }}</div>
    </div>
    <div class="my-3 max-w-screen-md overflow-x-auto">
      <p class="w-full whitespace-normal">{{ meal.strInstructions }}</p>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2">
      <div>
        <h2 class="text-2xl font-semibold mb-3">Ingredients</h2>
        <ul>
          <template v-for="(i, ind) of new Array(20)">
            <li v-if="meal[`strIngredient${ind + 1}`]">
              <div v-if="meal[`strIngredient${ind + 1}`].trim()">
                {{ ind + 1 }}. {{ meal[`strIngredient${ind + 1}`] }}
              </div>
            </li>
          </template>
        </ul>
      </div>
      <div>
        <h2 class="text-2xl font-semibold mb-2">Measures</h2>
        <ul>
          <template v-for="(i, ind) of new Array(20)">
            <li v-if="meal[`strMeasure${ind + 1}`]">
              <div v-if="meal[`strMeasure${ind + 1}`].trim()">
                {{ ind + 1 }}. {{ meal[`strMeasure${ind + 1}`] }}
              </div>
            </li>
          </template>
        </ul>
      </div>
      <div class="mt-5 mb-10">
        <YoutubeButton :href="meal.strYoutube">Visit Youtube</YoutubeButton>
        <a
          :href="meal.strSource"
          target="_blank"
          class="px-3 py-2 rounded border-2 border-transparent font-semibold border-indigo-600 text-indigo-600 ml-3 hover:text-indigo-100 hover:bg-indigo-600 transition-colors"
        >
          View Original Source</a
        >
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import axiosClient from "../axiosClient";
import YoutubeButton from "../components/YoutubeButton.vue";
const route = useRoute();
const meal = ref({});
function isExists(value) {
  console.log(typeof value);
}
onMounted(() => {
  axiosClient.get(`lookup.php?i=${route.params.id}`).then(({ data }) => {
    meal.value = data.meals[0] || {};
  });
});
</script>
