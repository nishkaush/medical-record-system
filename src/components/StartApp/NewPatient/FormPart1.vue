<template>
<v-form class="pt-4" ref="newPatientForm">
  <v-layout row wrap>
    <v-flex v-for="item in nameInfo" xs12 md4 justify-center :key="item.label" class="pl-5 pr-5">
      <v-text-field :label="item.label" v-model="item.modelProp"></v-text-field>
    </v-flex>
    <v-flex xs12 sm4 class="pl-5 pr-5">
      <v-text-field name="phone" label="Phone Number" v-model="phone"></v-text-field>
    </v-flex>

    <v-flex xs12 sm4 class="pl-5 pr-5">
      <v-menu
        ref="menu"
        :close-on-content-click="false"
        v-model="menu"
        offset-y
        full-width
        :nudge-right="40"
        min-width="290px"
        :return-value.sync="date"
      >
        <v-text-field
          slot="activator"
          label="Date of Birth"
          v-model="date"
          readonly
        ></v-text-field>
        <v-date-picker v-model="date" no-title scrollable>
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
          <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
        </v-date-picker>
      </v-menu>
    </v-flex>

    <v-flex xs12 sm4 class="pl-5 pr-5">
      <v-text-field name="email" label="Email Address" v-model="email"></v-text-field>
    </v-flex>
    <v-flex xs12 md5 class="pl-5 pr-5">
      <v-text-field name="address" label="Street Address" v-model="address"></v-text-field>
    </v-flex>
    <v-flex xs12 md2 class="pl-5 pr-5">
      <v-text-field name="address" label="City" v-model="address"></v-text-field>
    </v-flex>
    <v-flex xs12 md2 class="pl-5 pr-5">
      <v-text-field name="address" label="State" v-model="address"></v-text-field>
    </v-flex>
    <v-flex xs12 md1 class="pl-5 pr-5">
      <v-text-field name="address" label="Postcode" v-model="address"></v-text-field>
    </v-flex>
    <v-flex xs12 md1 class="ml-5">
      <v-text-field name="address" label="Country" v-model="address"></v-text-field>
    </v-flex>
    <v-flex xs12 md6 class="pl-5 pr-5">
      <v-text-field name="photoID" label="Photo ID Details" v-model="photoID"></v-text-field>
    </v-flex>

    <v-flex xs12 md3 class="pl-5 pr-5">
      <v-select :items="genderOptions" label="Gender" v-model="gender"></v-select>
    </v-flex>
    <v-flex xs12 md3 class="pl-5 pr-5">
      <v-select :items="patientTypeArr" label="Patient Type" v-model="patientType"></v-select>
    </v-flex>
    <v-btn @click="clear">Reset Part 1</v-btn>
    <v-spacer></v-spacer>
    <v-btn @click="submit">Next</v-btn>
  </v-layout>
</v-form>

</template>

<script>
export default {
  data() {
    return {
      firstName: "",
      middleName: "",
      lastName: "",
      phone: "",
      email: "",
      address: "",
      gender: "",
      dob: "",
      patientType: "",
      photoID: "",
      nameInfo: [
        { label: "First Name", name: "firstName", modelProp: this.firstName },
        {
          label: "Middle Name",
          name: "middleName",
          modelProp: this.middleName
        },
        { label: "Last Name", name: "lastName", modelProp: this.lastName }
      ],
      genderOptions: [{ text: "Male" }, { text: "Female" }, { text: "Other" }],
      patientTypeArr: [
        { text: "Ante Natal Care (ANC)" },
        { text: "Post Natal Care (PNC)" },
        { text: "Above Poverty Line (ABL)" },
        { text: "Below Poverty Line (BPL)" },
        { text: "Child (under 12)" },
        { text: "Outreach Camp (OR)" },
        { text: "Special Outreach Camp (SOR)" }
      ],
      menu: false,
      date: ""
    };
  },
  methods: {
    clear() {
      this.$refs.newPatientForm.reset();
    },
    submit() {
      console.log("all good");
    }
  }
};
</script>
