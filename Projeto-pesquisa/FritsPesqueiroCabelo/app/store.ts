import { create } from 'zustand'

type Props = {
    nomeProduto: string | null;
    setNomeProduto: (nomeProduto: string | null) => void;
}

export const store = create<Props>((set) => ({
    nomeProduto: null,
    setNomeProduto: (nomeProduto) => set({ nomeProduto }),
}))
