"use client"

import { Menu } from "lucide-react"

interface HeaderProps {
  onMenuClick: () => void
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="bg-[#0a1f35]/50 backdrop-blur-xl border-b border-[#1a3a52] p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#eaf6ff]">Panel de Control</h1>
          <p className="text-sm text-[#96b5c7] mt-1">Bienvenido de vuelta a tu panel</p>
        </div>
        <button onClick={onMenuClick} className="md:hidden p-2 rounded-lg hover:bg-[#1a3a52] transition-colors">
          <Menu className="w-5 h-5 text-[#00e1b4]" />
        </button>
      </div>
    </header>
  )
}
