<template>
<v-card class="px-4 pt-2">
  <v-layout justify-center>
    <v-flex xs12 md8>
      <v-form ref="testAddForm">
        <v-text-field label="Test Name" name="testToAdd" required :rules="[rules.required]"></v-text-field>
        <v-btn class="primary" @click="submitForm">Add</v-btn>
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
      if (this.$refs.testAddForm.validate()) {
        console.log("all successful");
      }
    }
  }
};
</script>