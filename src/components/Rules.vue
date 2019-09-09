<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="9" md="6">
        <v-card class="elevation-12">
          <v-toolbar color="secondary" dark flat>
            <v-toolbar-title>Rules</v-toolbar-title>
          </v-toolbar>

          <v-card-text>
            <div class="display-1">100 rooms</div>
            <div>Write a world with at least 100 rooms, each containing a name and description.</div>

            <v-divider class="my-4"></v-divider>

            <div class="display-1">10 Mobs</div>
            <div class>Populate your world with at least 10 mobs.</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Rules"
};
</script>