import { Search, Filter, Download, SlidersHorizontal } from "lucide-react";
import LeadTable from "../../components/LeadTable";

export default function LeadsPage() {
  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Leads</h1>
          <p className="text-sm mt-1" style={{ color: "var(--muted)" }}>342 leads calificados de 1,247 conversaciones este mes</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 text-sm border rounded-lg px-3 py-2 hover:bg-gray-50" style={{ borderColor: "var(--border)" }}>
            <Download className="w-4 h-4" />
            Exportar CSV
          </button>
          <button className="text-sm font-medium px-4 py-2 rounded-lg text-white" style={{ background: "var(--accent)" }}>
            Sincronizar CRM
          </button>
        </div>
      </div>

      {/* Filters bar */}
      <div className="rounded-xl border p-4 mb-6 flex items-center gap-4 flex-wrap" style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
        <div className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2 flex-1 min-w-[200px]">
          <Search className="w-4 h-4 text-gray-400" />
          <input type="text" placeholder="Buscar por nombre, telefono..." className="flex-1 bg-transparent text-sm outline-none placeholder-gray-400" readOnly />
        </div>
        <select className="text-sm border rounded-lg px-3 py-2" style={{ borderColor: "var(--border)" }}>
          <option>Todos los estados</option>
          <option>Activo</option>
          <option>Calificado</option>
          <option>Transferido</option>
          <option>Frio</option>
        </select>
        <select className="text-sm border rounded-lg px-3 py-2" style={{ borderColor: "var(--border)" }}>
          <option>Cualquier financiamiento</option>
          <option>INFONAVIT</option>
          <option>FOVISSSTE</option>
          <option>Credito Bancario</option>
          <option>Contado</option>
        </select>
        <select className="text-sm border rounded-lg px-3 py-2" style={{ borderColor: "var(--border)" }}>
          <option>Cualquier fuente</option>
          <option>Instagram</option>
          <option>Facebook</option>
          <option>Google</option>
          <option>Directo</option>
        </select>
        <select className="text-sm border rounded-lg px-3 py-2" style={{ borderColor: "var(--border)" }}>
          <option>Score: Todos</option>
          <option>80+</option>
          <option>50-79</option>
          <option>Menos de 50</option>
        </select>
        <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700">
          <SlidersHorizontal className="w-4 h-4" />
          Mas filtros
        </button>
      </div>

      {/* Score distribution mini cards */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="rounded-xl border p-4" style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
          <div className="flex items-center justify-between">
            <span className="text-sm" style={{ color: "var(--muted)" }}>Score 80+</span>
            <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700">Hot</span>
          </div>
          <p className="text-2xl font-bold mt-1">156</p>
          <div className="w-full h-1.5 bg-gray-100 rounded-full mt-2">
            <div className="h-full bg-emerald-500 rounded-full" style={{ width: "45%" }} />
          </div>
        </div>
        <div className="rounded-xl border p-4" style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
          <div className="flex items-center justify-between">
            <span className="text-sm" style={{ color: "var(--muted)" }}>Score 50-79</span>
            <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-amber-100 text-amber-700">Warm</span>
          </div>
          <p className="text-2xl font-bold mt-1">124</p>
          <div className="w-full h-1.5 bg-gray-100 rounded-full mt-2">
            <div className="h-full bg-amber-500 rounded-full" style={{ width: "36%" }} />
          </div>
        </div>
        <div className="rounded-xl border p-4" style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
          <div className="flex items-center justify-between">
            <span className="text-sm" style={{ color: "var(--muted)" }}>Score &lt;50</span>
            <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">Cold</span>
          </div>
          <p className="text-2xl font-bold mt-1">62</p>
          <div className="w-full h-1.5 bg-gray-100 rounded-full mt-2">
            <div className="h-full bg-gray-400 rounded-full" style={{ width: "18%" }} />
          </div>
        </div>
        <div className="rounded-xl border p-4" style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
          <div className="flex items-center justify-between">
            <span className="text-sm" style={{ color: "var(--muted)" }}>Sin calificar</span>
            <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Nuevos</span>
          </div>
          <p className="text-2xl font-bold mt-1">905</p>
          <div className="w-full h-1.5 bg-gray-100 rounded-full mt-2">
            <div className="h-full bg-blue-400 rounded-full" style={{ width: "72%" }} />
          </div>
        </div>
      </div>

      {/* Lead table */}
      <div className="rounded-xl border" style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
        <LeadTable />
        {/* Pagination */}
        <div className="flex items-center justify-between px-4 py-3 border-t" style={{ borderColor: "var(--border)" }}>
          <span className="text-sm" style={{ color: "var(--muted)" }}>Mostrando 1-6 de 342 leads</span>
          <div className="flex items-center gap-1">
            <button className="px-3 py-1.5 text-sm rounded-lg border hover:bg-gray-50" style={{ borderColor: "var(--border)" }}>Anterior</button>
            <button className="px-3 py-1.5 text-sm rounded-lg text-white" style={{ background: "var(--accent)" }}>1</button>
            <button className="px-3 py-1.5 text-sm rounded-lg border hover:bg-gray-50" style={{ borderColor: "var(--border)" }}>2</button>
            <button className="px-3 py-1.5 text-sm rounded-lg border hover:bg-gray-50" style={{ borderColor: "var(--border)" }}>3</button>
            <button className="px-3 py-1.5 text-sm rounded-lg border hover:bg-gray-50" style={{ borderColor: "var(--border)" }}>Siguiente</button>
          </div>
        </div>
      </div>
    </div>
  );
}
