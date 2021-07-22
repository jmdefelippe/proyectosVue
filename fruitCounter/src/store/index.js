import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    fruits: [
      { id: 1, name: "Manzanas", count: 0 },
      { id: 2, name: "Peras", count: 0 },
      { id: 3, name: "Frutillas", count: 0 },
    ],
  },
  mutations: {
    increase(state, id) {
      state.fruits.forEach(fruit => {
        if (fruit.id === id) {
          fruit.count++;
        }
      });
    },
    reset(state) {
      state.fruits.forEach(fruit => {
        fruit.count = 0;
      });
    },
  },
  actions: {},
  modules: {},
});
