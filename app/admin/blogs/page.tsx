"use client";

import { useState } from "react";

interface BlogPostItem {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  published: boolean;
}

export default function BlogsPage() {
  const [posts, setPosts] = useState<BlogPostItem[]>([]);
  const [form, setForm] = useState({ title: "", excerpt: "", content: "", category: "", published: false });
  const [message, setMessage] = useState("");

  const loadPosts = async () => {
    const response = await fetch("/api/dashboard/blogs");
    const data = (await response.json()) as BlogPostItem[];
    setPosts(data);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const response = await fetch("/api/dashboard/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (response.ok) {
      setMessage("Post saved.");
      setForm({ title: "", excerpt: "", content: "", category: "", published: false });
      await loadPosts();
    } else {
      setMessage("Unable to save the post.");
    }
  };

  const removePost = async (id: string) => {
    await fetch(`/api/dashboard/blogs/${id}`, { method: "DELETE" });
    setPosts((current) => current.filter((item) => item.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-lg">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">Blog management</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">Create and manage blog posts</h2>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-lg space-y-4">
        <input value={form.title} onChange={(event) => setForm({ ...form, title: event.target.value })} className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white" placeholder="Title" required />
        <textarea value={form.excerpt} onChange={(event) => setForm({ ...form, excerpt: event.target.value })} className="min-h-24 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white" placeholder="Excerpt" required />
        <textarea value={form.content} onChange={(event) => setForm({ ...form, content: event.target.value })} className="min-h-40 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white" placeholder="Body content" required />
        <div className="grid gap-4 md:grid-cols-2">
          <input value={form.category} onChange={(event) => setForm({ ...form, category: event.target.value })} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white" placeholder="Category" required />
          <label className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-300">
            <input type="checkbox" checked={form.published} onChange={(event) => setForm({ ...form, published: event.target.checked })} />
            Publish immediately
          </label>
        </div>
        <div className="flex items-center gap-3">
          <button className="rounded-2xl bg-cyan-500 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">Save post</button>
          {message ? <span className="text-sm text-cyan-300">{message}</span> : null}
        </div>
      </form>

      <div className="space-y-3">
        {posts.length === 0 ? <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-300">No posts yet.</div> : null}
        {posts.map((post) => (
          <div key={post.id} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-slate-200">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-white">{post.title}</h3>
                <p className="text-sm text-cyan-300">{post.category}</p>
                <p className="mt-2 text-sm text-slate-300">{post.excerpt}</p>
              </div>
              <button onClick={() => removePost(post.id)} className="rounded-2xl border border-white/10 px-3 py-2 text-sm text-slate-300">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
