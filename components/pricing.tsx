"use client"

import { useState } from "react"
import { Check } from "lucide-react"

const plans = [
  {
    name: "PLAN CONNECT",
    monthlyPrice: 39.99,
    yearlyPrice: 399,
    trialDays: 7,
    featured: false,
    features: ["Correos IA", "Gestión automática de leads", "Reportes y métricas básicas"],
  },
  {
    name: "PLAN BUSINESS",
    monthlyPrice: 79.99,
    yearlyPrice: 799,
    trialDays: 7,
    featured: true,
    badge: "Más popular",
    features: ["Todo Plan Connect +", "WhatsApp IA", "Seguimiento IA", "Integraciones (webhooks personalizados)"],
  },
  {
    name: "PLAN ENTERPRISE",
    monthlyPrice: 199.99,
    yearlyPrice: 1999,
    launchPrice: 179.99,
    launchYearlyPrice: 1799,
    trialDays: 10,
    featured: false,
    features: [
      "Todo Plan Business +",
      "Llamadas IA",
      "Embudos de venta inteligentes",
      "Multiusuario",
      "Soporte prioritario",
      "Análisis predictivo",
    ],
  },
]

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-foreground mb-4">
          Planes y <span className="text-accent">Precios</span>
        </h2>
        <p className="text-center text-muted-foreground mb-8">Elige el plan perfecto para tu negocio</p>

        {/* Toggle */}
        <div className="flex justify-center items-center gap-4 mb-12">
          <span className={`font-semibold ${!isAnnual ? "text-foreground" : "text-muted-foreground"}`}>Mensual</span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors ${
              isAnnual ? "bg-accent" : "bg-muted"
            }`}
          >
            <span
              className={`inline-block h-6 w-6 transform rounded-full bg-background transition-transform ${
                isAnnual ? "translate-x-9" : "translate-x-1"
              }`}
            />
          </button>
          <span className={`font-semibold ${isAnnual ? "text-foreground" : "text-muted-foreground"}`}>Anual</span>
          {isAnnual && (
            <span className="ml-2 text-accent text-sm font-semibold bg-accent/10 px-3 py-1 rounded-full">
              Ahorra 20%
            </span>
          )}
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative rounded-xl overflow-hidden transition-all ${
                plan.featured
                  ? "md:scale-105 bg-gradient-to-br from-accent/20 to-accent/5 border-2 border-accent shadow-xl shadow-accent/20"
                  : "bg-card/50 border border-border hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10"
              }`}
            >
              {plan.badge && (
                <div className="absolute top-0 left-0 right-0 bg-accent text-primary-foreground py-2 text-center text-sm font-bold">
                  {plan.badge}
                </div>
              )}

              <div className={`p-8 ${plan.badge ? "pt-16" : ""}`}>
                <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-4xl font-bold text-accent">
                      €
                      {isAnnual
                        ? (plan.launchYearlyPrice || plan.yearlyPrice) / 12
                        : plan.launchPrice || plan.monthlyPrice}
                    </span>
                    <span className="text-muted-foreground">/{isAnnual ? "mes (anual)" : "mes"}</span>
                  </div>
                  {plan.launchPrice && (
                    <p className="text-sm text-accent font-semibold">
                      Precio exclusivo de lanzamiento: ahorro de por vida
                    </p>
                  )}
                  <p className="text-sm text-muted-foreground mt-2">{plan.trialDays} días de prueba gratis</p>
                </div>

                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-all mb-6 ${
                    plan.featured
                      ? "bg-accent text-primary-foreground hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/30"
                      : "bg-muted text-foreground hover:bg-muted/80 hover:border-accent/50"
                  }`}
                >
                  Empezar ahora
                </button>

                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-sm text-muted-foreground max-w-2xl mx-auto">
          Durante la preventa o primer mes tras lanzamiento, los precios se reducen permanentemente.
        </p>
      </div>
    </section>
  )
}
