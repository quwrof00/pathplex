import { create } from "zustand";

const useThemeStore = create((set) => ({
  darkMode: localStorage.getItem("theme") === "dark",
  toggleTheme: () =>
    set((state) => {
      const newMode = !state.darkMode;
      if (newMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return { darkMode: newMode };
    }),
}));

export default useThemeStore;
