import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import i18n from "@/plugins/i18n";

import App from "@/App.vue";

const app = createApp(App);

app.use(createPinia());
app.use(i18n);

app.mount("#app");
