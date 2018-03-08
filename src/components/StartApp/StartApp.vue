<template>
<v-container>
  <v-layout>
    <v-flex xs12 class="text-xs-center">
      <h1>Our Patients</h1>
      <v-tabs fixed-tabs class="mt-3">
        <v-tab href="#searchPatients">Search Patients</v-tab>
        <v-tab href="#addNewPatient">Add New Patient</v-tab>
        <v-tab-item id="searchPatients">
          <search-patients-content></search-patients-content>
        </v-tab-item>
        <v-tab-item id="addNewPatient">
          <add-new-patient></add-new-patient>
        </v-tab-item>
      </v-tabs>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import SearchPatients from "./SearchPatients/SearchPatients.vue";
import AddNewPatient from "./NewPatient/AddNewPatient.vue";
export default {
  data() {
    return {
      model: true
    };
  },
  components: {
    "search-patients-content": SearchPatients,
    "add-new-patient": AddNewPatient
  }
};
</script>
