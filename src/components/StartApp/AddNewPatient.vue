<template>
  <v-card>
        <v-form>
          <v-layout row wrap>
            <v-flex v-for="item in personalInfo" xs12 md4 offset-md1 :key="item.label">
              <v-text-field :label="item.label"></v-text-field>
            </v-flex>
          </v-layout>
      </v-form>
  </v-card>

</template>

<script>
export default {
  data() {
    return {
      personalInfo: [
        { label: "first name", name: "first" },
        { label: "second name", name: "second" },
        { label: "second name", name: "second" },
        { label: "second name", name: "second" }
      ]
    };
  }
};
</script>

