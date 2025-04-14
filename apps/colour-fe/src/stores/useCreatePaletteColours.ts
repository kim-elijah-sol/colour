import { create } from 'zustand';

type State = {
  selectedIndex: number;
  colours: string[];
};

type Actions = {
  setSelectedIndex: (selectedIndex: number) => void;
  setColour: (index: number, colour: string) => void;
  setAllColours: (colours: string[]) => void;
  clearAllColours: () => void;
};

const useCreatePaletteColours = create<State & Actions>()((set) => ({
  colours: [],
  selectedIndex: 0,
  setSelectedIndex: (selectedIndex) => set({ selectedIndex }),
  setColour: (index, colour) =>
    set((state) => ({
      colours: state.colours.map((it, _index) =>
        _index === index ? colour : it
      ),
    })),
  setAllColours: (colours) => set({ colours }),
  clearAllColours: () => set({ colours: [] }),
}));

export default useCreatePaletteColours;
