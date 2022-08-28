<template>
  <div class="fixed z-50 w-full">
    <nav class="flex items-center justify-between h-10 bg-white md:h-12">
      <div class="flex items-center w-1/4 h-full font-light">
        <div
          class="items-center justify-center flex-1 hidden h-full text-center border-t border-b border-r border-black cursor-pointer group md:flex"
          @mouseenter="updateSideMenu(true)"
          @mouseleave="updateSideMenu(false)"
        >
          <div class="border-b border-transparent group-hover:border-black">
            Menu
          </div>
        </div>
        <div
          class="flex items-center justify-center flex-1 h-full text-sm text-center border-t border-b border-r border-black cursor-pointer md:hidden"
          @click="updateSideMenu(true)"
          v-if="!openMenu"
        >
          <div class="border-b border-transparent hover:border-black">Menu</div>
        </div>
        <div
          class="flex items-center justify-center flex-1 h-full text-center border-t border-b border-r border-black cursor-pointer md:hidden"
          @click="updateSideMenu(false)"
          v-else
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.5 19.5l15-15m-15 0l15 15"
            />
          </svg>
        </div>
        <!-- <div class="md:hidden">
            <div
              class="flex items-center justify-center flex-1 h-full text-center border-t border-b border-r border-black cursor-pointer"
              v-if="!isSideMenuOpen"
            >
              <div
                class="border-b border-transparent group-hover:border-black"
                @click="isSideMenuOpen = true"
              >
                Menu
              </div>
            </div>
            <div
              class="flex items-center justify-center flex-1 h-full text-center border-t border-b border-r border-black cursor-pointer"
              v-else
            >
              <svg
                @click="isSideMenuOpen = false"
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
                  d="M4.5 19.5l15-15m-15 0l15 15"
                />
              </svg>
            </div>
          </div> -->
        <div
          class="items-center justify-center flex-1 hidden h-full text-center border-t border-b border-r border-black cursor-pointer group md:flex"
        >
          <div class="border-b border-transparent group-hover:border-black">
            Free Eye Test
          </div>
        </div>
        <div
          class="items-center justify-center flex-1 hidden h-full text-center border-t border-b border-r border-black cursor-pointer group md:flex"
        >
          <div class="border-b border-transparent group-hover:border-black">
            About Us
          </div>
        </div>
      </div>
      <div
        class="flex items-center self-stretch justify-center w-2/4 text-2xl font-bold tracking-wider text-center border-t border-b border-black"
      >
        bloobloom
      </div>
      <div class="flex items-center w-1/4 h-full font-light">
        <div
          class="items-center justify-center flex-1 hidden h-full text-center border-t border-b border-l border-black cursor-pointer group md:flex"
        >
          <div class="border-b border-transparent group-hover:border-black">
            Help
          </div>
        </div>
        <div
          class="items-center justify-center flex-1 hidden h-full text-center border-t border-b border-l border-black cursor-pointer group md:flex"
        >
          <div class="border-b border-transparent group-hover:border-black">
            Login
          </div>
        </div>
        <div
          class="flex items-center justify-center flex-1 h-full text-sm text-center border-t border-b border-l border-black cursor-pointer group md:text-normal"
        >
          <div class="border-b border-transparent group-hover:border-black">
            Bag(0)
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
defineProps({
  openMenu: {
    type: Boolean,
    default: false,
  },
});
const emits = defineEmits(["updateSideMenu"]);
const updateSideMenu = (menu) => {
  emits("updateSideMenu", menu);
};
</script>
