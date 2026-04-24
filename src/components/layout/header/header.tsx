import Link from "next/link";
import { Menu } from "lucide-react";

import { Logo } from "../../logo";
import { ActiveLink } from "../../active-link";
import { Button } from "../../ui/button";

export const Header = () => {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 md:h-24 items-center justify-between">
          <Logo />

          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-6">
              <ActiveLink href="/">Início</ActiveLink>
            
              <ActiveLink href="/blog">Blog</ActiveLink>
            </div>
            
            <Button variant="secondary" asChild>
              <Link href="/comecar">Começar</Link>
            </Button>

            <Button variant="icon" size="icon" className="flex md:hidden">
                <Menu className="size-5"/>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}