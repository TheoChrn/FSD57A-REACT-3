import { IoIosHeartHalf } from "react-icons/io";

import { IoIosHeart } from "react-icons/io";
export function MaterialsDetails({ data }: { data: MaterialsSchema }) {
  console.log(data.hearts_recovered);
  console.log(3 < 3);
  return (
    <ul>
      <li className="flex">
        {!data.hearts_recovered && (
          <>
            {[...Array(Math.ceil(data.hearts_recovered))].map((_, index) =>
              index + 1 <= data.hearts_recovered ? (
                <IoIosHeart key={index} size={20} fill="red" />
              ) : (
                <IoIosHeartHalf key={index} size={20} fill="red" />
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
