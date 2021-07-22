<template>
  <div class="container mt-5">
    <Header></Header>
    <List></List>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import List from "./components/List.vue";

export default {
  name: "App",
  components: {
    Header,
    List,
  },
};
</script>
