"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FiBarChart2, FiBookOpen, FiBriefcase, FiFolder, FiHome, FiLogOut, FiMenu, FiMessageSquare, FiSettings, FiUsers } from "react-icons/fi";
import { clearAuthCookie, isAuthenticatedFromCookie } from "../../lib/admin-auth";

const navItems = [
  { href: "/admin", label: "Overview", icon: FiHome },
  { href: "/admin/team", label: "Team", icon: FiUsers },
  { href: "/admin/blogs", label: "Blogs", icon: FiBookOpen },
  { href: "/admin/case-studies", label: "Case Studies", icon: FiBriefcase },
  { href: "/admin/services", label: "Services", icon: FiFolder },
  { href: "/admin/projects", label: "Projects", icon: FiBarChart2 },
  { href: "/admin/inquiries", label: "Inquiries", icon: FiMessageSquare },
  { href: "/admin/settings", label: "Settings", icon: FiSettings },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!isAuthenticatedFromCookie()) {
      router.replace("/login");
    }
  }, []);

  const handleLogout = () => {
    clearAuthCookie();
    router.replace("/login");
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-950 text-slate-100">
      <div className="flex min-h-screen flex-col lg:flex-row">
        <aside className="hidden w-80 flex-col border-r border-white/10 bg-slate-900/80 p-6 lg:flex">
          <div className="mb-8">
            <p className="text-xl uppercase tracking-[0.3em] text-cyan-400">Gridzign</p>
            <h2 className="mt-2 text-[2rem] font-semibold">Admin Hub</h2>
          </div>
          <nav className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = pathname === item.href || (item.href !== "/admin" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-[1.15rem] font-medium transition ${active ? "bg-cyan-500/15 text-cyan-300" : "text-slate-300 hover:bg-white/5 hover:text-white"}`}
                >
                  <Icon className="text-base" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="mt-auto rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-[1.15rem] text-slate-300">Signed in as</p>
            <p className="mt-1 text-2xl font-semibold text-white">Admin</p>
          </div>
        </aside>

        <div className="flex-1">
          <header className="border-b border-white/10 bg-slate-900/80 px-4 py-4 backdrop-blur sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button
                  className="rounded-xl border border-white/10 p-2 text-slate-200 lg:hidden"
                  onClick={() => setMobileOpen((value) => !value)}
                  aria-label="Toggle navigation"
                >
                  <FiMenu />
                </button>
                <div>
                  <p className="text-[1.15rem] text-slate-400">Welcome back</p>
                  <h1 className="text-[1.8rem] font-semibold text-white">Admin Dashboard</h1>
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-[1.15rem] font-medium text-slate-200 transition hover:bg-white/10"
              >
                <FiLogOut />
                Logout
              </button>
            </div>

            {mobileOpen && (
              <nav className="mt-4 space-y-2 lg:hidden">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const active = pathname === item.href || (item.href !== "/admin" && pathname.startsWith(item.href));
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-[1.15rem] font-medium transition ${active ? "bg-cyan-500/15 text-cyan-300" : "text-slate-300 hover:bg-white/5 hover:text-white"}`}
                    >
                      <Icon className="text-base" />
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
            )}
          </header>

          <main className="w-full overflow-x-hidden p-4 sm:p-6 lg:p-8">{children}</main>
        </div>
      </div>
    </div>
  );
}
