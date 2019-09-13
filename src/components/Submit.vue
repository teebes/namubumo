<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="9" md="6">
        <v-card class="elevation-12" v-if="submitted">
          <v-toolbar color="green" dark flat>
            <v-toolbar-title>Success!</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            You have successfully submitted your Namubumo entry. Once your entry is approved, it will be added to the
            <router-link to="/entries">entries</router-link> section.
          </v-card-text>
        </v-card>
        <v-card class="elevation-12" v-else>
          <v-toolbar color="secondary" dark flat>
            <v-toolbar-title>Submit an Entry</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form ref="form">
              <v-text-field
                label="Your Name"
                prepend-icon="mdi-account-circle"
                v-model="name"
                required
                :rules="nameRules"
              ></v-text-field>
              <v-text-field
                label="Email Address"
                prepend-icon="mdi-email"
                v-model="email"
                :rules="emailRules"
              ></v-text-field>
              <v-text-field
                label="Game URL"
                prepend-icon="mdi-link-variant"
                v-model="url"
                required
                :rules="urlRules"
              ></v-text-field>
              <v-text-field
                label="Game Title"
                prepend-icon="mdi-format-title"
                v-model="title"
                required
                :rules="titleRules"
              ></v-text-field>
              <v-textarea
                label="Game Description"
                prepend-icon="mdi-card-text-outline"
                v-model="description"
              ></v-textarea>
            </v-form>
            <v-card-actions>
              <v-btn color="success" @click="onSubmit">Submit</v-btn>
            </v-card-actions>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "Submit",
  data() {
    return {
      valid: true,
      submitted: false,
      name: "",
      nameRules: [v => !!v || "Name is required"],
      email: "",
      emailRules: [
        v => !!v || "Email is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      url: "",
      urlRules: [
        v => !!v || "URL is required",
      ],
      title: "",
      titleRules: [v => !!v || "Title is required"],
      description: ""
    };
  },
  methods: {
    async onSubmit() {
      if (this.$refs.form.validate()) {
        const payload = {
          name: this.name,
          email: this.email,
          url: this.url,
          title: this.title
        };
        if (this.description) {
          payload.description = this.description;
        }        
        const resp = await axios.post(
          "https://writtenrealms.com:9000/api/v1/namu/submissions/",
          payload
        );
        this.submitted = true;
      }
    }
  }
};
</script>