import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  ShieldAlert,
  Zap,
  BarChart3,
  Globe2,
  Target,
  CheckCircle2,
  TrendingDown,
  Activity,
  AlertTriangle,
  XCircle,
  Map,
  Database,
  Filter,
  Brain,
  Lightbulb,
  LayoutDashboard,
  Users,
  ChevronDown,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ScatterChart,
  Scatter,
  ZAxis,
  Cell,
} from "recharts";

const CustomScatterTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-white border border-gray-200 p-3 rounded-lg shadow-xl">
        <p className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
          <span
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: data.fill }}
          ></span>
          {data.name}
        </p>
        <div className="space-y-1">
          <p className="text-xs text-gray-500 flex justify-between gap-4">
            <span>Sentiment:</span>{" "}
            <span className="text-gray-900 font-mono">{data.sentiment}</span>
          </p>
          <p className="text-xs text-gray-500 flex justify-between gap-4">
            <span>Volume:</span>{" "}
            <span className="text-gray-900 font-mono">
              {data.volume.toLocaleString()}
            </span>
          </p>
          <p className="text-xs text-gray-500 flex justify-between gap-4">
            <span>Engagement:</span>{" "}
            <span className="text-gray-900 font-mono">
              {data.engagement.toLocaleString()}
            </span>
          </p>
        </div>
      </div>
    );
  }
  return null;
};

const faqs = [
  {
    question: "How fast does Naradai detect a crisis?",
    answer: "Naradai monitors digital channels in real-time. Our AI models are designed to detect narrative shifts and potential crises within minutes of them gaining traction, giving you the crucial lead time needed to respond effectively."
  },
  {
    question: "What data sources do you monitor?",
    answer: "We cover a comprehensive digital terrain including major social media platforms (Twitter/X, TikTok, Instagram, LinkedIn), news outlets, blogs, forums, and review sites. We ensure no critical conversation slips through the cracks."
  },
  {
    question: "How does the AI understand sentiment accurately?",
    answer: "Our proprietary AI models go beyond simple keyword matching. They are trained to understand context, nuance, and even sarcasm in multiple languages, ensuring you get an accurate picture of public perception, not just raw data."
  },
  {
    question: "Can I integrate Naradai with my existing tools?",
    answer: "Yes, Naradai offers seamless integrations with popular communication and workflow tools like Slack, Microsoft Teams, and various CRM platforms. You can receive alerts and insights directly where your team already works."
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely. We employ enterprise-grade security protocols, including end-to-end encryption and strict access controls. Your data and insights are kept strictly confidential and are never shared with third parties."
  }
];

const FAQItem = ({ question, answer, isOpen, onClick }: any) => {
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
        onClick={onClick}
      >
        <span className="text-lg md:text-xl font-medium text-gray-900 group-hover:text-brand-600 transition-colors">
          {question}
        </span>
        <ChevronDown
          className={`shrink-0 ml-4 text-gray-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          size={24}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-500 text-base md:text-lg leading-relaxed pr-8">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Home() {
  const [activeStep, setActiveStep] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const steps = [
    {
      title: "Source Mapping.",
      desc: "We map the exact digital terrain where your audience lives. Nothing escapes.",
      icon: <Map className="w-8 h-8" />,
    },
    {
      title: "Data Collection.",
      desc: "Millions of touchpoints. Harvested in real time. No conversation slips through the cracks.",
      icon: <Database className="w-8 h-8" />,
    },
    {
      title: "Data Cleansing.",
      desc: "Advanced filtering strips away the bots and the spam. Leaving only authentic human truth.",
      icon: <Filter className="w-8 h-8" />,
    },
    {
      title: "AI Analysis.",
      desc: "Our proprietary models understand sentiment, context, and nuance. Even sarcasm. It's intelligence, artificially perfected.",
      icon: <Brain className="w-8 h-8" />,
    },
    {
      title: "Insight Extraction.",
      desc: "Raw data transforms into clear risks and massive opportunities. The underlying drivers, exposed.",
      icon: <Lightbulb className="w-8 h-8" />,
    },
    {
      title: "Dashboard Deployment.",
      desc: "Insights delivered to a beautifully intuitive command center. Complete with exactly what to do next.",
      icon: <LayoutDashboard className="w-8 h-8" />,
    },
  ];

  const [mentions, setMentions] = useState(124502);
  const [sentiment, setSentiment] = useState(-12.4);
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString(),
  );
  const [liveTopics, setLiveTopics] = useState([
    { name: "Pricing Changes", vol: 45, trend: "up", color: "text-brand-400" },
    {
      name: "Customer Support",
      vol: 22,
      trend: "down",
      color: "text-yellow-400",
    },
    { name: "New Features", vol: 18, trend: "up", color: "text-blue-400" },
  ]);

  // Auto-advance steps
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [steps.length, isHovered]);

  // Live Dashboard Simulation
  useEffect(() => {
    const liveTimer = setInterval(() => {
      setMentions((prev) => prev + Math.floor(Math.random() * 5) + 1);
      setSentiment((prev) => {
        const newSent = prev + (Math.random() * 0.4 - 0.2);
        return Number(newSent.toFixed(1));
      });
      setCurrentTime(new Date().toLocaleTimeString());
      setLiveTopics((prev) =>
        prev.map((topic) => ({
          ...topic,
          vol: Math.max(
            1,
            Math.min(99, topic.vol + Math.floor(Math.random() * 5) - 2),
          ),
        })),
      );
    }, 3000);
    return () => clearInterval(liveTimer);
  }, []);

  const sovData = [
    { day: "Mon", Twitter: 4000, TikTok: 2400, News: 2400, Instagram: 1000 },
    { day: "Tue", Twitter: 3000, TikTok: 1398, News: 2210, Instagram: 1200 },
    { day: "Wed", Twitter: 2000, TikTok: 9800, News: 2290, Instagram: 1500 },
    { day: "Thu", Twitter: 2780, TikTok: 3908, News: 2000, Instagram: 1800 },
    { day: "Fri", Twitter: 1890, TikTok: 4800, News: 2181, Instagram: 2000 },
    { day: "Sat", Twitter: 2390, TikTok: 3800, News: 2500, Instagram: 2200 },
    { day: "Sun", Twitter: 3490, TikTok: 4300, News: 2100, Instagram: 2400 },
  ];

  const compData = [
    {
      name: "Your Brand",
      sentiment: 75,
      volume: 8000,
      engagement: 12000,
      fill: "#D22B2B",
    },
    {
      name: "Competitor A",
      sentiment: 45,
      volume: 9500,
      engagement: 8000,
      fill: "#3b82f6",
    },
    {
      name: "Competitor B",
      sentiment: 20,
      volume: 4000,
      engagement: 3000,
      fill: "#eab308",
    },
    {
      name: "Competitor C",
      sentiment: -15,
      volume: 6000,
      engagement: 5000,
      fill: "#9ca3af",
    },
  ];

  return (
    <div className="overflow-hidden min-h-screen bg-white">
      {/* Hero Section - Google Labs Inspired */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center z-0">
        {/* Google Labs Style Blobs */}
        <div className="google-blob top-0 left-1/4 w-[600px] h-[600px] bg-[#4285F4] mix-blend-multiply animate-pulse"></div>
        <div
          className="google-blob bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#EA4335] mix-blend-multiply animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="google-blob top-1/3 left-1/2 w-[400px] h-[400px] bg-[#FBBC05] mix-blend-multiply animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/40 border border-white/60 mb-8 backdrop-blur-md shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]">
            <div className="w-2 h-2 rounded-full bg-[#34A853] animate-pulse"></div>
            <span className="text-xs sm:text-sm font-medium tracking-wide text-gray-700 uppercase">
              AI-Powered Brand Protection
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[96px] font-display font-semibold tracking-tighter mb-4 md:mb-6 leading-[1.1] md:leading-[1] text-gray-900">
            Protect your brand. <br className="hidden lg:block" />
            <span className="text-brand-500">Stop crises early.</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-500 mb-8 md:mb-10 max-w-3xl mx-auto font-normal leading-relaxed tracking-tight px-4 sm:px-0">
            Naradai monitors the web to find risks before they spread. We tell you exactly what to do next, so you can protect your reputation with confidence.
          </p>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-4 w-full px-4 sm:px-8 md:px-16 lg:px-0">
            <Link to="/contact" className="btn-brand text-lg shadow-lg rounded-full px-8 py-4 font-medium w-full lg:w-auto">
              Request a demo
            </Link>
          </div>
        </motion.div>

        {/* Exact Clean Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="mt-16 w-full max-w-6xl relative z-10"
        >
          <div className="glow-effect absolute inset-0"></div>
          <div className="relative rounded-2xl glass-card overflow-hidden">
            {/* Window Controls */}
            <div className="h-10 border-b border-gray-200 flex items-center px-4 gap-2 bg-gray-50">
              <div className="w-3 h-3 rounded-full bg-gray-300"></div>
              <div className="w-3 h-3 rounded-full bg-gray-300"></div>
              <div className="w-3 h-3 rounded-full bg-gray-300"></div>
              <div className="ml-auto flex items-center gap-4">
                <div className="flex items-center gap-2 text-[10px] text-brand-600 font-mono bg-brand-50 px-2 py-1 rounded border border-brand-200">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse"></div>
                  LIVE SYNC
                </div>
                <div className="text-xs text-gray-500 font-mono tracking-wider hidden sm:block">
                  {currentTime}
                </div>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="p-4 md:p-8 flex flex-col gap-4 md:gap-6 relative">
              {/* Top Metrics Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                <div className="glass-card rounded-xl p-4 md:p-5 flex flex-col justify-between border-l-2 border-l-gray-400">
                  <span className="text-gray-500 text-[10px] md:text-xs uppercase tracking-wider mb-1 md:mb-2">
                    Total Mentions
                  </span>
                  <span className="text-2xl md:text-3xl font-semibold font-mono text-gray-900">
                    {mentions.toLocaleString()}
                  </span>
                </div>
                <div className="glass-card rounded-xl p-4 md:p-5 flex flex-col items-center justify-center border-l-2 border-l-brand-500 bg-brand-50">
                  <span className="text-gray-500 text-[10px] md:text-xs uppercase tracking-wider mb-1 md:mb-2 text-center">
                    Sentiment Score
                  </span>
                  <div className="flex items-center justify-center gap-2 md:gap-3">
                    <span className="text-2xl md:text-3xl font-semibold font-mono text-brand-600">
                      {sentiment > 0 ? "+" : ""}
                      {sentiment}
                    </span>
                    <span className="text-[10px] md:text-xs text-brand-600 flex items-center">
                      <TrendingDown size={12} className="mr-1" /> 2.1%
                    </span>
                  </div>
                </div>
                <div className="glass-card rounded-xl p-4 md:p-5 flex flex-col justify-between border-l-2 border-l-yellow-500">
                  <span className="text-gray-500 text-[10px] md:text-xs uppercase tracking-wider mb-1 md:mb-2">
                    Active Risks
                  </span>
                  <span className="text-2xl md:text-3xl font-semibold font-mono text-yellow-600">
                    3
                  </span>
                </div>
                <div className="glass-card rounded-xl p-4 md:p-5 flex flex-col justify-between border-l-2 border-l-blue-500">
                  <span className="text-gray-500 text-[10px] md:text-xs uppercase tracking-wider mb-1 md:mb-2">
                    Opportunities
                  </span>
                  <span className="text-2xl md:text-3xl font-semibold font-mono text-blue-600">
                    7
                  </span>
                </div>
              </div>

              {/* Main Content Area - Row 1 */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
                {/* Priority Actions Panel */}
                <div className="glass-card rounded-xl p-4 md:p-6 lg:col-span-2 flex flex-col">
                  <div className="flex items-center justify-between mb-4 md:mb-6">
                    <h3 className="text-sm font-medium text-gray-900 flex items-center gap-2">
                      <Target size={16} className="text-brand-500" /> Priority
                      Actions
                    </h3>
                    <span className="text-[10px] md:text-xs bg-brand-50 text-brand-600 px-2 py-1 rounded border border-brand-200">
                      Action Required
                    </span>
                  </div>

                  <div className="space-y-3 md:space-y-4">
                    <div className="bg-gray-50 border border-gray-200 p-3 md:p-4 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer border-l-2 border-l-brand-500">
                      <div className="flex justify-between items-start mb-1 md:mb-2">
                        <h4 className="text-xs md:text-sm font-medium text-gray-900">
                          Address Supply Chain Narrative
                        </h4>
                        <span className="text-[10px] md:text-xs text-gray-500">2m ago</span>
                      </div>
                      <p className="text-[10px] md:text-xs text-gray-600 text-left leading-relaxed my-2 md:my-3">
                        Viral negative narrative detected regarding recent
                        product delays in Southeast Asia.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="text-[9px] md:text-[10px] uppercase tracking-wider bg-gray-200 px-2 py-1 rounded text-gray-700">
                          PR Response
                        </span>
                        <span className="text-[9px] md:text-[10px] uppercase tracking-wider bg-gray-200 px-2 py-1 rounded text-gray-700">
                          High Urgency
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Live Stream / Topics */}
                <div className="glass-card rounded-xl p-4 md:p-6 flex flex-col">
                  <div className="flex items-center justify-between mb-4 md:mb-6">
                    <h3 className="text-sm font-medium text-gray-900 flex items-center gap-2">
                      <Activity size={16} className="text-blue-500" /> Live
                      Topics
                    </h3>
                  </div>

                  <div className="space-y-3 md:space-y-4 flex-grow">
                    {liveTopics.map((topic, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between p-2 md:p-3 rounded bg-gray-50 border border-gray-100 transition-all duration-500"
                      >
                        <span className="text-xs md:text-sm text-gray-700">
                          {topic.name}
                        </span>
                        <div className="flex items-center gap-2 md:gap-3">
                          <span className="text-[10px] md:text-xs font-mono text-gray-500">
                            {topic.vol}%
                          </span>
                          <div
                            className={`w-1.5 h-1.5 rounded-full bg-current ${topic.color}`}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Main Content Area - Row 2 (Charts) */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                {/* Share of Voice Bar Chart */}
                <div className="glass-card rounded-xl p-4 md:p-6 flex flex-col">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 md:mb-6">
                    <h3 className="text-sm font-medium text-gray-900 flex items-center gap-2">
                      <BarChart3 size={16} className="text-brand-500" /> Share
                      of Voice
                    </h3>
                    <div className="flex flex-wrap gap-2 md:gap-3 text-[10px] md:text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-[#3b82f6]"></div>{" "}
                        Twitter
                      </span>
                      <span className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-[#ec4899]"></div>{" "}
                        TikTok
                      </span>
                      <span className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-[#eab308]"></div>{" "}
                        News
                      </span>
                      <span className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-[#9ca3af]"></div>{" "}
                        Instagram
                      </span>
                    </div>
                  </div>
                  <div className="flex-grow min-h-[200px] md:min-h-[250px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={sovData}
                        margin={{ top: 0, right: 0, left: -20, bottom: 0 }}
                        stackOffset="expand"
                      >
                        <CartesianGrid
                          strokeDasharray="3 3"
                          stroke="#e5e7eb"
                          vertical={false}
                        />
                        <XAxis
                          dataKey="day"
                          stroke="#6b7280"
                          fontSize={12}
                          tickLine={false}
                          axisLine={false}
                        />
                        <YAxis
                          stroke="#6b7280"
                          fontSize={12}
                          tickLine={false}
                          axisLine={false}
                          tickFormatter={(tick) => `${Math.round(tick * 100)}%`}
                        />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "#ffffff",
                            borderColor: "#e5e7eb",
                            borderRadius: "8px",
                          }}
                          itemStyle={{ fontSize: "12px" }}
                          labelStyle={{ color: "#6b7280", marginBottom: "4px" }}
                          cursor={{ fill: "#f3f4f6" }}
                          formatter={(value: any, name: any, props: any) => {
                            const total =
                              props.payload.Twitter +
                              props.payload.TikTok +
                              props.payload.News +
                              props.payload.Instagram;
                            const percent = ((Number(value) / total) * 100).toFixed(1);
                            return [`${Number(value).toLocaleString()} (${percent}%)`, name];
                          }}
                        />
                        <Bar
                          dataKey="Twitter"
                          stackId="a"
                          fill="#3b82f6"
                        />
                        <Bar dataKey="TikTok" stackId="a" fill="#ec4899" />
                        <Bar dataKey="News" stackId="a" fill="#eab308" />
                        <Bar
                          dataKey="Instagram"
                          stackId="a"
                          fill="#9ca3af"
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Competitive Matrix Bubble Chart */}
                <div className="glass-card rounded-xl p-4 md:p-6 flex flex-col">
                  <div className="flex items-center justify-between mb-4 md:mb-6">
                    <h3 className="text-sm font-medium text-gray-900 flex items-center gap-2">
                      <Target size={16} className="text-blue-500" /> Competitive
                      Matrix
                    </h3>
                    <span className="text-[10px] md:text-xs text-gray-500">
                      Size = Engagement
                    </span>
                  </div>
                  <div className="flex-grow min-h-[200px] md:min-h-[250px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <ScatterChart
                        margin={{ top: 10, right: 10, bottom: 0, left: -20 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                        <XAxis
                          type="number"
                          dataKey="sentiment"
                          name="Sentiment"
                          stroke="#6b7280"
                          fontSize={12}
                          tickLine={false}
                          axisLine={false}
                          domain={[-50, 100]}
                        />
                        <YAxis
                          type="number"
                          dataKey="volume"
                          name="Volume"
                          stroke="#6b7280"
                          fontSize={12}
                          tickLine={false}
                          axisLine={false}
                        />
                        <ZAxis
                          type="number"
                          dataKey="engagement"
                          range={[100, 1000]}
                          name="Engagement"
                        />
                        <Tooltip
                          cursor={{ strokeDasharray: "3 3" }}
                          content={<CustomScatterTooltip />}
                        />
                        <Scatter name="Brands" data={compData}>
                          {compData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.fill} />
                          ))}
                        </Scatter>
                      </ScatterChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Intelligence in Action Section - Bento Grid */}
      <section className="py-24 relative z-0 bg-gray-50/50">
        <div className="google-blob -top-[10%] -left-[10%] w-[600px] h-[600px] bg-[#4285F4] opacity-20"></div>
        <div className="google-blob top-[40%] -right-[10%] w-[500px] h-[500px] bg-[#0F9D58] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold tracking-tighter mb-6 text-gray-900">
              Intelligence. In action.
            </h2>
            <p className="text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto tracking-tight">
              How the world's best brands protect their narrative. And grow it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Link
              to="/use-cases"
              className="glass-card p-10 group cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full rounded-3xl"
            >
              <div className="mb-8 bg-brand-50 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-100 transition-all duration-300">
                <ShieldAlert className="text-brand-500" size={32} />
              </div>
              <h3 className="text-2xl font-display font-semibold tracking-tight mb-4 text-gray-900 group-hover:text-brand-600 transition-colors">
                Crisis Management.
              </h3>
              <p className="text-lg text-gray-500 leading-relaxed flex-grow">
                Detect risk before it escalates. Isolate the root cause. Act with absolute certainty.
              </p>
              <div className="mt-8 flex items-center text-brand-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                Learn more <ArrowRight size={16} className="ml-2" />
              </div>
            </Link>

            {/* Feature 2 */}
            <Link
              to="/use-cases"
              className="glass-card p-10 group cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full rounded-3xl"
            >
              <div className="mb-8 bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-100 transition-all duration-300">
                <Target className="text-blue-500" size={32} />
              </div>
              <h3 className="text-2xl font-display font-semibold tracking-tight mb-4 text-gray-900 group-hover:text-blue-600 transition-colors">
                Brand Reputation.
              </h3>
              <p className="text-lg text-gray-500 leading-relaxed flex-grow">
                Monitor every shift in perception. See emerging sentiment before it trends. Across every channel.
              </p>
              <div className="mt-8 flex items-center text-blue-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                Learn more <ArrowRight size={16} className="ml-2" />
              </div>
            </Link>

            {/* Feature 3 */}
            <Link
              to="/use-cases"
              className="glass-card p-10 group cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full rounded-3xl"
            >
              <div className="mb-8 bg-yellow-50 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-yellow-100 transition-all duration-300">
                <BarChart3 className="text-yellow-500" size={32} />
              </div>
              <h3 className="text-2xl font-display font-semibold tracking-tight mb-4 text-gray-900 group-hover:text-yellow-600 transition-colors">
                Competitive Intel.
              </h3>
              <p className="text-lg text-gray-500 leading-relaxed flex-grow">
                Track their weaknesses. Spot the signals early. Capture the market. It's almost unfair.
              </p>
              <div className="mt-8 flex items-center text-yellow-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                Learn more <ArrowRight size={16} className="ml-2" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-24 relative z-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold tracking-tighter mb-6 text-gray-900">
              How it works.
            </h2>
            <p className="text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto tracking-tight">
              Raw data in. Pure strategy out. In real time.
            </p>
          </div>

          <div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="space-y-4">
              {steps.map((step, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-4 md:gap-6 p-4 md:p-5 rounded-2xl transition-all duration-300 cursor-pointer relative overflow-hidden ${activeStep === i ? "bg-white shadow-md border border-gray-200" : "hover:bg-gray-50 border border-transparent"}`}
                  onClick={() => setActiveStep(i)}
                >
                  <div 
                    className={`absolute left-0 top-0 bottom-0 w-1.5 bg-brand-500 transition-transform duration-300 origin-top ${activeStep === i ? "scale-y-100" : "scale-y-0"}`} 
                  />
                  <div
                    className={`shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center transition-colors ${activeStep === i ? "bg-brand-50 text-brand-600" : "bg-gray-100 text-gray-500"}`}
                  >
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <h3
                      className={`text-lg md:text-xl font-display font-bold ${activeStep === i ? "text-gray-900" : "text-gray-600"}`}
                    >
                      {step.title}
                    </h3>
                    <AnimatePresence>
                      {activeStep === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0, marginTop: 0 }}
                          animate={{ height: "auto", opacity: 1, marginTop: 8 }}
                          exit={{ height: 0, opacity: 0, marginTop: 0 }}
                          className="lg:hidden"
                        >
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {step.desc}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative h-[600px] rounded-3xl overflow-hidden glass-card hidden lg:flex items-center justify-center p-12">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse" style={{ animationDelay: '2s' }}></div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="relative z-10 flex flex-col items-center text-center w-full max-w-lg"
                >
                  <div className="w-24 h-24 rounded-2xl bg-white shadow-xl flex items-center justify-center mb-8 text-brand-600 relative">
                    <div className="absolute inset-0 border-2 border-brand-100 rounded-2xl animate-ping opacity-20"></div>
                    {steps[activeStep].icon}
                  </div>
                  <h3 className="text-3xl font-display font-bold text-gray-900 mb-4">
                    {steps[activeStep].title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {steps[activeStep].desc}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section: What Makes Naradai Different */}
      <section className="py-24 relative z-0">
        <div className="google-blob top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#F4B400] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold tracking-tighter mb-6 text-gray-900">
              Listening is no longer enough.
            </h2>
            <p className="text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto tracking-tight">
              Traditional tools tell you what happened. Naradai tells you what to do next.
            </p>
          </div>

          <div className="bento-grid max-w-5xl mx-auto relative">
            {/* Evolution Arrow (visible on desktop) */}
            <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-16 h-16 bg-white rounded-full items-center justify-center shadow-2xl">
              <ArrowRight className="text-gray-900" size={28} />
            </div>

            {/* Traditional Tools Card */}
            <div className="bento-item col-span-12 md:col-span-6 glass-card p-10 md:p-12 opacity-80 hover:opacity-100 transition-opacity rounded-3xl">
              <div className="mb-10">
                <h3 className="text-3xl font-display font-semibold tracking-tight text-gray-500 mb-2">
                  Traditional Listening.
                </h3>
                <p className="text-gray-400 text-lg">
                  Stuck in the past.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  "Counts mentions",
                  "Tracks sentiment",
                  "Reacts after spikes",
                  "Built for reports",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <XCircle className="text-gray-300 shrink-0" size={24} />
                    <span className="text-gray-500 text-xl">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Naradai Card */}
            <div className="bento-item col-span-12 md:col-span-6 glass-card p-10 md:p-12 relative overflow-hidden transform md:scale-105 z-10 shadow-2xl rounded-3xl">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-400 via-brand-500 to-brand-600"></div>

              <div className="mb-10 relative z-10">
                <h3 className="text-3xl font-display font-semibold tracking-tight text-gray-900 mb-2">
                  Naradai Intelligence.
                </h3>
                <p className="text-gray-500 text-lg">
                  Built for what's next.
                </p>
              </div>

              <div className="space-y-6 relative z-10">
                {[
                  "Detects narrative shifts",
                  "Prioritizes real risks",
                  "Predicts escalation",
                  "Built for action",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <CheckCircle2
                      className="text-brand-500 shrink-0"
                      size={24}
                    />
                    <span className="text-gray-900 text-xl font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 md:py-32 relative z-10 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-semibold tracking-tighter mb-6 text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto tracking-tight">
              Everything you need to know about the product and billing.
            </p>
          </div>

          <div className="glass-card rounded-3xl p-6 md:p-10 shadow-sm border border-gray-200 bg-white">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFaqIndex === index}
                onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="bg-black py-32 relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto relative"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-900/20 blur-[100px] rounded-full -z-10"></div>
            <h2 className="text-sm font-semibold tracking-widest uppercase text-brand-500 mb-6">
              Take Control
            </h2>
            <p className="text-4xl md:text-5xl lg:text-7xl font-display font-semibold text-white leading-tight tracking-tighter mb-6">
              Stop reacting. <br />
              Start predicting.
            </p>
            <p className="text-xl md:text-2xl text-gray-400 mb-2 max-w-2xl mx-auto tracking-tight">
              Detect the risk. Know the move. Own the narrative.
            </p>
            <p className="text-sm md:text-base text-gray-500 mb-12 font-medium tracking-wide">
              Plans start from Rp 9,900,000 / month.
            </p>

            <div className="flex flex-col lg:flex-row items-center justify-center gap-4 w-full px-4 sm:px-8 md:px-16 lg:px-0">
              <Link
                to="/contact"
                className="bg-brand-500 text-white px-8 py-4 text-lg w-full lg:w-auto shadow-[0_8px_32px_0_rgba(234,67,53,0.3)] rounded-full font-medium transition-all hover:bg-brand-600 hover:scale-[1.02] active:scale-95"
              >
                Request a demo
              </Link>
              <Link
                to="/pricing"
                className="bg-white/10 backdrop-blur-lg border border-white/20 text-white px-8 py-4 text-lg w-full lg:w-auto rounded-full font-medium transition-all hover:bg-white/20 hover:scale-[1.02] active:scale-95"
              >
                View pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
