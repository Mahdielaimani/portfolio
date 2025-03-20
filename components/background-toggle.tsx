"use client"

import { Button } from "@/components/ui/button"
import { Sparkles, Waves } from "lucide-react"

interface BackgroundToggleProps {
  backgroundType: "elements" | "particles"
  setBackgroundType: (type: "elements" | "particles") => void
}

export default function BackgroundToggle({ backgroundType, setBackgroundType }: BackgroundToggleProps) {
  return (
    <Button
      variant="outline"
      size="icon"
      className="bg-background/80 backdrop-blur-sm w-9 h-9"
      onClick={() => setBackgroundType(backgroundType === "elements" ? "particles" : "elements")}
      aria-label={`Switch to ${backgroundType === "elements" ? "particles" : "elements"} background`}
    >
      {backgroundType === "elements" ? (
        <Waves className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <Sparkles className="h-[1.2rem] w-[1.2rem]" />
      )}
    </Button>
  )
}

