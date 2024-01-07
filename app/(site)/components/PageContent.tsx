"use client";

import React from "react";
import useAuthModal from "@/hooks/useAuthModal";
import useUpdateModal from "@/hooks/useUpdateModal";
import { useUser } from "@/hooks/useUser";
import { User as Customer } from "@/types";

import Button from "@/components/Button";
import useDeleteUser from "@/hooks/useDeleteUser";

interface PageContentProps {
  users: Customer[];
}

const PageContent: React.FC<PageContentProps> = ({ users }) => {
  const authModal = useAuthModal();
  const updateModal = useUpdateModal();
  const { user } = useUser();
  const { deleteUser } = useDeleteUser();

  const handleUpdate = (customerId: string) => {
    if (!user) {
      authModal.onOpen();
    } else {
      updateModal.onOpen(customerId);
    }
  };

  const handleDelete = (customerId: string) => {
    if (!user) {
      authModal.onOpen();
    } else {
      deleteUser(customerId, "y");
    }
  };

  const handleRestore = (customerId: string) => {
    if (!user) {
      authModal.onOpen();
    } else {
      deleteUser(customerId, "n");
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
        const isDeleted = customer.deleted === "y";

        return (
          <div
            key={customer.id}
            className="flex flex-col justify-between rounded-md bg-neutral-400/10 hover:bg-neutral-400/20 transition p-3 h-36 w-full"
          >
            <div className="text-center mb-4">
              <h3 className="text-xl font-semibold w-full mb-2">
                {hasFullName
                  ? `${customer.name} ${customer.surname}`
                  : `Customer ${index + 1}`}
              </h3>
              <h4
                className={
                  isDeleted ? "text-red-500" : "text-neutral-400 text-md"
                }
              >
                {isDeleted ? "DELETED" : `${customer.username} | ${genderText}`}
              </h4>
            </div>
            <div className="mt-auto">
              <div className="flex justify-between space-x-2 w-full">
                {!isDeleted ? (
                  <>
                    <Button
                      onClick={() => handleUpdate(customer.id)}
                      className="py-2"
                    >
                      Modify
                    </Button>
                    <Button
                      onClick={() => handleDelete(customer.id)}
                      className="bg-red-500 py-2"
                    >
                      Delete
                    </Button>
                  </>
                ) : (
                  <Button
                    onClick={() => handleRestore(customer.id)}
                    className="bg-emerald-500 py-2"
                  >
                    Restore
                  </Button>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PageContent;
