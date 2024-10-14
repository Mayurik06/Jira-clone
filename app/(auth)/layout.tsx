'use client'
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
    const pathname=usePathname();

  return (
    <main className="bg-neutral-100 min-h-screen">
      <div className="mx-auto max-w-screen-2xl p-4">
        <nav className="flex justify-between items-center">
          <Image src="/Logo.svg" height={20} width={40} alt="Logo" />
          <Link href={pathname==='/sign-in'?"/sign-up":'/sign-in'}>
          <Button variant="secondary">
            {pathname === "/sign-in" ? "Sign up" : "Login"}
          </Button>
          </Link>
        </nav>
        <div className="flex flex-col items-center justify-center pt-4 md:pt-14">
          {children}
        </div>
      </div>
    </main>
  );
}
