<template>
  <v-app>
    <app-navbar />
    <v-main class="ma-5">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "@/components/NavBar";

export default {
  name: "App",
  components: {
    "app-navbar": Navbar
  },

  data: () => ({
    //
  })
};
</script>
