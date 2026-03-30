import { TrendingUp, TrendingDown } from "lucide-react";

interface KpiCardProps {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
  icon: React.ReactNode;
}

export default function KpiCard({ title, value, change, trend, icon }: KpiCardProps) {
  return (
    <div className="rounded-xl p-5 border" style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
      <div className="flex items-start justify-between mb-3">
        <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "var(--accent-light)" }}>
          {icon}
        </div>
        <span
          className={`flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full ${
            trend === "up" ? "bg-emerald-50 text-emerald-600" : "bg-red-50 text-red-600"
          }`}
        >
          {trend === "up" ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
          {change}
        </span>
      </div>
      <p className="text-2xl font-bold tracking-tight">{value}</p>
      <p className="text-sm mt-1" style={{ color: "var(--muted)" }}>{title}</p>
    </div>
  );
}
