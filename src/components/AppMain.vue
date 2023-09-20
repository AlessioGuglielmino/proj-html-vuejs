<script>
import { store } from "../data/store";
import AppCard from "./AppCard.vue";

export default {
  data() {
    return {
      store,
    };
  },
  // COMPONENTS
  components: { AppCard },
  // METODI
};
</script>

<template>
  <main>
    <!-- PRIMA SEZIONE -->
    <section class="first-section">
      <div class="row d-flex justify-content-center align-items-center">
        <div class="col-3 d-flex flex-column">
          <h6>EVERY THING IN<strong> MAXCOACH</strong></h6>
          <h2>Learn about our</h2>
          <p>Work Colture</p>
          <h2>at MaxCoach</h2>
          <span class="my-3">
            Spend some times to visit our web site or head office and discover
            pur current courses, enrrolmentprocedure, and registration deadline.
            We're opening new classes everly beginning of each month
          </span>
          <span class="my-3"
            >Have questions?
            <span class="guide"
              >Get Free Guide
              <font-awesome-icon icon="fa-solid fa-arrow-right" />
            </span>
          </span>
        </div>
        <div
          class="col-6 d-flex justify-content-center align-items-center flex-column"
        >
          <div class="bg-pic-section">
            <img src="../../public/img/stock.jpg" alt="" />
            <img class="pic-1" src="/img/about.jpg" alt="" />
            <img class="pic-2" src="/img/maxcoach.png" alt="" />
            <img class="pic-3" src="/img/maxcoach7.png" alt="" />
          </div>
        </div>
      </div>

      <div class="container d-flex justify-content-center gap-5 my-5">
        <div class="d-flex flex-column align-items-center">
          <span class="fs-3 fw-bold stats">{{ store.enrolledLeaners }}</span>
          <h6 class="text-secondary"><strong>ENROLLED LEANERS</strong></h6>
        </div>
        <div class="d-flex flex-column align-items-center">
          <span class="fs-3 fw-bold stats">{{ store.finishedSession }}</span>
          <h6 class="text-secondary"><strong>FINISHED SESSION</strong></h6>
        </div>
        <div class="d-flex flex-column align-items-center">
          <span class="fs-3 fw-bold stats">{{ store.satisfactionRate }}</span>
          <h6 class="text-secondary"><strong>SATISFACTION RATE</strong></h6>
        </div>
      </div>
    </section>
    <!-- SECONDA SEZIONE -->
    <section class="second-section">
      <div class="row d-flex justify-content-center align-items-center">
        <div
          class="col-6 d-flex justify-content-center align-items-center flex-column"
        >
          <div class="bg-pic-section">
            <img class="main-pic" src="/img/stock670x450.jpg" alt="" />
            <img class="pic-4" src="/img/youtube.png" alt="" />
            <img class="pic-5" src="/img/maxcoach05.png" alt="" />
            <img class="pic-6" src="/img/maxcoach150x150.png" alt="" />
          </div>
        </div>
        <div class="col-3 d-flex flex-column">
          <h6 class="text-secondary">HOW WE WORK</h6>
          <h2>Upgrade Your Skill</h2>
          <p>Upgrade Your Life</p>

          <span class="my-3">
            opening up more opportunities in front of you to get the ticket to
            move enyoiable door in life. Getting equipped with new skills for
            new sets of insights into your career.MaxCoach accompany learners in
            every stage of learning
          </span>
          <span class="my-3 fw-bold">
            Download Free guidebook
            <font-awesome-icon icon="fa-solid fa-arrow-right" />
          </span>
        </div>
      </div>
    </section>
    <!-- TERZA SEZIONE -->
    <section class="third-secton">
      <div class="container text-center my-5">
        <h6 class="text-secondary">HOW WE WORK</h6>
        <div class="d-flex justify-content-center align-items-center gap-2">
          <h2>Latest Online</h2>
          <p>Courses</p>
        </div>
        <div class="row d-flex justify-content-center align-items-center gap-5">
          <AppCard
            v-for="(card, index) in store.cardComponents"
            :imgCard="card.imgCard"
            :text="card.text"
            :price="card.price"
            :lessons="card.lessons"
            :students="card.students"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
section {
  margin-top: 100px;
  .row > h2 {
    font-weight: 900 !important ;
  }

  p {
    font-size: 2rem;
    color: #20ad96;
  }
  img {
    width: 100%;
    border-radius: 5px;
  }

  .bg-pic-section {
    position: relative;
  }
  .main-pic {
    z-index: 10;
  }
  .pic-1 {
    width: 150px;
    position: absolute;
    left: 80%;
    bottom: 70%;
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
  .pic-4 {
    width: 15%;
    position: absolute;
    left: 35%;
    bottom: 50%;
    transform: translate(35%, 50%);
  }
  .pic-5 {
    width: 25%;
    position: absolute;
    left: -170px;
    bottom: 50%;
    transform: translate(35%, 50%);
  }
  .pic-6 {
    width: 20%;
    position: absolute;
    left: 75%;
    top: 70%;
    transform: translate(35%, 50%);
  }

  .guide,
  .stats {
    color: #20ad96;
  }
}
</style>
