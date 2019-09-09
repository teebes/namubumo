<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>NaMuBuMo</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text rounded to="/">Home</v-btn>
      <v-btn text rounded to="/entries">Entries</v-btn>
      <v-btn text rounded to="/rules">Rules</v-btn>
      <v-btn text rounded to="/submit">Submit</v-btn>
    </v-app-bar>

    <!-- <router-link to="/login">Login</router-link> -->
    <v-content>
      <router-view></router-view>
    </v-content>

    <v-footer color="primary lighten-1" padless>
      <v-row justify="center" no-gutters>
        <v-btn v-for="link in links" :key="link" color="white" text rounded class="my-2">{{ link }}</v-btn>
        <v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
          <strong>Written Realms &amp; The Mud Coder's Guild</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    links: []
  })
};
</script>
