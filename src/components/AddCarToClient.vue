<template>
  <v-container> asdas</v-container>
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
