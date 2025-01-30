import { EquipmentsDetails } from "@/components/organisms/equipments-details";
import { MaterialsDetails } from "@/components/organisms/materials-details";

export function Details({ data }: { data: CategorySchema }) {
  if (data.category === "equipment")
    return <EquipmentsDetails data={data as EquipmentSchema} />;

  if (data.category === "materials")
    return <MaterialsDetails data={data as MaterialsSchema} />;

  return null;
}
