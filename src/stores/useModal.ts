import React from 'react';
import { create } from 'zustand';

type Modal = () => React.ReactNode;

type State = {
  modal: Modal | null;
};

type Actions = {
  setModal: (modal: Modal) => void;
  removeModal: () => void;
};

const useModal = create<State & Actions>()((set) => ({
  modal: null,
  setModal: (modal) => set({ modal }),
  removeModal: () => set({ modal: null }),
}));

export default useModal;
