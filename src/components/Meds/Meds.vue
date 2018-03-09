<template>
  <v-container class="mt-3">
    <v-layout justify-center>
      <v-flex xs12 md9 class="text-xs-center">
        <h1>Our Medicines</h1>
        <v-tabs fixed-tabs class="mt-3">
          <v-tab href="#searchMedicine">Seach Medicines</v-tab>
          <v-tab href="#addMedicine">Add New Medicine</v-tab>
          <v-tab-item id="searchMedicine">
            <search-med-content></search-med-content>
          </v-tab-item>
          <v-tab-item id="addMedicine">
            <add-new-med-content></add-new-med-content>
          </v-tab-item>
        </v-tabs>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import SearchMeds from "./SearchMeds/SearchMeds.vue";
import AddNewMed from "./NewMeds/AddNewMed.vue";
export default {
  components: {
    "search-med-content": SearchMeds,
    "add-new-med-content": AddNewMed
  }
};
</script>
