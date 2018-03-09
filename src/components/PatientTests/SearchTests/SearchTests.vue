<template>
  <v-card class="px-4 pt-2">
    <v-layout justify-center>
      <v-flex xs12 md8>
        <v-form ref="searchTestForm">
          <v-text-field label="Name of Test" name="testName" required :rules="[rules.required]"></v-text-field>
          <v-btn class="primary" @click="submitForm">Search</v-btn>
        </v-form>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      rules: {
        required: v => !!v || "This field is required"
      }
    };
  },
  methods: {
    submitForm() {
      if (this.$refs.searchTestForm.validate()) {
        console.log("Honky Dowry");
      }
    }
  }
};
</script>

