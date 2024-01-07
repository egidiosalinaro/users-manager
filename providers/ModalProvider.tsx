"use client";

import { useEffect, useState } from "react";

import AuthModal from "@/components/AuthModal";
import UpdateModal from "@/components/UpdateModal";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <AuthModal />
      <UpdateModal />
    </>
  );
};

export default ModalProvider;
