import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  ShieldAlert,
  Target,
  BarChart3,
  Users,
  Activity,
  Zap,
  Globe2,
  MessageSquare,
  Store,
} from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Logo from "./Logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          // Handle background transparency
          setScrolled(currentScrollY > 20 || location.pathname === "/login");

          // Handle hide/show animation
          if (currentScrollY > lastScrollY && currentScrollY > 100) {
            setIsVisible(false); // Scrolling down
          } else {
            setIsVisible(true); // Scrolling up
          }

          lastScrollY = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial check
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const ProductDropdown = () => (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.2 }}
      className="absolute top-full left-1/2 -translate-x-1/2 pt-6 w-[600px]"
    >
      <div className="glass-card rounded-2xl p-6 grid grid-cols-2 gap-4">
        {[
          {
            title: "Narrative Intelligence",
            desc: "Track shifts in public perception",
            icon: <Globe2 className="text-brand-500" size={20} />,
            hash: "#sentiment-topic-analysis",
          },
          {
            title: "Crisis Detection",
            desc: "Early warning system for PR risks",
            icon: <ShieldAlert className="text-red-500" size={20} />,
            hash: "#risks-opportunities",
          },
          {
            title: "Campaign Intelligence",
            desc: "Measure campaign impact",
            icon: <Target className="text-orange-500" size={20} />,
            hash: "#campaign-intelligence",
          },
          {
            title: "Action Recommendations",
            desc: "AI-driven next steps",
            icon: <Zap className="text-yellow-500" size={20} />,
            hash: "#priority-actions",
          },
          {
            title: "Real-time Dashboard",
            desc: "Live metrics and alerts",
            icon: <Activity className="text-emerald-500" size={20} />,
            hash: "#dashboard",
          },
          {
            title: "Outlet Intelligence",
            desc: "Monitor physical store performance",
            icon: <Store className="text-indigo-500" size={20} />,
            hash: "#outlet-intelligence",
          },
        ].map((item, i) => (
          <Link
            to={`/product${item.hash}`}
            key={i}
            className="flex items-start gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
          >
            <div className="mt-1 bg-gray-100 p-2 rounded-lg group-hover:bg-gray-200 transition-colors">
              {item.icon}
            </div>
            <div>
              <div className="text-gray-900 font-medium mb-1 group-hover:text-brand-500 transition-colors">
                {item.title}
              </div>
              <div className="text-sm text-gray-500">{item.desc}</div>
            </div>
          </Link>
        ))}
      </div>
    </motion.div>
  );

  const UseCasesDropdown = () => (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.2 }}
      className="absolute top-full left-1/2 -translate-x-1/2 pt-6 w-[800px]"
    >
      <div className="glass-card rounded-2xl p-6 grid grid-cols-3 gap-4">
        {[
          {
            title: "Brand Reputation",
            icon: <Target className="text-blue-500" size={24} />,
            hash: "#brand",
          },
          {
            title: "Crisis Management",
            icon: <ShieldAlert className="text-red-500" size={24} />,
            hash: "#crisis",
          },
          {
            title: "Campaign Intel",
            icon: <Zap className="text-orange-500" size={24} />,
            hash: "#campaign",
          },
          {
            title: "Competitive Intel",
            icon: <BarChart3 className="text-yellow-500" size={24} />,
            hash: "#competitive",
          },
          {
            title: "Product Launch",
            icon: <Users className="text-emerald-500" size={24} />,
            hash: "#product",
          },
          {
            title: "Outlet Intel",
            icon: <Store className="text-indigo-500" size={24} />,
            hash: "#outlet",
          },
        ].map((item, i) => (
          <Link
            to={`/use-cases${item.hash}`}
            key={i}
            className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-gray-50 transition-colors group"
          >
            <div className="mb-3 bg-gray-100 p-3 rounded-xl group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <div className="text-sm text-gray-900 font-medium group-hover:text-brand-500 transition-colors">
              {item.title}
            </div>
          </Link>
        ))}
      </div>
    </motion.div>
  );

  const navLinks = [
    { name: "Product", path: "/product" },
    { name: "Use Cases", path: "/use-cases" },
    { name: "Pricing", path: "/pricing" },
    { name: "About", path: "/about" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${scrolled ? "pt-2" : "pt-4"}`}
    >
      <div
        className={`mx-auto w-[95%] max-w-7xl px-4 sm:px-6 lg:px-8 transition-all duration-500 ease-in-out ${
          scrolled || isOpen
            ? "bg-white/80 backdrop-blur-xl border border-gray-200 shadow-sm rounded-full"
            : "bg-transparent border border-transparent rounded-full"
        }`}
      >
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-xl font-display font-bold tracking-tight text-gray-900 flex items-center gap-2"
            >
              <Logo className="w-6 h-6 text-brand-500" />
              Naradai
            </Link>
          </div>

          <div className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-8">
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("product")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to="/product"
                  className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-1 py-2"
                >
                  Product{" "}
                  <ChevronDown
                    size={14}
                    className={`transition-transform ${activeDropdown === "product" ? "rotate-180" : ""}`}
                  />
                </Link>
                <AnimatePresence>
                  {activeDropdown === "product" && <ProductDropdown />}
                </AnimatePresence>
              </div>

              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("use-cases")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to="/use-cases"
                  className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-1 py-2"
                >
                  Use Cases{" "}
                  <ChevronDown
                    size={14}
                    className={`transition-transform ${activeDropdown === "use-cases" ? "rotate-180" : ""}`}
                  />
                </Link>
                <AnimatePresence>
                  {activeDropdown === "use-cases" && <UseCasesDropdown />}
                </AnimatePresence>
              </div>

              <Link
                to="/pricing"
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors py-2"
              >
                Pricing
              </Link>
              <Link
                to="/about"
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors py-2"
              >
                About
              </Link>

              <div className="flex items-center gap-4 border-l border-gray-200 pl-8">
                <Link
                  to="/login"
                  className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Log in
                </Link>
                <Link to="/contact" className="btn-primary text-sm px-5 py-2">
                  Request demo
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-0 left-0 w-full bg-white/40 backdrop-blur-2xl border-b border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] h-screen -z-10 pt-24">
          <div className="px-4 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col mt-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-2xl font-medium text-gray-600 hover:text-gray-900 block px-3 py-4"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/login"
              className="text-2xl font-medium text-gray-600 hover:text-gray-900 block px-3 py-4"
            >
              Log in
            </Link>
            <Link
              to="/contact"
              className="text-2xl font-medium text-brand-500 block px-3 py-4 mt-4"
            >
              Request demo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
