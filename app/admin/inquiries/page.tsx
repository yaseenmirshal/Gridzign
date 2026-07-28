"use client";

import { useState } from "react";

interface InquiryItem {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status?: string;
}

export default function InquiriesPage() {
  const [items, setItems] = useState<InquiryItem[]>([]);

  const loadItems = async () => {
    const response = await fetch("/api/dashboard/inquiries");
    const data = (await response.json()) as InquiryItem[];
    setItems(data);
  };

  const removeItem = async (id: string) => {
    await fetch(`/api/dashboard/inquiries/${id}`, { method: "DELETE" });
    setItems((current) => current.filter((item) => item.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-lg">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">Contact inquiries</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">Review client messages</h2>
          </div>
          <button onClick={() => loadItems()} className="rounded-2xl border border-white/10 px-4 py-3 text-sm text-slate-300">Refresh</button>
        </div>
      </div>

      <div className="space-y-3">
        {items.length === 0 ? <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-300">No inquiries yet.</div> : null}
        {items.map((item) => (
          <div key={item.id} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-slate-200">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                <p className="text-cyan-300">{item.email}</p>
                <p className="mt-2 text-sm text-slate-300">{item.subject}</p>
                <p className="mt-2 text-sm text-slate-400">{item.message}</p>
              </div>
              <button onClick={() => removeItem(item.id)} className="rounded-2xl border border-white/10 px-3 py-2 text-sm text-slate-300">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
