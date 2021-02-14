<template>
  <div class="puzzles">
    <h1>Puzzles!</h1>
    <p>User: {{ this.$store.state }}</p>
    <ul>
      <li v-for="(puzzle, index) in puzzleList" :key="index">
        <p>{{ puzzle }}</p>
      </li>
    </ul>
    <PuzzleTable :puzzleList="puzzleList" />
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
      puzzleList: ["test1", "test2"]
    };
  },
  mounted: async function() {
    console.log("Puzzles mounted");
    const response = await puzzleHeroApi.get("/puzzles");
    console.log(response.data);
    this.puzzleList = response.data;
  }
};
</script>
