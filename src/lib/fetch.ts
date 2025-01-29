import { API_URL } from "@/lib/utils";
import axios from "axios";

export const getWeapons = async (): Promise<IChunkedEquipmentResponse> => {
  const res = await axios.get<IEquipmentResponse>(
    `${API_URL}/category/equipment`
  );

  const weapons = res.data.data;

  const chunks = [...Array(Math.ceil(weapons.length / 20))].map((_) =>
    weapons.splice(0, 20)
  );

  return { ...res.data, data: chunks };
};
