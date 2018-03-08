<template>
  <v-card>
    <form-part-one></form-part-one>
    <!-- <v-form class="pt-4" ref="newPatientForm">
      
      <v-divider></v-divider>
      <v-btn @click="clear">Reset</v-btn>
    </v-form> -->
  </v-card>

</template>

<script>
import FormPartOne from "./FormPart1.vue";
export default {
  data() {
    return {};
  },
  methods: {
    // clear() {
    //   console.log("this.$options.data is", this.$options.data);
    //   Object.assign(this.$data, this.$options.data);
    //   // this.$refs.newPatientForm.reset();
    // }
  },
  components: {
    "form-part-one": FormPartOne
  }
};
</script>

