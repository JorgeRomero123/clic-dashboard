import { MessageSquare, Users, CalendarCheck, DollarSign, Clock, Target } from "lucide-react";
import KpiCard from "../components/KpiCard";
import FunnelChart from "../components/FunnelChart";
import ConversationPreview from "../components/ConversationPreview";

const recentConversations = [
  { name: "Maria Garcia", lastMessage: "Si, tengo 120 puntos. Cuando podria ir a ver el departamento?", time: "Hace 2 min", status: "qualified" as const, unread: true },
  { name: "Carlos Mendez", lastMessage: "Y cuanto seria el enganche con INFONAVIT?", time: "Hace 15 min", status: "active" as const, unread: true },
  { name: "Ana Torres", lastMessage: "Perfecto, nos vemos el sabado a las 11", time: "Hace 1 hr", status: "handed-off" as const },
  { name: "Roberto Diaz", lastMessage: "Ok, lo voy a pensar", time: "Hace 3 hrs", status: "cold" as const },
  { name: "Patricia Vega", lastMessage: "Me interesa el Tipo B, tienen en piso alto?", time: "Hace 45 min", status: "qualified" as const, unread: true },
];

const topCampaigns = [
  { name: "IG - Roma Verde - 2 Rec", leads: 234, qualified: 67, cost: "$18,400", cpl: "$274" },
  { name: "FB - Roma Verde - Inversion", leads: 189, qualified: 42, cost: "$15,200", cpl: "$362" },
  { name: "IG - Roma Verde - INFONAVIT", leads: 156, qualified: 51, cost: "$12,800", cpl: "$251" },
  { name: "FB - Roma Verde - General", leads: 312, qualified: 38, cost: "$22,100", cpl: "$582" },
];

export default function DashboardPage() {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <p className="text-sm mt-1" style={{ color: "var(--muted)" }}>Roma Verde - Marzo 2026</p>
          </div>
          <div className="flex items-center gap-3">
            <select className="text-sm border rounded-lg px-3 py-2" style={{ borderColor: "var(--border)" }}>
              <option>Ultimos 30 dias</option>
              <option>Ultimos 7 dias</option>
              <option>Este mes</option>
            </select>
            <button className="text-sm font-medium px-4 py-2 rounded-lg text-white" style={{ background: "var(--accent)" }}>
              Exportar reporte
            </button>
          </div>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
        <KpiCard
          title="Conversaciones"
          value="1,247"
          change="+12.3%"
          trend="up"
          icon={<MessageSquare className="w-5 h-5" style={{ color: "var(--accent)" }} />}
        />
        <KpiCard
          title="Leads calificados"
          value="342"
          change="+8.7%"
          trend="up"
          icon={<Users className="w-5 h-5" style={{ color: "var(--accent)" }} />}
        />
        <KpiCard
          title="Visitas agendadas"
          value="128"
          change="+15.2%"
          trend="up"
          icon={<CalendarCheck className="w-5 h-5" style={{ color: "var(--accent)" }} />}
        />
        <KpiCard
          title="Costo por lead calif."
          value="$287"
          change="-9.4%"
          trend="up"
          icon={<DollarSign className="w-5 h-5" style={{ color: "var(--accent)" }} />}
        />
        <KpiCard
          title="Tiempo de respuesta"
          value="18s"
          change="-67%"
          trend="up"
          icon={<Clock className="w-5 h-5" style={{ color: "var(--accent)" }} />}
        />
        <KpiCard
          title="Tasa de conversion"
          value="27.4%"
          change="+3.1%"
          trend="up"
          icon={<Target className="w-5 h-5" style={{ color: "var(--accent)" }} />}
        />
      </div>

      {/* Main content grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
        {/* Funnel */}
        <div className="xl:col-span-2 rounded-xl p-6 border" style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold">Embudo de conversion</h2>
            <span className="text-xs px-2 py-1 rounded-full bg-gray-100" style={{ color: "var(--muted)" }}>Marzo 2026</span>
          </div>
          <FunnelChart />
        </div>

        {/* Recent conversations */}
        <div className="rounded-xl border overflow-hidden" style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
          <div className="px-5 py-4 border-b flex items-center justify-between" style={{ borderColor: "var(--border)" }}>
            <h2 className="text-lg font-semibold">Conversaciones recientes</h2>
            <span className="text-xs bg-blue-500 text-white px-2 py-0.5 rounded-full">12 activas</span>
          </div>
          <div className="max-h-[400px] overflow-y-auto">
            {recentConversations.map((c) => (
              <ConversationPreview key={c.name} {...c} />
            ))}
          </div>
        </div>
      </div>

      {/* Campaign performance */}
      <div className="rounded-xl p-6 border" style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Rendimiento por campana</h2>
          <span className="text-xs" style={{ color: "var(--muted)" }}>Fuente: Meta Ads</span>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b" style={{ borderColor: "var(--border)" }}>
              <th className="text-left py-3 font-medium" style={{ color: "var(--muted)" }}>Campana</th>
              <th className="text-right py-3 font-medium" style={{ color: "var(--muted)" }}>Leads</th>
              <th className="text-right py-3 font-medium" style={{ color: "var(--muted)" }}>Calificados</th>
              <th className="text-right py-3 font-medium" style={{ color: "var(--muted)" }}>Gasto</th>
              <th className="text-right py-3 font-medium" style={{ color: "var(--muted)" }}>CPL Calificado</th>
            </tr>
          </thead>
          <tbody>
            {topCampaigns.map((c) => (
              <tr key={c.name} className="border-b hover:bg-gray-50 transition-colors" style={{ borderColor: "var(--border)" }}>
                <td className="py-3 font-medium">{c.name}</td>
                <td className="py-3 text-right">{c.leads}</td>
                <td className="py-3 text-right">
                  <span className="font-medium">{c.qualified}</span>
                  <span className="text-xs ml-1" style={{ color: "var(--muted)" }}>({((c.qualified / c.leads) * 100).toFixed(0)}%)</span>
                </td>
                <td className="py-3 text-right">{c.cost}</td>
                <td className="py-3 text-right font-medium">{c.cpl}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
