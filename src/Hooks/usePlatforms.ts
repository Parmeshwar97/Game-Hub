import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchResponse, Platforms } from "../services/api-client";


const usePlatforms = () => useQuery({
  queryKey: ["platforms"],
  queryFn: () => apiClient.get<FetchResponse<Platforms>>("/platforms/lists/parents").then((res) => res.data),
});

export default usePlatforms;
