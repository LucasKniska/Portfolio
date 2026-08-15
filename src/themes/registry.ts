import type { ProjectCategory } from "../types/project";
import type { ThemeDefinition } from "./types";
import FinanceBackground from "./backgrounds/FinanceBackground";
import MusicBackground from "./backgrounds/MusicBackground";
import SpaceBackground from "./backgrounds/SpaceBackground";
import SolarEclipseBackground from "./backgrounds/SolarEclipseBackground";
import TrucksBackground from "./backgrounds/TrucksBackground";
import NasaBackground from "./backgrounds/NasaBackground";

export const themeRegistry: Record<ProjectCategory, ThemeDefinition> = {
  finance: {
    category: "finance",
    label: "Finance",
    accent: "var(--color-finance)",
    Background: FinanceBackground,
  },
  music: {
    category: "music",
    label: "Music",
    accent: "var(--color-music)",
    Background: MusicBackground,
  },
  space: {
    category: "space",
    label: "Space",
    accent: "var(--color-space)",
    Background: SpaceBackground,
  },
  "solar-eclipse": {
    category: "solar-eclipse",
    label: "Solar Eclipse",
    accent: "var(--color-eclipse)",
    Background: SolarEclipseBackground,
  },
  trucks: {
    category: "trucks",
    label: "Autonomous Trucks",
    accent: "var(--color-trucks)",
    Background: TrucksBackground,
  },
  nasa: {
    category: "nasa",
    label: "NASA",
    accent: "var(--color-nasa)",
    Background: NasaBackground,
  },
};
