<template>
  <v-container>
    <v-form ref="form">
      <v-text-field
        class="ma-2 registerClient"
        v-model="typedBrand"
        :counter="40"
        label="Marka"
        required
        :rules="quantityRules"
      ></v-text-field>
      <v-text-field
        class="ma-2 registerClient"
        v-model="typedModel"
        :counter="40"
        label="Model (np. a4, c-klasa)"
        required
        :rules="quantityRules"
      ></v-text-field>
      <v-text-field
        class="ma-2 registerClient"
        v-model="typedEngine"
        :counter="40"
        label="Silnik (np. 2.0l 150km Benzyna)"
        required
        :rules="quantityRules"
      ></v-text-field>
      <v-select
        v-model="typedGear"
        :items="gearTypes"
        attach
        chips
        label="Skrzynia biegów"
        :rules="quantityRules"
      ></v-select>
      <v-select
        v-model="typedDrive"
        :items="driveType"
        attach
        chips
        label="Rodzaj napędu"
        :rules="quantityRules"
      ></v-select>
      <v-text-field
        class="ma-2 registerClient"
        v-model="typedProduction"
        :counter="40"
        label="Rok produkcji"
        required
        :rules="quantityRules"
      ></v-text-field>
      <v-text-field
        class="ma-2 registerClient"
        v-model="typedColor"
        :counter="40"
        label="Kolor"
        required
        :rules="quantityRules"
      ></v-text-field>
      <v-text-field
        class="ma-2 registerClient"
        v-model="typedVin"
        :counter="40"
        label="Numer Vin"
        required
        :rules="quantityRules"
      ></v-text-field>
      <v-btn color="success" @click="addCarToClient">Dodaj auto</v-btn>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    VueShowClient: {},
    typedBrand: "",
    typedModel: "",
    typedEngine: "",
    typedDrive: "",
    typedGear: "",
    typedProduction: "",
    typedColor: "",
    typedVin: "",
    gearTypes: [
      "skrzynia manualna",
      "skrzynia automatyczna stopniowa",
      "skrzynia półautomatyczna stopniowa",
      "skrzynia bezstopniowa",
    ],
    driveType: ["RWD", "4WD", "AWD", "FWD"],
    quantityRules: [
      (v) => !!v || "Pole jest wymagane",
      (v) => v !== 0 || "Liczba musi być większa od 0",
    ],
  }),
  mounted() {
    this.VueShowClient = this.coachViewContext.binding.get("value");
  },
  methods: {
    validate() {
      return this.$refs.form.validate();
    },
    addCarToClient() {
      if (this.validate()) {
        this.VueShowClient.buttonSearchClient = false;
        this.VueShowClient.buttonAddCar = true;
        this.VueShowClient.buttonAddOrder = false;
        this.VueShowClient.buttonAddClient = false;
        this.VueAddCar.brand = this.typedBrand;
        this.VueAddCar.model = this.typedModel;
        this.VueAddCar.engineType = this.typedEngine;
        this.VueAddCar.driveType = this.typedDrive;
        this.VueAddCar.gearType = this.typedGear;
        this.VueAddCar.productionYear = this.typedProduction;
        this.VueAddCar.color = this.typedColor;
        this.VueAddCar.vinNumber = this.typedVin;
        this.coachViewContext.binding.set("value", this.VueShowClient);
        this.coachViewContext.trigger();
        this.$refs.form.reset();
      }
    },
  },
};
</script>
