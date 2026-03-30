import { Bot, MessageCircle, Users, Bell, Link, Shield } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="p-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Configuracion</h1>
        <p className="text-sm mt-1" style={{ color: "var(--muted)" }}>Configura el agente AI y las reglas de operacion para Roma Verde</p>
      </div>

      {/* AI Personality */}
      <section className="rounded-xl border p-6 mb-6" style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
        <div className="flex items-center gap-3 mb-5">
          <div className="w-9 h-9 rounded-lg bg-purple-100 flex items-center justify-center">
            <Bot className="w-5 h-5 text-purple-600" />
          </div>
          <div>
            <h2 className="font-semibold">Personalidad del AI</h2>
            <p className="text-xs" style={{ color: "var(--muted)" }}>Como se comporta el agente en las conversaciones</p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1.5">Nombre del agente</label>
            <input type="text" defaultValue="Sofia" className="w-full border rounded-lg px-3 py-2.5 text-sm" style={{ borderColor: "var(--border)" }} readOnly />
            <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>El nombre que usa el AI al presentarse</p>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1.5">Tono de conversacion</label>
            <div className="flex items-center gap-3">
              <button className="flex-1 text-sm font-medium py-2.5 rounded-lg border-2 border-blue-500 bg-blue-50 text-blue-700">Amigable</button>
              <button className="flex-1 text-sm font-medium py-2.5 rounded-lg border hover:bg-gray-50" style={{ borderColor: "var(--border)" }}>Profesional</button>
              <button className="flex-1 text-sm font-medium py-2.5 rounded-lg border hover:bg-gray-50" style={{ borderColor: "var(--border)" }}>Formal</button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1.5">Instrucciones personalizadas</label>
            <textarea
              rows={4}
              className="w-full border rounded-lg px-3 py-2.5 text-sm resize-none"
              style={{ borderColor: "var(--border)" }}
              defaultValue="Siempre mencionar que Roma Verde esta a 3 cuadras del Metrobus Insurgentes. Si preguntan por estacionamiento, aclarar que tiene costo adicional de $350,000 por cajon. No comparar con otros desarrollos de la competencia."
              readOnly
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1.5">Nivel de seguimiento</label>
            <select className="w-full border rounded-lg px-3 py-2.5 text-sm" style={{ borderColor: "var(--border)" }}>
              <option>Moderado - 1 follow-up despues de 24hrs sin respuesta</option>
              <option>Bajo - Sin follow-up automatico</option>
              <option>Alto - Hasta 3 follow-ups en 72hrs</option>
            </select>
          </div>
        </div>
      </section>

      {/* Qualification Rules */}
      <section className="rounded-xl border p-6 mb-6" style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
        <div className="flex items-center gap-3 mb-5">
          <div className="w-9 h-9 rounded-lg bg-emerald-100 flex items-center justify-center">
            <Users className="w-5 h-5 text-emerald-600" />
          </div>
          <div>
            <h2 className="font-semibold">Reglas de calificacion</h2>
            <p className="text-xs" style={{ color: "var(--muted)" }}>Define cuando un lead se considera calificado</p>
          </div>
        </div>

        <div className="space-y-3">
          {[
            { label: "Presupuesto confirmado dentro del rango", checked: true },
            { label: "Tipo de financiamiento identificado", checked: true },
            { label: "Tipo de departamento de interes definido", checked: true },
            { label: "Timeline de compra menor a 6 meses", checked: false },
            { label: "Disponibilidad para visita confirmada", checked: true },
          ].map((rule) => (
            <label key={rule.label} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
              <input type="checkbox" defaultChecked={rule.checked} className="w-4 h-4 rounded accent-blue-600" readOnly />
              <span className="text-sm">{rule.label}</span>
            </label>
          ))}
          <div className="pt-2">
            <label className="block text-sm font-medium mb-1.5">Score minimo para transferir</label>
            <div className="flex items-center gap-3">
              <input type="range" min="0" max="100" defaultValue="70" className="flex-1" readOnly />
              <span className="text-sm font-bold w-10 text-center">70</span>
            </div>
          </div>
        </div>
      </section>

      {/* Handoff Rules */}
      <section className="rounded-xl border p-6 mb-6" style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
        <div className="flex items-center gap-3 mb-5">
          <div className="w-9 h-9 rounded-lg bg-amber-100 flex items-center justify-center">
            <MessageCircle className="w-5 h-5 text-amber-600" />
          </div>
          <div>
            <h2 className="font-semibold">Reglas de transferencia</h2>
            <p className="text-xs" style={{ color: "var(--muted)" }}>A quien y cuando se transfieren los leads calificados</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="border rounded-lg overflow-hidden" style={{ borderColor: "var(--border)" }}>
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left py-2.5 px-4 font-medium" style={{ color: "var(--muted)" }}>Vendedor</th>
                  <th className="text-left py-2.5 px-4 font-medium" style={{ color: "var(--muted)" }}>WhatsApp</th>
                  <th className="text-left py-2.5 px-4 font-medium" style={{ color: "var(--muted)" }}>Horario</th>
                  <th className="text-left py-2.5 px-4 font-medium" style={{ color: "var(--muted)" }}>Asignacion</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t" style={{ borderColor: "var(--border)" }}>
                  <td className="py-2.5 px-4 font-medium">Laura Martinez</td>
                  <td className="py-2.5 px-4">+52 55 1111 1111</td>
                  <td className="py-2.5 px-4">Lun-Vie 9:00-18:00</td>
                  <td className="py-2.5 px-4">INFONAVIT, FOVISSSTE</td>
                </tr>
                <tr className="border-t" style={{ borderColor: "var(--border)" }}>
                  <td className="py-2.5 px-4 font-medium">Diego Ramirez</td>
                  <td className="py-2.5 px-4">+52 55 2222 2222</td>
                  <td className="py-2.5 px-4">Lun-Sab 10:00-20:00</td>
                  <td className="py-2.5 px-4">Credito Bancario, Contado</td>
                </tr>
                <tr className="border-t" style={{ borderColor: "var(--border)" }}>
                  <td className="py-2.5 px-4 font-medium">Andrea Lopez</td>
                  <td className="py-2.5 px-4">+52 55 3333 3333</td>
                  <td className="py-2.5 px-4">Mar-Dom 9:00-17:00</td>
                  <td className="py-2.5 px-4">Inversion, Extranjeros</td>
                </tr>
              </tbody>
            </table>
          </div>
          <button className="text-sm font-medium" style={{ color: "var(--accent)" }}>+ Agregar vendedor</button>
        </div>
      </section>

      {/* Notifications */}
      <section className="rounded-xl border p-6 mb-6" style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
        <div className="flex items-center gap-3 mb-5">
          <div className="w-9 h-9 rounded-lg bg-blue-100 flex items-center justify-center">
            <Bell className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <h2 className="font-semibold">Notificaciones</h2>
            <p className="text-xs" style={{ color: "var(--muted)" }}>Cuando y como te avisamos</p>
          </div>
        </div>

        <div className="space-y-3">
          {[
            { label: "Lead calificado (score 80+)", checked: true },
            { label: "Visita agendada", checked: true },
            { label: "Conversacion requiere intervencion humana", checked: true },
            { label: "Resumen diario por email", checked: false },
            { label: "Alerta de bajo inventario", checked: true },
          ].map((n) => (
            <div key={n.label} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50">
              <span className="text-sm">{n.label}</span>
              <div className={`w-10 h-6 rounded-full relative cursor-pointer transition-colors ${n.checked ? "bg-blue-500" : "bg-gray-300"}`}>
                <div className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow transition-transform ${n.checked ? "right-1" : "left-1"}`} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Integrations */}
      <section className="rounded-xl border p-6" style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
        <div className="flex items-center gap-3 mb-5">
          <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center">
            <Link className="w-5 h-5 text-gray-600" />
          </div>
          <div>
            <h2 className="font-semibold">Integraciones</h2>
            <p className="text-xs" style={{ color: "var(--muted)" }}>Conecta con tus herramientas existentes</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { name: "WhatsApp Business", status: "Conectado", connected: true },
            { name: "Meta Ads", status: "Conectado", connected: true },
            { name: "Nocnok CRM", status: "Disponible", connected: false },
            { name: "Google Sheets", status: "Disponible", connected: false },
            { name: "Hubspot", status: "Disponible", connected: false },
            { name: "Webhook personalizado", status: "Disponible", connected: false },
          ].map((integration) => (
            <div key={integration.name} className="flex items-center justify-between p-3 border rounded-lg" style={{ borderColor: "var(--border)" }}>
              <div>
                <p className="text-sm font-medium">{integration.name}</p>
                <p className="text-xs" style={{ color: integration.connected ? "var(--success)" : "var(--muted)" }}>{integration.status}</p>
              </div>
              <button
                className={`text-xs font-medium px-3 py-1.5 rounded-lg ${
                  integration.connected
                    ? "bg-emerald-100 text-emerald-700"
                    : "border hover:bg-gray-50"
                }`}
                style={!integration.connected ? { borderColor: "var(--border)" } : {}}
              >
                {integration.connected ? "Conectado" : "Conectar"}
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
