import { createApp } from "vue";
import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";

library.add(faMagnifyingGlass, faCartShopping, faCircleUser);

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
