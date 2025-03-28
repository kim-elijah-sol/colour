import { create } from 'zustand';

type State = {
  selectedIndex: number;
  colors: string[];
};

type Actions = {
  setSelectedIndex: (selectedIndex: number) => void;
  setColor: (index: number, color: string) => void;
  setAllColors: (colors: string[]) => void;
  clearAllColors: () => void;
};

const useCreatePaletteColors = create<State & Actions>()((set) => ({
  colors: [],
  selectedIndex: 0,
  setSelectedIndex: (selectedIndex) => set({ selectedIndex }),
  setColor: (index, color) =>
    set((state) => ({
      colors: state.colors.map((it, _index) => (_index === index ? color : it)),
    })),
  setAllColors: (colors) => set({ colors }),
  clearAllColors: () => set({ colors: [] }),
}));

export default useCreatePaletteColors;
