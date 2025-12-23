// hooks/useAuth.ts
import { useQuery } from "@tanstack/react-query";
import { api } from "@/api";

const fetchMe = async () => {
  const res = await api.get("/auth/me");
  return res.data;
};

export const useAuth = () => {
  return useQuery({
    queryKey: ["auth", "me"],
    queryFn: fetchMe,
    retry: false,            // 🔴 important
    staleTime: 5 * 60 * 1000 // cache for 5 mins
  });
};
