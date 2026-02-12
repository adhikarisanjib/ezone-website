import { Target, Eye, Users } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-8 text-center">
            About Us
          </h1>

          <div className="prose prose-lg max-w-none mb-16">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              <strong className="text-emerald-700">
                Ezone Group of Company Limited
              </strong>{" "}
              is a group of companies established to support, invest in, and
              develop business opportunities across various sectors. With access
              to land, capital, and industry expertise, we collaborate with
              individuals and organizations looking to start or expand their
              ventures.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              Our approach is partnership-driven. We believe in long-term
              growth, shared success, and building businesses that create value
              for communities and stakeholders.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-linear-to-br from-emerald-50 to-white p-10 rounded-2xl shadow-lg">
              <div className="bg-emerald-700 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Eye className="text-white" size={32} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Vision</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To become a trusted business partner for innovative and
                sustainable ventures.
              </p>
            </div>

            <div className="bg-linear-to-br from-slate-50 to-white p-10 rounded-2xl shadow-lg">
              <div className="bg-emerald-700 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Target className="text-white" size={32} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To empower entrepreneurs and enterprises by providing
                investment, infrastructure, and strategic guidance.
              </p>
            </div>
          </div>

          <div className="bg-emerald-700 text-white p-12 rounded-2xl shadow-xl">
            <div className="flex items-center justify-center mb-6">
              <Users size={48} />
            </div>
            <h2 className="text-3xl font-bold text-center mb-6">
              Partnership-Driven Approach
            </h2>
            <p className="text-lg text-emerald-50 leading-relaxed text-center max-w-3xl mx-auto">
              We don't just invest money - we invest our time, expertise, and
              resources. Every partnership is built on mutual trust and the
              shared goal of creating lasting value. When you succeed, we
              succeed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
