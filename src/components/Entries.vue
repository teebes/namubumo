<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="10" md="9" lg="8" xl="6">
        <v-carousel>
          <v-carousel-item v-for="(entry, i) in entries" :key="entry.url">
            <v-sheet :color="colors[i]" height="100%" tile>
              <v-row class="fill-height" align="center" justify="center">
                <div class="slide">
                  <a :href="entry.url" class="display-2 white--text">{{ entry.title }}</a>
                  <!-- <div class="display-3">{{ entry.title }}</div> -->
                  <div class="display-1">By {{ entry.name }}</div>
                  <div class="display-1 mt-4">{{ entry.description }}</div>
                </div>
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import json from "@/data/entries.json";

export default {
  name: "Entries",
  data: () => {
    return {
      entries: json,
      colors: ["primary", "secondary", "yellow darken-2", "red", "orange"]
    };
  }
};
</script>

<style>
.slide {
  padding: 30px;
  max-width: 550px;
}
</style>