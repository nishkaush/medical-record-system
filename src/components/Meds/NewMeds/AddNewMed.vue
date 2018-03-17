<template>
  <v-card class="pt-4 px-4">
    <v-snackbar
      :timeout="timeout"
      top
      v-model="snackbar"
      multi-line
    >
      {{ snackbarText }}
      <v-btn flat color="pink" @click.native="snackbar = false">Close</v-btn>
    </v-snackbar>
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
          <v-select 
            :items="medicineTypeOptions" 
            label="Choose Medicine Type" 
            v-model="medicineType" 
            required 
            :rules="[rules.required]"
          >
          </v-select>
          <v-text-field 
            name="medicineQty" 
            label="Stock Quantity" 
            v-model="medicineQty"
            :rules="[rules.required]"
            required
            type="number"
          >
          </v-text-field>
          <v-btn class="primary" @click="submitForm" :disabled="!medicineName&&!medicineQty&&!medicineType">Add</v-btn>
        </v-form>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      timeout: 6000,
      snackbar: false,
      snackbarText: "Medicine has been successfully added!",
      medicineName: "",
      medicineQty: "",
      medicineType: "",
      medicineTypeOptions: ["Tablet", "Ointment", "Syrups or Drops"],
      rules: {
        required: v => !!v || "This field is required"
      }
    };
  },
  methods: {
    submitForm() {
      let vm = this;
      if (this.$refs.addMedForm.validate()) {
        axios
          .post("http://localhost:3000/medicine/addNewMedicine", {
            medicine_name: vm.medicineName,
            medicine_type: vm.medicineType,
            current_stock: vm.medicineQty
          })
          .then(res => {
            res.data.affectedRows ? vm.submitSuccess() : vm.submitFailure();
          })
          .catch(err => console.log("oopps", err));
      }
    },
    submitSuccess() {
      this.snackbar = true;
      this.$refs.addMedForm.reset();
    },
    submitFailure() {
      let vm = this;
      this.snackbarText =
        "Couldn't Add Medicine, please ensure medicine name doesn't already exist!";
      this.snackbar = true;
      setTimeout(() => {
        vm.snackbarText = "Medicine has been successfully added!";
      }, 6000);
    }
  }
};
</script>

