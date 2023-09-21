<script>
import { store } from "../data/store";

export default {
  data() {
    return {
      store,
    };
  },
  //   props: {
  //     imgCard: String,
  //   },
  // COMPONENTS

  // METODI
};
</script>

<template>
  <footer>
    <div class="container pt-5">
      <div class="row d-flex justify-content-center gap-5">
        <div class="col-2 mx-2">
          <h6>Address</h6>
          <ul v-for="address in store.address">
            <li>
              {{ address }}
            </li>
          </ul>

          <div class="d-flex gap-4 my-4 icons">
            <font-awesome-icon
              class="change-color"
              icon="fa-brands fa-square-facebook "
            />
            <font-awesome-icon
              class="change-color"
              icon="fa-brands fa-twitter"
            />
            <font-awesome-icon
              class="change-color"
              icon="fa-brands fa-instagram"
            />
            <font-awesome-icon
              class="change-color"
              icon="fa-brands fa-linkedin"
            />
          </div>
        </div>
        <div class="col-2 mx-2">
          <h6>Address</h6>
          <ul v-for="explore in store.explore">
            <li>
              {{ explore }}
            </li>
          </ul>
        </div>
        <div class="col-2 mx-2">
          <h6>Information</h6>
          <ul v-for="information in store.Information">
            <li>
              {{ information }}
            </li>
          </ul>
        </div>
      </div>

      <a href="#top">
        <button class="myBtn" title="Go to top">
          <font-awesome-icon class="arrow-up" icon="fa-solid fa-arrow-up" />
        </button>
      </a>
      <div class="p-4 d-flex justify-content-center align-items-center gap-1">
        <font-awesome-icon class="c" icon="fa-solid fa-c" />
        <span> 2020 Maxcoach.All Right Reserved </span>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  background-color: #171621;
  color: #f5f7fa;
  font-size: 0.8rem;
  ul {
    list-style: none;
    padding: 0;
  }

  li {
    color: #696969;
  }
  .icons {
    font-size: 1.3rem;
    color: #696969;
  }
  .change-color:hover {
    color: #20ad96 !important;
  }

  .myBtn {
    height: 30px;
    width: 30px;
    position: fixed; /* Fixed/sticky position */
    bottom: 20px; /* Place the button at the bottom of the page */
    right: 30px; /* Place the button 30px from the right */
    z-index: 99; /* Make sure it does not overlap */
    border: none; /* Remove borders */
    outline: none; /* Remove outline */
    background-color: #20ad96; /* Set a background color */
    color: white; /* Text color */
    cursor: pointer; /* Add a mouse pointer on hover */
    padding: 20px; /* Some padding */
    border-radius: 50%; /* Rounded corners */
    font-size: 18px; /* Increase font size */
    aspect-ratio: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #myBtn:hover {
    background-color: #696969;
    color: #20ad96;
  }
  .arrow-up {
    font-size: 0.9 rem;
  }
  a {
    text-decoration: none;
    color: white;
  }
  span,
  .c {
    font-size: 0.7rem;
    color: #696969;
  }
}
</style>
