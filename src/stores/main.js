import { defineStore } from "pinia";
import axios from "axios";

export const useMainStore = defineStore({
  id: "main",
  state: () => ({
    glasses: [],
    collections: [],
  }),
  getters: {
    getGlasses: (state) => state.glasses,
    getCollections: (state) => state.glasses,
  },

  actions: {
    fetchCollections() {
      axios
        .get(
          "https://staging-api.bloobloom.com/user/v1/sales_channels/website/collections"
        )
        .then((response) => {
          if (response.status !== 200) {
            throw new Error("An Error Occurred");
          }
          this.collections = response.data.collections;
        });
    },
    fetchGlasses() {
      axios
        .get(
          "https://staging-api.bloobloom.com/user/v1/sales_channels/website/collections"
        )
        .then((response) => {
          console.log(response);
        });
    },
  },
});
