"use client";

import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { FaUserAlt } from "react-icons/fa";
import toast from "react-hot-toast";

import { useSupabaseClient } from "@supabase/auth-helpers-react";

import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";

import Button from "@/components/Button";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const authModal = useAuthModal();
  const router = useRouter();

  const supabaseClient = useSupabaseClient();
  const { user } = useUser();

  const handleLogout = async () => {
    const { error } = await supabaseClient.auth.signOut();
    router.refresh();

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Logged out!");
    }
  };

  return (
    <div
      className={twMerge("h-fit bg-gradient-to-b from-cyan-600 p-6", className)}
    >
      <div className="flex justify-end items-center gap-x-4">
        {user ? (
          <div className="flex gap-x-4 items-center">
            <Button onClick={handleLogout} className="bg-white px-6 py-2">
              Logout
            </Button>
            <Button className="bg-white">
              <FaUserAlt />
            </Button>
          </div>
        ) : (
          <>
            <div>
              <Button
                onClick={authModal.onOpen}
                className="bg-transparent text-neutral-300 font-medium"
              >
                Sign Up
              </Button>
            </div>
            <div>
              <Button onClick={authModal.onOpen} className="bg-white px-6 py-2">
                Log In
              </Button>
            </div>
          </>
        )}
      </div>
      {children}
    </div>
  );
};
export default Header;
