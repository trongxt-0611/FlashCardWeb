import { persist } from "zustand/middleware";
import { create } from "zustand";

export interface Word {
  id: number;
  word: string;
  trans: string;
}

interface CardState {
  card: Word[];
  add: (word: Word) => void;
  carDelete: (id: number) => void;
}

export const useCardStore = create<CardState>()(
  persist(
    (set) => ({
      card: [],
      add: (word) => set((state) => ({ card: [...state.card, word] })),
      carDelete: (id) =>
        set((state) => {
          const listCard = state.card;
          const deleteCard = state.card.filter((item) => item.id !== id);
          return { ...listCard, card: deleteCard || [] };
        }),
    }),
    {
      name: "bear-storage",
    }
  )
);
