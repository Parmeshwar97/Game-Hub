import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchResponse } from "../services/api-client";


interface Platforms {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => useQuery({
  queryKey: ["platforms"],
  queryFn: () => apiClient.get<FetchResponse<Platforms>>("/platforms/lists/parents").then((res) => res.data),
});

export default usePlatforms;
