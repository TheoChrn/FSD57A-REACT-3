import { IconLink } from "@/components/atoms/buttons/icon-link";
import { SwordIcon } from "@/components/atoms/icons/sword-icon";

export function Header() {
  return (
    <header className="overflow-x-auto w-1/2 px-3">
      <nav className="flex justify-between px-2 w-full pb-4 gap-8 border-b-1 border-background/30 ">
        <IconLink href="/weapons">
          <SwordIcon size={40} />
        </IconLink>
        <IconLink href="/materials">
          <SwordIcon size={40} />
        </IconLink>
        <IconLink href="/creatures">
          <SwordIcon size={40} />
        </IconLink>
        <IconLink href="/monsters">
          <SwordIcon size={40} />
        </IconLink>
        <IconLink href="/treasure">
          <SwordIcon size={40} />
        </IconLink>
        <IconLink href="/search">
          <SwordIcon size={40} />
        </IconLink>
      </nav>
    </header>
  );
}
