<template>
  <v-container class="mt-3">
    <v-layout justify-center>
      <v-flex xs12 md8 class="text-xs-center">
        <h1>Our Tests</h1>
        <v-tabs fixed-tabs class="pt-3">
          <v-tab href="#searchTests">Search Tests</v-tab>
          <v-tab href="#addNewTests">Add New Test</v-tab>
          <v-tab-item id="searchTests">
           <search-tests-content></search-tests-content>
          </v-tab-item>
          <v-tab-item id="addNewTests">
            <add-new-test-content></add-new-test-content>
          </v-tab-item>
        </v-tabs>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import SearchTests from "./SearchTests/SearchTests.vue";
import AddTest from "./NewTests/AddNewTests.vue";
export default {
  components: {
    "search-tests-content": SearchTests,
    "add-new-test-content": AddTest
  }
};
</script>
