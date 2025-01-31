import { IconLink } from "@/components/atoms/buttons/icon-link";
import { SwordIcon } from "@/components/atoms/icons/sword-icon";
import { FaAppleAlt } from "react-icons/fa";
import { GiDeerHead } from "react-icons/gi";
import { GiTroll } from "react-icons/gi";
import { GiChest } from "react-icons/gi";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { cardVariant } from "@/components/atoms/card/card";
import { PiHeartFill } from "react-icons/pi";

export function Header() {
  return (
    <header
      className={cardVariant({
        className: "md:w-1/2 py-3 px-5 overflow-x-auto",
      })}
    >
      <nav className="flex justify-between w-full gap-8 border-background/30 ">
        <IconLink href="/equipment">
          <SwordIcon size={40} />
        </IconLink>
        <IconLink href="/materials">
          <FaAppleAlt
            className="group-aria-page:fill-background fill-background/30 "
            size={40}
          />
        </IconLink>
        <IconLink href="/creatures">
          <GiDeerHead
            className="group-aria-page:fill-background fill-background/30"
            size={40}
          />
        </IconLink>
        <IconLink href="/monsters">
          <GiTroll
            className="group-aria-page:fill-background fill-background/30"
            size={40}
          />
        </IconLink>
        <IconLink href="/treasure">
          <GiChest
            className="group-aria-page:fill-background fill-background/30"
            size={40}
          />
        </IconLink>
        <IconLink href="/search">
          <FaMagnifyingGlass
            className="group-aria-page:fill-background fill-background/30"
            size={40}
          />
        </IconLink>
        <IconLink href="/favorites">
          <PiHeartFill
            className="group-aria-page:fill-background fill-background/30"
            size={40}
          />
        </IconLink>
      </nav>
    </header>
  );
}
