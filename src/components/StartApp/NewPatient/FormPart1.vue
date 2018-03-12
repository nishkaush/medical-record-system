<template>
<v-form class="pt-4" ref="newPatientForm">
  <v-layout row wrap v-if="successfulRequest===false">
    <v-flex v-for="item in nameInfo" xs12 sm4 justify-center :key="item.label" class="px-4">
      <v-text-field 
        :label="item.label" 
        v-model="patientData[item.name]" 
        :rules="item.name!=='middleName'?[rules.required]:[()=>true]"
        :required="item.name!=='middleName'?true:false"
      >
      </v-text-field>
    </v-flex>
    <v-flex xs12 sm4 class="px-4">
      <v-text-field 
        name="phone" 
        label="Phone Number" 
        v-model="patientData.phone" 
        :rules="[rules.required]"
        type="number"
        required
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
          required
        ></v-text-field>
        <v-date-picker v-model="patientData.dob" no-title scrollable>
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
          <v-btn flat color="primary" @click="$refs.menu.save(patientData.dob)">OK</v-btn>
        </v-date-picker>
      </v-menu>
    </v-flex>

    <v-flex xs12 sm4 class="px-4">
      <v-text-field name="email" label="Email Address" v-model="patientData.email" type="email"></v-text-field>
    </v-flex>
    <v-flex xs12 sm8 md4 class="px-4">
      <v-text-field name="streetAddress" label="Street Address" v-model="patientData.streetAddress"></v-text-field>
    </v-flex>
    <v-flex xs12 sm4 md2 class="px-4">
      <v-text-field name="city" label="City" v-model="patientData.city" :rules="[rules.required]" required></v-text-field>
    </v-flex>
    <v-flex xs12 sm4 md2 class="px-4">
      <v-text-field name="state" label="State" v-model="patientData.state" :rules="[rules.required]" required></v-text-field>
    </v-flex>
    <v-flex xs12 sm4 md2 class="px-4">
      <v-text-field name="country" label="Country" v-model="patientData.country" :rules="[rules.required]" required></v-text-field>
    </v-flex>
    <v-flex xs12 sm4 md2 class="px-4">
      <v-text-field name="postcode" label="Postcode" v-model="patientData.postcode" :rules="[rules.required]" required></v-text-field>
    </v-flex>
    <v-flex xs12 md5 class="px-4">
      <v-text-field name="photoID" label="Photo ID Details" v-model="patientData.photoID" :rules="[rules.required]" required></v-text-field>
    </v-flex>
    <v-flex xs12 sm6 md3 class="px-4">
      <v-select :items="genderOptions" label="Gender" v-model="patientData.gender"></v-select>
    </v-flex>
    <v-flex xs12 sm6 md4 class="px-4">
      <v-select :items="patientTypeArr" label="Patient Type" v-model="patientData.patientType" :rules="[rules.required]" required></v-select>
    </v-flex>
    <v-btn @click="clear">Reset</v-btn>
    <v-spacer></v-spacer>
    <v-btn @click="submit">Submit</v-btn>
  </v-layout>
  <v-layout v-else>
    <v-flex class="pb-5">
      <v-icon x-large dark color="green">check_circle</v-icon>
      <h2>Successfully Added {{result.firstName}} {{result.lastName}}</h2>
      <h3>{{result.firstName}}'s ID is {{result.patient_id}}</h3>
      <v-btn class="primary mt-4">Add Prescription for {{result.firstName}}</v-btn>
      <v-btn class="primary mt-4" @click="restartAddPatient">Add Another Patient</v-btn>
    </v-flex>
  </v-layout>
</v-form>

</template>

<script>
import axios from "axios";
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
        photoID: ""
      },
      rules: {
        required: v => !!v || "This field is required"
      },
      nameInfo: [
        { label: "First Name", name: "firstName" },
        { label: "Middle Name", name: "middleName" },
        { label: "Last Name", name: "lastName" }
      ],
      genderOptions: ["Male", "Female", "Other"],
      patientTypeArr: [
        "Ante Natal Care (ANC)",
        "Post Natal Care (PNC)",
        "Above Poverty Line (ABL)",
        "Below Poverty Line (BPL)",
        "Child (under 12)",
        "Outreach Camp (OR)",
        "Special Outreach Camp (SOR)"
      ],
      menu: false,
      date: "",
      successfulRequest: false,
      result: {
        firstName: "",
        lastName: "",
        patient_id: ""
      }
    };
  },
  methods: {
    clear() {
      this.$refs.newPatientForm.reset();
    },
    submit() {
      let vm = this;
      if (this.$refs.newPatientForm.validate()) {
        axios
          .post("http://localhost:3000/patient/addNewPatient", vm.patientData)
          .then(res => {
            console.log(res.data);
            Object.assign(vm.result, res.data);
            vm.successfulRequest = true;
          })
          .catch(err => console.log(err));
      }
    },
    restartAddPatient() {
      let vm = this;
      this.successfulRequest = false;
      Object.keys(vm.patientData).forEach(e => {
        vm.patientData[e] = "";
      });
    }
  }
};
</script>
