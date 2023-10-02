<template>
  <div class="bg-gray-100 h-full">
    <the-navbar></the-navbar>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
import TheNavbar from "../components/TheNavbar.vue";
</script>
