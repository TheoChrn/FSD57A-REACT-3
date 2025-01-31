import { IoIosHeartHalf } from "react-icons/io";

import { IoIosHeart } from "react-icons/io";
export function MaterialsDetails({ data }: { data: MaterialsSchema }) {
  return (
    <ul>
      <li className="flex">
        {data.hearts_recovered !== 0 && (
          <>
            {[...Array(Math.ceil(data.hearts_recovered))].map((_, index) =>
              index + 1 <= data.hearts_recovered ? (
                <IoIosHeart key={index} size={20} className="fill-red-700" />
              ) : (
                <IoIosHeartHalf
                  key={index}
                  size={20}
                  className="fill-red-700"
                />
              )
            )}
          </>
        )}
      </li>
      {data.fuse_attack_power && <li>{data.fuse_attack_power}</li>}
      <li>{data.cooking_effect}</li>
    </ul>
  );
}
