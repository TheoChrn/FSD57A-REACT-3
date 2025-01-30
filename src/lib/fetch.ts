import { API_URL } from "@/lib/utils";
import axios from "axios";

const getEntryById = async <T>(id: string): Promise<T> => {
  const res = await axios.get<{ data: T }>(`${API_URL}/entry/${id}`);
  return res.data.data;
};

export const getEquipments = async (): Promise<EquipmentSchema[]> => {
  const res = await axios.get<Response>(`${API_URL}/category/equipment`);
  return res.data.data;
};

export const getEquipmentById = async (id: string): Promise<EquipmentSchema> =>
  getEntryById(id);

export const getMaterials = async (): Promise<MaterialsSchema[]> => {
  const res = await axios.get<Response>(`${API_URL}/category/materials`);
  return res.data.data;
};

export const getMaterialById = async (id: string): Promise<MaterialsSchema> =>
  getEntryById(id);

export const getCreatures = async (): Promise<CreatureSchema[]> => {
  const res = await axios.get<Response>(`${API_URL}/category/creatures`);
  return res.data.data;
};

export const getCreatureById = async (id: string): Promise<CreatureSchema> =>
  getEntryById(id);

export const getMonsters = async (): Promise<MonsterSchema[]> => {
  const res = await axios.get<Response>(`${API_URL}/category/monsters`);
  return res.data.data;
};

export const getMonsterById = async (id: string): Promise<MonsterSchema> =>
  getEntryById(id);

export const getTreasures = async (): Promise<TreasureSchema[]> => {
  const res = await axios.get<Response>(`${API_URL}/category/treasure`);
  return res.data.data;
};

export const getTreasureById = async (id: string): Promise<TreasureSchema> =>
  getEntryById(id);
