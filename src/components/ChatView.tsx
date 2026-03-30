"use client";

import { Send, Phone, Calendar, UserCheck, MoreVertical } from "lucide-react";

const messages = [
  { from: "buyer", text: "Hola, vi su anuncio en Instagram del desarrollo en Roma Norte. Me interesa saber mas.", time: "10:23 AM" },
  { from: "ai", text: "Hola! Gracias por tu interes en Roma Verde. Es un desarrollo nuevo en el corazon de Roma Norte, a 3 cuadras del Metrobus Insurgentes. Tenemos departamentos de 1, 2 y 3 recamaras. Que tipo de departamento te interesaria?", time: "10:23 AM" },
  { from: "buyer", text: "Busco algo de 2 recamaras, para vivir con mi pareja. Que precios manejan?", time: "10:25 AM" },
  { from: "ai", text: "Tenemos dos opciones con 2 recamaras:\n\n- Tipo A: 65m2, 1 bano, balcon - desde $3,200,000 MXN\n- Tipo B: 78m2, 2 banos, balcon - desde $3,950,000 MXN\n\nEl Tipo B es el mas popular para parejas por el segundo bano y los metros extra. Tienes alguna preferencia de piso? Los pisos altos (6-8) tienen mejor vista.", time: "10:25 AM" },
  { from: "buyer", text: "El tipo B suena bien. Que opciones de financiamiento tienen? Podria usar mi credito INFONAVIT?", time: "10:28 AM" },
  { from: "ai", text: "Si! INFONAVIT aplica para Roma Verde. El Tipo B esta dentro del monto maximo de $4M que maneja INFONAVIT. Necesitarias tener minimo 116 puntos y una relacion laboral vigente. Tambien manejamos credito bancario y pago de contado con un 5% de descuento.\n\nYa checaste cuantos puntos INFONAVIT tienes? Lo puedes ver en su app.", time: "10:28 AM" },
  { from: "buyer", text: "Si, tengo 120 puntos. Cuando podria ir a ver el departamento?", time: "10:31 AM" },
];

const leadSummary = {
  name: "Maria Garcia Lopez",
  phone: "+52 55 1234 5678",
  score: 92,
  interest: "Tipo B - 2 recamaras",
  financing: "INFONAVIT (120 pts)",
  intent: "Vivienda propia",
  budget: "$3.9M - $4.0M MXN",
  timeline: "3-6 meses",
  source: "Instagram Ad - Roma Verde",
};

export default function ChatView() {
  return (
    <div className="flex h-[600px] rounded-xl border overflow-hidden" style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
      {/* Chat area */}
      <div className="flex-1 flex flex-col">
        {/* Chat header */}
        <div className="px-5 py-3 border-b flex items-center justify-between" style={{ borderColor: "var(--border)" }}>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-xs font-bold text-gray-600">
              MG
            </div>
            <div>
              <p className="text-sm font-medium">Maria Garcia Lopez</p>
              <p className="text-xs" style={{ color: "var(--muted)" }}>En linea - WhatsApp</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs bg-emerald-100 text-emerald-700 font-medium px-2 py-1 rounded-full">Score: 92</span>
            <span className="text-xs bg-blue-100 text-blue-700 font-medium px-2 py-1 rounded-full">AI activo</span>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <MoreVertical className="w-4 h-4 text-gray-500" />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3" style={{ background: "#f0f2f5" }}>
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.from === "buyer" ? "justify-start" : "justify-end"}`}>
              <div
                className={`max-w-[75%] px-3 py-2 rounded-xl text-sm whitespace-pre-line ${
                  msg.from === "buyer"
                    ? "bg-white text-gray-900 rounded-bl-sm"
                    : "bg-emerald-100 text-gray-900 rounded-br-sm"
                }`}
              >
                {msg.from === "ai" && (
                  <div className="flex items-center gap-1 mb-1">
                    <span className="text-[10px] font-semibold text-emerald-600">CLIC AI</span>
                  </div>
                )}
                <p>{msg.text}</p>
                <p className="text-[10px] text-gray-400 text-right mt-1">{msg.time}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Input area */}
        <div className="px-4 py-3 border-t flex items-center gap-2" style={{ borderColor: "var(--border)" }}>
          <div className="flex-1 flex items-center gap-2 bg-gray-50 rounded-xl px-4 py-2.5">
            <input
              type="text"
              placeholder="Tomar control de la conversacion..."
              className="flex-1 bg-transparent text-sm outline-none placeholder-gray-400"
              readOnly
            />
          </div>
          <button className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "var(--accent)" }}>
            <Send className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>

      {/* Lead info sidebar */}
      <div className="w-72 border-l overflow-y-auto" style={{ borderColor: "var(--border)" }}>
        <div className="p-4">
          <h3 className="text-sm font-semibold mb-4">Resumen del Lead</h3>

          <div className="space-y-3">
            {Object.entries(leadSummary).map(([key, value]) => (
              <div key={key}>
                <p className="text-[11px] font-medium uppercase tracking-wider mb-0.5" style={{ color: "var(--muted)" }}>
                  {key === "name" ? "Nombre" :
                   key === "phone" ? "Telefono" :
                   key === "score" ? "Score" :
                   key === "interest" ? "Interes" :
                   key === "financing" ? "Financiamiento" :
                   key === "intent" ? "Intencion" :
                   key === "budget" ? "Presupuesto" :
                   key === "timeline" ? "Plazo" :
                   key === "source" ? "Fuente" : key}
                </p>
                <p className="text-sm">{value}</p>
              </div>
            ))}
          </div>

          {/* Action buttons */}
          <div className="mt-6 space-y-2">
            <button className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium text-white" style={{ background: "var(--accent)" }}>
              <UserCheck className="w-4 h-4" />
              Transferir a vendedor
            </button>
            <button className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium border" style={{ borderColor: "var(--border)" }}>
              <Calendar className="w-4 h-4" />
              Agendar visita
            </button>
            <button className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium border" style={{ borderColor: "var(--border)" }}>
              <Phone className="w-4 h-4" />
              Llamar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
