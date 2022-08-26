import { defineStore } from "pinia";
import axios from "axios";
import { API_URL } from "@/helpers/constants";

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
        .get("https://staging-api.bloobloom.com/user/v1/sales_channels/website")
        .then((response) => {
          if (response.status !== 200) {
            throw new Error("An Error Occurred");
          }
          this.collections = response.data.collections;
        });
    },
    fetchGlasses(api) {
      axios.get(`${API_URL}${api}`).then((response) => {
        this.glasses = response.data.glasses;
      });
    },
  },
});
