import ChatView from "../../components/ChatView";
import ConversationPreview from "../../components/ConversationPreview";
import { Search, Filter } from "lucide-react";

const conversations = [
  { name: "Maria Garcia", lastMessage: "Si, tengo 120 puntos. Cuando podria ir a ver el departamento?", time: "Hace 2 min", status: "qualified" as const, unread: true },
  { name: "Carlos Mendez", lastMessage: "Y cuanto seria el enganche con INFONAVIT?", time: "Hace 15 min", status: "active" as const, unread: true },
  { name: "Ana Torres", lastMessage: "Perfecto, nos vemos el sabado a las 11", time: "Hace 1 hr", status: "handed-off" as const },
  { name: "Roberto Diaz", lastMessage: "Ok, lo voy a pensar", time: "Hace 3 hrs", status: "cold" as const },
  { name: "Patricia Vega", lastMessage: "Me interesa el Tipo B, tienen en piso alto?", time: "Hace 45 min", status: "qualified" as const, unread: true },
  { name: "Fernando Juarez", lastMessage: "Hola, cuanto cuestan los departamentos?", time: "Hace 5 min", status: "active" as const, unread: true },
  { name: "Lucia Hernandez", lastMessage: "Gracias por la info, lo platico con mi esposo", time: "Hace 2 hrs", status: "active" as const },
  { name: "Miguel Sanchez", lastMessage: "Tienen estacionamiento incluido?", time: "Hace 1 hr", status: "active" as const },
];

export default function ConversationsPage() {
  return (
    <div className="p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Conversaciones</h1>
        <p className="text-sm mt-1" style={{ color: "var(--muted)" }}>Monitorea y gestiona las conversaciones de WhatsApp en tiempo real</p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Conversation list */}
        <div className="rounded-xl border overflow-hidden" style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
          <div className="p-4 border-b space-y-3" style={{ borderColor: "var(--border)" }}>
            {/* Search */}
            <div className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2">
              <Search className="w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar conversacion..."
                className="flex-1 bg-transparent text-sm outline-none placeholder-gray-400"
                readOnly
              />
            </div>
            {/* Filters */}
            <div className="flex items-center gap-2">
              <button className="text-xs font-medium px-3 py-1.5 rounded-full bg-blue-500 text-white">Todas (12)</button>
              <button className="text-xs font-medium px-3 py-1.5 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200">Activas (6)</button>
              <button className="text-xs font-medium px-3 py-1.5 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200">Calificados (3)</button>
              <button className="text-xs font-medium px-3 py-1.5 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200">
                <Filter className="w-3 h-3" />
              </button>
            </div>
          </div>
          <div className="max-h-[540px] overflow-y-auto">
            {conversations.map((c) => (
              <ConversationPreview key={c.name} {...c} />
            ))}
          </div>
        </div>

        {/* Active chat */}
        <div className="xl:col-span-2">
          <ChatView />
        </div>
      </div>
    </div>
  );
}
