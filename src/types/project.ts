export type ProjectCategory =
  | "finance"
  | "music"
  | "space"
  | "solar-eclipse"
  | "trucks"
  | "nasa";

export type ProjectKind = "internship" | "project";

export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  id: string;
  title: string;
  role: string;
  location?: string;
  dateRange: string;
  /** Sortable "YYYY-MM" start date, used to order the timeline. */
  sortDate: string;
  category: ProjectCategory;
  kind: ProjectKind;
  /** One or two sentences of narrative framing shown above the highlights. */
  story: string;
  /** Short, scannable highlight phrases — impressive metrics, not full sentences. */
  highlights: string[];
  tags?: string[];
  links?: ProjectLink[];
}
