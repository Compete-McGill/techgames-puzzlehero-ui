import axios from "axios";

const url = process.env.VUE_APP_PUZZLEHERO_API_URL || "http://localhost:3000";
export const puzzleHeroApi = axios.create({
  baseURL: url
});
