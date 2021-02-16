<template>
  <div class="scores">
    <h1>Scores</h1>
    <br />
    <v-data-table
      :headers="headers"
      :items="scores"
      items-per-page="100"
      sort-by="total"
      sort-desc="true"
      class="elevation-1"
    ></v-data-table>
  </div>
</template>

<script>
import { puzzleHeroApi } from "@/api/puzzleHero";

export default {
  name: "Scores",
  data() {
    return {
      headers: [
        {
          text: "Team name",
          value: "name"
        },
        {
          text: "Puzzle hero score",
          value: "puzzleScore"
        },
        {
          text: "Other challenges score",
          value: "otherScore"
        },
        {
          text: "Total score",
          value: "total"
        }
      ],
      scores: []
    };
  },
  components: {},
  mounted: async function() {
    console.log("Scores mounted");
    const response = await puzzleHeroApi.get("/teams");
    for (const team of response.data) {
      const newScore = {
        name: team.name,
        puzzleScore: team.score,
        otherScore: team.otherScore,
        total: team.score + team.otherScore
      };
      this.scores.push(newScore);
    }
  }
};
</script>
