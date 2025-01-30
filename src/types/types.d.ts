declare interface Response {
  data: T;
  status: number;
  message: string;
}

declare interface EquipmentSchema {
  name: string;
  id: number;
  category: string;
  description: string;
  image: string;
  common_locations: string[] | null;
  properties: {
    attack: number;
    defense: number;
    effect: string;
    type: string;
  };
  dlc: boolean;
}

declare interface MaterialsSchema {
  name: string;
  id: number;
  category: string;
  description: string;
  image: string;
  common_locations: string[] | null;
  hearts_recovered: number;
  cooking_effect: string;
  dlc: boolean;
  fuse_attack_power?: number;
}

interface CreatureSchema {
  name: string;
  id: number;
  category: "creatures";
  description: string;
  image: string;
  common_locations: string[] | null;
  edible: boolean;
  drops: string[] | null;
  dlc: boolean;
}

interface MonsterSchema {
  name: string;
  id: number;
  category: "monsters";
  description: string;
  image: string;
  common_locations: string[] | null;
  drops: string[] | null;
  dlc: boolean;
}

interface TreasureSchema {
  name: string;
  id: number;
  category: "treasure";
  description: string;
  image: string;
  common_locations: string[] | null;
  drops: string[] | null;
  dlc: boolean;
}

declare type CategorySchema =
  | EquipmentSchema
  | MaterialsSchema
  | CreatureSchema
  | MonsterSchema
  | TreasureSchema;
