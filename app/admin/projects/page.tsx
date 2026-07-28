"use client";

import { useState } from "react";

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  link: string;
  featured: boolean;
}

export default function ProjectsPage() {
  const [items, setItems] = useState<ProjectItem[]>([]);
  const [form, setForm] = useState({ title: "", category: "", description: "", link: "", featured: false });
  const [message, setMessage] = useState("");

  const loadItems = async () => {
    const response = await fetch("/api/dashboard/projects");
    const data = (await response.json()) as ProjectItem[];
    setItems(data);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const response = await fetch("/api/dashboard/projects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (response.ok) {
      setMessage("Project saved.");
      setForm({ title: "", category: "", description: "", link: "", featured: false });
      await loadItems();
    } else {
      setMessage("Unable to save the project.");
    }
  };

  const removeItem = async (id: string) => {
    await fetch(`/api/dashboard/projects/${id}`, { method: "DELETE" });
    setItems((current) => current.filter((item) => item.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-lg">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">Projects</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">Manage projects</h2>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-lg space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <input value={form.title} onChange={(event) => setForm({ ...form, title: event.target.value })} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white" placeholder="Project title" required />
          <input value={form.category} onChange={(event) => setForm({ ...form, category: event.target.value })} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white" placeholder="Category" required />
        </div>
        <textarea value={form.description} onChange={(event) => setForm({ ...form, description: event.target.value })} className="min-h-28 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white" placeholder="Description" required />
        <input value={form.link} onChange={(event) => setForm({ ...form, link: event.target.value })} className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white" placeholder="Project link" />
        <label className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-300">
          <input type="checkbox" checked={form.featured} onChange={(event) => setForm({ ...form, featured: event.target.checked })} />
          Feature this project
        </label>
        <div className="flex items-center gap-3">
          <button className="rounded-2xl bg-cyan-500 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">Save project</button>
          {message ? <span className="text-sm text-cyan-300">{message}</span> : null}
        </div>
      </form>

      <div className="space-y-3">
        {items.length === 0 ? <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-300">No projects yet.</div> : null}
        {items.map((item) => (
          <div key={item.id} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-slate-200">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="text-cyan-300">{item.category}</p>
                <p className="mt-2 text-sm text-slate-300">{item.description}</p>
              </div>
              <button onClick={() => removeItem(item.id)} className="rounded-2xl border border-white/10 px-3 py-2 text-sm text-slate-300">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
