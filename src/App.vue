<template>
  <v-app>
    <v-app-bar
      app
      color="blue lighten-4"
      dark
      class="d-flex justify-center display-1"
    >
      Autoryzowany serwis aut
    </v-app-bar>

    <v-main>
      <SearchClient />
      <AddNewClient :funcTest="addNewClient" />
      <AddCarToClient />
    </v-main>
  </v-app>
</template>

<script>
import SearchClient from "./components/SearchClient";
import AddNewClient from "./components/AddNewClient.vue";
import AddCarToClient from "./components/AddCarToClient.vue";

export default {
  name: "App",

  components: {
    SearchClient,
    AddNewClient,
    AddCarToClient,
  },

  data: () => ({
    VueShowClient: {},
  }),
  mounted() {
    this.VueShowClient = this.coachViewContext.binding.value;
  },
};
</script>
