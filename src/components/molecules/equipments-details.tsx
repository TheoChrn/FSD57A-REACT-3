export function EquipmentsDetails({ data }: { data: EquipmentSchema }) {
  return (
    <ul>
      {Object.entries(data.properties).map(([key, value]) => (
        <li key={key}>
          {key}: {value}
        </li>
      ))}
    </ul>
  );
}
