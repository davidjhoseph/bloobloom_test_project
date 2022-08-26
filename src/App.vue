<script setup>
import { RouterView } from "vue-router";
import { onMounted } from "vue";
import { useMainStore } from "./stores/main";

const mainStore = useMainStore();
onMounted(() => {
  mainStore.fetchGlasses();
});
</script>

<template>
  <RouterView />
</template>
