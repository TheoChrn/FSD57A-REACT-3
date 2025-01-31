export const validsCategories = [
  "creatures",
  "equipment",
  "materials",
  "monsters",
  "treasure",
] as const;

export type ValidCategoryKey = (typeof validsCategories)[number];
