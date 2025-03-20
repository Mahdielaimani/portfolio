"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export default function ThemeToggle() {
  const { setTheme, theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // After mounting, we can safely show the UI
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <Button variant="outline" size="icon" className="bg-background/80 backdrop-blur-sm w-9 h-9" />
  }

  const isDark = theme === "dark" || resolvedTheme === "dark"

  return (
    <Button
      variant="outline"
      size="icon"
      className="bg-background/80 backdrop-blur-sm w-9 h-9"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
    >
      <Sun className={`h-[1.2rem] w-[1.2rem] transition-all ${isDark ? "scale-0" : "scale-100"}`} />
      <Moon className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${isDark ? "scale-100" : "scale-0"}`} />
    </Button>
  )
}

