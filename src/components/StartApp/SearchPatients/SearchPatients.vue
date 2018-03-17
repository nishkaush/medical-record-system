<template>
  <v-card flat>
    <v-layout justify-center>
      <v-flex xs12 md5 class="px-4 pt-3 pb-0">

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
    <v-btn class="mt-0 primary" @click="submitSearch" v-show="selectedQuery">Search</v-btn>
    <v-layout class="mt-3" v-if="showSearchResults===true">
      <v-flex xs12>
        <v-data-table
          :headers="headers"
          :items="searchResults"
          hide-actions
          class="elevation-1"
        >
          <template slot="items" slot-scope="props">
            <td>{{ props.item.patient_id }}</td>
            <td class="text-xs-center">{{ props.item.fullName }}</td>
            <td class="text-xs-center">{{ props.item.phone }}</td>
          </template>
          <template slot="no-data">
              {{noSearchResultsMessage}}
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>
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
      showSearchResults: false,
      noSearchResultsMessage: "Fetching Data, Please wait...",
      searchResults: [],
      headers: [
        { text: "Patient ID", value: "patient_id", align: "center" },
        { text: "Full Name", value: "fullName", align: "center" },
        { text: "Phone", value: "phone", align: "center" }
      ],
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
            if (res.data.length === 0) {
              vm.noSearchResultsMessage = "No Search Results";
            }
            vm.searchResults = res.data;
            vm.showSearchResults = true;
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
