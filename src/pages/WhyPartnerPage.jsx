import { MapPin, DollarSign, Users, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const WhyPartnerPage = () => {
  const benefits = [
    {
      icon: MapPin,
      title: "Strategic Location & Land Availability",
      description:
        "Large, well-planned land resources ready for development in prime locations suited for various business ventures.",
    },
    {
      icon: DollarSign,
      title: "Investment Support",
      description:
        "Financial backing for viable and scalable ideas, with flexible partnership models tailored to your needs.",
    },
    {
      icon: Users,
      title: "Experienced Management",
      description:
        "Business expertise to guide projects from planning to operation, with proven success across multiple industries.",
    },
    {
      icon: TrendingUp,
      title: "Long-Term Partnerships",
      description:
        "We believe in growing together, not one-time transactions. Your success is our success.",
    },
  ];

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Why Partner With Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We bring more than just capital to the table. Our comprehensive
            support system is designed to help you succeed at every stage of
            your business journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all border-2 border-gray-100 hover:border-emerald-200"
              >
                <div className="bg-linear-to-br from-emerald-600 to-emerald-700 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Icon className="text-white" size={36} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="bg-slate-50 p-12 rounded-2xl mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Commitment to You
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold text-emerald-700 mb-3">
                100+
              </div>
              <p className="text-gray-600 font-medium">
                Acres of Available Land
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-emerald-700 mb-3">
                Multi
              </div>
              <p className="text-gray-600 font-medium">Industry Expertise</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-emerald-700 mb-3">
                Long-term
              </div>
              <p className="text-gray-600 font-medium">Partnership Focus</p>
            </div>
          </div>
        </div>

        <div className="bg-linear-to-br from-emerald-700 to-emerald-600 text-white p-12 rounded-2xl shadow-2xl text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-emerald-50 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join us in building the next generation of successful businesses.
            Let's create something remarkable together.
          </p>
          <Link
            to="/contact"
            className="bg-white text-emerald-700 hover:bg-gray-100 px-10 py-4 rounded-lg text-lg font-semibold transition-all shadow-lg hover:shadow-xl inline-block"
          >
            Get Started Today
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WhyPartnerPage;
