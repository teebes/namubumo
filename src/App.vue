<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>NaMuBuMo</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text rounded to="/">Home</v-btn>
      <v-btn text rounded to="/rules">Rules</v-btn>
      <v-btn text rounded to="/submit">Submit</v-btn>
    </v-app-bar>

    <v-content class="grey lighten-5">
      <router-view></router-view>
    </v-content>

    <v-footer color="primary lighten-1" padless>
      <v-row justify="center" no-gutters>
        <v-btn v-for="link in links" :key="link" color="white" text rounded class="my-2">{{ link }}</v-btn>
        <v-col class="footer-links primary lighten-2 py-4 text-center white--text" cols="12">
          <strong>
            <a href="https://mudcoders.com/" class="white--text">The Mud Coder's Guild</a>
            &amp;
            <a href="https://writtenrealms.com/" class="white--text">Written Realms</a>
          </strong>
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

<style>
.page-title {
  font-family: Ubuntu;
  font-size: 34px;
  font-weight: bold;
  margin-top: 80px;
  margin-bottom: 50px;
}

@media only screen and (max-width: 500px) {
  .page-title {
    font-size: 26px;
    margin: 32px 0;
  }
}
</style>
