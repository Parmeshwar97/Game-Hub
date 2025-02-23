import axios from "axios";
export interface FetchResponse<T> {
  id: number;
  results: T[];
}
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "b64c552882404bbc8d107fd968d50730",
  },
});
