import { ArrowRight, Building2, Handshake, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <section className="relative bg-linear-to-br from-emerald-50 via-white to-slate-50 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Building Businesses.
              <br />
              Creating Opportunities.
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed">
              We are a diversified business group providing investment, land,
              and strategic partnerships to entrepreneurs and enterprises across
              multiple industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                Start a Business With Us <ArrowRight size={20} />{" "}
              </Link>
              <Link
                to="/why-partner"
                className="bg-white hover:bg-gray-50 text-emerald-700 border-2 border-emerald-700 px-8 py-4 rounded-lg text-lg font-semibold transition-all shadow-lg hover:shadow-xl"
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xl text-gray-700 leading-relaxed text-center">
            <strong className="text-emerald-700">EzoneGroup</strong> is a
            multi-disciplinary business group focused on supporting new and
            growing ventures. From investment partnerships to large-scale
            development projects, we help turn ideas into sustainable
            businesses.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Our Approach
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="text-emerald-700" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Investment
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We provide capital and financial backing for promising ventures
                with strong growth potential.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Building2 className="text-emerald-700" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Infrastructure
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Access to strategically located land and facilities for your
                business development needs.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Handshake className="text-emerald-700" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Partnership
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Long-term collaborative relationships built on trust, expertise,
                and shared success.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-emerald-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Build Your Next Venture?
          </h2>
          <p className="text-xl mb-8 text-emerald-50">
            Let's explore how we can work together to turn your vision into
            reality.
          </p>
          <Link
            to="/contact"
            className="bg-white text-emerald-700 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all shadow-lg hover:shadow-xl"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
