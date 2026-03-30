import { Building2, MapPin, Plus, MoreVertical, Wifi, WifiOff } from "lucide-react";

const projects = [
  {
    name: "Roma Verde",
    location: "Roma Norte, CDMX",
    units: 47,
    available: 24,
    leads: 1247,
    qualified: 342,
    status: "active",
    whatsapp: "+52 55 1000 2000",
    monthlySpend: "$68,500 MXN",
  },
  {
    name: "Polanco Towers",
    location: "Polanco, CDMX",
    units: 120,
    available: 89,
    leads: 456,
    qualified: 98,
    status: "active",
    whatsapp: "+52 55 3000 4000",
    monthlySpend: "$125,000 MXN",
  },
  {
    name: "Condesa Living",
    location: "Condesa, CDMX",
    units: 32,
    available: 5,
    leads: 892,
    qualified: 267,
    status: "active",
    whatsapp: "+52 55 5000 6000",
    monthlySpend: "$42,000 MXN",
  },
  {
    name: "Narvarte Central",
    location: "Narvarte, CDMX",
    units: 64,
    available: 64,
    leads: 0,
    qualified: 0,
    status: "setup",
    whatsapp: "Sin configurar",
    monthlySpend: "$0",
  },
];

export default function ProjectsPage() {
  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Proyectos</h1>
          <p className="text-sm mt-1" style={{ color: "var(--muted)" }}>Gestiona los desarrollos conectados a Clic</p>
        </div>
        <button className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg text-white" style={{ background: "var(--accent)" }}>
          <Plus className="w-4 h-4" />
          Nuevo proyecto
        </button>
      </div>

      {/* Project cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div key={project.name} className="rounded-xl border overflow-hidden" style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
            {/* Header */}
            <div className="p-5 border-b" style={{ borderColor: "var(--border)" }}>
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${project.status === "active" ? "bg-emerald-100" : "bg-gray-100"}`}>
                    <Building2 className={`w-5 h-5 ${project.status === "active" ? "text-emerald-600" : "text-gray-400"}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold">{project.name}</h3>
                    <div className="flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3" style={{ color: "var(--muted)" }} />
                      <span className="text-xs" style={{ color: "var(--muted)" }}>{project.location}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {project.status === "active" ? (
                    <span className="flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full bg-emerald-100 text-emerald-700">
                      <Wifi className="w-3 h-3" /> Activo
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full bg-amber-100 text-amber-700">
                      <WifiOff className="w-3 h-3" /> Configurando
                    </span>
                  )}
                  <button className="p-1.5 hover:bg-gray-100 rounded-lg">
                    <MoreVertical className="w-4 h-4 text-gray-400" />
                  </button>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="p-5">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-xs font-medium" style={{ color: "var(--muted)" }}>Unidades</p>
                  <p className="text-lg font-bold">{project.available}<span className="text-sm font-normal" style={{ color: "var(--muted)" }}> / {project.units} disponibles</span></p>
                </div>
                <div>
                  <p className="text-xs font-medium" style={{ color: "var(--muted)" }}>Leads este mes</p>
                  <p className="text-lg font-bold">{project.leads.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-xs font-medium" style={{ color: "var(--muted)" }}>Calificados</p>
                  <p className="text-lg font-bold">{project.qualified}</p>
                </div>
                <div>
                  <p className="text-xs font-medium" style={{ color: "var(--muted)" }}>Gasto Meta Ads</p>
                  <p className="text-lg font-bold">{project.monthlySpend}</p>
                </div>
              </div>

              {/* WhatsApp number */}
              <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                <svg className="w-5 h-5 text-green-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.387 0-4.608-.794-6.39-2.134l-.446-.347-3.09 1.036 1.036-3.09-.347-.446A9.958 9.958 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                </svg>
                <span className="text-sm" style={{ color: project.status === "active" ? "var(--foreground)" : "var(--muted)" }}>{project.whatsapp}</span>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 mt-4">
                {project.status === "active" ? (
                  <>
                    <button className="flex-1 text-sm font-medium py-2 rounded-lg border hover:bg-gray-50 transition-colors" style={{ borderColor: "var(--border)" }}>
                      Ver conversaciones
                    </button>
                    <button className="flex-1 text-sm font-medium py-2 rounded-lg border hover:bg-gray-50 transition-colors" style={{ borderColor: "var(--border)" }}>
                      Editar AI
                    </button>
                  </>
                ) : (
                  <button className="flex-1 text-sm font-medium py-2 rounded-lg text-white" style={{ background: "var(--accent)" }}>
                    Completar configuracion
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
