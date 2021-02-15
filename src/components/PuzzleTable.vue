<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">ID</th>
          <th class="text-left">Category</th>
          <th class="text-left">Description</th>
          <th class="text-left">Your Answer</th>
          <th class="text-left"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in puzzleList" :key="item.name">
          <td>{{ item.title }}</td>
          <td>{{ item.category }}</td>
          <td>{{ item.description }}</td>
          <td>
            <v-text-field v-model="item.answer"></v-text-field>
          </td>
          <td><v-btn @click="() => submit(item)">Submit</v-btn></td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
import { puzzleHeroApi } from "@/api/puzzleHero";

export default {
  props: {
    puzzleList: Array,
    onSuccess: Function
  },
  data() {
    return {};
  },
  methods: {
    submit: async function(puzzle) {
      const response = await puzzleHeroApi.post(
        `/puzzles/${puzzle._id}/checkAnswer`,
        {
          teamId: this.$store.state.user.teamId,
          answer: puzzle.answer
        }
      );
      console.log(response.data);
      if (response.data.success == true) {
        this.$store.dispatch("setSnackbar", {
          showSnackbar: true,
          msg: "Correct answer!",
          color: "green"
        });
        this.onSuccess();
      } else {
        this.$store.dispatch("setSnackbar", {
          showSnackbar: true,
          msg: "Incorrect answer :( try again",
          color: "red"
        });
      }
    }
  }
};
</script>
