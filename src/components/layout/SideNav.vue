<template>
  <div>
    <div
      class="absolute z-10 w-screen h-screen pt-10 transition-all duration-300 ease-linear transform -translate-x-full bg-white border border-black md:pt-12 md:w-1/4"
      :class="[isMenuOpen ? 'translate-x-0' : '-translate-x-full']"
    >
      <div
        @click="isMenuOpen = false"
        class="flex items-center justify-between p-3 text-lg uppercase border-b border-black md:p-4 hover:bg-black hover:text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>

        <div>Go Back</div>
      </div>
      <div
        @click="isMenuOpen = true"
        class="flex items-center justify-between p-3 text-lg uppercase border-b border-black md:p-4 hover:bg-black hover:text-white"
      >
        <div>Spectacles</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
      <div
        @click="isMenuOpen = true"
        class="flex items-center justify-between p-3 text-lg uppercase border-b border-black md:p-4 hover:bg-black hover:text-white"
      >
        <div>Sunglasses</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
    </div>
    <div
      class="absolute z-0 flex flex-col justify-between w-screen h-screen pt-10 transition-all duration-300 ease-linear transform -translate-x-full bg-white border border-black md:pt-12 md:w-1/4"
      :class="[modal ? 'translate-x-0' : '-translate-x-full']"
    >
      <div>
        <div
          @click="isMenuOpen = true"
          class="flex items-center justify-between p-3 text-lg uppercase border-b border-black md:p-4 hover:bg-black hover:text-white"
        >
          <div>Women</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
        <div
          class="flex items-center justify-between p-3 text-lg uppercase border-b border-black md:p-4 hover:bg-black hover:text-white"
        >
          <div>Men</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
        <div
          class="p-3 text-lg uppercase border-b border-black md:p-4 hover:bg-black hover:text-white"
        >
          Home Try On
        </div>
        <div
          class="p-3 text-lg uppercase border-b border-black md:p-4 hover:bg-black hover:text-white"
        >
          Free eye test
        </div>
        <div class="p-3 md:p-4">
          <div class="font-light cursor-pointer hover:underline">About Us</div>
          <div class="mt-2 font-light cursor-pointer hover:underline">
            Pair for pair
          </div>
          <div class="mt-2 font-light cursor-pointer hover:underline">
            Open Book
          </div>
          <div class="mt-2 font-light cursor-pointer hover:underline">
            Journal
          </div>
        </div>
      </div>
      <div class="flex border-t border-b border-black">
        <div
          class="flex-1 p-3 text-lg text-center uppercase border-r border-black md:p-4 hover:bg-black hover:text-white"
        >
          Login
        </div>
        <div
          class="flex-1 p-3 text-lg text-center uppercase md:p-4 hover:bg-black hover:text-white"
        >
          Help
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, toRef, watch } from "vue";
const isMenuOpen = ref(false);

const modal = toRef(props, "openMenu");
const props = defineProps({
  openMenu: {
    type: Boolean,
    default: false,
  },
});
watch(
  () => props.openMenu,
  (value) => {
    if (!value) {
      isMenuOpen.value = false;
    }
  }
);
</script>
