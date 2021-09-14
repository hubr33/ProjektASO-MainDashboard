<template>
  <v-container>
    <v-col class="d-flex flex-column">
      <v-form>
        <v-text-field
          class="ma-6"
          v-model="peselNumber"
          :counter="20"
          label="Numer pesel"
          required
        ></v-text-field>
        <v-btn light class="ml-6" color="info" @click="searchClient"
          >Szukaj</v-btn
        >
      </v-form>
      <v-form>
        <v-btn class="ml-6 mt-6" @click="addNewClient">Dodaj klienta</v-btn>
      </v-form>
    </v-col>
    <v-col class="blue-grey lighten-5">
      <v-row justify="center" class="pa-md-4 mx-lg-auto">
        <v-expansion-panels accordion>
          <v-expansion-panel>
            <v-expansion-panel-header>
              <strong
                >{{ VueShowClient.currentClient.name }}
                {{ VueShowClient.currentClient.surname }}</strong
              >
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <p>
                Nazwa firmy:
                <span>{{ VueShowClient.currentClient.companyName }}</span>
              </p>
              <p>
                NIP: <span>{{ VueShowClient.currentClient.nip }}</span>
              </p>
              <p>
                Pesel: <span>{{ VueShowClient.currentClient.pesel }}</span>
              </p>
              <p>
                Adres: <span>{{ VueShowClient.currentClient.address }}</span>
              </p>
              <p>
                E-mail: <span>{{ VueShowClient.currentClient.email }}</span>
              </p>
              <p>
                Tel. kontaktowy:
                <span>{{ VueShowClient.currentClient.phoneNumber }}</span>
              </p>
              <v-btn class="mb-6">Dodaj auto</v-btn>

              <v-row
                justify="center"
                v-for="(car, index) in VueShowClient.carAso.items"
                :key="index"
              >
                <v-expansion-panels accordion>
                  <v-expansion-panel>
                    <v-expansion-panel-header
                      ><strong>Auta klienta</strong></v-expansion-panel-header
                    >
                    <v-expansion-panel-content>
                      <p>
                        Marka: <span>{{ car.brand }}</span>
                      </p>
                      <p>
                        Model: <span>{{ car.model }}</span>
                      </p>
                      <p>Numer rejestracyjny: <span>Nr rej</span></p>
                      <p>
                        Silnik: <span>{{ car.engineType }}</span>
                      </p>
                      <p>
                        Napęd: <span>{{ car.driveType }}</span>
                      </p>
                      <p>
                        Skrzynia biegów: <span>{{ car.gearType }}</span>
                      </p>
                      <p>
                        Rok produkcji: <span>{{ car.productionYear }}</span>
                      </p>
                      <p>
                        Kolor: <span>{{ car.color }}</span>
                      </p>
                      <p>
                        VIN: <span>{{ car.vinNumber }}</span>
                      </p>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    VueShowClient: {},
    carOrd: {},
    peselNumber: "",
    typedNotificationDesc: "",
    notificationDescIsVisible: false,
    personDataIsVisible: false,
    selectedCar: [],
    showPeselError: false,
    showSearchedPerson: false,
  }),
  mounted() {
    this.VueShowClient = this.coachViewContext.binding.value;
  },
  methods: {
    searchByPesel() {
      this.VueShowClient.searchByPesel = this.peselNumber;
      this.VueShowClient.buttonSearchClient = true;
      this.VueShowClient.buttonAddCar = false;
      this.VueShowClient.buttonAddClient = false;
      this.VueShowClient.buttonAddOrder = false;
    },
    addNewClient() {
      this.VueShowClient.buttonSearchClient = false;
      this.VueShowClient.buttonAddCar = false;
      this.VueShowClient.buttonAddClient = true;
      this.VueShowClient.buttonAddOrder = false;
      this.coachViewContext.binding.set("value", this.VueShowClient);
      this.coachViewContext.trigger();
    },
    addCarToClient() {
      this.VueShowClient.buttonSearchClient = false;
      this.VueShowClient.buttonAddCar = true;
      this.VueShowClient.buttonAddOrder = false;
      this.VueShowClient.buttonAddClient = false;
      this.coachViewContext.binding.set("value", this.VueShowClient);
      this.coachViewContext.trigger();
    },
    searchClient() {
      this.VueShowClient.searchByPesel = this.peselNumber;
      this.VueShowClient.buttonSearchClient = true;
      this.VueShowClient.buttonAddCar = false;
      this.VueShowClient.buttonAddClient = false;
      this.VueShowClient.buttonAddOrder = false;
      this.coachViewContext.binding.set("value", this.VueShowClient);
      this.coachViewContext.trigger();
      this.VueShowClient = this.coachViewContext.binding.get("value");
    },
    openNotificationDesc(index) {
      this.VueShowClient.carCaseid = this.VueShowClient.carAso.items[
        index
      ].mrcCaseHeader.caseId;
      console.log(this.VueShowClient);
      this.notificationDescIsVisible = true;
    },
    closeNotificationDesc() {
      this.notificationDescIsVisible = false;
      this.typedNotificationDesc = "";
      this.selectedCar = [];
    },
    sendNewNotification() {
      this.VueShowClient.buttonSearchClient = false;
      this.VueShowClient.buttonAddCar = false;
      this.VueShowClient.buttonAddClient = false;
      this.VueShowClient.buttonAddOrder = true;
      this.coachViewContext.binding.set("value", this.VueShowClient);
      this.coachViewContext.trigger();
    },
  },
};
</script>
