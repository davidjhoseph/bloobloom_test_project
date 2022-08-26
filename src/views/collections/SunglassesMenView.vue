<template>
  <div class="h-40">Hello Sunglasses Men ({{ glasses.length }} available)</div>
</template>
<script setup>
import { useMainStore } from "@/stores/main";
import { computed } from "vue";
const store = useMainStore();
const glasses = computed(() => store.getGlasses);
</script>
