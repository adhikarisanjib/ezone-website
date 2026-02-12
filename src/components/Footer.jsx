import { Link } from "react-router-dom";

import { AlertCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-emerald-400 mb-4">
              EzoneGroup
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Building businesses and creating opportunities across multiple
              industries.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-emerald-400">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
                >
                  What We Do
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-emerald-400">Explore</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/industries"
                  className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
                >
                  Opportunities
                </Link>
              </li>
              <li>
                <Link
                  to="/why-partner"
                  className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
                >
                  Why Partner
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-emerald-400">
              Contact Info
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>contact@ezonegroup.com</li>
              <li>+44 2070606117</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="bg-gray-800 rounded-lg p-4 mb-6 flex items-start gap-3">
            <AlertCircle
              className="text-emerald-400 shrink-0 mt-0.5"
              size={20}
            />
            <p className="text-sm text-gray-300 leading-relaxed">
              <strong className="text-white">Disclaimer:</strong> Final services
              and partnership models may vary based on project evaluation.
            </p>
          </div>
          <div className="text-center text-sm text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} EzoneGroup. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
