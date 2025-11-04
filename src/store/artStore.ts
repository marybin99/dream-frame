import { create } from "zustand";

interface ArtState {
  artUrl: string | null;
  prompt: string;
  setArt: (artUrl: string, prompt: string) => void;
  clearArt: () => void;
}

export const useArtStore = create<ArtState>((set) => ({
  artUrl: null,
  prompt: "",
  setArt: (artUrl, prompt) => set({ artUrl, prompt }),
  clearArt: () => set({ artUrl: null, prompt: "" }),
}));