import { motion } from "motion/react";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState, FormEvent } from "react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <div className="pt-32 pb-24 relative overflow-hidden bg-white min-h-screen">
      <div className="google-blob top-0 left-1/4 w-[600px] h-[600px] bg-[#FBBC05] mix-blend-multiply animate-pulse opacity-30"></div>
      <div className="google-blob bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#EA4335] mix-blend-multiply animate-pulse opacity-30" style={{ animationDelay: "2s" }}></div>

      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-100/50 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-semibold tracking-tighter mb-8 text-gray-900">
            Request a demo.
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed font-normal tracking-tight">
            See how Naradai transforms your narrative intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-3xl font-display font-semibold tracking-tight mb-6 text-gray-900">
                Get in touch.
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                Fill out the form. We'll be in touch within 24 hours to schedule your personalized demonstration.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-gray-700">
                <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center border border-gray-100 shadow-sm">
                  <Mail className="text-brand-500" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider font-bold">
                    Email
                  </div>
                  <a
                    href="mailto:hello@teoremaintelligence.com"
                    className="text-lg hover:text-brand-600 transition-colors font-medium"
                  >
                    hello@teoremaintelligence.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 text-gray-700">
                <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center border border-gray-100 shadow-sm">
                  <MapPin className="text-brand-500" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider font-bold">
                    Office
                  </div>
                  <div className="text-lg font-medium">Jakarta, Indonesia</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-xl"
          >
            <div className="absolute top-0 left-0 w-full h-1.5 bg-brand-500"></div>

            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center mb-4 border border-gray-200">
                  <div className="w-8 h-8 rounded-full bg-brand-500 shadow-[0_0_15px_rgba(234,67,53,0.3)]"></div>
                </div>
                <h3 className="text-2xl font-display font-semibold tracking-tight text-gray-900">
                  Request received.
                </h3>
                <p className="text-gray-500">
                  We'll be in touch shortly.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="mt-8 text-brand-600 hover:text-brand-700 font-medium"
                >
                  Submit another request.
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="firstName"
                      className="text-xs uppercase tracking-wider font-semibold text-gray-500"
                    >
                      First name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      required
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all placeholder:text-gray-400"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="lastName"
                      className="text-xs uppercase tracking-wider font-semibold text-gray-500"
                    >
                      Last name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      required
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all placeholder:text-gray-400"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-xs uppercase tracking-wider font-semibold text-gray-500"
                  >
                    Work email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all placeholder:text-gray-400"
                    placeholder="john@company.com"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="company"
                    className="text-xs uppercase tracking-wider font-semibold text-gray-500"
                  >
                    Company name
                  </label>
                  <input
                    type="text"
                    id="company"
                    required
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all placeholder:text-gray-400"
                    placeholder="Acme Corp"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-xs uppercase tracking-wider font-semibold text-gray-500"
                  >
                    How can we help?
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all resize-none placeholder:text-gray-400"
                    placeholder="Tell us about your current challenges..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full btn-primary py-4 rounded-full font-medium hover:scale-[1.02] transition-all text-lg flex items-center justify-center gap-2 shadow-lg ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? "Submitting..." : "Request demo"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
