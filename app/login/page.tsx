'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FiArrowRight, FiEye, FiEyeOff, FiLock, FiMail } from "react-icons/fi";
import { ADMIN_EMAIL, ADMIN_PASSWORD_HASH, setAuthCookie } from "../../lib/admin-auth";

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);

    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const digest = await crypto.subtle.digest("SHA-256", data);
    const hash = Array.from(new Uint8Array(digest))
      .map((byte) => byte.toString(16).padStart(2, "0"))
      .join("");

    if (email.trim().toLowerCase() === ADMIN_EMAIL && hash === ADMIN_PASSWORD_HASH) {
      setAuthCookie();
      router.replace("/admin");
    } else {
      setError("Invalid email or password. Please try again.");
    }

    setIsSubmitting(false);
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.2),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.16),_transparent_40%),#050816] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/75 shadow-[0_30px_90px_rgba(0,0,0,0.5)] backdrop-blur-xl lg:min-h-[780px] lg:flex-row">
        <section className="flex-1 p-8 sm:p-10 lg:p-16 xl:p-[4.5rem] xl:px-[5rem]">
          <p className="text-xl font-semibold uppercase tracking-[0.35em] text-cyan-400 sm:text-2xl">
            Secure access
          </p>
          <h1 className="mt-5 text-[2.9rem] font-semibold leading-tight text-white sm:text-[3.6rem] lg:text-[4.3rem]">
            Welcome back to Gridzign
          </h1>
          <p className="mt-4 max-w-xl text-[1.15rem] leading-8 text-slate-300 sm:text-[1.25rem] lg:text-[1.3rem]">
            Sign in to manage projects, review progress, and stay connected with your team.
          </p>

          <form className="mt-10 space-y-5 sm:space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="mb-2 block text-[1.15rem] font-medium text-slate-200 sm:text-xl">
                Email address
              </label>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-slate-300 transition focus-within:border-cyan-400 focus-within:bg-white/10 sm:px-5 sm:py-4.5">
                <FiMail className="text-xl text-cyan-400" />
                <input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="w-full bg-transparent text-[1.05rem] outline-none placeholder:text-slate-500 sm:text-lg"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="mb-2 block text-[1.15rem] font-medium text-slate-200 sm:text-xl">
                Password
              </label>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-slate-300 transition focus-within:border-cyan-400 focus-within:bg-white/10 sm:px-5 sm:py-4.5">
                <FiLock className="text-xl text-cyan-400" />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="w-full bg-transparent text-[1.05rem] outline-none placeholder:text-slate-500 sm:text-lg"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((value) => !value)}
                  className="text-slate-400 transition hover:text-white"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-3 text-[1.15rem] sm:flex-row sm:items-center sm:justify-between sm:text-xl">
              <label className="flex items-center gap-2 text-slate-400">
                <input type="checkbox" className="h-4 w-4 rounded border-white/20 bg-transparent accent-cyan-400" />
                Remember me
              </label>
              <Link href="/contact" className="font-medium text-cyan-400 transition hover:text-cyan-300">
                Forgot password?
              </Link>
            </div>

            {error ? <p className="rounded-2xl border border-rose-500/30 bg-rose-500/10 px-4 py-3 text-[1.1rem] text-rose-300">{error}</p> : null}

            <button
              type="submit"
              disabled={isSubmitting}
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-cyan-400 px-5 py-4 text-[1.15rem] font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-70 sm:text-xl"
            >
              {isSubmitting ? "Signing in..." : "Sign in"}
              <FiArrowRight />
            </button>
          </form>

          <div className="mt-8 flex items-center gap-3 text-[1.15rem] text-slate-500 sm:text-xl">
            <span className="h-px flex-1 bg-white/10" />
            Or continue with
            <span className="h-px flex-1 bg-white/10" />
          </div>

          <button
            type="button"
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-[1.15rem] font-medium text-slate-200 transition hover:bg-white/10 sm:text-xl"
          >
            <span className="text-base font-semibold">G</span>
            Continue with Google
          </button>

          <p className="mt-8 text-[1.15rem] text-slate-400 sm:text-xl">
            New to Gridzign?{' '}
            <Link href="/contact" className="font-semibold text-cyan-400 transition hover:text-cyan-300">
              Book a discovery call
            </Link>
          </p>
        </section>

        <aside className="relative hidden flex-1 overflow-hidden bg-gradient-to-br from-cyan-500/25 via-sky-600/15 to-fuchsia-500/20 lg:flex">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.18),_transparent_22%),linear-gradient(135deg,_rgba(255,255,255,0.16),_transparent_50%)]" />
          <div className="relative z-10 flex h-full flex-col justify-between p-10 text-white lg:p-12 xl:p-16">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-100/80">
                Studio access
              </p>
              <h2 className="mt-4 text-[2.5rem] font-semibold leading-tight sm:text-[3rem]">
                Built for fast-moving teams and ambitious brands.
              </h2>
            </div>

            <div className="rounded-3xl border border-white/15 bg-slate-950/50 p-6 shadow-2xl backdrop-blur">
              <p className="text-[1.15rem] leading-8 text-slate-300 sm:text-xl">
                From design approvals to launch tracking, your workspace keeps everything in sync.
              </p>
              <div className="mt-6 grid gap-3 text-[1.15rem] text-slate-200 sm:text-xl">
                <div className="rounded-2xl bg-white/10 px-4 py-3">Realtime project updates</div>
                <div className="rounded-2xl bg-white/10 px-4 py-3">Secure client collaboration</div>
                <div className="rounded-2xl bg-white/10 px-4 py-3">Flexible access for your team</div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
