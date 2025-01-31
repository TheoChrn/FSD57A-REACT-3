import { ValidCategoryKey } from "@/lib/category-enum";
import { API_URL } from "@/lib/utils";
import axios from "axios";

export const getEntryById = async (id: string): Promise<CategorySchema> => {
  const res = await axios.get<Response<CategorySchema>>(
    `${API_URL}/entry/${id}`
  );
  return res.data.data;
};

export const getCategoryList = async (
  category: ValidCategoryKey
): Promise<CategorySchema[]> => {
  const res = await axios.get<Response<CategorySchema[]>>(
    `${API_URL}/category/${category}`
  );
  return res.data.data;
};
