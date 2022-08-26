<template>
  <div>
    <div
      class="absolute z-20 w-screen h-screen pt-10 transition-all duration-300 ease-linear transform -translate-x-full bg-white border border-black md:pt-12 md:w-1/4"
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
        @click="goToLink('spectacles')"
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
        @click="goToLink('sunglasses')"
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
      class="absolute z-10 flex flex-col justify-between w-screen h-screen pt-10 transition-all duration-300 ease-linear transform -translate-x-full bg-white border border-black md:pt-12 md:w-1/4"
      @mouseenter="modal = true"
      :class="[modal ? 'translate-x-0' : '-translate-x-full']"
    >
      <div>
        <div
          @click="openMenu('women')"
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
          @click="openMenu('men')"
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
          <div class="flex">
            <div class="font-light cursor-pointer hover:underline">
              About Us
            </div>
          </div>
          <div class="flex">
            <div class="mt-2 font-light cursor-pointer hover:underline">
              Pair for pair
            </div>
          </div>
          <div class="flex">
            <div class="mt-2 font-light cursor-pointer hover:underline">
              Open Book
            </div>
          </div>
          <div class="flex">
            <div class="mt-2 font-light cursor-pointer hover:underline">
              Journal
            </div>
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
import { useRouter } from "vue-router";
const isMenuOpen = ref(false);
const router = useRouter();
const modal = toRef(props, "openMenu");
const selectedGender = ref("women");
const props = defineProps({
  openMenu: {
    type: Boolean,
    default: false,
  },
});
const goToLink = (route) => {
  let routeName = "";
  if (selectedGender.value === "women" && route === "spectacles") {
    routeName = "Spectacles Women";
  }
  if (selectedGender.value === "women" && route === "sunglasses") {
    routeName = "Sunglasses Women";
  }
  if (selectedGender.value === "men" && route === "spectacles") {
    routeName = "Spectacles Men";
  }
  if (selectedGender.value === "men" && route === "sunglasses") {
    routeName = "Sunglasses Men";
  }
  router.push({ name: routeName });
};
const openMenu = (gender) => {
  selectedGender.value = gender;
  isMenuOpen.value = true;
};
watch(
  () => props.openMenu,
  (value) => {
    if (!value) {
      isMenuOpen.value = false;
    }
  }
);
</script>
