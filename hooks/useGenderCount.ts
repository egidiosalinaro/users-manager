"use client";

import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import useUserUpdateStore from "./useUserUpdate";

const useGenderCount = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [counts, setCounts] = useState({ male: 0, female: 0 });
  const supabaseClient = useSupabaseClient();
  const router = useRouter();
  const { userUpdateCount } = useUserUpdateStore();

  const fetchCount = async (gender: string) => {
    setIsLoading(true);

    const { data, error, count } = await supabaseClient
      .from("users")
      .select("*", { count: "exact" })
      .eq("gender", gender);

    setIsLoading(false);

    if (error) throw error;
    router.refresh();
    return count;
  };

  const fetchCounts = async () => {
    try {
      const maleCount = await fetchCount("m");
      const femaleCount = await fetchCount("f");
      setCounts({ male: maleCount ?? 0, female: femaleCount ?? 0 });
    } catch (error) {
      toast.error("Error fetching gender counts");
    }
  };

  useEffect(() => {
    fetchCounts();
  }, [userUpdateCount]);

  return { counts };
};

export default useGenderCount;
