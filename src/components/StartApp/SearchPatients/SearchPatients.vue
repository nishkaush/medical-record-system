<template>
  <v-card flat>
    <v-layout justify-center>
      <v-flex xs12 md5 class="pa-4">

        <v-form ref="searchPatientForm">
          <v-select :items="queryType" label="Search By" v-model="selectedQuery"></v-select>
          <v-text-field 
            v-for="item in textFields" 
            :key="item.label" 
            v-model="$data[item.name]" 
            :label="item.label"
            :type="item.type"
            v-if="textFieldToShow(item.name)"
            required
            :rules="[rules.required]"
          >
          </v-text-field>
        </v-form>

      </v-flex>
    </v-layout>
    <v-btn large @click="submitSearch" v-show="selectedQuery">Search</v-btn>
  </v-card>
</template>


<script>
import axios from "axios";
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      fullName: "",
      phone: "",
      patient_id: "",
      selectedQuery: "",
      rules: {
        required: v => !!v || `This field is required`
      },
      queryType: ["firstName", "lastName", "fullName", "phone", "patient_id"],
      textFields: [
        {
          label: "First Name",
          name: "firstName",
          type: "text"
        },
        {
          label: "Last Name",
          name: "lastName",
          type: "text"
        },
        {
          label: "Full Name",
          name: "fullName",
          type: "text"
        },
        {
          label: "Phone Number",
          name: "phone",
          type: "number"
        },
        {
          label: "Patient Id",
          name: "patient_id",
          type: "text"
        }
      ]
    };
  },
  methods: {
    submitSearch() {
      if (this.$refs.searchPatientForm.validate()) {
        let vm = this;
        let selectedValue = this[vm.selectedQuery];

        axios
          .get(
            `http://localhost:3000/patient/search?queryName=${
              vm.selectedQuery
            }&value=${selectedValue}`
          )
          .then(res => {
            console.log(res.data);
          })
          .catch(err => console.log(err));
      }
    },
    textFieldToShow(fieldLabel) {
      return this.selectedQuery === fieldLabel ? true : false;
    }
  }
};
</script>
