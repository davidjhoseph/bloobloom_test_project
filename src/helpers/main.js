import SpectaclesWomenView from "@/views/collections/SpectaclesWomenView.vue";
import SpectaclesMenView from "@/views/collections/SpectaclesMenView.vue";
import SunglassesWomenView from "@/views/collections/SunglassesWomenView.vue";
import SunglassesMenView from "@/views/collections/SunglassesMenView.vue";
import { useMainStore } from "@/stores/main";

const mainStore = useMainStore();
console.log(mainStore);
export const collections = mainStore.getCollections()?.map((collection) => {
  let component = SpectaclesWomenView;
  const name = collection.name;
  switch (name) {
    case "Sunglasses Women":
      component = SunglassesWomenView;
      break;
    case "Sunglasses Men":
      component = SunglassesMenView;
      break;
    case "Spectacles Men":
      component = SpectaclesMenView;
      break;
    case "Spectacles Women":
      component = SpectaclesWomenView;
      break;
  }
  return {
    path: collection.configuration_name,
    name,
    component,
  };
});
