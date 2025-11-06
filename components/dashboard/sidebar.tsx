"use client"

import { Home, TrendingUp, Zap, Brain, User, HelpCircle, Menu, X } from "lucide-react"

const menuItems = [
  { id: "home", label: "Inicio", icon: Home },
  { id: "metrics", label: "Métricas", icon: TrendingUp },
  { id: "automations", label: "Automatizaciones", icon: Zap },
  { id: "ai-data", label: "Datos IA", icon: Brain },
  { id: "account", label: "Cuenta", icon: User },
  { id: "support", label: "Soporte", icon: HelpCircle },
]

interface SidebarProps {
  activeSection: string
  onSectionChange: (section: string) => void
  isOpen: boolean
  onToggle: () => void
}

export default function Sidebar({ activeSection, onSectionChange, isOpen, onToggle }: SidebarProps) {
  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={onToggle}
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-[#0a1f35] border border-[#1a3a52] hover:bg-[#1a3a52] transition-colors"
      >
        {isOpen ? <X className="w-5 h-5 text-[#00e1b4]" /> : <Menu className="w-5 h-5 text-[#00e1b4]" />}
      </button>

      {/* Sidebar overlay for mobile */}
      {isOpen && <div className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-30" onClick={onToggle}></div>}

      {/* Sidebar */}
      <div
        className={`fixed md:static h-screen w-64 bg-[#0a1f35]/80 backdrop-blur-xl border-r border-[#1a3a52] transition-transform duration-300 z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="flex flex-col h-full p-6">
          <div className="mb-12 mt-4 md:mt-0">
            <h2 className="text-2xl font-bold text-[#00e1b4]">Lynara</h2>
            <p className="text-xs text-[#96b5c7] mt-1">Panel de Control</p>
          </div>

          <nav className="flex-1 space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon
              const isActive = activeSection === item.id
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onSectionChange(item.id)
                    if (window.innerWidth < 768) onToggle()
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group ${
                    isActive
                      ? "bg-[#00e1b4]/20 text-[#00e1b4] border border-[#00e1b4]/40 shadow-lg shadow-[#00e1b4]/20"
                      : "text-[#96b5c7] hover:bg-[#1a3a52]/40 hover:text-[#00e1b4]"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              )
            })}
          </nav>

          <div className="pt-6 border-t border-[#1a3a52]">
            <button className="w-full px-4 py-2 text-sm text-[#96b5c7] hover:text-[#00e1b4] rounded-lg hover:bg-[#1a3a52]/40 transition-colors">
              Cerrar sesión
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
