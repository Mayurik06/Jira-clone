import Image from "next/image";
import Link from "next/link";
import React from "react";
import { DottedSeparator } from "./dotted-separator";
import Navigation from "./navigation";
import WorkspacesSwitcher from "./workspaces-switcher";

type Props = {};

export default function Sidebar({}: Props) {
  return (
    <aside className="h-full bg-neutral-100 p-4 w-full">
      <Link href="/">
        <Image src="/Logo.svg" alt="Logo" width={40} height={40} />
      </Link>
      <DottedSeparator className="my-4" />
      <WorkspacesSwitcher/>
      <DottedSeparator className="my-4" />

      <Navigation />
    </aside>
  );
}
