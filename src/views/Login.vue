<template>
  <div class="login">
    <v-container class="my-5">
      <h1 class="my-5 display-1 font-weight-light">Login</h1>
      <v-row class="my-5 py-5">
        <v-col cols="0" sm="3"></v-col>

        <v-col cols="12" sm="6" class="my-5 py-5">
          <v-text-field
            type="email"
            name="email"
            class="mb-3"
            label="Email"
            width="50%"
            :rules="emailRules"
            @keyup.enter="login"
            v-model="user.email"
            prepend-icon="mdi-account"
            required
          ></v-text-field>

          <v-text-field
            type="password"
            name="password"
            class="mb-3"
            label="Password"
            width="50%"
            v-model="user.password"
            @keyup.enter="login"
            prepend-icon="mdi-key"
            required
          ></v-text-field>

          <div class="primary--text" v-html="error"></div>

          <v-btn
            text
            :loading="loading"
            @click="login"
            class="background mx-0 mt-3 primary--text text-uppercase"
            >login</v-btn
          >
        </v-col>

        <v-col cols="0" sm="3"></v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { puzzleHeroApi } from "@/api/puzzleHero";

export default {
  name: "Login",
  data() {
    return {
      error: "",
      loading: false,
      user: {
        email: "",
        password: ""
      },
      emailRules: [
        v =>
          !v ||
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "E-mail must be valid"
      ]
    };
  },
  methods: {
    async login() {
      this.loading = true;
      try {
        // make login request
        const { data } = await puzzleHeroApi.post("/users/login", {
          email: this.user.email,
          password: this.user.password
        });

        if (data.teamId) {
          const team = await puzzleHeroApi.get(`/teams/${data.teamId}`, {
            headers: {
              "x-auth": data.token
            }
          });

          this.$store.dispatch("setTeam", team.data);
        }
        // save user and token in store
        const user = {
          email: data.email,
          teamId: data.teamId
        };
        this.$store.dispatch("setToken", data.token);
        this.$store.dispatch("setUser", user);
        // go to home
        this.$router.push("/");
      } catch (err) {
        // print error to page and do nothing if login error
        this.error = err.response.data.message;
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>
