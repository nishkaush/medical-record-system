<template>
  <v-app>
    <my-header v-if="$route.path!=='/'"></my-header>
    <router-view></router-view>
  </v-app>
</template>

<script>
import Header from "./components/Header/Header.vue";
export default {
  components: {
    "my-header": Header
  },
  name: "App"
};
</script>
