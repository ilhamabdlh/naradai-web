import { motion } from "motion/react";
import {
  CheckCircle2,
  ArrowRight,
  Database,
  Users,
  FolderKanban,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Pricing() {
  const plans = [
    {
      name: "Starter.",
      subtitle: "Focused monitoring.",
      priceMonthly: "Rp9.900.000",
      priceAnnual: "Rp7.900.000",
      priceSuffix: "/mo",
      metrics: [
        { icon: <FolderKanban size={16} />, text: "1 Project" },
        { icon: <Database size={16} />, text: "Up to 25,600 mentions/mo" },
        { icon: <Users size={16} />, text: "1 User" },
      ],
      features: [
        "Monitor one brand or campaign",
        "Core sentiment & topic tracking",
        "Cloud deployment",
        "Early signal visibility",
      ],
      buttonText: "View details",
      highlight: false,
      dim: true,
    },
    {
      name: "Pro.",
      subtitle: "Proactive detection.",
      priceMonthly: "Rp19.500.000",
      priceAnnual: "Rp15.600.000",
      priceSuffix: "/mo",
      metrics: [
        { icon: <FolderKanban size={16} />, text: "3 Projects" },
        { icon: <Database size={16} />, text: "Up to 76,500 mentions/mo" },
        { icon: <Users size={16} />, text: "3 Users" },
      ],
      includes: "Everything in Starter, plus:",
      features: [
        "Multi-brand monitoring",
        "Risk & opportunity detection",
        "Influencer & KOL tracking",
        "Escalation alerts",
      ],
      buttonText: "View details",
      highlight: false,
      dim: false,
    },
    {
      name: "Business.",
      subtitle: "Real-time control.",
      badge: "Most Popular",
      priceMonthly: "Rp29.000.000",
      priceAnnual: "Rp23.200.000",
      priceSuffix: "/mo",
      metrics: [
        { icon: <FolderKanban size={16} />, text: "5 Projects" },
        { icon: <Database size={16} />, text: "Up to 127,500 mentions/mo" },
        { icon: <Users size={16} />, text: "10 Users" },
      ],
      includes: "Everything in Pro, plus:",
      features: [
        "Priority action recommendations",
        "Predictive risk categorization",
        "NaradaiChat AI assistant",
        "Multi-brand & high-volume coverage",
      ],
      buttonText: "Request demo",
      highlight: true,
      dim: false,
    },
    {
      name: "Enterprise.",
      subtitle: "Absolute command.",
      priceMonthly: "Custom",
      priceAnnual: "Custom",
      priceSuffix: "",
      metrics: [
        { icon: <FolderKanban size={16} />, text: "Unlimited Projects" },
        { icon: <Database size={16} />, text: "Custom Volume" },
        { icon: <Users size={16} />, text: "Unlimited Users" },
      ],
      includes: "Everything in Business, plus:",
      features: [
        "Custom AI models",
        "On-premise deployment",
        "Unlimited data scale",
        "Dedicated intelligence support",
      ],
      buttonText: "View details",
      highlight: false,
      dim: false,
    },
  ];

  return (
    <div className="pt-32 pb-24 relative z-0 min-h-screen bg-white overflow-hidden">
      <div className="google-blob top-1/4 left-1/4 w-[600px] h-[600px] bg-[#4285F4] mix-blend-multiply animate-pulse opacity-30"></div>
      <div
        className="google-blob bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#EA4335] mix-blend-multiply animate-pulse opacity-30"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-semibold tracking-tighter mb-8 text-gray-900">
            Intelligence that scales.
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed font-normal tracking-tight mb-6">
            From early signals to full narrative command.
          </p>

          <div className="inline-flex items-center rounded-full bg-gray-50 px-4 py-2 text-sm font-medium text-gray-600 ring-1 ring-inset ring-gray-200 shadow-sm">
            Pricing based on annual billing.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`glass-card rounded-3xl p-8 relative overflow-hidden flex flex-col h-full transition-all duration-300 ${
                plan.highlight
                  ? "shadow-xl transform md:-translate-y-2"
                  : plan.dim
                    ? "opacity-80 hover:opacity-100"
                    : ""
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-0 w-full h-1.5 bg-brand-500"></div>
              )}

              <div className="mb-6 relative z-10">
                <div className="flex justify-between items-start mb-2">
                  <h2
                    className={`text-2xl font-display font-semibold tracking-tight ${plan.highlight ? "text-gray-900" : "text-gray-800"}`}
                  >
                    {plan.name}
                  </h2>
                  {plan.badge && (
                    <span className="text-[10px] font-medium uppercase tracking-wider bg-gray-100 text-gray-600 px-2.5 py-0.5 rounded-full border border-gray-200">
                      {plan.badge}
                    </span>
                  )}
                </div>
                <p
                  className={`text-sm ${plan.highlight ? "text-gray-900 font-medium" : "text-gray-500"} mb-4`}
                >
                  {plan.subtitle}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-display font-semibold tracking-tight text-gray-900">
                    {plan.priceMonthly}
                  </span>
                  {plan.priceSuffix && (
                    <span className="text-sm font-medium text-gray-500">
                      {plan.priceSuffix}
                    </span>
                  )}
                </div>
              </div>

              {/* Metrics Section */}
              <div className="mb-8 pb-8 border-b border-gray-100 space-y-3 relative z-10">
                {plan.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 text-gray-600"
                  >
                    <div className="text-gray-400">{metric.icon}</div>
                    <span className="text-sm font-medium">{metric.text}</span>
                  </div>
                ))}
              </div>

              {/* Features Section */}
              <div className="space-y-4 flex-grow relative z-10">
                {plan.includes && (
                  <p className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-4">
                    {plan.includes}
                  </p>
                )}
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2
                      className={`shrink-0 mt-0.5 ${plan.highlight ? "text-brand-500" : "text-gray-400"}`}
                      size={18}
                    />
                    <span
                      className={`text-sm ${plan.highlight ? "text-gray-800" : "text-gray-600"}`}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                to="/contact"
                className={`mt-10 w-full rounded-full font-bold transition-all text-center flex items-center justify-center gap-2 relative z-10 ${
                  plan.highlight ? "btn-brand shadow-lg" : "btn-secondary"
                }`}
              >
                {plan.buttonText} {plan.highlight && <ArrowRight size={16} />}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
