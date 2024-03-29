"use client";

import { User as Customer } from "@/types";

import useAuthModal from "@/hooks/useAuthModal";
import useUpdateModal from "@/hooks/useUpdateModal";
import useGenderCount from "@/hooks/useGenderCount";
import { useUser } from "@/hooks/useUser";

import Button from "@/components/Button";
import useDeleteUser from "@/hooks/useDeleteUser";
import useUserUpdateStore from "@/hooks/useUserUpdate";

interface PageContentProps {
  users: Customer[];
}

const PageContent: React.FC<PageContentProps> = ({ users }) => {
  const authModal = useAuthModal();
  const updateModal = useUpdateModal();
  const { user } = useUser();
  const { deleteUser } = useDeleteUser();
  const { counts } = useGenderCount();

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
    <div className="flex flex-col mt-4 w-full">
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
              className="flex flex-col justify-between rounded-md bg-neutral-400/10 hover:bg-neutral-400/20 transition p-3 h-43 w-full"
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
                  {isDeleted
                    ? "DELETED"
                    : customer.username
                    ? `${customer.username} | ${genderText}`
                    : "No user data entered"}
                </h4>
              </div>
              <div className="flex flex-col justify-end h-full">
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
                <p
                  className={`text-neutral-500 text-sm mt-2 text-center ${
                    customer.last_modified ? "" : "invisible"
                  }`}
                >
                  Last:{" "}
                  {customer.last_modified
                    ? new Date(customer.last_modified).toLocaleString()
                    : "Placeholder"}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <p className="text-neutral-500 text-md mt-12 text-center">
        Your Platform has {counts.male} male customer
        {counts.male != 1 ? "s" : ""} and {counts.female} female customer
        {counts.female != 1 ? "s" : ""}.
      </p>
    </div>
  );
};

export default PageContent;
