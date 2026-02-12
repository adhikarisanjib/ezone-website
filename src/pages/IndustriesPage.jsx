import {
  Sparkles,
  ShoppingBag,
  Hotel,
  Factory,
  Home,
  Lightbulb,
} from "lucide-react";
import { Link } from "react-router-dom";

const IndustryPage = () => {
  const industries = [
    {
      icon: Sparkles,
      title: "Entertainment & Recreation",
      description: "Fun Parks, Resorts, and entertainment venues",
    },
    {
      icon: ShoppingBag,
      title: "Commercial & Retail Projects",
      description: "Shopping centers, retail spaces, and commercial complexes",
    },
    {
      icon: Hotel,
      title: "Hospitality & Leisure",
      description: "Hotels, restaurants, and leisure facilities",
    },
    {
      icon: Factory,
      title: "Manufacturing & Industrial Ventures",
      description: "Production facilities and industrial operations",
    },
    {
      icon: Home,
      title: "Real Estate Development",
      description: "Residential and commercial property development",
    },
    {
      icon: Lightbulb,
      title: "Emerging Business Opportunities",
      description: "Innovative ventures and new market opportunities",
    },
  ];

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Industries & Opportunities
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We work across a wide range of industries, supporting diverse
            ventures and innovative ideas. Our expertise spans multiple sectors,
            and we're always open to exploring new possibilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-100 hover:border-emerald-200"
              >
                <div className="bg-emerald-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="text-emerald-700" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {industry.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {industry.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="bg-linear-to-br from-emerald-700 to-emerald-600 text-white p-12 rounded-2xl shadow-2xl">
          <div className="max-w-3xl mx-auto text-center">
            <Lightbulb size={64} className="mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">Have a Unique Idea?</h2>
            <p className="text-xl text-emerald-50 leading-relaxed mb-8">
              If you have a unique business concept that doesn't fit into
              traditional categories, we're open to exploring new possibilities
              together. Innovation and fresh perspectives are at the heart of
              what we do.
            </p>
            <Link
              to="/contact"
              className="bg-white text-emerald-700 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all shadow-lg hover:shadow-xl inline-block"
            >
              Share Your Idea
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustryPage;
