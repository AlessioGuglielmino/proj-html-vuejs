<script>
import { store } from "../data/store";

export default {
  data() {
    return {
      store,
    };
  },
  props: {
    imgCard: String,
    text: String,
    price: String,
    students: String,
    lessons: String,
  },
  // COMPONENTS

  // METODI
};
</script>

<template>
  <div class="card d-flex my-5" style="width: 20rem">
    <img :src="imgCard" class="card-img-top" alt="..." />
    <div
      class="card-body gap-4 p-4 d-flex flex-column justify-content-start align-items-start"
    >
      <h5 class="card-title stats">{{ price }}</h5>
      <span class="fs-6 fw-bold info text-start">{{ text }} </span>
      <div class="d-flex gap-5 text-secondary">
        <div>
          <font-awesome-icon icon="fa-solid fa-file-invoice" /> {{ lessons }}
          <span>Lessons</span>
        </div>
        <div>
          <font-awesome-icon icon="fa-regular fa-user" /> {{ students }}
          <span>students</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.card {
  padding: 0;
}
.stats {
  color: #20ad96;
}
.info:hover {
  color: #20ad96;
}
</style>
