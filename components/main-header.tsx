import Image from "next/image";

import Logo from "@/public/logo.png";
import { ModeToggle } from "./modeToggle";
import { UserMenu } from "./user-menu";
import { MainNavigation } from "./main-navigation";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex h-[60px] w-full items-center justify-between border-b px-6 bg-background/90 backdrop-blur">
      <div className="flex items-center gap-2">
        <Image
          src={Logo}
          alt="TaskHub Logo"
          width={36}
          height={36}
          className="rounded-md"
          priority
        />
        <span className="text-lg font-extrabold tracking-tight">TaskHub</span>
      </div>

      <MainNavigation />

      <div className="flex items-center gap-4">
        <ModeToggle />
        <UserMenu />
      </div>
    </header>
  );
}
