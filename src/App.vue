<script>
import { store } from "./data/store";
import AppHeader from "./components/AppHeader.vue";

export default {
  data() {
    return {
      store,
    };
  },
  // COMPONENTS
  components: { AppHeader },

  // METODI
};
</script>

<template><AppHeader /></template>

<style></style>
