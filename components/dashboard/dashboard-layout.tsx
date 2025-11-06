"use client"

import type React from "react"

import { useState } from "react"
import Sidebar from "./sidebar"
import Header from "./header"

interface DashboardLayoutProps {
  children: React.ReactNode
  activeSection: string
  onSectionChange: (section: string) => void
}

export default function DashboardLayout({ children, activeSection, onSectionChange }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#001328] via-[#012b36] to-[#006184]">
      {/* Background gradient effect */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/2 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 flex h-screen overflow-hidden">
        <Sidebar
          activeSection={activeSection}
          onSectionChange={onSectionChange}
          isOpen={sidebarOpen}
          onToggle={() => setSidebarOpen(!sidebarOpen)}
        />
        <div className="flex-1 overflow-auto">
          <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
          <main className="p-6 md:p-8">{children}</main>
        </div>
      </div>
    </div>
  )
}
