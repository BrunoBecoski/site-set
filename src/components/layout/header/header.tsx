"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

import { ActiveLink } from "../../active-link";
import { Button } from "../../ui/button";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleMenu = useCallback(() => {
    setIsOpen(!isOpen)
  }, [isOpen])

  return (
    <>
      <header className="fixed top-0 z-50 w-full border-b border-white/10 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 md:h-24 items-center justify-between">
            <Link href="/" title="Página inicial">
              <Image
                src="/logo.svg"
                alt="Site.Set"
                width={115}
                height={32}
                className="hidden sm:block"
              />

              <Image
                src="/icon.svg"
                alt="Site.Set"
                width={40}
                height={40}
                className="block sm:hidden"
              />
            </Link>

            <div className="flex items-center gap-6">
              <div className="hidden md:flex items-center gap-6">
                <ActiveLink href="/">Início</ActiveLink>
                <ActiveLink href="/blog">Blog</ActiveLink>
              </div>

              <Button variant="secondary" asChild>
                <Link href="/comecar">Começar</Link>
              </Button>

              <div className="flex md:hidden">
                <Button variant="icon" size="icon" onClick={handleMenu}>
                  {isOpen
                    ? <X className="size-5" />
                    : <Menu className="size-5" />
                  }
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {isOpen &&
        <div className="bg-gray-700/50 backdrop-blur top-0 bottom-0 left-0 right-0 fixed z-40 animate-opacity" onClick={handleMenu}>
          <div className="flex gap-8 flex-col items-center fixed bg-gray-500 backdrop-blur  p-8 top-20 right-0 w-1/3 bottom-0 border-b border-l border-white/10 animate-opacity">
            <ActiveLink href="/">Início</ActiveLink>
            <ActiveLink href="/blog">Blog</ActiveLink>
          </div>
        </div>
      }
    </>
  )
}