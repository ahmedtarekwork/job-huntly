export type TCategory = {
  id: string;
  icon: string;
  name: string;
  available: number;
};

export type TJob = Record<"title" | "description" | "type" | "id", string> & {
  company: Record<"icon" | "location" | "name", string>;
  categories: string[];
};
