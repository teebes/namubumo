<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-card-title>Submit an Entry</v-card-title>
          <v-card-text>
            <v-form>
              <v-text-field label="Name" prepend-icon="mdi-account-circle"></v-text-field>
              <v-text-field label="Game URL" prepend-icon="mdi-link-variant"></v-text-field>
              <v-text-field label="Game Title" prepend-icon="mdi-format-title"></v-text-field>
              <v-textarea label="Game Description" prepend-icon="mdi-card-text-outline"></v-textarea>
            </v-form>
            <v-card-actions>
              <v-btn color="success">Submit</v-btn>
            </v-card-actions>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Submit"
};
</script>