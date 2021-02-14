<template>
  <div class="teams">
    <v-container class="my-5">
      <h1 class="my-5 display-1 font-weight-light">Teams</h1>

      <!-- user already in a team -->
      <div v-if="$store.state.user.teamId && $store.state.team">
        <v-row class="my-5 py-5">
          <v-col cols="0" sm="3"></v-col>

          <v-col cols="12" sm="6" class="my-5 py-5">
            <h2 class="my-5 display-1 font-weight-light">Current memebers</h2>
            <ul>
              <li v-for="(email, i) in members" :key="i">{{ email }}</li>
            </ul>

            <h2 class="my-5 display-1 font-weight-light">Add a new memeber</h2>
            <v-text-field
              type="email"
              name="email"
              class="mb-3"
              label="Email"
              width="50%"
              :rules="emailRules"
              @keyup.enter="addUser"
              v-model="newUserEmail"
              prepend-icon="mdi-account"
              required
            ></v-text-field>

            <div class="primary--text" v-html="error"></div>

            <v-btn
              text
              :loading="loading"
              @click="addUser"
              class="background mx-0 mt-3 primary--text text-uppercase"
              >add</v-btn
            >
          </v-col>

          <v-col cols="0" sm="3"></v-col>
        </v-row>
      </div>

      <!-- user not in a team -->
      <div v-else>Team exists</div>
    </v-container>
  </div>
</template>

<script>
import { puzzleHeroApi } from "@/api/puzzleHero";

export default {
  name: "Teams",
  data() {
    return {
      newUserEmail: "",
      members: this.$store.state.team?.users,
      error: "",
      loading: false,
      emailRules: [
        v =>
          !v ||
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "E-mail must be valid"
      ]
    };
  },

  methods: {
    async addUser() {
      try {
        this.loading = true;
        const { data } = await puzzleHeroApi.post(
          `/teams/${this.$store.state.user.teamId}/addUser`,
          {
            email: this.newUserEmail
          },
          {
            headers: {
              "x-auth": this.$store.state.token
            }
          }
        );

        this.$store.dispatch("setTeam", data);
        this.members = data.users;
      } catch (err) {
        this.error = err.response.data.message;
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>
