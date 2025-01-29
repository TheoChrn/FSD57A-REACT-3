declare interface IEquipmentSchema {
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

declare interface IEquipmentResponse {
  data: IEquipmentSchema[];
  status: number;
  message: string;
}

declare interface IChunkedEquipmentResponse {
  data: IEquipmentSchema[][];
  status: number;
  message: string;
}
