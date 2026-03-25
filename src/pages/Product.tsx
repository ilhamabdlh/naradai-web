import { motion } from "motion/react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  ShieldAlert,
  Zap,
  BarChart3,
  Globe2,
  Target,
  CheckCircle2,
  MessageSquare,
  TrendingUp,
  Users,
  Store,
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Mon", positive: 2400, negative: 4000, neutral: 2400 },
  { name: "Tue", positive: 3100, negative: 3000, neutral: 2210 },
  { name: "Wed", positive: 4200, negative: 2000, neutral: 2290 },
  { name: "Thu", positive: 3900, negative: 2780, neutral: 2000 },
  { name: "Fri", positive: 4800, negative: 1890, neutral: 2181 },
  { name: "Sat", positive: 5800, negative: 2390, neutral: 2500 },
  { name: "Sun", positive: 6300, negative: 1490, neutral: 2100 },
];

export default function Product() {
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

  const features = [
    {
      title: "Sentiment & Topic Analysis",
      desc: "Nuance. Sarcasm. Industry jargon. Our proprietary NLP models understand it all.",
      icon: <MessageSquare className="text-purple-500" size={32} />,
    },
    {
      title: "Risks & Opportunities",
      desc: "Threats, mitigated. Trends, capitalized. Conversations automatically categorized for immediate action.",
      icon: <ShieldAlert className="text-red-500" size={32} />,
    },
    {
      title: "Campaign Intelligence",
      desc: "Measure true impact. Track reach, engagement, and sentiment shifts across every channel. In real time.",
      icon: <Zap className="text-orange-500" size={32} />,
    },
    {
      title: "Competitive Intelligence",
      desc: "Benchmark against the best. Expose their weaknesses. Highlight your advantages. Instantly.",
      icon: <BarChart3 className="text-yellow-500" size={32} />,
    },
    {
      title: "Priority Actions",
      desc: "No more guessing. Millions of data points synthesized into one clear, prioritized action plan.",
      icon: <Target className="text-brand-500" size={32} />,
    },
    {
      title: "Customer Satisfaction",
      desc: "Beyond basic sentiment. Uncover the 'why' behind the feedback with deep contextual analysis.",
      icon: <Users className="text-blue-500" size={32} />,
    },
    {
      title: "Influencer Mapping",
      desc: "Find the true drivers. Identify the voices that actually shape your brand's narrative.",
      icon: <TrendingUp className="text-emerald-500" size={32} />,
    },
    {
      title: "Outlet Intelligence",
      desc: "Monitor physical performance. Analyze local sentiment and operational efficiency across every location.",
      icon: <Store className="text-indigo-500" size={32} />,
    },
    {
      title: "Historical Tracking",
      desc: "Learn from the past. Analyze historical crises to inform your future strategy.",
      icon: <CheckCircle2 className="text-gray-500" size={32} />,
    },
  ];

  return (
    <div className="pt-32 pb-24 relative overflow-hidden bg-white min-h-screen">
      <div className="google-blob top-0 left-1/4 w-[600px] h-[600px] bg-[#4285F4] mix-blend-multiply animate-pulse opacity-30"></div>
      <div className="google-blob bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#0F9D58] mix-blend-multiply animate-pulse opacity-30" style={{ animationDelay: "2s" }}></div>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-100/50 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="text-left max-w-2xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-semibold tracking-tighter mb-8 text-gray-900">
              The Intelligence Engine.
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed font-normal tracking-tight">
              Raw data transformed into strategic advantage. A comprehensive suite of analytical tools.
            </p>
          </div>
          <div
            id="dashboard"
            className="relative w-full sm:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl glass-card p-4 md:p-6 flex flex-col scroll-mt-32"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 md:mb-6">
              <div>
                <h3 className="text-base md:text-lg font-display font-bold text-gray-900">
                  Sentiment Analysis
                </h3>
                <p className="text-xs md:text-sm text-gray-500">7-day rolling average</p>
              </div>
              <div className="flex flex-wrap items-center gap-3 md:gap-4 text-xs md:text-sm">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500"></div>
                  <span className="text-gray-600">Positive</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500"></div>
                  <span className="text-gray-600">Negative</span>
                </div>
              </div>
            </div>
            <div className="w-full h-[250px] sm:h-full sm:flex-grow sm:min-h-[300px] mt-4 sm:mt-0">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={data}
                  margin={{
                    top: 10,
                    right: 10,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <defs>
                    <linearGradient
                      id="colorPositive"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient
                      id="colorNegative"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="#f3f4f6"
                  />
                  <XAxis
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#6b7280", fontSize: 12 }}
                    dy={10}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#6b7280", fontSize: 12 }}
                    dx={-10}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(255, 255, 255, 0.9)",
                      borderRadius: "12px",
                      border: "1px solid #f3f4f6",
                      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="positive"
                    stroke="#22c55e"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#colorPositive)"
                  />
                  <Area
                    type="monotone"
                    dataKey="negative"
                    stroke="#ef4444"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#colorNegative)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => {
            const featureId = feature.title
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-");
            return (
              <motion.div
                key={i}
                id={featureId}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 md:p-8 rounded-3xl hover-glow-brand shadow-sm hover:shadow-md transition-all duration-300 scroll-mt-32"
              >
                <div className="mb-6 bg-gray-50 w-16 h-16 rounded-2xl flex items-center justify-center border border-gray-100 shadow-sm">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-display font-semibold tracking-tight mb-3 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
