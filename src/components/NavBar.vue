<!-- TODO: Implement logout functionality + conditional sign up and login buttons -->
<template>
  <nav>
    <v-app-bar app class="background">
      <v-app-bar-nav-icon
        v-if="mobileView"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-btn icon router to="/" color="white" class="ml-3">
        <v-icon x-large>$vuetify.icons.cp-logo</v-icon>
      </v-btn>

      <v-toolbar-title class="text-uppercase black--text">
        <span class="font-weight-light display-1">Tech Games</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <template v-if="!mobileView">
        <v-btn
          text
          tile
          router
          to="/"
          min-height="115%"
          class="offset-y primary--text"
          >home</v-btn
        >

        <v-btn
          text
          tile
          router
          to="/puzzles"
          min-height="115%"
          v-if="$store.state.isLoggedIn && $store.state.user.teamId"
          class="offset-y primary--text"
          >puzzles</v-btn
        >

        <v-btn
          text
          tile
          router
          to="/scores"
          min-height="115%"
          v-if="$store.state.isLoggedIn && $store.state.user.teamId"
          class="offset-y primary--text"
          >scores</v-btn
        >

        <v-btn
          text
          tile
          router
          to="/teams"
          min-height="115%"
          v-if="$store.state.isLoggedIn"
          class="offset-y primary--text"
          >team</v-btn
        >

        <v-btn
          text
          tile
          router
          to="/login"
          min-height="115%"
          v-if="!$store.state.isLoggedIn"
          class="offset-y primary--text"
          >login</v-btn
        >

        <v-btn
          text
          tile
          router
          to="/signup"
          min-height="115%"
          v-if="!$store.state.isLoggedIn"
          class="offset-y primary--text"
          >register</v-btn
        >
      </template>
      <v-menu offset-y v-if="$store.state.isLoggedIn">
        <template v-slot:activator="{ on }">
          <v-btn
            text
            v-on="on"
            min-height="115%"
            class="offset-y primary--text"
          >
            <v-icon>mdi-account</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in profileDropdownItems"
            :key="index"
            class="ma-0 pa-0"
          >
            <v-btn router text block :to="item.link" class="primary--text">
              {{ item.title }}
            </v-btn>
          </v-list-item>
          <v-list-item class="ma-0 pa-0">
            <v-btn text block @click="logout()" class="primary--text"
              >Logout</v-btn
            >
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list dense nav>
        <v-list-item-group active-class="offset-y primary--text">
          <v-list-item to="/">
            <v-list-item-title class="offset-y primary--text"
              >HOME</v-list-item-title
            >
          </v-list-item>

          <v-list-item v-if="$store.state.isLoggedIn" to="/puzzles">
            <v-list-item-title class="offset-y primary--text"
              >PUZZLES</v-list-item-title
            >
          </v-list-item>

          <v-list-item to="/scores">
            <v-list-item-title class="offset-y primary--text"
              >SCORES</v-list-item-title
            >
          </v-list-item>

          <v-list-item v-if="$store.state.isLoggedIn" to="/teams">
            <v-list-item-title class="offset-y primary--text"
              >TEAM</v-list-item-title
            >
          </v-list-item>

          <v-list-item v-if="!$store.state.isLoggedIn" to="/login">
            <v-list-item-title class="offset-y primary--text"
              >LOGIN</v-list-item-title
            >
          </v-list-item>

          <v-list-item v-if="!$store.state.isLoggedIn" to="/signup">
            <v-list-item-title class="offset-y primary--text"
              >REGISTER</v-list-item-title
            >
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  name: "NavBar",

  data() {
    return {
      drawer: false,
      profileDropdownItems: []
    };
  },

  watch: {
    group() {
      this.drawer = false;
    }
  },

  computed: {
    mobileView() {
      return this.$vuetify.breakpoint.smAndDown;
    }
  },

  methods: {
    logout() {
      this.$store.dispatch("setToken", null);
      this.$store.dispatch("setUser", null);
      this.$router.push("/login");
    }
  }
};
</script>
