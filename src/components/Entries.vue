<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="10" md="9" lg="8" xl="6">
        <v-carousel>
          <v-carousel-item v-for="entry in entries" :key="entry.url">
            <v-sheet color="secondary" height="100%" tile>
              <v-row class="fill-height" align="top" justify="center">
                <div class="slide d-flex flex-grow">
                  <div class="d-flex flex-column flex-grow" height="100%">
                    <div class="entry-title text-center mb-4">
                      <a
                        :href="entry.url"
                        class="entry-title white--text"
                        v-if="entry.url.startsWith('http://') || entry.url.startsWith('https://')"
                      >{{ entry.title }}</a>
                      <span v-else>{{ entry.title }}</span>
                    </div>
                    <div class="world-detail d-flex flex-column align-center">
                      <div class>By {{ entry.name }}</div>
                      <div class>
                        <a
                          :href="entry.url"
                          v-if="entry.url.startsWith('http://') || entry.url.startsWith('https://')"
                        >{{ entry.url }}</a>
                        <span v-else>{{ entry.url }}</span>
                      </div>
                    </div>
                    <div class="entry-description flex-grow mt-4">{{ entry.description }}</div>
                  </div>
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
.entry-title {
  font-family: Ubuntu;
  font-size: 48px;
  line-height: 55px;
}
.entry-title > a {
  text-decoration: none;
}
.entry-title > a:hover {
  text-decoration: underline;
}

.slide {
  padding: 30px;
  max-width: 550 px;
}
.slide > .overlay {
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px;
}
</style>