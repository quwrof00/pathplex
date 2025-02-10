import { Button } from "../ui/button";
import { Sun, Moon } from "lucide-react";
import useThemeStore from "../../store/themeStore";
import { useEffect } from "react";

export default function ThemeToggle() {
  const { darkMode, toggleTheme } = useThemeStore();

  // Apply the dark mode class on mount
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <Button onClick={toggleTheme} variant="outline" size="icon">
      {darkMode ? <Sun size={20} /> : <Moon size={20} />}
    </Button>
  );
}
