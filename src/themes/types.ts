import type { ComponentType } from "react";
import type { ProjectCategory } from "../types/project";

export interface ThemeDefinition {
  category: ProjectCategory;
  label: string;
  accent: string;
  Background: ComponentType<{ isActive: boolean }>;
}
