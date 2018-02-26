<template>
  <v-app>
    <h1>{{title}}</h1>
    <hello-world></hello-world>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
export default {
  data() {
    return {
      title: "Hello Nishant"
    };
  },
  components: {
    "hello-world": HelloWorld
  },
  name: "App"
};
</script>
