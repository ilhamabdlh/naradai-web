import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-4">
          <Link to="/" className="flex items-center gap-2">
            <Logo className="w-6 h-6 text-brand-500" />
            <span className="text-xl font-display font-bold tracking-tight text-gray-900">Naradai</span>
          </Link>
          
          <div className="flex flex-wrap justify-start md:justify-end gap-x-6 gap-y-4">
            <Link to="/product" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">Product</Link>
            <Link to="/use-cases" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">Use Cases</Link>
            <Link to="/pricing" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">Pricing</Link>
            <Link to="/about" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">About</Link>
            <Link to="/contact" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">Contact</Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col-reverse lg:flex-row justify-between items-start lg:items-center gap-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 text-xs text-gray-400">
            <p>&copy; {new Date().getFullYear()} Naradai. All rights reserved.</p>
            <span className="hidden sm:inline text-gray-200">|</span>
            <p>Developed by Teorema Intelligence</p>
          </div>
          
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <a href="#" className="text-xs text-gray-400 hover:text-gray-900 transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-gray-400 hover:text-gray-900 transition-colors">Terms of Service</a>
            <a href="mailto:hello@teoremaintelligence.com" className="text-xs text-gray-400 hover:text-gray-900 transition-colors">hello@teoremaintelligence.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
