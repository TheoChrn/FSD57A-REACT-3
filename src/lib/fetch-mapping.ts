import {
  getCreatureById,
  getCreatures,
  getEquipmentById,
  getEquipments,
  getMaterialById,
  getMaterials,
  getMonsterById,
  getMonsters,
  getTreasureById,
  getTreasures,
} from "@/lib/fetch";

export const validsCategories = [
  "creatures",
  "equipment",
  "materials",
  "monsters",
  "treasure",
] as const;

export type ValidCategoryKey = (typeof validsCategories)[number];

export const fetchesById: Record<
  string,
  (id: string) => Promise<CategorySchema>
> = {
  creatures: getCreatureById,
  equipment: getEquipmentById,
  materials: getMaterialById,
  monsters: getMonsterById,
  treasure: getTreasureById,
};

export const fetches: Record<string, () => Promise<CategorySchema[]>> = {
  creatures: getCreatures,
  equipment: getEquipments,
  materials: getMaterials,
  monsters: getMonsters,
  treasure: getTreasures,
};
