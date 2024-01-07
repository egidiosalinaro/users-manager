"use client";

import { useState } from "react";
import { toast } from "react-hot-toast";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";

const useDeleteUser = () => {
  const [isLoading, setIsLoading] = useState(false);
  const supabaseClient = useSupabaseClient();
  const router = useRouter();

  const deleteUser = async (customerId: string, status: string) => {
    setIsLoading(true);
    const now = new Date().toISOString();

    const { error } = await supabaseClient
      .from("users")
      .update({ deleted: status, last_modified: now })
      .eq("id", customerId);

    setIsLoading(false);

    if (error) {
      toast.error(`Error ${status === "y" ? "deleting" : "restoring"} user`);
      return false;
    } else {
      router.refresh();
      toast.success(
        `User successfully ${status === "y" ? "deleted" : "restored"}`
      );
      return true;
    }
  };

  return { deleteUser, isLoading };
};

export default useDeleteUser;
