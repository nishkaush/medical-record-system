<template>
  <v-card class="pt-4">
    <v-layout justify-center>
      <v-flex xs12 md8>
        <v-form ref="addMedForm" class="text-xs-center">
          <v-text-field 
            name="medicineName" 
            label="Name of Medicine" 
            v-model="medicineName"
            :rules="[rules.required]"
            required
            type="text"
          >
          </v-text-field>
          <v-text-field 
            name="medicineQty" 
            label="Stock Quantity" 
            v-model="medicineQty"
            :rules="[rules.required]"
            required
            type="number"
          >
          </v-text-field>
          <v-btn class="primary" @click="submitForm" v-if="medicineName&&medicineQty">Add</v-btn>
        </v-form>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      medicineName: "",
      medicineQty: "",
      rules: {
        required: v => !!v || "This field is required"
      }
    };
  },
  methods: {
    submitForm() {
      if (this.$refs.addMedForm.validate()) {
        console.log("all successfull");
      }
    }
  }
};
</script>

