"use client"

import { useState } from "react"
import DashboardLayout from "@/components/dashboard/dashboard-layout"
import Home from "@/components/dashboard/home"
import Metrics from "@/components/dashboard/metrics"
import Automations from "@/components/dashboard/automations"
import AIData from "@/components/dashboard/ai-data"
import Account from "@/components/dashboard/account"
import Support from "@/components/dashboard/support"
import Login from "@/components/dashboard/login"

export default function DashboardPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  if (!isAuthenticated) {
    return <Login onLogin={() => setIsAuthenticated(true)} />
  }

  return (
    <DashboardLayout activeSection={activeSection} onSectionChange={setActiveSection}>
      {activeSection === "home" && <Home />}
      {activeSection === "metrics" && <Metrics />}
      {activeSection === "automations" && <Automations />}
      {activeSection === "ai-data" && <AIData />}
      {activeSection === "account" && <Account />}
      {activeSection === "support" && <Support />}
    </DashboardLayout>
  )
}
