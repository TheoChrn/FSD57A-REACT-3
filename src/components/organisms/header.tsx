import { IconLink } from "@/components/atoms/buttons/icon-link";
import { SwordIcon } from "@/components/atoms/icons/sword-icon";

export function Header() {
  return (
    <header className="overflow-x-auto">
      <nav className="flex justify-center px-2  pb-4 gap-8 border-b-1 border-background/30 w-fit mx-auto ">
        <IconLink href="/weapons">
          <SwordIcon size={30} />
        </IconLink>
        <IconLink href="/materials">
          <SwordIcon size={30} />
        </IconLink>
        <IconLink href="/creatures">
          <SwordIcon size={30} />
        </IconLink>
        <IconLink href="/monsters">
          <SwordIcon size={30} />
        </IconLink>
        <IconLink href="/treasure">
          <SwordIcon size={30} />
        </IconLink>
        <IconLink href="/search">
          <SwordIcon size={30} />
        </IconLink>
      </nav>
    </header>
  );
}
