import { create } from "zustand";

interface UpdateModalStore {
  isOpen: boolean;
  customerId: string | null;
  onOpen: (customerId: string) => void;
  onClose: () => void;
}

const useUpdateModal = create<UpdateModalStore>((set) => ({
  isOpen: false,
  customerId: null,
  onOpen: (customerId: string) => set({ isOpen: true, customerId }),
  onClose: () => set({ isOpen: false, customerId: null }),
}));

export default useUpdateModal;
