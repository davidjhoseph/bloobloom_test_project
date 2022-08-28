<template>
  <AppLayout>
    <div>
      <div class="flex">
        <div class="border-r border-black md:w-1/2">
          <img :src="bannerImagesToShow[0]" class="w-full" />
        </div>
        <div class="hidden w-1/2 md:block">
          <img :src="bannerImagesToShow[1]" class="w-full" />
        </div>
      </div>
      <div class="transition-all duration-300 ease-in transform">
        <div
          class="flex flex-col items-center justify-between font-bold border border-black md:px-6 md:py-1 md:flex-row"
        >
          <div
            class="flex items-center order-last py-4 space-x-4 md:order-first md:py-0"
          >
            <div>TRIAL AVAILABLE</div>
            <div
              class="w-12 h-4 border border-black p-0.5 flex"
              :class="isTrialAvailable ? 'justify-end' : 'justify-start'"
            >
              <div
                @click="isTrialAvailable = !isTrialAvailable"
                class="transition-all duration-200 ease-in transform cursor-pointer"
                :class="isTrialAvailable ? 'flex-1' : 'w-0'"
              ></div>
              <div
                @click="isTrialAvailable = !isTrialAvailable"
                class="w-5 h-full border border-black cursor-pointer"
                :class="isTrialAvailable ? 'bg-black' : ''"
              ></div>
              <div
                @click="isTrialAvailable = !isTrialAvailable"
                class="transition-all duration-200 ease-in transform cursor-pointer"
                :class="isTrialAvailable ? 'w-0' : 'flex-1'"
              ></div>
            </div>
          </div>
          <div
            class="w-full py-4 text-xl text-center uppercase border-b border-black md:text-2xl md:w-auto md:py-0 md:border-none"
          >
            {{ routeName }}
          </div>
          <div
            class="flex items-center w-full border-b border-black md:space-x-6 md:w-auto md:py-0 md:border-none"
          >
            <div
              class="flex items-center justify-center w-1/2 space-x-2 border-r border-black cursor-pointer md:w-auto md:border-none md:justify-left"
              @click="isFilter = !isFilter"
            >
              <div class="py-4">FILTERS</div>
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
                  d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5"
                />
              </svg>
            </div>
            <div
              class="flex items-center justify-center w-1/2 space-x-2 cursor-pointer md:w-auto md:justify-left"
            >
              <div>SEARCH</div>
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
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div
          :class="!isFilter ? 'h-0 opacity-0' : 'h-full'"
          class="transition-all duration-300 ease-in transform"
        >
          <div class="flex">
            <div
              class="w-1/4 p-5 font-semibold text-center border-r border-black"
            >
              COLOUR
            </div>
            <div
              class="w-1/4 p-5 font-semibold text-center border-r border-black"
            >
              FIT
            </div>
            <div
              class="w-1/4 p-5 font-semibold text-center border-r border-black"
            >
              SHAPE
            </div>
            <div
              class="w-1/4 p-5 font-semibold text-center border-r border-black"
            >
              MATERIAL
            </div>
          </div>
          <div class="flex border border-black">
            <div class="w-1/4 text-sm border-r border-black">
              <div class="px-6 py-4">
                <div class="flex items-center justify-between w-full">
                  <div
                    class="flex items-center w-1/3 space-x-2 cursor-pointer group"
                  >
                    <div
                      class="w-4 h-4 rounded-full group-hover:ring-1 group-hover:ring-green-900 group-hover:ring-offset-1"
                      style="
                        background-image: url('https://d32y5z2afvomc1.cloudfront.net/assets/filters_black_01.png');
                      "
                    ></div>
                    <div>Black</div>
                  </div>
                  <div
                    class="flex items-center w-1/3 space-x-2 cursor-pointer group"
                  >
                    <div
                      class="w-4 h-4 rounded-full group-hover:ring-1 group-hover:ring-green-900 group-hover:ring-offset-1"
                      style="
                        background-image: url('https://d32y5z2afvomc1.cloudfront.net/assets/filters_tortoise_02.png');
                      "
                    ></div>
                    <div>Tortoise</div>
                  </div>
                  <div
                    class="flex items-center w-1/3 space-x-2 cursor-pointer group"
                  >
                    <div
                      class="w-4 h-4 rounded-full group-hover:ring-1 group-hover:ring-green-900 group-hover:ring-offset-1"
                      style="
                        background-image: url('https://d32y5z2afvomc1.cloudfront.net/assets/filters_coloured_03.png');
                      "
                    ></div>
                    <div>Coloured</div>
                  </div>
                </div>
                <div class="flex items-center justify-between mt-6">
                  <div
                    class="flex items-center w-1/3 space-x-2 cursor-pointer group"
                  >
                    <div
                      class="w-4 h-4 rounded-full group-hover:ring-1 group-hover:ring-green-900 group-hover:ring-offset-1"
                      style="
                        background-image: url('https://d32y5z2afvomc1.cloudfront.net/assets/filters_crystal_04.png');
                      "
                    ></div>
                    <div>Crystal</div>
                  </div>
                  <div
                    class="flex items-center w-1/3 space-x-2 cursor-pointer group"
                  >
                    <div
                      class="w-4 h-4 rounded-full group-hover:ring-1 group-hover:ring-green-900 group-hover:ring-offset-1"
                      style="
                        background-image: url('https://d32y5z2afvomc1.cloudfront.net/assets/filters_dark_05.png');
                      "
                    ></div>
                    <div>Dark</div>
                  </div>
                  <div
                    class="flex items-center w-1/3 space-x-2 cursor-pointer group"
                  >
                    <div
                      class="w-4 h-4 rounded-full group-hover:ring-1 group-hover:ring-green-900 group-hover:ring-offset-1"
                      style="
                        background-image: url('https://d32y5z2afvomc1.cloudfront.net/assets/filters_bright_06.png');
                      "
                    ></div>
                    <div>Bright</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-1/4 p-5 text-sm text-center border-r border-black">
              <div class="flex items-center justify-around">
                <div class="cursor-pointer hover:underline">Narrow</div>
                <div class="cursor-pointer hover:underline">Medium</div>
                <div class="cursor-pointer hover:underline">Wide</div>
              </div>
            </div>
            <div class="w-1/4 p-5 text-sm text-center border-r border-black">
              <div class="flex items-center justify-around">
                <div class="cursor-pointer hover:underline">Square</div>
                <div class="cursor-pointer hover:underline">Rectangle</div>
                <div class="cursor-pointer hover:underline">Round</div>
                <div class="cursor-pointer hover:underline">Cat-Eye</div>
              </div>
            </div>
            <div class="w-1/4 p-5 text-sm text-center border-r border-black">
              <div class="flex items-center justify-around">
                <div class="cursor-pointer hover:underline">Metal</div>
                <div class="cursor-pointer hover:underline">Acetate</div>
                <div class="cursor-pointer hover:underline">Combined</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <RouterView />
  </AppLayout>
</template>

<script setup>
import AppLayout from "@/components/layout/AppLayout.vue";
import { useRoute } from "vue-router";
import { ref, computed, watch, onMounted } from "vue";
import { bannerImages } from "@/helpers/constants";
import { useMainStore } from "@/stores/main";
const store = useMainStore();
const route = useRoute();
onMounted(() => {
  store.fetchGlasses(`${route.path}/glasses`);
});
const bannerImageToShowKey = ref(route.path.replace("/collections/", ""));
const bannerImagesToShow = computed(
  () => bannerImages[bannerImageToShowKey.value]
);
watch(
  () => route.path,
  (value) => {
    bannerImageToShowKey.value = value.replace("/collections/", "");
    store.fetchGlasses(`${value}/glasses`);
  }
);
const routeName = computed(() => route.name);
const isTrialAvailable = ref(false);
const isFilter = ref(false);
</script>
