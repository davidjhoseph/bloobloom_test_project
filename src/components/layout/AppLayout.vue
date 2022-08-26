<template>
  <div class="relative flex flex-col min-h-screen">
    <div class="">
      <NavBar />
    </div>
    <div class="flex-1 pt-10 overflow-hidden overflow-y-auto md:pt-12">
      <slot />
    </div>
  </div>
</template>

<script setup>
import NavBar from "@/components/layout/NavBar.vue";
</script>
