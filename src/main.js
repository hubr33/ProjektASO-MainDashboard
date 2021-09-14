//  eslint-disable-next-line no-undef
__webpack_public_path__ = window.vueZipURL || "";

import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;
Vue.config.devtools = true;
Vue.prototype.coachViewContext = window.coachViewContext;

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
