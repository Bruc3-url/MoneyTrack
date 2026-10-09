<script setup lang="ts">
import AppSidebar from "../components/AppSidebar.vue";
</script>

<template>
  <div class="min-h-screen">
    <AppSidebar />
    <main class="p-6"><RouterView /></main>
  </div>
</template>
