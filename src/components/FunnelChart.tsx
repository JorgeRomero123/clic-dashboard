const stages = [
  { label: "Contactados", value: 1247, pct: 100, color: "bg-blue-500" },
  { label: "Respondieron", value: 983, pct: 78.8, color: "bg-blue-400" },
  { label: "Calificados", value: 342, pct: 27.4, color: "bg-emerald-500" },
  { label: "Visita agendada", value: 128, pct: 10.3, color: "bg-purple-500" },
  { label: "Visitaron", value: 87, pct: 7.0, color: "bg-amber-500" },
  { label: "Cerrados", value: 23, pct: 1.8, color: "bg-emerald-600" },
];

export default function FunnelChart() {
  return (
    <div className="space-y-3">
      {stages.map((stage, i) => (
        <div key={stage.label} className="flex items-center gap-3">
          <span className="text-xs font-medium w-28 text-right" style={{ color: "var(--muted)" }}>
            {stage.label}
          </span>
          <div className="flex-1 h-8 bg-gray-100 rounded-lg overflow-hidden relative">
            <div
              className={`h-full ${stage.color} rounded-lg transition-all duration-500`}
              style={{ width: `${stage.pct}%` }}
            />
            <span className="absolute inset-0 flex items-center px-3 text-xs font-bold">
              <span className={stage.pct > 30 ? "text-white" : "text-gray-700"}>
                {stage.value.toLocaleString()}
              </span>
            </span>
          </div>
          <span className="text-xs font-medium w-12" style={{ color: "var(--muted)" }}>
            {stage.pct}%
          </span>
          {i > 0 && (
            <span className="text-xs w-12 text-right" style={{ color: "var(--muted)" }}>
              {((stage.value / stages[i - 1].value) * 100).toFixed(0)}% &darr;
            </span>
          )}
          {i === 0 && <span className="w-12" />}
        </div>
      ))}
    </div>
  );
}
