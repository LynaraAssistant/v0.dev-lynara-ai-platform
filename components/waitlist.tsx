"use client"

import type React from "react"

import { useState } from "react"
import { Mail, User, Building2, Phone } from "lucide-react"

export default function Waitlist() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", company: "", phone: "", email: "" })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section id="waitlist" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-foreground mb-4">
          Preventa <span className="text-accent">Exclusiva Lynara</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Apúntate y consigue tu descuento de por vida antes del lanzamiento
        </p>

        <div className="bg-card/50 backdrop-blur border border-border rounded-xl p-8">
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">¡Te hemos añadido a la preventa!</h3>
              <p className="text-muted-foreground">Te avisaremos del lanzamiento exclusivamente.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      Nombre completo
                    </div>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4" />
                      Empresa
                    </div>
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-colors"
                    placeholder="Tu empresa"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      Teléfono
                    </div>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-colors"
                    placeholder="+34 600 000 000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Email
                    </div>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-accent hover:bg-accent/90 text-primary-foreground rounded-lg font-bold transition-all hover:shadow-lg hover:shadow-accent/30 active:scale-95"
              >
                Unirme a la preventa
              </button>

              <p className="text-center text-xs text-muted-foreground">
                Tus datos están seguros. Solo los usaremos para avisarte del lanzamiento.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

import { Check } from "lucide-react"
