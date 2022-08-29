<template>
  <div class="pb-10">
    <div class="flex flex-wrap">
      <!-- Had to do it like this for now -->
      <div
        class="flex-shrink-0 w-full border md:w-1/2 lg:w-1/3 h-96"
        v-for="glass in glasses"
        :key="glass.id"
      >
        <img :src="glass.media[0].url" class="object-cover w-full h-full" />
      </div>
    </div>
  </div>
  <!-- <div>Hello Spectacles Women ({{ glasses.length }} available)</div> -->
</template>
<script setup>
import { useMainStore } from "@/stores/main";
import { computed } from "vue";
const store = useMainStore();
const glasses = computed(() => store.getGlasses);
</script>
