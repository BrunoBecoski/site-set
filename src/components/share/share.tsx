"use client";

import { useShare } from "@/hooks";

import { Button } from "@/components/ui/button";

type ShareProps = {
  variant: 'header' | 'aside'
  url: string
  title: string
  description: string
}

export const Share = ({ url, title, description, variant }: ShareProps) => {
  const { shareButtons } = useShare({
    url,
    title,
    text: description,
  })

  if (variant === 'header') {
    return (
      <div className="flex gap-2 lg:hidden ml-auto">
        {
          shareButtons.map((provider) => (
            <Button
              key={provider.provider}
              variant="outline"
              onClick={provider.action}
              className="group p-3"
            >
              {provider.icon}
            </Button>
          ))
        }
      </div>
    )
  }

  if (variant === 'aside') {
    return (
      <aside className="space-y-6 hidden lg:block">
        <div className="bg-gray-700 p-4 md:p-6">
          <h2 className="mb-5 text-white text-heading-xs">
            Compartilhar
          </h2>

          <div className="space-y-3 flex flex-col">
            {
              shareButtons.map((provider) => (
                <Button
                  key={provider.provider}
                  variant="outline"
                  onClick={provider.action}
                  className="group justify-start gap-2"
                >
                  {provider.icon}
                  {provider.name}
                </Button>
              ))
            }
          </div>
        </div>
      </aside>
    )
  }

}

