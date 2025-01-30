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

export const fetchesById: Record<
  string,
  (id: string) => Promise<CategorySchema>
> = {
  creatures: getCreatureById,
  equipments: getEquipmentById,
  materials: getMaterialById,
  monsters: getMonsterById,
  treasures: getTreasureById,
};
export type FetchesByIdKey = keyof typeof fetchesById;

export const fetches: Record<string, () => Promise<CategorySchema[]>> = {
  creatures: getCreatures,
  equipments: getEquipments,
  materials: getMaterials,
  monsters: getMonsters,
  treasures: getTreasures,
};

export type FetchesKey = keyof typeof fetches;
