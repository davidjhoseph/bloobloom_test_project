import { defineStore } from "pinia";
import axios from "axios";
import { API_URL } from "@/helpers/constants";

export const useMainStore = defineStore({
  id: "main",
  state: () => ({
    glasses: [],
    collections: [],
    loading: false,
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
      let filteredGlasses = [];
      this.loading = false;
      axios.get(`${API_URL}${api}`).then((response) => {
        response.data.glasses.forEach((glasses) => {
          filteredGlasses = [...filteredGlasses, ...glasses.glass_variants];
        });
        console.log(response);
        this.glasses = filteredGlasses;
      });
    },
  },
});
