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
      <AddCarToClient />
    </v-main>
  </v-app>
</template>

<script>
import SearchClient from "./components/SearchClient";
import AddCarToClient from "./components/AddCarToClient.vue";

export default {
  name: "App",

  components: {
    SearchClient,
    AddCarToClient,
  },

  data: () => ({
    //
  }),
};
</script>
