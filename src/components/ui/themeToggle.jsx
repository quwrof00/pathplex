import { Button } from "../ui/button";
import { Sun, Moon } from "lucide-react";
import useThemeStore from "../../store/themeStore";

export default function ThemeToggle() {
  const { darkMode, toggleTheme } = useThemeStore();

  return (
    <Button onClick={toggleTheme} variant="outline" size="icon">
      {darkMode ? <Sun size={20} /> : <Moon size={20} />}
    </Button>
  );
}
