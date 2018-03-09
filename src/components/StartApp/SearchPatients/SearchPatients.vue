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
            v-if="textFieldToShow(item.label)"
            required
            :rules="[rules.required]"
          >
          </v-text-field>
          <v-text-field label="Full Name" name="fullName" v-model="fullName" v-if="selectedQuery.text==='Full Name & Phone'" required :rules="[rules.required]"></v-text-field>
          <v-text-field label="Phone Number" name="phone" v-model="phone" v-if="selectedQuery.text==='Full Name & Phone'" required :rules="[rules.required]"></v-text-field>
        </v-form>

      </v-flex>
    </v-layout>
    <v-btn large @click="submitSearch" v-show="selectedQuery.text">Search</v-btn>
  </v-card>
</template>


<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      fullName: "",
      phone: "",
      patientId: "",
      selectedQuery: {},
      rules: {
        required: v => !!v || `This field is required`
      },
      queryType: [
        { text: "First Name" },
        { text: "Last Name" },
        { text: "Full Name" },
        { text: "Phone Number" },
        { text: "Full Name & Phone" },
        { text: "Patient Id" }
      ],
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
          name: "patientId",
          type: "text"
        }
      ]
    };
  },
  methods: {
    submitSearch() {
      if (this.$refs.searchPatientForm.validate()) {
        console.log("Send axios request from here");
      }
    },
    textFieldToShow(fieldLabel) {
      return this.selectedQuery.text === fieldLabel ? true : false;
    }
  }
};
</script>
