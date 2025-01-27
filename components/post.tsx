import { useState } from "react";
import { PiHeartFill } from "react-icons/pi";

export function Post({ title, body }: Omit<IPost, "userId" | "id">) {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <article>
      <div className="flex items-center gap-2">
        <h2 className="text-xl font-semibold first-letter:uppercase ">
          {title}
        </h2>
        <button
          className="group cursor-pointer hover:scale-110 duration-100"
          onClick={() => setIsLiked(!isLiked)}
        >
          <PiHeartFill
            strokeWidth={20}
            className={` duration-100 ${
              isLiked
                ? "fill-red-500 stroke-red-500"
                : "fill-transparent stroke-black"
            }`}
            size={20}
          />
        </button>
      </div>
      <p>{body}</p>
    </article>
  );
}
