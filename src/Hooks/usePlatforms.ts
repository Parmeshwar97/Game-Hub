import { useQuery } from "@tanstack/react-query";
import APIClient, {  Platforms } from "../services/api-client";

const apiClient = new APIClient<Platforms>("/platforms/lists/parents");
const usePlatforms = () => useQuery({
  queryKey: ["platforms"],
  queryFn: apiClient.getAll,   
  staleTime: 24 * 60 * 60 * 1000,
});

export default usePlatforms;
