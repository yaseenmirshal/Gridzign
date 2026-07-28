"use client";

import { useState } from "react";

interface TeamMemberItem {
  id: string;
  name: string;
  role: string;
  description: string;
  linkedin?: string;
  twitter?: string;
}

export default function TeamPage() {
  const [members, setMembers] = useState<TeamMemberItem[]>([]);
  const [form, setForm] = useState({ name: "", role: "", description: "", linkedin: "", twitter: "" });
  const [message, setMessage] = useState("");

  const loadMembers = async () => {
    const response = await fetch("/api/dashboard/team");
    const data = (await response.json()) as TeamMemberItem[];
    setMembers(data);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const response = await fetch("/api/dashboard/team", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (response.ok) {
      setMessage("Team member added.");
      setForm({ name: "", role: "", description: "", linkedin: "", twitter: "" });
      await loadMembers();
    } else {
      setMessage("Unable to save the member.");
    }
  };

  const removeMember = async (id: string) => {
    await fetch(`/api/dashboard/team/${id}`, { method: "DELETE" });
    setMembers((current) => current.filter((item) => item.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-lg">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">Team management</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">Manage your team</h2>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-lg space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <input value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white" placeholder="Name" required />
          <input value={form.role} onChange={(event) => setForm({ ...form, role: event.target.value })} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white" placeholder="Role" required />
        </div>
        <textarea value={form.description} onChange={(event) => setForm({ ...form, description: event.target.value })} className="min-h-28 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white" placeholder="Short bio" required />
        <div className="grid gap-4 md:grid-cols-2">
          <input value={form.linkedin} onChange={(event) => setForm({ ...form, linkedin: event.target.value })} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white" placeholder="LinkedIn URL" />
          <input value={form.twitter} onChange={(event) => setForm({ ...form, twitter: event.target.value })} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white" placeholder="Twitter URL" />
        </div>
        <div className="flex items-center gap-3">
          <button className="rounded-2xl bg-cyan-500 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">Add member</button>
          {message ? <span className="text-sm text-cyan-300">{message}</span> : null}
        </div>
      </form>

      <div className="space-y-3">
        {members.length === 0 ? <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-300">No team members yet.</div> : null}
        {members.map((member) => (
          <div key={member.id} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-slate-200">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                <p className="text-cyan-300">{member.role}</p>
                <p className="mt-2 text-sm text-slate-300">{member.description}</p>
              </div>
              <button onClick={() => removeMember(member.id)} className="rounded-2xl border border-white/10 px-3 py-2 text-sm text-slate-300">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
