<template>
<v-form class="pt-4" ref="newPatientForm">
  <v-layout row wrap>
    <v-flex v-for="item in nameInfo" xs12 sm4 justify-center :key="item.label" class="px-4">
      <v-text-field 
        :label="item.label" 
        v-model="patientData[item.name]" 
        :rules="item.name!=='middleName'?[rules.required]:[()=>true]"
      >
      </v-text-field>
    </v-flex>
    <v-flex xs12 sm4 class="px-4">
      <v-text-field 
        name="phone" 
        label="Phone Number" 
        v-model="patientData.phone" 
        :rules="[rules.required]"
      >
      </v-text-field>
    </v-flex>

    <v-flex xs12 sm4 class="px-4">
      <v-menu
        ref="menu"
        :close-on-content-click="false"
        v-model="menu"
        full-width
        min-width="290px"
        :return-value.sync="patientData.dob"
      >
        <v-text-field
          slot="activator"
          label="Date of Birth"
          v-model="patientData.dob"
          readonly
          :rules="[rules.required]"
        ></v-text-field>
        <v-date-picker v-model="patientData.dob" no-title scrollable>
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
          <v-btn flat color="primary" @click="$refs.menu.save(patientData.dob)">OK</v-btn>
        </v-date-picker>
      </v-menu>
    </v-flex>

    <v-flex xs12 sm4 class="px-4">
      <v-text-field name="email" label="Email Address" v-model="patientData.email"></v-text-field>
    </v-flex>
    <v-flex xs12 sm8 md4 class="px-4">
      <v-text-field name="streetAddress" label="Street Address" v-model="patientData.streetAddress"></v-text-field>
    </v-flex>
    <v-flex xs12 sm4 md2 class="px-4">
      <v-text-field name="city" label="City" v-model="patientData.city" :rules="[rules.required]"></v-text-field>
    </v-flex>
    <v-flex xs12 sm4 md2 class="px-4">
      <v-text-field name="state" label="State" v-model="patientData.state" :rules="[rules.required]"></v-text-field>
    </v-flex>
    <v-flex xs12 sm4 md2 class="px-4">
      <v-text-field name="country" label="Country" v-model="patientData.country" :rules="[rules.required]"></v-text-field>
    </v-flex>
    <v-flex xs12 sm4 md2 class="px-4">
      <v-text-field name="postcode" label="Postcode" v-model="patientData.postcode" :rules="[rules.required]"></v-text-field>
    </v-flex>
    <v-flex xs12 md5 class="px-4">
      <v-text-field name="photoID" label="Photo ID Details" v-model="patientData.photoID" :rules="[rules.required]"></v-text-field>
    </v-flex>
    <v-flex xs12 sm6 md3 class="px-4">
      <v-select :items="genderOptions" label="Gender" v-model="patientData.gender"></v-select>
    </v-flex>
    <v-flex xs12 sm6 md4 class="px-4">
      <v-select :items="patientTypeArr" label="Patient Type" v-model="patientData.patientType" :rules="[rules.required]"></v-select>
    </v-flex>
    <v-btn @click="clear">Reset</v-btn>
    <v-spacer></v-spacer>
    <v-btn @click="submit">Submit</v-btn>
  </v-layout>
</v-form>

</template>

<script>
export default {
  data() {
    return {
      patientData: {
        firstName: "",
        middleName: "",
        lastName: "",
        phone: "",
        email: "",
        streetAddress: "",
        city: "",
        state: "",
        postcode: "",
        country: "",
        gender: "",
        dob: "",
        patientType: "",
        photoID: "",
        createdAt: Date.now()
      },
      rules: {
        required: v => !!v || "This field is required"
      },
      nameInfo: [
        { label: "First Name", name: "firstName" },
        { label: "Middle Name", name: "middleName" },
        { label: "Last Name", name: "lastName" }
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
      if (this.$refs.newPatientForm.validate()) {
        console.log(this.patientData);
      }
    }
  }
};
</script>
