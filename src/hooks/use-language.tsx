import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface LanguageStore {
  language: string;
  setEnglish: () => void;
  setArabic: () => void;
}

const useLanguage = create(
  persist<LanguageStore>(
    (set) => ({
      language: "en",
      setEnglish: () => set({ language: "en" }),
      setArabic: () => set({ language: "ar" }),
    }),
    {
      name: "language-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useLanguage;
