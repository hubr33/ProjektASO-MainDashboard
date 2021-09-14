<template>
  <v-container>
    <v-form ref="form">
      <v-text-field
        class="ma-2 registerClient"
        v-model="typedName"
        :counter="40"
        label="Imię"
        required
        :rules="quantityRules"
      ></v-text-field>
      <v-text-field
        class="ma-2 registerClient"
        v-model="typedSurname"
        :counter="40"
        label="Nazwisko"
        required
        :rules="quantityRules"
      ></v-text-field>
      <v-text-field
        class="ma-2 registerClient"
        v-model="typedCompany"
        :counter="40"
        label="Nazwa firmy"
        required
        :rules="quantityRules"
      ></v-text-field>
      <v-text-field
        class="ma-2 registerClient"
        v-model="typedPesel"
        :counter="11"
        label="Pesel"
        required
        :rules="quantityRules"
      ></v-text-field>
      <v-text-field
        class="ma-2 registerClient"
        v-model="typedNip"
        :counter="10"
        label="NIP"
        required
        :rules="quantityRules"
      ></v-text-field>
      <v-text-field
        class="ma-2 registerClient"
        v-model="typedAddress"
        :counter="40"
        label="Adres"
        required
        :rules="quantityRules"
      ></v-text-field>
      <v-text-field
        class="ma-2 registerClient"
        v-model="typedEmail"
        :counter="40"
        label="Email"
        required
        :rules="quantityRules"
      ></v-text-field>
      <v-text-field
        class="ma-2 registerClient"
        :error="this.error"
        v-model="typedPhone"
        :counter="40"
        label="Numer telefonu"
        required
        :rules="quantityRules"
      ></v-text-field>
      <v-btn color="success" @click="addNewClient">Dodaj klienta</v-btn>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    VueShowClient: {},
    typedName: "",
    typedSurname: "",
    typedCompany: "",
    typedPesel: "",
    typedNip: "",
    typedAddress: "",
    typedEmail: "",
    typedPhone: "",
    quantityRules: [
      (v) => !!v || "Pole jest wymagane",
      (v) => v !== 0 || "Liczba musi być większa od 0",
    ],
  }),
  mounted() {
    this.VueShowClient = this.coachViewContext.binding.value;
  },
  methods: {
    validate() {
      return this.$refs.form.validate();
    },
    addNewClient() {
      if (this.validate()) {
        this.VueShowClient.buttonSearchClient = false;
        this.VueShowClient.buttonAddCar = false;
        this.VueShowClient.buttonAddClient = true;
        this.VueShowClient.buttonAddOrder = false;
        this.coachViewContext.binding.set("value", this.VueShowClient);
        this.coachViewContext.trigger();
        this.$refs.form.reset();
      }
    },
  },
};
</script>
