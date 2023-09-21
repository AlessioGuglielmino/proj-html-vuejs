<script>
import { store } from "./data/store";
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";

export default {
  data() {
    return {
      store,
    };
  },
  // COMPONENTS
  components: { AppHeader, AppMain },

  // METODI
};
</script>

<template><AppHeader /> <AppMain /></template>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
</style>
