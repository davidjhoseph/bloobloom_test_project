<template>
  <div class="relative flex flex-col max-h-screen">
    <div class="">
      <SideNav :openMenu="isSideMenuOpen" @updateSideMenu="updateSideMenu" />
      <NavBar :openMenu="isSideMenuOpen" @updateSideMenu="updateSideMenu" />
    </div>
    <div class="flex-1 pt-10 overflow-hidden overflow-y-auto md:pt-12">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
import NavBar from "@/components/layout/NavBar.vue";
import SideNav from "@/components/layout/SideNav.vue";
const isSideMenuOpen = ref(false);
const updateSideMenu = (menuOption) => {
  isSideMenuOpen.value = menuOption;
};
watch(
  () => route.path,
  (value) => {
    isSideMenuOpen.value = false;
  }
);
</script>
