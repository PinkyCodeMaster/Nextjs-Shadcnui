"use client"

import type React from "react"

import { motion } from "framer-motion"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { useState } from "react"

interface AnimatedMobileNavItemProps {
  href: string
  isActive: boolean
  children: React.ReactNode
}

export default function AnimatedMobileNavItem({ href, isActive, children }: AnimatedMobileNavItemProps) {
  const [isPressed, setIsPressed] = useState(false)

  return (
    <Link
      href={href}
      className={cn(
        "block relative px-3 py-2.5 rounded-md text-base font-medium transition-all duration-200",
        isActive ? "bg-violet-50 text-violet-700" : "text-gray-600",
      )}
      onTouchStart={() => setIsPressed(true)}
      onTouchEnd={() => setIsPressed(false)}
    >
      {/* Press animation for mobile */}
      <motion.div
        className="absolute inset-0 bg-gray-100 rounded-md z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: isPressed ? 0.5 : 0 }}
        transition={{ duration: 0.2 }}
      />

      <span className="relative z-10">{children}</span>

      {/* Active indicator */}
      {isActive && (
        <motion.div
          layoutId="mobileActiveIndicator"
          className="absolute left-0 w-1 top-1 bottom-1 bg-gradient-to-b from-violet-500 to-indigo-600 rounded-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        />
      )}
    </Link>
  )
}
