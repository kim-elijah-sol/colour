import { createContext, useContext } from 'react';

type State = {
  value: string;
};

type Actions = {
  setValue: (value: string) => void;
};

export const TabSelectContext = createContext<State & Actions>({
  value: '',
  setValue() {},
});

export function useTabSelectContext() {
  const tabSelect = useContext(TabSelectContext);

  return tabSelect;
}
