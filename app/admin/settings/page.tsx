export default function SettingsPage() {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-lg">
      <div>
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">Profile & settings</p>
        <h2 className="mt-2 text-2xl font-semibold text-white">Manage your profile and preferences</h2>
      </div>
      <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-300">User profile information, password updates, and dashboard preferences will be managed here.</div>
    </div>
  );
}
