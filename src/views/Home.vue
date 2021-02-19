<!-- TODO: implement Announcement card for Home view -->
<template>
  <v-container>
    <v-card class="pa-2">
      <v-container>
        <v-row>
          <v-card-title>Welcome to Tech Games!</v-card-title>
          <v-card-text class="grey--text">Sat, Feb 20 2021</v-card-text>
          <v-card-text>
            Tech Games is McGill's Olympics of practical Software Engineering
            and Computer Science challenges. Grab some friends, your favorite
            (caffeinated) drink and your IDE of choice and put your skills to
            the test from the comfort of your own homes for the chance for some
            cool prizes.
            <br />
            This year, join us on Gather Town: team up in groups of 3 to 5, rack
            up points by competing in challenges in Backend Development, Mobile
            Development, Functional Programming, Relay Programming, and Xtreme
            Theory (that's right, not just regular theory 😉) challenges, and
            flex your wits by grinding through waves of puzzles!
          </v-card-text>

          <v-card-title>HOW TO GET STARTED</v-card-title>
          <v-card-text>
            1. Make an account by registering with your <b>McGill email</b>.
            (Use the register button in the top right.)
            <br />
            2. If one of your teammates has already made a team, ask the creator
            of your team to add you to it in the "Team" tab! Otherwise, create a
            team in the "Team" tab.
            <i>There should be only one team created per group!</i>
            <br />
            3. All login info for Gather Town should be included in your
            registration confirmation email!
          </v-card-text>

          <v-card-text><h3>Schedule</h3></v-card-text>
          <v-card-text>TODO: add schedule image here</v-card-text>
          <v-img>
            <!-- TODO: Schedule image -->
          </v-img>
        </v-row>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  methods: {
    openLink(input) {
      switch (input) {
        case "discord":
          window.open("https://discord.gg/JhZQWPW", "_blank");
          break;
        default:
          break;
      }
    }
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
  font-weight: bold;
}
</style>
