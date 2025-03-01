import { create } from 'zustand';

export type PaletteViewType = 'vertical' | 'horizontal';

type State = {
  type: PaletteViewType;
};

type Actions = {
  setType: (type: PaletteViewType) => void;
};

const usePaletteView = create<State & Actions>()((set) => ({
  type: 'vertical',
  setType: (type) => set({ type }),
}));

export default usePaletteView;
