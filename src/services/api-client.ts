import axios, { AxiosRequestConfig } from "axios";
export interface FetchResponse<T> {
  id: number;
  results: T[];
  next: string | null;
}
export interface Platforms {
  id: number;
  name: string;
  slug: string;
  
}
const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "b64c552882404bbc8d107fd968d50730",
  },
});

class APIClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint,config)
      .then((res) => res.data);
  };
}
export default APIClient;
