"use client";

import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";

import useUpdateModal from "@/hooks/useUpdateModal";
import { useUser } from "@/hooks/useUser";

import Modal from "@/components/Modal";
import Input from "@/components/Input";
import Button from "@/components/Button";
import useUserUpdateStore from "@/hooks/useUserUpdate";

const UpdateModal = () => {
  const [isLoading, setIsLoading] = useState(false);
  const updateModal = useUpdateModal();
  const { user } = useUser();
  const supabaseClient = useSupabaseClient();
  const router = useRouter();
  const now = new Date().toISOString();
  const { incrementUpdateCount } = useUserUpdateStore();

  const { register, handleSubmit, reset } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      surname: "",
      username: "",
      gender: "",
    },
  });

  const onChange = (open: boolean) => {
    if (!open) {
      reset();
      updateModal.onClose();
    }
  };

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    try {
      setIsLoading(true);

      if (!user || !updateModal.customerId) {
        toast.error("Missing fields or customer ID");
        setIsLoading(false);
        return;
      }

      // Validate gender input
      if (values.gender !== "m" && values.gender !== "f") {
        toast.error("Gender must be either 'm' or 'f'");
        setIsLoading(false);
        return;
      }

      // Proceed with update
      const { error: supabaseError } = await supabaseClient
        .from("users")
        .update({
          name: values.name,
          surname: values.surname,
          username: values.username,
          gender: values.gender,
          last_modified: now,
        })
        .eq("id", updateModal.customerId);

      if (supabaseError) {
        setIsLoading(false);
        return toast.error("Something went wrong");
      }

      router.refresh();
      toast.success("User info successfully updated!");
      incrementUpdateCount();
      reset();
      updateModal.onClose();
    } catch (error) {
      toast.error("Something went wrong");
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal
      title="Update User"
      description="Please fill every field before submitting"
      isOpen={updateModal.isOpen}
      onChange={onChange}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-4">
        <Input
          id="name"
          disabled={isLoading}
          {...register("name", { required: true })}
          placeholder="Name"
        />
        <Input
          id="surname"
          disabled={isLoading}
          {...register("surname", { required: true })}
          placeholder="Surname"
        />
        <Input
          id="username"
          disabled={isLoading}
          {...register("username", { required: true })}
          placeholder="Username"
        />
        <Input
          id="gender"
          disabled={isLoading}
          {...register("gender", { required: true })}
          placeholder="Gender (m/f)"
        />
        <div></div>
        <Button disabled={isLoading} type="submit">
          Done!
        </Button>
      </form>
    </Modal>
  );
};

export default UpdateModal;
