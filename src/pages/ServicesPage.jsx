import { DollarSign, Handshake, MapPin, Briefcase } from "lucide-react";

const ServicesPage = () => {
  const services = [
    {
      icon: DollarSign,
      title: "Business Investment & Funding",
      description:
        "We invest in promising business ideas and projects, offering financial support and partnership opportunities for startups and expanding enterprises.",
    },
    {
      icon: Handshake,
      title: "Business Partnerships",
      description:
        "Looking for the right partner to grow your business? We collaborate with individuals and companies to jointly develop and manage successful ventures.",
    },
    {
      icon: MapPin,
      title: "Land & Infrastructure Support",
      description:
        "We provide access to strategically located land suitable for commercial, industrial, and recreational projects.",
    },
    {
      icon: Briefcase,
      title: "Project Development",
      description:
        "From concept to execution, we support the planning, development, and management of business projects.",
    },
  ];

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">What We Do</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive support to help entrepreneurs and
            enterprises build and grow successful businesses across multiple
            industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100"
              >
                <div className="bg-linear-to-br from-emerald-50 to-emerald-100 w-20 h-20 rounded-2xl flex items-center justify-center mb-6">
                  <Icon className="text-emerald-700" size={36} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="bg-slate-50 p-12 rounded-2xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Our Process
          </h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-emerald-700 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Discovery</h4>
              <p className="text-sm text-gray-600">
                Share your business idea with us
              </p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-700 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Evaluation</h4>
              <p className="text-sm text-gray-600">
                We assess viability and potential
              </p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-700 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Partnership</h4>
              <p className="text-sm text-gray-600">
                Define terms and collaboration model
              </p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-700 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Execution</h4>
              <p className="text-sm text-gray-600">Launch and grow together</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
