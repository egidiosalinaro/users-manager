"use client";

import React from "react";
import useAuthModal from "@/hooks/useAuthModal";
import useUpdateModal from "@/hooks/useUpdateModal";
import { useUser } from "@/hooks/useUser";
import { User as Customer } from "@/types";

import Button from "@/components/Button";

interface PageContentProps {
  users: Customer[];
}

const PageContent: React.FC<PageContentProps> = ({ users }) => {
  const authModal = useAuthModal();
  const updateModal = useUpdateModal();
  const { user } = useUser();

  const onClick = (customerId: string) => {
    if (!user) {
      authModal.onOpen();
    } else {
      updateModal.onOpen(customerId);
    }
  };

  if (users.length === 0) {
    return <div className="mt-4 text-neutral-400">No users available.</div>;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8 gap-6 mt-4">
      {users.map((customer, index) => {
        const hasFullName = customer.name && customer.surname;
        const genderText =
          customer.gender === "m"
            ? "Male"
            : customer.gender === "f"
            ? "Female"
            : "";

        return (
          <div
            key={customer.id}
            className="flex flex-col justify-between rounded-md bg-neutral-400/10 hover:bg-neutral-400/20 transition p-3 h-36 w-full"
          >
            <div className="text-center mb-4">
              {" "}
              {/* Added margin-bottom */}
              <h3 className="text-xl font-semibold w-full mb-2">
                {" "}
                {/* Added margin-bottom */}
                {hasFullName
                  ? `${customer.name} ${customer.surname}`
                  : `Customer ${index + 1}`}
              </h3>
              <h4 className="text-neutral-400 text-md">
                {!hasFullName
                  ? "Please enter user data"
                  : `${customer.username} | ${genderText}`}
              </h4>
            </div>
            <div className="mt-auto">
              {" "}
              {/* Align buttons to the bottom */}
              <div className="flex justify-between space-x-2 w-full">
                <Button onClick={() => onClick(customer.id)} className="py-2">
                  Modify
                </Button>
                <Button className="bg-red-500 py-2">Delete</Button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PageContent;
