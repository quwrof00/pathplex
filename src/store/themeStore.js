import { create } from "zustand";

const useThemeStore = create((set) => {
  // Check if dark mode is stored in localStorage or match system preference
  const isDarkMode = localStorage.getItem("theme") 
    ? localStorage.getItem("theme") === "dark"
    : window.matchMedia("(prefers-color-scheme: dark)").matches;

  return {
    darkMode: isDarkMode, // Set initial state
    toggleTheme: () =>
      set((state) => {
        const newMode = !state.darkMode;
        localStorage.setItem("theme", newMode ? "dark" : "light");
        document.documentElement.classList.toggle("dark", newMode);
        return { darkMode: newMode };
      }),
  };
});

export default useThemeStore;
