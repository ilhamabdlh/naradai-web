import { motion } from "motion/react";
import { Target, ShieldAlert, Database } from "lucide-react";

export default function About() {
  return (
    <div className="pt-32 relative overflow-hidden bg-white min-h-screen">
      {/* Global subtle intelligence grid texture */}
      <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLDAsMCwwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50 pointer-events-none z-0"></div>

      <div className="google-blob top-0 left-1/4 w-[600px] h-[600px] bg-[#4285F4] mix-blend-multiply animate-pulse opacity-30"></div>
      <div className="google-blob bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#EA4335] mix-blend-multiply animate-pulse opacity-30" style={{ animationDelay: "2s" }}></div>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-brand-100/50 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-32">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-display font-semibold tracking-tighter mb-8 text-gray-900"
          >
            About Naradai.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-xl md:text-2xl text-gray-500 leading-relaxed font-normal tracking-tight"
          >
            Intelligence that sees around corners. Built to detect risk early. And drive absolute clarity.
          </motion.p>
        </div>

        {/* Why Naradai Exists Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-gray-900 tracking-tighter">
              Why we built it.
            </h2>
            <div className="space-y-6 text-xl text-gray-500 font-normal leading-relaxed tracking-tight">
              <p>
                <span className="text-gray-900 font-medium">
                  Crises don’t start in headlines.
                </span>
                <br />
                <span className="text-gray-900 font-medium">
                  They start in whispers.
                </span>
              </p>
              <p>
                Traditional tools tell you when the damage is done.
                <br />
                We built Naradai to hear the signal before the noise. To detect the spark before the fire.
              </p>
              <p>
                Scattered conversations become clear, prioritized actions. Instantly.
              </p>
            </div>
          </motion.div>

          {/* Product-Centric Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card rounded-3xl p-8 aspect-square flex items-center justify-center relative overflow-hidden shadow-xl"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-50 to-transparent"></div>

            {/* Neural grid visualization */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLDAsMCwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>

            {/* Abstract dashboard element */}
            <div className="relative z-10 w-full max-w-sm h-64 bg-white/80 backdrop-blur-xl border border-gray-200 rounded-2xl shadow-2xl flex flex-col p-6 overflow-hidden">
              <div className="flex gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                <div className="w-3 h-3 rounded-full bg-gray-300"></div>
              </div>
              <div className="flex-grow relative">
                {/* Subtle intelligence graph */}
                <svg
                  viewBox="0 0 300 150"
                  className="w-full h-full drop-shadow-[0_0_10px_rgba(239,68,68,0.2)]"
                >
                  <motion.path
                    d="M 0 120 Q 50 110 100 120 T 200 80 T 300 40"
                    fill="none"
                    stroke="rgba(0,0,0,0.1)"
                    strokeWidth="2"
                  />
                  <motion.path
                    d="M 0 120 Q 50 110 100 120 T 200 80 T 300 40"
                    fill="none"
                    stroke="#ef4444"
                    strokeWidth="3"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  />
                </svg>
                {/* Soft pulsing signal animation */}
                <motion.div
                  className="absolute top-4 right-8 w-4 h-4 bg-red-500 rounded-full shadow-[0_0_15px_rgba(239,68,68,0.4)]"
                  animate={{ scale: [1, 2.5, 1], opacity: [1, 0, 1] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                ></motion.div>
                <motion.div className="absolute top-4 right-8 w-4 h-4 bg-red-500 rounded-full"></motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Category Positioning Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-32 glass-card p-12 md:p-16 rounded-3xl relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-brand-500 to-transparent"></div>
          <h2 className="text-3xl md:text-5xl font-display font-semibold text-gray-900 mb-10 tracking-tighter">
            Beyond monitoring.{" "}
            <span className="text-brand-500">Way beyond.</span>
          </h2>

          <div className="space-y-6 text-xl md:text-2xl text-gray-500 font-normal tracking-tight">
            <p className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
              <span className="text-gray-400">Monitoring counts.</span>
              <span className="hidden sm:inline text-brand-500">→</span>
              <span className="text-gray-900 font-medium">
                Naradai understands.
              </span>
            </p>
            <p className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
              <span className="text-gray-400">Monitoring reports.</span>
              <span className="hidden sm:inline text-brand-500">→</span>
              <span className="text-gray-900 font-medium">Naradai acts.</span>
            </p>
            <p className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
              <span className="text-gray-400">Monitoring reacts.</span>
              <span className="hidden sm:inline text-brand-500">→</span>
              <span className="text-gray-900 font-medium">Naradai predicts.</span>
            </p>
          </div>
        </motion.div>

        {/* Core Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {[
            {
              title: "Data, perfected.",
              desc: "Structured data meets advanced AI. We find the absolute truth hidden in the noise.",
              icon: <Database className="text-blue-500 mb-6" size={40} />,
            },
            {
              title: "Action, prioritized.",
              desc: "Insight without action is just trivia. Naradai tells you exactly what to do next.",
              icon: <Target className="text-brand-500 mb-6" size={40} />,
            },
            {
              title: "Defense, proactive.",
              desc: "Anticipate the crisis. Protect your trust. Defend your revenue. Before it ever happens.",
              icon: <ShieldAlert className="text-yellow-500 mb-6" size={40} />,
            },
          ].map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-10 rounded-3xl transition-colors shadow-sm"
            >
              {value.icon}
              <h3 className="text-2xl font-display font-semibold tracking-tight mb-4 text-gray-900">
                {value.title}
              </h3>
              <p className="text-gray-500 text-lg leading-relaxed">
                {value.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Vision Statement */}
      </div>

      <div className="bg-black py-32 relative z-10 w-full mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto relative"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-900/20 blur-[100px] rounded-full -z-10"></div>
            <h2 className="text-sm font-semibold tracking-widest uppercase text-brand-500 mb-6">
              Our Vision
            </h2>
            <p className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-white leading-tight tracking-tighter">
              Narrative intelligence isn't an afterthought. It's the core of modern business.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
