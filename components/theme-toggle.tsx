"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="ghost" size="sm" className="w-9 h-9 p-0">
        <div className="h-4 w-4" />
      </Button>
    )
  }

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="w-9 h-9 p-0 hover:bg-gradient-to-r hover:from-orange-100 hover:to-amber-100 dark:hover:from-orange-900/20 dark:hover:to-amber-900/20 transition-all duration-300"
    >
      {resolvedTheme === "dark" ? (
        <Sun className="h-4 w-4 text-gray-600 dark:text-gray-300" />
      ) : (
        <Moon className="h-4 w-4 text-gray-600 dark:text-gray-300" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
