"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  MessageSquare,
  Users,
  Building2,
  Settings,
  Zap,
  HelpCircle,
} from "lucide-react";

const navItems = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard },
  { href: "/conversations", label: "Conversaciones", icon: MessageSquare },
  { href: "/leads", label: "Leads", icon: Users },
  { href: "/projects", label: "Proyectos", icon: Building2 },
  { href: "/settings", label: "Configuracion", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 bottom-0 w-64 flex flex-col" style={{ background: "var(--sidebar-bg)" }}>
      {/* Logo */}
      <div className="px-6 py-5 flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "var(--accent)" }}>
          <Zap className="w-5 h-5 text-white" />
        </div>
        <span className="text-white text-xl font-bold tracking-tight">Clic</span>
        <span className="text-xs px-1.5 py-0.5 rounded-full bg-blue-500/20 text-blue-400 font-medium ml-1">beta</span>
      </div>

      {/* Project selector */}
      <div className="px-4 mb-4">
        <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
          <div className="w-8 h-8 rounded bg-emerald-500/20 flex items-center justify-center">
            <Building2 className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-left flex-1 min-w-0">
            <p className="text-white text-sm font-medium truncate">Roma Verde</p>
            <p className="text-xs" style={{ color: "var(--sidebar-text)" }}>CDMX - Roma Norte</p>
          </div>
          <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
          </svg>
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 space-y-1">
        {navItems.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? "bg-white/10 text-white"
                  : "hover:bg-white/5"
              }`}
              style={{ color: isActive ? "var(--sidebar-active)" : "var(--sidebar-text)" }}
            >
              <Icon className="w-5 h-5" />
              {label}
              {label === "Conversaciones" && (
                <span className="ml-auto bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full">12</span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Bottom section */}
      <div className="px-3 pb-4 space-y-1">
        <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm hover:bg-white/5 transition-colors" style={{ color: "var(--sidebar-text)" }}>
          <HelpCircle className="w-5 h-5" />
          Soporte
        </button>
        <div className="mx-3 pt-3 border-t border-white/10 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-xs font-bold">
            JR
          </div>
          <div>
            <p className="text-white text-sm font-medium">Jorge Romero</p>
            <p className="text-xs" style={{ color: "var(--sidebar-text)" }}>Admin</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
