<script>
import { store } from "../data/store";

export default {
  data() {
    return {
      store,
    };
  },
  // COMPONENTS

  // METODI
};
</script>

<template>
  <main>
    <!-- PRIMA SEZIONE -->
    <section class="first-section">
      <div class="row d-flex justify-content-center align-items-center">
        <div
          class="col-4 d-flex justify-content-center align-items-center flex-column"
        >
          <h6>EVERY THING IN<strong> MAXCOACH</strong></h6>
          <h2>Learn about our</h2>
          <p>Work Colture</p>
          <h2>at MaxCoach</h2>
          <span>
            Spend some times to visit our web site or head office and discover
            pur current courses, enrrolmentprocedure, and registration deadline.
            We're opening new classes everly beginning of each month
          </span>
        </div>
        <div
          class="col-4 d-flex justify-content-center align-items-center flex-column"
        >
          <div class="first-pic-section">
            <img src="../../public/img/stock.jpg" alt="" />
            <img class="pic-1" src="../../public/img/about.jpg" alt="" />
            <img class="pic-2" src="../../public/img/maxcoach.png" alt="" />
            <img class="pic-3" src="../../public/img/maxcoach7.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.first-section {
  margin-top: 150px;
  .row > h2 {
    font-weight: 900 !important ;
  }

  p {
    font-size: 2rem;
    color: #20ad96;
  }
  img {
    width: 100%;
  }

  .first-pic-section {
    position: relative;
  }
  .pic-1 {
    width: 150px;
    position: absolute;
    left: 80%;
    bottom: 70%;
    border-radius: 5px;
    z-index: 1;
  }
  .pic-2 {
    width: 100px;
    position: absolute;
    left: 70%;
    top: 90%;
  }
  .pic-3 {
    width: 70px;
    position: absolute;
    left: 70%;
    bottom: 90%;
  }
}
</style>
