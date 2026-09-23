import { create } from "zustand";

type Props = {
  opcoes: string[];
  adicionarOpcao: (opcao: string) => void;
  limparOpcoes: () => void;
};

export const useOptionStore = create<Props>((set) => ({
  opcoes: [],

  adicionarOpcao: (opcao) =>
    set((state) => ({
      opcoes: [...state.opcoes, opcao],
    })),

  limparOpcoes: () =>
    set({
      opcoes: [],
    }),
}));