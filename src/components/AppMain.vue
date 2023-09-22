<script>
import { store } from "../data/store";
import AppCard from "./AppCard.vue";
import AppArtistCard from "./AppArtistCard.vue";

export default {
  data() {
    return {
      store,
      userEmail: "",
    };
  },
  // COMPONENTS
  components: { AppCard, AppArtistCard },
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
        <div class="col-4 position-relative">
          <img class="try" src="/img/stock.jpg" alt="" />
          <img class="pic-1" src="/img/about.jpg" alt="" />
          <img class="pic-2" src="/img/maxcoach.png" alt="" />
          <img class="pic-3" src="/img/maxcoach7.png" alt="" />
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
          class="col-4 d-flex justify-content-center align-items-center flex-column"
        >
          <div class="position-relative">
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

        <div>
          <h6 class="text-secondary">
            Control your personal preference setting to get notified about
            <br />
            appropiate courses.
            <span class="text-dark text-decoration-underline fw-bold"
              >View all Courses
              <font-awesome-icon icon="fa-solid fa-arrow-right" />
            </span>
          </h6>
        </div>
      </div>
    </section>

    <!-- QUARTA SEZIONE -->
    <section class="fourth-section">
      <div class="row d-flex justify-content-center align-items-center">
        <div class="col-3 d-flex flex-column">
          <h6>TESTIMONIALS</h6>
          <h2>Why do People</h2>
          <div class="d-flex align-items-center">
            <p>*Hearts*</p>
            <h2>Us?</h2>
          </div>

          <span class="my-3">
            Seeking for verbals of ous service quality? Find them here.
            <br />Everything is trasparent and straightforward for your sense of
            justification
          </span>
          <span class="text-dark text-decoration-underline fw-bold"
            >View all
            <font-awesome-icon icon="fa-solid fa-arrow-right" />
          </span>
        </div>
        <div
          class="col-6 d-flex justify-content-center align-items-center flex-column"
        >
          <div class="right-card-section d-flex flex-column gap-4">
            <h6>
              Professional team of specialist and passionate mentors at reach
            </h6>
            <span class="text-secondary"
              >i need to get a certification for English proficiencyc and
              MAxCoach is <br />
              my best choice.Their tutors are smart and professional when
              dealing with students.</span
            >

            <div class="d-flex gap-4">
              <div><img src="/img/testimonial01.jpg" alt="" /></div>
              <div>
                <h6>MADLEY PONDOR</h6>
                <span>/ IT Specialist</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- QUINTA SEZIONE -->
    <section class="fifth-section">
      <div class="row d-flex justify-content-center align-items-center">
        <div
          class="col-4 d-flex justify-content-center align-items-center flex-column"
        >
          <div class="try position-relative">
            <img class="main-pic" src="/img/hometeam.png" alt="" />
            <img class="pic-7" src="/img/maxcoach05.png" alt="" />
            <img class="pic-8" src="/img/maxcoach150x150.png" alt="" />
            <img class="pic-9" src="/img/maxcoachshap.png" alt="" />
          </div>
        </div>
        <div class="col-3 d-flex flex-column">
          <h6 class="text-secondary">
            EVERYTHING IN <strong>MAXCOACH</strong>
          </h6>
          <h2>We're Here</h2>
          <p>Tranform</p>
          <h2>You!</h2>

          <span class="my-3">
            As learners, people can enjoy great companionship form
            <br />MaxCoach mentors and educators.We can help you develop and
            grow at your best.
          </span>
          <button class="btn button w-50" type="submit">Get Free Guide</button>
        </div>
      </div>
    </section>
    <!-- SESTA SEZIONE -->
    <section class="sixth-secton">
      <div class="container text-center my-5">
        <h6 class="text-secondary">READ FOR MORE JOYMENT</h6>
        <div class="d-flex justify-content-center align-items-center gap-2">
          <h2>Latest From</h2>
          <p>Our Blogs</p>
        </div>
        <div class="row d-flex justify-content-center align-items-center gap-5">
          <AppArtistCard
            v-for="(card, index) in store.cardArtistComponents"
            :imgCard="card.imgCard"
            :text="card.text"
            :date="card.date"
            :views="card.views"
          />
        </div>
      </div>
    </section>
    <!-- SETTIMA SEZIONE -->
    <section>
      <div class="container">
        <div class="row d-flex justify-content-between">
          <div class="col-3 d-flex justify-content-center align-items-center">
            <div class="circle"></div>
          </div>
          <div class="col-4">
            <div
              class="d-flex flex-column justify-content-center align-items-center gap-4 text-center"
            >
              <div class="d-flex align-items-center gap-2">
                <h2>Subscribe</h2>
                <p>Newsletters</p>
              </div>

              <h6 class="text-secondary">
                Enter your email addres to register to our newsletter
                subscription delivered on a regulas basis!
              </h6>

              <div class="input-group">
                <input
                  v-model="userEmail"
                  type="text"
                  class="form-control search"
                  placeholder="Enter your Email"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <button class="btn button w-25" type="submit">Submit</button>
              </div>
            </div>
          </div>
          <div class="col-3 last-section-right">
            <img class="img-10" src="/img/maxcoach.png" alt="" />
            <img class="img-11" src="/img/maxcoach09.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
section {
  margin-top: 100px;
  margin-bottom: 100px;

  .try {
  }
  .row > h2 {
    font-weight: 900 !important ;
  }

  p {
    font-size: 2rem;
    color: #20ad96;
  }
  span {
    font-size: 0.9rem;
  }
  img {
    width: 100%;
    border-radius: 5px;
  }

  .position-relative {
    position: relative;
  }

  .pic-1 {
    width: 120px;
    position: absolute;
    left: 410px;
    bottom: 235px;
    z-index: 1;
  }
  .pic-2 {
    width: 100px;
    position: absolute;
    left: 70%;
    top: 250px;
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
  }
  .pic-6 {
    width: 20%;
    position: absolute;
    left: 75%;
    top: 70%;
  }
  .pic-7 {
    width: 25%;
    position: absolute;
    left: -140px;
    bottom: 50%;
  }
  .pic-8 {
    width: 25%;
    position: absolute;
    left: 40%;
    top: 75%;
  }
  .pic-9 {
    width: 25%;
    position: absolute;
    left: -200px;
    bottom: 5%;
    fill: #20ad96 !important;
  }
  .button {
    background-color: #20ad96;
    color: white;
    padding: 0.4rem 0.8rem;
  }
  .guide,
  .stats {
    color: #20ad96;
  }
  .right-card-section {
    width: 70%;
    box-shadow: 10px 10px 50px #b9b8b8;
    border-radius: 5px;
    padding: 2rem;

    img {
      width: 60px;
      border-radius: 50%;
    }
    span {
      font-size: 0.8rem;
    }
  }
}
.sixth-secton {
  background-color: #f8f8f8;
  padding-top: 100px;

  .card {
    background-color: #f8f8f8;
    border: none;
  }
}
.circle {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 5px solid #20ad96;
}
.last-section-right {
  position: relative;
  img {
    position: absolute;
  }
  .img-10 {
    width: 100px;

    right: 50%;
    bottom: 30%;
  }
  .img-11 {
    width: 150px;
    right: 50%;
    bottom: 60%;
  }
  .last-section-left {
    position: relative;
  }
}
</style>
