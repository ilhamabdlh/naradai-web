import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Target, Store, MapPin } from "lucide-react";

export default function UseCases() {
  const [scrollY, setScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cases = [
    {
      id: "brand",
      title: "Brand Reputation",
      actions: [
        "Monitor perception shifts.",
        "Identify emerging sentiment changes.",
        "Protect long-term brand trust.",
      ],
      color: "from-blue-500/10 to-blue-900/5",
      glowColor: "bg-blue-500/10",
      accent: "text-blue-400",
      visual: (
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Heat-map blur */}
          <div className="absolute inset-0 bg-blue-500/10 blur-[80px] rounded-full"></div>

          {/* Circular sentiment radar */}
          <motion.div
            className="relative w-64 h-64 rounded-full border border-blue-500/20 flex items-center justify-center"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            <div className="absolute w-full h-full rounded-full border border-blue-500/10 scale-75"></div>
            <div className="absolute w-full h-full rounded-full border border-blue-500/5 scale-50"></div>

            {/* Radar sweep */}
            <div
              className="absolute top-1/2 left-1/2 w-32 h-32 origin-top-left bg-gradient-to-br from-blue-400/20 to-transparent blur-md"
              style={{ transform: "rotate(-45deg)" }}
            ></div>

            {/* Data points */}
            <motion.div
              className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_10px_rgba(96,165,250,0.8)]"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ repeat: Infinity, duration: 3, delay: 0 }}
            ></motion.div>
            <motion.div
              className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-blue-300 rounded-full shadow-[0_0_15px_rgba(147,197,253,0.8)]"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ repeat: Infinity, duration: 4, delay: 1 }}
            ></motion.div>
            <motion.div
              className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.8)]"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ repeat: Infinity, duration: 2.5, delay: 2 }}
            ></motion.div>
          </motion.div>
        </div>
      ),
    },
    {
      id: "crisis",
      micro: "Crises escalate in hours, not days.",
      title: "Crisis Management",
      actions: [
        "Detect risk before it escalates.",
        "Isolate the root cause.",
        "Act before it spreads.",
      ],
      color: "from-red-500/30 to-red-900/10",
      glowColor: "bg-red-500/30",
      accent: "text-red-400",
      visual: (
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Soft red radial glow */}
          <div className="absolute inset-0 bg-red-500/20 blur-[80px] rounded-full"></div>
          {/* Faint grid texture */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLDAsMCwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>

          {/* Abstract sentiment graph */}
          <svg
            viewBox="0 0 400 200"
            className="w-full h-full relative z-10 drop-shadow-[0_0_15px_rgba(239,68,68,0.2)]"
          >
            <motion.path
              d="M 0 150 Q 50 140 100 150 T 200 140 T 250 160 L 280 40 L 320 130 T 400 140"
              fill="none"
              stroke="rgba(0,0,0,0.1)"
              strokeWidth="2"
            />
            <motion.path
              d="M 0 150 Q 50 140 100 150 T 200 140 T 250 160 L 280 40 L 320 130 T 400 140"
              fill="none"
              stroke="#ef4444"
              strokeWidth="3"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
            {/* Sharp upward spike pulse */}
            <motion.circle
              cx="280"
              cy="40"
              r="6"
              fill="#ef4444"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            />
            <motion.circle
              cx="280"
              cy="40"
              r="20"
              fill="none"
              stroke="#ef4444"
              strokeWidth="2"
              initial={{ scale: 0.5, opacity: 1 }}
              animate={{ scale: 2.5, opacity: 0 }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeOut",
                delay: 1.5,
              }}
            />
          </svg>
        </div>
      ),
    },
    {
      id: "campaign",
      title: "Campaign Intelligence",
      actions: [
        "Measure campaign resonance.",
        "Track cross-channel impact.",
        "Optimize messaging mid-flight.",
      ],
      color: "from-orange-500/10 to-orange-900/5",
      glowColor: "bg-orange-500/10",
      accent: "text-orange-400",
      visual: (
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="absolute inset-0 bg-orange-500/5 blur-[60px] rounded-full"></div>
          <div className="relative w-48 h-48 flex items-center justify-center">
            <motion.div
              className="absolute inset-0 border-4 border-orange-500/20 rounded-full"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 3 }}
            />
            <motion.div
              className="absolute inset-4 border-4 border-orange-400/40 rounded-full"
              animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 3, delay: 0.5 }}
            />
            <Target className="text-orange-500 w-16 h-16 relative z-10" />
          </div>
        </div>
      ),
    },
    {
      id: "competitive",
      title: "Competitive Intelligence",
      actions: [
        "Track competitor weaknesses.",
        "Spot dissatisfaction signals.",
        "Capture opportunity early.",
      ],
      color: "from-yellow-500/10 to-yellow-900/5",
      glowColor: "bg-yellow-500/10",
      accent: "text-yellow-400",
      visual: (
        <div className="relative w-full h-full flex items-end justify-center pb-12 gap-8">
          <div className="absolute inset-0 bg-yellow-500/5 blur-[60px] rounded-full"></div>

          {/* Competitor Bar */}
          <div className="relative w-24 flex flex-col items-center gap-4">
            <div className="text-gray-400 text-xs font-mono blur-[1px]">
              COMPETITOR
            </div>
            <motion.div
              className="w-full bg-gray-100 border border-gray-200 rounded-t-lg relative overflow-hidden"
              initial={{ height: 0 }}
              whileInView={{ height: 160 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.div
                className="absolute top-0 left-0 w-full h-12 bg-red-500/20 border-b border-red-500/30"
                animate={{ height: [40, 50, 40] }}
                transition={{ repeat: Infinity, duration: 4 }}
              ></motion.div>
            </motion.div>
          </div>

          {/* Naradai/Your Brand Bar */}
          <div className="relative w-24 flex flex-col items-center gap-4">
            <div className="text-yellow-600 text-xs font-mono">YOUR BRAND</div>
            <motion.div
              className="w-full bg-yellow-500/10 border border-yellow-500/30 rounded-t-lg relative overflow-hidden shadow-[0_0_30px_rgba(234,179,8,0.15)]"
              initial={{ height: 0 }}
              whileInView={{ height: 220 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            >
              {/* Highlight Pulse */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-yellow-500/0 to-yellow-400/20"
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ repeat: Infinity, duration: 3 }}
              ></motion.div>
            </motion.div>
          </div>
        </div>
      ),
    },
    {
      id: "product",
      title: "Product Launch Monitoring",
      actions: [
        "See real-time reaction.",
        "Detect early friction.",
        "Optimize response instantly.",
      ],
      color: "from-emerald-500/10 to-emerald-900/5",
      glowColor: "bg-emerald-500/10",
      accent: "text-emerald-400",
      visual: (
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="absolute inset-0 bg-emerald-500/5 blur-[60px] rounded-full"></div>

          <div className="w-full max-w-md relative">
            {/* Timeline strip */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-white/10 -translate-y-1/2"></div>

            {/* Growth line emerging */}
            <svg
              viewBox="0 0 400 100"
              className="w-full h-24 relative z-10 drop-shadow-[0_0_10px_rgba(52,211,153,0.4)]"
            >
              <motion.path
                d="M 0 80 Q 100 80 200 50 T 400 20"
                fill="none"
                stroke="#34d399"
                strokeWidth="3"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </svg>

            {/* Live activity dots */}
            <div className="absolute top-1/2 left-0 w-full h-full -translate-y-1/2 pointer-events-none">
              {[10, 30, 50, 70, 90].map((pos, i) => (
                <motion.div
                  key={i}
                  className="absolute top-1/2 w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_10px_rgba(52,211,153,0.8)]"
                  style={{ left: `${pos}%`, marginTop: "-4px" }}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: i * 0.2 + 0.5 }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                    y: [0, -10, 0],
                  }}
                  // @ts-ignore
                  transition={{
                    repeat: Infinity,
                    duration: 2 + i * 0.5,
                    delay: i * 0.2,
                  }}
                ></motion.div>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "outlet",
      title: "Outlet Intelligence",
      actions: [
        "Monitor physical store performance.",
        "Analyze local customer sentiment.",
        "Optimize retail operations.",
      ],
      color: "from-indigo-500/10 to-indigo-900/5",
      glowColor: "bg-indigo-500/10",
      accent: "text-indigo-400",
      visual: (
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="absolute inset-0 bg-indigo-500/5 blur-[60px] rounded-full"></div>

          <div className="relative w-full max-w-sm h-64 bg-white/5 border border-indigo-500/20 rounded-2xl overflow-hidden p-6 flex flex-col justify-between shadow-[0_0_30px_rgba(99,102,241,0.1)]">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center">
                  <Store className="text-indigo-400" size={20} />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-800">
                    Flagship Store
                  </div>
                  <div className="text-xs text-gray-500 flex items-center gap-1">
                    <MapPin size={12} /> Jakarta Selatan
                  </div>
                </div>
              </div>
              <div className="px-2 py-1 bg-emerald-500/10 text-emerald-600 text-xs font-medium rounded-md">
                +12% Traffic
              </div>
            </div>

            <div className="space-y-3 mt-6">
              <div className="flex justify-between text-xs text-gray-500">
                <span>Customer Sentiment</span>
                <span className="text-indigo-600 font-medium">
                  85% Positive
                </span>
              </div>
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-indigo-500 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "85%" }}
                  transition={{ duration: 1, delay: 0.2 }}
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 mt-6">
              {[
                { label: "Wait Time", val: "4m" },
                { label: "Conversion", val: "32%" },
                { label: "Rating", val: "4.8" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-indigo-50/50 rounded-lg p-2 text-center border border-indigo-100/50"
                >
                  <div className="text-[10px] text-gray-500 uppercase tracking-wider">
                    {stat.label}
                  </div>
                  <div className="text-sm font-semibold text-indigo-900">
                    {stat.val}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-white min-h-screen relative overflow-hidden">
      <div className="google-blob top-0 left-1/4 w-[600px] h-[600px] bg-[#4285F4] mix-blend-multiply animate-pulse opacity-20"></div>
      <div className="google-blob bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#EA4335] mix-blend-multiply animate-pulse opacity-20" style={{ animationDelay: "2s" }}></div>
      <div className="google-blob top-1/2 left-1/2 w-[400px] h-[400px] bg-[#FBBC05] mix-blend-multiply animate-pulse opacity-20" style={{ animationDelay: "4s" }}></div>

      {/* Global subtle intelligence grid texture */}
      <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLDAsMCwwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmurlI2dyaWQpIi8+PC9zdmc+')] opacity-50 pointer-events-none z-0"></div>

      {/* Very faint particle drift */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-50 to-transparent pointer-events-none z-0"></div>

      {/* Header Section */}
      <div className="pt-40 pb-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-display font-semibold tracking-tighter mb-6 text-gray-900"
          >
            Intelligence in action.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto font-normal tracking-tight"
          >
            Detect risk early. Protect your reputation. Move faster than the narrative.
          </motion.p>
        </div>
      </div>

      {/* Cinematic Panels */}
      <div className="relative z-10 pb-32">
        {cases.map((useCase, i) => (
          <motion.section
            key={useCase.id}
            id={useCase.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              margin: useCase.id === "crisis" ? "0%" : "-20%",
              once: true,
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="min-h-[80vh] flex items-center py-20 relative scroll-mt-24"
          >
            {/* Section-specific gradient glow */}
            <div
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[600px] ${useCase.glowColor} blur-[120px] ${useCase.id === "crisis" ? "opacity-40 scale-110" : "opacity-30"} pointer-events-none -z-10`}
            ></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div
                className={`flex flex-col lg:flex-row gap-16 items-center ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
              >
                {/* Text Content */}
                <div className="w-full lg:w-1/2 space-y-8">
                  {useCase.micro && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className={`text-sm font-bold tracking-wider uppercase ${useCase.accent}`}
                    >
                      {useCase.micro}
                    </motion.p>
                  )}
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl lg:text-[64px] font-display font-semibold leading-tight text-gray-900 tracking-tighter"
                  >
                    {useCase.title}
                  </motion.h2>
                  <div className="space-y-4">
                    {useCase.actions.map((action, idx) => (
                      <motion.p
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.15 }}
                        className="text-xl lg:text-[22px] font-normal tracking-tight text-gray-500 max-w-[60ch]"
                      >
                        {action}
                      </motion.p>
                    ))}
                  </div>
                </div>

                {/* Glass Panel Visual */}
                <div className="w-full lg:w-1/2 h-[400px] lg:h-[500px]">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full h-full rounded-3xl overflow-hidden relative shadow-xl glass-card"
                    style={{
                      border: "1px solid rgba(0, 0, 0, 0.06)",
                    }}
                  >
                    {/* Inner subtle gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${useCase.color} opacity-30`}
                    ></div>

                    {/* The Visual Content */}
                    <div className="relative z-10 w-full h-full p-8">
                      {useCase.visual}
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.section>
        ))}
      </div>

      {/* Micro Trust Element */}
      <div className="pb-32 relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm font-semibold text-gray-400 tracking-wider uppercase"
        >
          Built for decision-makers. Not just analysts.
        </motion.p>
      </div>
    </div>
  );
}
