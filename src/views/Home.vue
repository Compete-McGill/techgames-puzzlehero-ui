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
        </v-row>

        <v-row>
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
        </v-row>

        <v-row>
          <v-img src="@/assets/schedule.png" contain height="400px">
            <v-card-title>Schedule</v-card-title>
          </v-img>
        </v-row>

        <v-row>
          <v-card-title>Event Descriptions</v-card-title>
        </v-row>
        <v-row>
          <v-col>
            <v-card-subtitle class="text-h6 font-weight-bold"
              >Backend Challenge</v-card-subtitle
            >
            <v-card-text>
              <p class="font-weight-bold">1-3 Participants</p>
              <p class="font-weight-medium">Time: 12:15PM - 2:15PM EST</p>
              <p>
                Who messed up the rebase?! Welp, we’ve lost half of our backend!
                Don’t worry, we have the specs but the demo’s in 2 hours… Have
                what it takes to finish up those broken endpoints and save our
                a**es?!
              </p>
            </v-card-text>
          </v-col>
          <v-col>
            <v-card-subtitle class="text-h6 font-weight-bold"
              >Functional Programming</v-card-subtitle
            >
            <v-card-text>
              <p class="font-weight-bold">1-2 Participants</p>
              <p class="font-weight-medium">Time: 12:15PM - 1:15PM EST</p>
              <p>
                Imagine a world with no place for mainstream code monkeys; A
                world where laziness is embraced, yet shown to be functional.
                Step back from “crowd thinking” and come flex your higher order
                functions!
              </p>
            </v-card-text> </v-col
          ><v-col>
            <v-card-subtitle class="text-h6 font-weight-bold"
              >Mobile Dev Challenge</v-card-subtitle
            >
            <v-card-text>
              <p class="font-weight-bold">1-2 Participants</p>
              <p class="font-weight-medium">Time: 3:15PM - 5:00PM EST</p>
              <p>
                Given a simple app concept at the beginning of the challenge,
                build what you can in the given time and provide a short demo of
                your creation. The design is completely up to you, the most
                usable app wins!
              </p>
            </v-card-text>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-card-subtitle class="text-h6 font-weight-bold"
              >Xtreme Theory</v-card-subtitle
            >
            <v-card-text>
              <p class="font-weight-bold">1-3 Participants</p>
              <p class="font-weight-medium">Time: 3:15PM - 4:15PM EST</p>
              <p>
                1 hour of theoretical questions where your only tool is your
                algorithmic expertise and problem solving ability. Make your
                COMP 250 Profs proud!
              </p>
            </v-card-text> </v-col
          ><v-col>
            <v-card-subtitle class="text-h6 font-weight-bold"
              >Stack Overflow</v-card-subtitle
            >
            <v-card-text>
              <p class="font-weight-bold">1 Participant</p>
              <p class="font-weight-medium">Time: 4:15PM - 5:00PM EST</p>
              <p>
                Rapid fire coding questions - sent forth the best speed demon
                amongst you to solve the most number of questions possible in a
                short time frame.
              </p>
            </v-card-text>
          </v-col>
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
