<script>
import { store } from "./data/store";
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  data() {
    return {
      store,
    };
  },
  // COMPONENTS
  components: { AppHeader, AppMain, AppFooter },

  // METODI
};
</script>

<template><AppHeader /> <AppMain /> <AppFooter /></template>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}

::-webkit-scrollbar {
  width: 15px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #20ad96;
}

::-webkit-scrollbar-thumb:hover {
  background: #20ad96;
}
</style>
