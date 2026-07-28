"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FiBookOpen, FiBriefcase, FiFolder, FiMessageSquare, FiUsers } from "react-icons/fi";

interface DashboardSummary {
  team: Array<{ id: string }>;
  blogs: Array<{ id: string; published?: boolean }>;
  projects: Array<{ id: string }>;
  inquiries: Array<{ id: string; status?: string }>;
}

const cards = [
  { title: "Total Team", icon: FiUsers },
  { title: "Published Blogs", icon: FiBookOpen },
  { title: "Active Projects", icon: FiFolder },
  { title: "New Inquiries", icon: FiMessageSquare },
];

export default function AdminOverviewPage() {
  const [summary, setSummary] = useState<DashboardSummary>({ team: [], blogs: [], projects: [], inquiries: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const response = await fetch("/api/dashboard");
        const data = (await response.json()) as DashboardSummary;
        setSummary(data);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  const statValues = [
    summary.team.length,
    summary.blogs.filter((item) => item.published).length,
    summary.projects.length,
    summary.inquiries.filter((item) => item.status !== "closed").length,
  ];

  return (
    <div className="space-y-8">
      <section className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-500/15 via-slate-900 to-slate-950 p-8 shadow-2xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-lg uppercase tracking-[0.35em] text-cyan-400 sm:text-xl">Operations overview</p>
            <h2 className="mt-3 text-[2.4rem] font-semibold text-white sm:text-[3rem]">Admin dashboard at a glance</h2>
            <p className="mt-3 max-w-2xl text-[1.15rem] leading-8 text-slate-300 sm:text-xl">
              Monitor your team, content, and client activity from one polished command center.
            </p>
          </div>
          <Link href="/admin/settings" className="inline-flex rounded-2xl border border-cyan-400/30 bg-cyan-500/10 px-4 py-3 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-500/20">
            Open settings
          </Link>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {cards.map((card, index) => {
          const Icon = card.icon;
          return (
            <div key={card.title} className="rounded-[1.5rem] border border-white/10 bg-slate-900/80 p-5 shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[1.15rem] text-slate-400">{card.title}</p>
                  <p className="mt-2 text-[2.4rem] font-semibold text-white sm:text-[2.8rem]">{loading ? "—" : statValues[index]}</p>
                </div>
                <div className="rounded-2xl bg-cyan-500/10 p-3 text-cyan-300">
                  <Icon className="text-xl" />
                </div>
              </div>
              <p className="mt-4 text-[1.1rem] text-emerald-400">Live from your CMS</p>
            </div>
          );
        })}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.35fr_0.9fr]">
        <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/80 p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[1.15rem] text-slate-400">Performance</p>
              <h3 className="text-[2rem] font-semibold text-white">Weekly activity</h3>
            </div>
            <div className="rounded-2xl bg-emerald-500/10 px-3 py-2 text-[1.1rem] font-medium text-emerald-400">+24%</div>
          </div>
          <div className="mt-8 flex h-48 items-end gap-3">
            {[45, 65, 72, 58, 80, 90, 78].map((value, index) => (
              <div key={index} className="flex-1 rounded-t-2xl bg-gradient-to-t from-cyan-500 to-sky-400" style={{ height: `${value}%` }} />
            ))}
          </div>
        </div>

        <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/80 p-6 shadow-lg">
          <p className="text-[1.15rem] text-slate-400">Quick actions</p>
          <div className="mt-4 space-y-3">
            <Link href="/admin/blogs" className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-[1rem] text-slate-200 transition hover:bg-white/10">
              <span>Create a blog post</span>
              <FiBookOpen />
            </Link>
            <Link href="/admin/team" className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-[1rem] text-slate-200 transition hover:bg-white/10">
              <span>Add a team member</span>
              <FiUsers />
            </Link>
            <Link href="/admin/projects" className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-[1rem] text-slate-200 transition hover:bg-white/10">
              <span>Launch a project</span>
              <FiBriefcase />
            </Link>
            <Link href="/admin/inquiries" className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-[1rem] text-slate-200 transition hover:bg-white/10">
              <span>Review inquiries</span>
              <FiMessageSquare />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
