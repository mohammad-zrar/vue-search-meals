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
</template>
<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
import axiosClient from "../axiosClient.js";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const ingredients = ref([]);

onMounted(async () => {
  const response = await axiosClient.get("list.php?i=list");
  ingredients.value = response.data;
});
</script>
