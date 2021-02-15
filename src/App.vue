<template>
  <v-app>
    <app-navbar />
    <v-main class="ma-5">
      <router-view></router-view>
    </v-main>
    <v-snackbar
      v-model="$store.state.snackbarInfo.showSnackbar"
      :color="$store.state.snackbarInfo.color"
    >
      {{ $store.state.snackbarInfo.msg }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="white"
          text
          v-bind="attrs"
          @click="
            $store.dispatch('setSnackbar', {
              showSnackbar: false,
              msg: 'aaaaaaaaaa',
              color: 'red'
            })
          "
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-app>
</template>

<script>
import Navbar from "@/components/NavBar";

export default {
  name: "App",
  components: {
    "app-navbar": Navbar
  },

  data: () => ({}),

  mounted: function() {
    this.$store.dispatch("setSnackbar", {
      showSnackbar: false,
      msg: "",
      color: "green"
    });
  }
};
</script>
