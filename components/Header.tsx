"use client";

import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";

import Button from "@/components/Button";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const router = useRouter();

  const handleLogout = () => {
    // TODO
  };

  return (
    <div
      className={twMerge("h-fit bg-gradient-to-b from-cyan-600 p-6", className)}
    >
      <div className="flex justify-end items-center gap-x-4">
        <>
          <div>
            <Button
              onClick={() => {}}
              className="bg-transparent text-neutral-300 font-medium"
            >
              Sign Up
            </Button>
          </div>
          <div>
            <Button onClick={() => {}} className="bg-white px-6 py-2">
              Log In
            </Button>
          </div>
        </>
      </div>
      {children}
    </div>
  );
};
export default Header;
