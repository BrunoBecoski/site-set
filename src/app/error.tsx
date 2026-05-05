"use client";

import { AlertTriangle } from "lucide-react";

import { Button } from "@/components/ui/button";

type ErrorBoundaryProps = {
  error: Error
  reset: () => void
}

export default function ErrorBoundary({ error, reset }: ErrorBoundaryProps) {
  return (
    <div className="min-h-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        <AlertTriangle
          size={64}
          className="text-red-500 mx-auto mb-6"
        />

        <h2 className="text-heading-xl text-white font-sans mb-2">
          Algo deu errado!
        </h2>

        {error.message &&
          <p className="text-gray-200 mb-2 px-4 text-body-md overflow-hidden text-ellipsis max-h-24">
            {error?.message}
          </p>
        }

        <Button className="mt-4" onClick={reset}>
          Tente novamente
        </Button>
      </div>
    </div>
  )
}