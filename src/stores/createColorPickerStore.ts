import { createContext } from "react";
import { create, createStore } from "zustand";

type PickerType = 'hex' | 'rgb'

type State = {
    color: string
    pickerType: PickerType
}

type Actions = {
    setColor: (color: string) => void
    setPickerType :(pickerType: PickerType) => void
}

export type ColorPickerStore = ReturnType<typeof createColorPickerStore>

const createColorPickerStore = (color: string) => {
    return createStore<State & Actions>()((set) => ({
        color,
        pickerType: 'hex',
        setColor: (color) => set({color}),
        setPickerType: (pickerType) => set({pickerType}),
    }))
}

export default createColorPickerStore

export const ColorPickerContext = createContext<ColorPickerStore | null>(null)