import { useTheme } from "next-themes";
import { Colors } from "@/constants/theme";

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const { theme } = useTheme();
  const currentTheme = theme ?? "light"; // fallback para 'light'
  const colorFromProps = props[currentTheme as "light" | "dark"];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[currentTheme as "light" | "dark"][colorName];
  }
}
