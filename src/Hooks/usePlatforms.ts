import { useQuery } from "@tanstack/react-query";
import APIClient, { Platforms } from "../services/api-client";
import ms from 'ms';

const apiClient = new APIClient<Platforms>("/platforms/lists/parents");
const usePlatforms = () => useQuery({
  queryKey: ["platforms"],
  queryFn: apiClient.getAll,   
  staleTime: ms("24h"),
});

export default usePlatforms;
