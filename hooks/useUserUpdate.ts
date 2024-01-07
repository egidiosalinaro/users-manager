import { create } from "zustand";

interface UserUpdateStoreType {
  userUpdateCount: number;
  incrementUpdateCount: () => void;
}

const useUserUpdateStore = create<UserUpdateStoreType>((set) => ({
  userUpdateCount: 0,
  incrementUpdateCount: () =>
    set((state: UserUpdateStoreType) => ({
      userUpdateCount: state.userUpdateCount + 1,
    })),
}));

export default useUserUpdateStore;
