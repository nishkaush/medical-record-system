<template>

  <v-layout>
    <v-flex>
      <v-toolbar dark color="blue">
        <v-toolbar-side-icon 
        @click="showMobileMenu=true" 
        class="hidden-md-and-up">
        </v-toolbar-side-icon>

        <v-toolbar-title @click="$router.push('/start-app')">Medical Record System</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn 
            v-for="item in menuItems" 
            :key="item.name" flat 
            :to="item['link']"
          >
          {{item.name}}
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>



    <v-navigation-drawer v-model="showMobileMenu" absolute temporary>
      <v-list>
        <v-list>
          <v-list-tile>
            <v-list-tile-title>
              <h1 class="pl-2">Menu Options</h1>
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
        <v-divider></v-divider>
        <v-list-tile v-for="item in menuItems" :key="item.name" :to="item['link']">
          <v-list-tile-action class="pl-3">{{ item.name }}</v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    </v-flex>
  </v-layout>

</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        { name: "Patients", link: "/start-app" },
        { name: "Medicines", link: "/meds" },
        { name: "Tests", link: "/tests" },
        { name: "Reports", link: "/reports" }
      ],
      items: ["lol", "lmao"],
      showMobileMenu: false
    };
  }
};
</script>
