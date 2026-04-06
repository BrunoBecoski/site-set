import Link from "next/link"
import { useRouter } from "next/router"
import Image from "next/image"
import { ReactNode } from "react"

import { cn } from "@/lib/utils"
import { Button } from "../ui/button"

export const Header = () => {
  const router = useRouter()
  const isHomePage = router.pathname === '/'
  const isBlogPage = router.pathname.startsWith('/blog')

  return (
    <header className="fixed top-0 z-50  w-full border-b border-white/10 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-80">
        <div className="flex h-16 items-center justify-between">
          <Link href="/"><Image src="/logo.svg" alt="Site.Set" width={115} height={32} /></Link>

          <div className="flex items-center gap-6">
            <Header_Link href="/" isPage={isHomePage}>Início</Header_Link>
            <Header_Link href="/blog" isPage={isBlogPage} >Blog</Header_Link>
            <Button variant="secondary">Começar</Button>
          </div>
        </div>
      </div>
    </header>
  )
}

interface Header_LinkProps {
  href: string;
  isPage: boolean
  children: ReactNode
}

const Header_Link = ({href, isPage, children }: Header_LinkProps) => {
  return (
    <Link href={href} className={cn('text-sm font-medium transition-colors hover:text-blue-500', isPage ? 'text-blue-500' : 'text-muted' )}>
      {children}
    </Link>
  )
}