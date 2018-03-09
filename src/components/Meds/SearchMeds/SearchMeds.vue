<template>
  <v-card>
    <v-layout justify-center>
      <v-flex xs12 md8>
        <v-form class="pt-4 text-xs-center" ref="searchMedForm">
          <v-select 
            :items="medicineQuery" 
            label="Search By" 
            v-model="selectedQuery"
            :rules="[rules.required]"
          >
          </v-select>
          <v-text-field 
            label="Medicine Name" 
            name="medicineName" 
            v-if="selectedQuery.text==='Name'"
            v-model="medicineName"
            :rules="[rules.required]"
            type="text"
          >
          </v-text-field>
          <v-select 
            :items="medicineType" 
            v-model="selectedType" 
            label="Choose Medicine Type" 
            v-if="selectedQuery.text==='Type'"
            :rules="[rules.required]"
          >
          </v-select>
          <v-btn class="primary" v-if="selectedQuery.text" @click="submitForm">Search</v-btn>
        </v-form>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      selectedQuery: {},
      medicineName: "",
      selectedType: "",
      medicineQuery: [{ text: "Name" }, { text: "Type" }],
      medicineType: [
        { text: "Tablets" },
        { text: "Ointment" },
        { text: "Syrups or Drops" }
      ],
      rules: {
        required: v => !!v || "This field is required"
      }
    };
  },
  methods: {
    submitForm() {
      if (this.$refs.searchMedForm.validate()) {
        console.log(this.selectedQuery, this.medicineName, this.selectedType);
      }
    }
  }
};
</script>
