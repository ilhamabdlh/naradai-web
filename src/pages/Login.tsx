import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";

const PORTAL_ACCOUNTS: Record<string, { password: string; redirectUrl: string }> = {
  mitra_bukalapak: {
    password: "bukalapak2026",
    redirectUrl: "https://bukalapak.teoremaintelligence.com/",
  },
  admin_benings: {
    password: "benings2026",
    redirectUrl: "https://benings.teoremaintelligence.com/",
  },
};

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    const trimmedUser = username.trim();
    const entry = PORTAL_ACCOUNTS[trimmedUser];

    if (!entry || entry.password !== password) {
      setError("Username atau password tidak valid.");
      return;
    }

    setIsSubmitting(true);
    window.location.assign(entry.redirectUrl);
  };

  return (
    <div className="min-h-screen flex w-full bg-white">
      <Navbar />
      {/* Left Panel - Branding/Visual */}
      <div className="hidden lg:flex lg:w-1/2 bg-black relative overflow-hidden flex-col justify-between p-12">
        {/* Abstract Background */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black via-gray-900/50 to-black"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-brand-600/20 blur-[100px] rounded-full"></div>

        <div className="relative z-10">{/* Top spacing element */}</div>

        <div className="relative z-10 max-w-md">
          <Logo className="w-12 h-12 text-brand-500 mb-8" />
          <h2 className="text-5xl font-display font-extrabold text-white mb-6 leading-tight">
            Master your narrative. <br />
            <span className="text-brand-400">Control the outcome.</span>
          </h2>
          <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <Sparkles className="text-brand-400 shrink-0 mt-1" size={20} />
            <p className="text-base font-bold text-white leading-relaxed">
              "Naradai has completely transformed how we detect and respond to
              emerging PR crises. We're finally ahead of the story."
            </p>
          </div>
        </div>
      </div>

      {/* Right Panel - Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-8 sm:p-12 relative pt-24 lg:pt-12">
        <div className="w-full max-w-md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-display font-bold tracking-tight text-gray-900 mb-2">
              Welcome back
            </h2>
            <p className="text-sm text-gray-500 mb-8">
              Enter your details to access your workspace.
            </p>

            <div className="space-y-6">
              <form className="space-y-5" onSubmit={handleSubmit} noValidate>
                {error && (
                  <p
                    className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
                    role="alert"
                  >
                    {error}
                  </p>
                )}
                <div>
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Username
                  </label>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    autoComplete="username"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="block w-full appearance-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-brand-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-brand-500/10 sm:text-sm transition-all"
                    placeholder="Enter your username"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>
                    <a
                      href="#"
                      className="text-sm font-medium text-brand-600 hover:text-brand-500 transition-colors"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full appearance-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-brand-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-brand-500/10 sm:text-sm transition-all"
                    placeholder="••••••••"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full justify-center rounded-xl btn-primary py-3 px-4 text-sm font-medium text-white shadow-sm transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Mengalihkan…" : "Sign in"}
                </button>
              </form>

              <p className="text-center text-sm text-gray-600 mt-8">
                Don't have an account?{" "}
                <Link
                  to="/contact"
                  className="font-medium text-brand-600 hover:text-brand-500 transition-colors"
                >
                  Request a demo
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
