"use client"

import { CopyButton } from "@/components/copy-button"

interface CodeBlockProps {
  children: string
  className?: string
}

export function CodeBlock({ children, className }: CodeBlockProps) {
  return (
    <div className="relative">
      <pre className={className}>
        <code>{children}</code>
      </pre>
      <CopyButton text={children} />
    </div>
  )
}