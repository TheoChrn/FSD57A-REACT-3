import { API_URL } from "@/lib/utils";
import axios from "axios";

export const getWeapons = async (): Promise<IEquipmentSchema[][]> => {
  const res = await axios.get<IEquipmentsResponse>(
    `${API_URL}/category/equipment`
  );

  const weapons = res.data.data;

  const chunks = [...Array(Math.ceil(weapons.length / 20))].map((_) =>
    weapons.splice(0, 20)
  );

  return chunks;
};

export const getWeaponById = async (id: string): Promise<IEquipmentSchema> => {
  const res = await axios.get<IEquipmentResponse>(`${API_URL}/entry/${id}`);
  return res.data.data;
};
