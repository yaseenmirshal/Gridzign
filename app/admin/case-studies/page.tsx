"use client";

import { useState } from "react";

interface CaseStudyItem {
  id: string;
  title: string;
  client: string;
  summary: string;
  description: string;
  category: string;
}

export default function CaseStudiesPage() {
  const [items, setItems] = useState<CaseStudyItem[]>([]);
  const [form, setForm] = useState({ title: "", client: "", summary: "", description: "", category: "" });
  const [message, setMessage] = useState("");

  const loadItems = async () => {
    const response = await fetch("/api/dashboard/case-studies");
    const data = (await response.json()) as CaseStudyItem[];
    setItems(data);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const response = await fetch("/api/dashboard/case-studies", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (response.ok) {
      setMessage("Case study saved.");
      setForm({ title: "", client: "", summary: "", description: "", category: "" });
      await loadItems();
    } else {
      setMessage("Unable to save the case study.");
    }
  };

  const removeItem = async (id: string) => {
    await fetch(`/api/dashboard/case-studies/${id}`, { method: "DELETE" });
    setItems((current) => current.filter((item) => item.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-lg">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">Case studies</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">Manage case studies</h2>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-lg space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <input value={form.title} onChange={(event) => setForm({ ...form, title: event.target.value })} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white" placeholder="Title" required />
          <input value={form.client} onChange={(event) => setForm({ ...form, client: event.target.value })} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white" placeholder="Client" required />
        </div>
        <input value={form.category} onChange={(event) => setForm({ ...form, category: event.target.value })} className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white" placeholder="Category" required />
        <textarea value={form.summary} onChange={(event) => setForm({ ...form, summary: event.target.value })} className="min-h-24 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white" placeholder="Summary" required />
        <textarea value={form.description} onChange={(event) => setForm({ ...form, description: event.target.value })} className="min-h-40 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white" placeholder="Detailed description" required />
        <div className="flex items-center gap-3">
          <button className="rounded-2xl bg-cyan-500 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">Save case study</button>
          {message ? <span className="text-sm text-cyan-300">{message}</span> : null}
        </div>
      </form>

      <div className="space-y-3">
        {items.length === 0 ? <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-300">No case studies yet.</div> : null}
        {items.map((item) => (
          <div key={item.id} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-slate-200">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="text-cyan-300">{item.client}</p>
                <p className="mt-2 text-sm text-slate-300">{item.summary}</p>
              </div>
              <button onClick={() => removeItem(item.id)} className="rounded-2xl border border-white/10 px-3 py-2 text-sm text-slate-300">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
