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
  <!-- NAVBAR -->
  <nav class="navbar d-flex align-items-center">
    <div class="container d-flex justify-content-between p-3">
      <!-- LINKS -->
      <div>
        <div class="dropdown d-flex gap-3">
          <a
            class="dropdown-toggle nav-link change-color"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            v-for="link in store.links"
          >
            {{ link }}
          </a>

          <ul class="dropdown-menu">
            <li v-for="droplink in store.dropLinks">
              <a class="dropdown-item" href="#">{{ droplink }}</a>
            </li>
          </ul>
        </div>
      </div>

      <!-- LOGO -->

      <div class="logo">
        <img src="/img/dark-logo.png" alt="" />
      </div>
      <!-- SEARCHBAR -->

      <div class="d-flex gap-3 align-items-center">
        <div class="d-flex gap-3 icone">
          <font-awesome-icon
            class="change-color"
            icon="fa-solid fa-cart-shopping"
          />
          <font-awesome-icon
            class="change-color"
            icon="fa-regular fa-circle-user"
          />
        </div>

        <div class="input-group">
          <input
            type="text"
            class="form-control search"
            placeholder="Search..."
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button
            class="btn btn-outline search"
            type="button"
            id="button-addon2"
          >
            <font-awesome-icon
              class="change-color"
              icon="fa-solid fa-magnifying-glass"
            />
          </button>
        </div>
      </div>
    </div>
  </nav>

  <!-- JUMBO -->
  <div class="jumbo d-flex align-items-center justify-content-center">
    <div class="d-flex flex-column align-items-center text-center">
      <h2>Commence Business</h2>
      <h1>Distant Mentoring Program</h1>
      <button class="dowload-button py-2 px-5 mt-5">
        Download Free guidebook
        <font-awesome-icon icon="fa-solid fa-arrow-right" />
      </button>
    </div>
    <div class="side-menu d-flex flex-column gap-3">
      <font-awesome-icon icon="fa-solid fa-ruler-combined" />
      <font-awesome-icon icon="fa-solid fa-cart-shopping" />
      <font-awesome-icon icon="fa-solid fa-credit-card" />
      <font-awesome-icon icon="fa-solid fa-bell" />
    </div>
  </div>
</template>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
img {
  width: 100%;
}
.navbar {
  font-size: 0.8rem;
}

.nav-link {
  text-decoration: none;
}
.change-color:hover {
  color: #20ad96 !important;
}

ul {
  list-style: none;
  display: flex;
  gap: 15px;
}

.logo > img {
  width: 150px;
}

.icone {
  margin-top: 10px;
}

.search {
  background-color: #f5f5f5 !important;
  border: none !important;
}

.jumbo {
  background-image: url("../../public/img/home-bg.jpg");
  background-repeat: no-repeat;
  width: 100%;
  height: 700px;
  position: relative;

  h1,
  h2 {
    color: white;
  }
  h1 {
    font-size: 4rem;
  }
  .side-menu {
    position: absolute;
    right: 0;
    top: 250px;
    background-color: #ffffff;
    border-radius: 5px;
    padding: 10px;
  }

  .dowload-button {
    border: none;
    border-radius: 10px;
    background-color: #ffffff;
    color: #20ad96;
  }
}
</style>
