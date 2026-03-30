const leads = [
  { name: "Maria Garcia Lopez", phone: "+52 55 1234 5678", source: "Instagram", score: 92, status: "qualified", interest: "Tipo B - 2 rec", financing: "Credito Bancario", lastContact: "Hace 12 min" },
  { name: "Carlos Mendez Ruiz", phone: "+52 55 9876 5432", source: "Facebook", score: 78, status: "active", interest: "Tipo A - 2 rec", financing: "INFONAVIT", lastContact: "Hace 35 min" },
  { name: "Ana Lucia Torres", phone: "+52 55 5555 1234", source: "Instagram", score: 85, status: "handed-off", interest: "Tipo C - 3 rec", financing: "Contado", lastContact: "Hace 1 hr" },
  { name: "Roberto Diaz Flores", phone: "+52 55 4321 8765", source: "Google", score: 45, status: "cold", interest: "Tipo A - 2 rec", financing: "FOVISSSTE", lastContact: "Hace 3 hrs" },
  { name: "Patricia Vega Soto", phone: "+52 55 6789 4321", source: "Facebook", score: 88, status: "qualified", interest: "Tipo B - 2 rec", financing: "Credito Bancario", lastContact: "Hace 45 min" },
  { name: "Fernando Juarez", phone: "+52 55 1111 2222", source: "Instagram", score: 34, status: "active", interest: "Sin definir", financing: "Sin definir", lastContact: "Hace 5 min" },
];

const statusStyles: Record<string, string> = {
  active: "bg-blue-100 text-blue-700",
  qualified: "bg-emerald-100 text-emerald-700",
  "handed-off": "bg-purple-100 text-purple-700",
  cold: "bg-gray-100 text-gray-600",
};

const statusLabels: Record<string, string> = {
  active: "Activo",
  qualified: "Calificado",
  "handed-off": "Transferido",
  cold: "Frio",
};

function ScoreBadge({ score }: { score: number }) {
  const color = score >= 80 ? "text-emerald-600" : score >= 50 ? "text-amber-600" : "text-red-500";
  return <span className={`text-sm font-bold ${color}`}>{score}</span>;
}

export default function LeadTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b" style={{ borderColor: "var(--border)" }}>
            <th className="text-left py-3 px-4 font-medium" style={{ color: "var(--muted)" }}>Nombre</th>
            <th className="text-left py-3 px-4 font-medium" style={{ color: "var(--muted)" }}>Fuente</th>
            <th className="text-left py-3 px-4 font-medium" style={{ color: "var(--muted)" }}>Interes</th>
            <th className="text-left py-3 px-4 font-medium" style={{ color: "var(--muted)" }}>Financiamiento</th>
            <th className="text-center py-3 px-4 font-medium" style={{ color: "var(--muted)" }}>Score</th>
            <th className="text-left py-3 px-4 font-medium" style={{ color: "var(--muted)" }}>Estado</th>
            <th className="text-left py-3 px-4 font-medium" style={{ color: "var(--muted)" }}>Ultimo contacto</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead) => (
            <tr key={lead.phone} className="border-b hover:bg-gray-50 cursor-pointer transition-colors" style={{ borderColor: "var(--border)" }}>
              <td className="py-3 px-4">
                <div>
                  <p className="font-medium">{lead.name}</p>
                  <p className="text-xs" style={{ color: "var(--muted)" }}>{lead.phone}</p>
                </div>
              </td>
              <td className="py-3 px-4">{lead.source}</td>
              <td className="py-3 px-4">{lead.interest}</td>
              <td className="py-3 px-4">{lead.financing}</td>
              <td className="py-3 px-4 text-center"><ScoreBadge score={lead.score} /></td>
              <td className="py-3 px-4">
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${statusStyles[lead.status]}`}>
                  {statusLabels[lead.status]}
                </span>
              </td>
              <td className="py-3 px-4 text-xs" style={{ color: "var(--muted)" }}>{lead.lastContact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
