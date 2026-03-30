interface ConversationPreviewProps {
  name: string;
  lastMessage: string;
  time: string;
  status: "active" | "qualified" | "handed-off" | "cold";
  unread?: boolean;
}

const statusConfig = {
  active: { label: "Activa", color: "bg-blue-100 text-blue-700" },
  qualified: { label: "Calificado", color: "bg-emerald-100 text-emerald-700" },
  "handed-off": { label: "Transferido", color: "bg-purple-100 text-purple-700" },
  cold: { label: "Frio", color: "bg-gray-100 text-gray-600" },
};

export default function ConversationPreview({ name, lastMessage, time, status, unread }: ConversationPreviewProps) {
  const { label, color } = statusConfig[status];

  return (
    <div className="flex items-start gap-3 p-4 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors border-b" style={{ borderColor: "var(--border)" }}>
      {/* Avatar */}
      <div className="relative shrink-0">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-sm font-bold text-gray-600">
          {name.split(" ").map(n => n[0]).join("")}
        </div>
        {unread && (
          <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-blue-500 rounded-full border-2 border-white" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1">
          <p className={`text-sm ${unread ? "font-bold" : "font-medium"}`}>{name}</p>
          <span className="text-xs" style={{ color: "var(--muted)" }}>{time}</span>
        </div>
        <p className="text-sm truncate" style={{ color: "var(--muted)" }}>{lastMessage}</p>
      </div>

      {/* Status badge */}
      <span className={`shrink-0 text-xs font-medium px-2 py-1 rounded-full ${color}`}>
        {label}
      </span>
    </div>
  );
}
