import axios from "axios";
import queryString from "query-string";

export const axiosInstance = axios.create({
  baseURL: "https://flashcard.gametamin-games.com:10110",
  headers: { crossDomain: true, "Content-Type": "application/json" },
  paramsSerializer: (params: Record<string, string>) =>
    queryString.stringify(params),
});
