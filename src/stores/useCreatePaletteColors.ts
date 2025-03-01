import { create } from 'zustand';

type State = {
  colors: string[];
};

type Actions = {
  setColor: (index: number, color: string) => void;
  setAllColors: (colors: string[]) => void;
  clearAllColors: () => void;
};

const useCreatePaletteColors = create<State & Actions>()((set) => ({
  colors: [],
  setColor: (index, color) =>
    set((state) => ({
      colors: state.colors.map((it, _index) => (_index === index ? color : it)),
    })),
  setAllColors: (colors) => set({ colors }),
  clearAllColors: () => set({ colors: [] }),
}));

export default useCreatePaletteColors;
