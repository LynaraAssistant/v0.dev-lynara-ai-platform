"use client"

import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { TrendingUp, Phone, Mail, Calendar, Clock, Zap } from "lucide-react"

const metricsData = [
  { name: "Lun", valor: 65 },
  { name: "Mar", valor: 78 },
  { name: "Mié", valor: 90 },
  { name: "Jue", valor: 81 },
  { name: "Vie", valor: 95 },
  { name: "Sab", valor: 72 },
  { name: "Dom", valor: 88 },
]

const metrics = [
  { label: "Leads contactados", value: "342", change: "+12%", icon: TrendingUp, color: "from-[#00e1b4]" },
  { label: "Conversaciones iniciadas", value: "128", change: "+8%", icon: Zap, color: "from-[#00a2ff]" },
  { label: "Llamadas atendidas", value: "45", change: "+15%", icon: Phone, color: "from-[#00c9a0]" },
  { label: "Correos respondidos", value: "198", change: "+5%", icon: Mail, color: "from-[#006184]" },
  { label: "Citas generadas", value: "28", change: "+23%", icon: Calendar, color: "from-[#00e1b4]" },
  { label: "Horas ahorradas", value: "156", change: "+30%", icon: Clock, color: "from-[#00a2ff]" },
]

export default function Home() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {metrics.map((metric, index) => {
          const Icon = metric.icon
          return (
            <div
              key={index}
              className="bg-[#0a1f35]/50 backdrop-blur-xl border border-[#1a3a52] rounded-xl p-6 hover:border-[#00e1b4]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#00e1b4]/10 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-[#96b5c7] text-sm font-medium">{metric.label}</p>
                  <p className="text-3xl font-bold text-[#eaf6ff] mt-2">{metric.value}</p>
                </div>
                <div
                  className={`p-3 rounded-lg bg-gradient-to-br ${metric.color} to-transparent opacity-20 group-hover:opacity-40 transition-all`}
                >
                  <Icon className="w-6 h-6 text-[#00e1b4]" />
                </div>
              </div>
              <p className="text-sm text-[#00e1b4] font-semibold">{metric.change} esta semana</p>
            </div>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-[#0a1f35]/50 backdrop-blur-xl border border-[#1a3a52] rounded-xl p-6">
          <h3 className="text-lg font-bold text-[#eaf6ff] mb-4">Tendencia de Actividad</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={metricsData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1a3a52" />
              <XAxis stroke="#96b5c7" />
              <YAxis stroke="#96b5c7" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#0a1f35",
                  border: "1px solid #1a3a52",
                  borderRadius: "8px",
                }}
                labelStyle={{ color: "#eaf6ff" }}
              />
              <Line type="monotone" dataKey="valor" stroke="#00e1b4" strokeWidth={2} dot={{ fill: "#00e1b4" }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-[#0a1f35]/50 backdrop-blur-xl border border-[#1a3a52] rounded-xl p-6">
          <h3 className="text-lg font-bold text-[#eaf6ff] mb-4">Rendimiento Diario</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={metricsData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1a3a52" />
              <XAxis stroke="#96b5c7" />
              <YAxis stroke="#96b5c7" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#0a1f35",
                  border: "1px solid #1a3a52",
                  borderRadius: "8px",
                }}
                labelStyle={{ color: "#eaf6ff" }}
              />
              <Bar dataKey="valor" fill="#00a2ff" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#0a1f35]/50 backdrop-blur-xl border border-[#1a3a52] rounded-xl p-6">
          <h3 className="text-lg font-bold text-[#eaf6ff] mb-4">Tasa de Conversión</h3>
          <div className="space-y-4">
            {[
              { name: "Leads a Conversaciones", percentage: 73 },
              { name: "Conversaciones a Citas", percentage: 45 },
              { name: "Citas a Ventas", percentage: 68 },
            ].map((item, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="text-[#96b5c7] text-sm">{item.name}</span>
                  <span className="text-[#00e1b4] font-semibold">{item.percentage}%</span>
                </div>
                <div className="h-2 bg-[#1a3a52] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#00e1b4] to-[#00a2ff] rounded-full"
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#0a1f35]/50 backdrop-blur-xl border border-[#1a3a52] rounded-xl p-6">
          <h3 className="text-lg font-bold text-[#eaf6ff] mb-4">Resumen Semanal</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between text-[#96b5c7]">
              <span>Automatizaciones activas:</span>
              <span className="text-[#00e1b4] font-semibold">7 de 7</span>
            </div>
            <div className="flex justify-between text-[#96b5c7]">
              <span>Errores detectados:</span>
              <span className="text-[#00a2ff] font-semibold">0</span>
            </div>
            <div className="flex justify-between text-[#96b5c7]">
              <span>Tiempo de respuesta promedio:</span>
              <span className="text-[#00e1b4] font-semibold">2.3s</span>
            </div>
            <div className="flex justify-between text-[#96b5c7] pt-3 border-t border-[#1a3a52]">
              <span>Porcentaje automatizado:</span>
              <span className="text-[#00e1b4] font-semibold">94%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
