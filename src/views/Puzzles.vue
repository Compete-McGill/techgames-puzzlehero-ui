<template>
  <div class="puzzles">
    <h1>Puzzles!</h1>
    <br />
    <h2>Team score: {{ teamPoints }}</h2>
    <br />
    <!-- <p>User: {{ this.$store.state }}</p> -->
    <!-- <ul>
      <li v-for="puzzle in puzzleList" :key="puzzle.title">
        <p>{{ puzzle }}</p>
      </li>
    </ul> -->
    <PuzzleTable :puzzleList="puzzleList" :onSuccess="load" />
  </div>
</template>

<script>
import { puzzleHeroApi } from "@/api/puzzleHero";
import PuzzleTable from "@/components/PuzzleTable";

export default {
  name: "Puzzles",
  components: {
    PuzzleTable
  },
  data() {
    return {
      teamPoints: 0,
      puzzleList: []
    };
  },
  methods: {
    load: async function() {
      const response = await puzzleHeroApi.get("/puzzles");
      this.puzzleList = [];
      const tempList = response.data;
      const response2 = await puzzleHeroApi.get(
        `/teams/${this.$store.state.user.teamId}`
      );
      this.$store.dispatch("setTeam", response2.data);
      this.teamPoints = response2.data.score;
      const teamsPuzzleList = response2.data.puzzles;
      for (let i = 0; i < teamsPuzzleList.length; i++) {
        if (teamsPuzzleList[i].completed == "UNLOCKED") {
          const index = tempList.findIndex(
            obj => obj._id == teamsPuzzleList[i].puzzleId
          );
          this.puzzleList.push(tempList[index]);
        }
      }
    }
  },
  mounted: async function() {
    console.log("Puzzles mounted");
    await this.load();
  }
};
</script>
