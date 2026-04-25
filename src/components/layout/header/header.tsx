import { useCallback, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { Logo } from "../../logo";
import { ActiveLink } from "../../active-link";
import { Button } from "../../ui/button";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleMenu = useCallback(() => {
    setIsOpen(!isOpen)
  }, [isOpen])

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 backdrop-blur">
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

            <div className="flex md:hidden">
              <Button variant="icon" size="icon" onClick={handleMenu} >
                <Menu className="size-5" />
              </Button>

              {isOpen &&
                <div className="flex gap-6 flex-col items-center fixed bg-gray-700 top-20 right-0 p-8 border-b border-white/10 backdrop-blur">
                  <ActiveLink href="/">Início</ActiveLink>
                  <ActiveLink href="/blog">Blog</ActiveLink>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}