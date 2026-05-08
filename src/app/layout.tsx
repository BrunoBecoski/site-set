import "@/styles/globals.css";

import type { Metadata } from "next";

import { Layout } from "@/templates/layout";

export const metadata: Metadata = {
  title: 'Site.Set',
  description: 'Venda seus produtos como afiliado em um único lugar',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>

      <body>
        <main>
          <Layout>
            {children}
          </Layout>
        </main>
      </body>
    </html>
  )
}
