<template>
  <div class="flex flex-col">
    <div class="fixed w-full">
      <NavBar />
    </div>
    <div class="pt-16 flex-1 overflow-y-auto">
      <slot />
    </div>
  </div>
</template>

<script setup>
import NavBar from "@/components/layout/NavBar.vue";
</script>
