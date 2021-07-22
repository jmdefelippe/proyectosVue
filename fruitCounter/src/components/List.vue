<template>
  <div>
    <ul class="list-group">
      <li
        v-for="(item, index) of arraySorted"
        class="list-group-item d-flex justify-content-between align-items-center"
        :key="item.id"
        @click="increase(item.id)"
      >
        {{index}} - {{ item.name }}
        <span class="badge badge-primary badge-pill">{{ item.count }}</span>
      </li>
    </ul>
    <button class="btn btn-primary mt-5" @click="reset">Reset</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "List",
  computed: {
    ...mapState(["fruits"]),
    arraySorted() {
      return this.fruits.slice().sort((a, b) => b.count - a.count);
    }
  },
  methods: {
    ...mapMutations(["increase", "reset"]),
  },
};
</script>

<style scoped></style>
