"use client";

import { useEffect, useMemo, useState } from "react";

interface CrudManagerProps<T> {
  title: string;
  description: string;
  endpoint: string;
  emptyState: string;
  renderItem: (item: T, onDelete: (id: string) => void) => React.ReactNode;
  form: (item?: T, onSubmit?: (payload: Record<string, unknown>) => void) => React.ReactNode;
}

export function CrudManager<T extends { id: string }>({
  title,
  description,
  endpoint,
  emptyState,
  renderItem,
  form,
}: CrudManagerProps<T>) {
  const [items, setItems] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadItems = async () => {
    try {
      setLoading(true);
      const response = await fetch(endpoint);
      if (!response.ok) throw new Error("Request failed");
      const data = (await response.json()) as T[];
      setItems(data);
      setError(null);
    } catch {
      setError("Unable to load content right now.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadItems();
  }, [endpoint]);

  const onDelete = async (id: string) => {
    try {
      await fetch(`${endpoint}/${id}`, { method: "DELETE" });
      setItems((current) => current.filter((item) => item.id !== id));
    } catch {
      setError("Unable to delete the selected item.");
    }
  };

  const onSubmit = async (payload: Record<string, unknown>) => {
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error("Request failed");
      const created = (await response.json()) as T;
      setItems((current) => [created, ...current]);
      setError(null);
    } catch {
      setError("Unable to save the item.");
    }
  };

  const content = useMemo(() => form(undefined, onSubmit), [form, onSubmit]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-lg sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">{title}</p>
          <h2 className="mt-2 text-2xl font-semibold text-white">{description}</h2>
        </div>
      </div>

      <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-lg">
        {content}
      </div>

      {error ? <p className="text-sm text-rose-300">{error}</p> : null}
      {loading ? <p className="text-slate-300">Loading items…</p> : null}

      <div className="space-y-3">
        {items.length === 0 && !loading ? (
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-300">{emptyState}</div>
        ) : null}
        {items.map((item) => (
          <div key={item.id} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-slate-200">
            {renderItem(item, onDelete)}
          </div>
        ))}
      </div>
    </div>
  );
}
