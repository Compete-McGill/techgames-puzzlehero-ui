import axios from "axios";

const url = process.env.VUE_APP_PUZZLEHERO_API_URL || "http://34.95.25.177/";
export const puzzleHeroApi = axios.create({
  baseURL: url
});
