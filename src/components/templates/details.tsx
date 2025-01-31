import { EquipmentsDetails } from "@/components/molecules/equipments-details";
import { MaterialsDetails } from "@/components/molecules/materials-details";

export function Details({ data }: { data: CategorySchema }) {
  if (data.category === "equipment")
    return <EquipmentsDetails data={data as EquipmentSchema} />;

  if (data.category === "materials")
    return <MaterialsDetails data={data as MaterialsSchema} />;

  return null;
}
