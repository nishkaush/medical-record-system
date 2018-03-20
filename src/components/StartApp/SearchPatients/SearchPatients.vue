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

    <v-btn class="mt-0 primary" @click="submitSearch" :disabled="!selectedQuery">Search</v-btn>

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
            <td class="justify-center">
            <v-btn icon class="mx-0">
              <v-icon color="teal">edit</v-icon>
            </v-btn>
            <v-btn icon class="mx-0" @click="deletePatient(props.item.patient_id)">
              <v-icon color="red">delete</v-icon>
            </v-btn>
          </td>
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
      fakeActionProp: "",
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
        { text: "Phone", value: "phone", align: "center" },
        { text: "Actions", value: "fakeActionProp", align: "center" }
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
    deletePatient(id) {
      let vm = this;
      axios
        .get(`http://localhost:3000/patient/deletePatient/${id}`)
        .then(res => {
          if (res.data.affectedRows) {
            vm.searchResults = vm.searchResults.filter(
              e => e.patient_id !== id
            );
            if (vm.searchResults.length === 0) {
              vm.noSearchResultsMessage = "No results left";
            }
          }
        })
        .catch(err => console.log(err));
    },
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
            if (res.data.length === 0) {
              vm.noSearchResultsMessage = "No Results Found";
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
