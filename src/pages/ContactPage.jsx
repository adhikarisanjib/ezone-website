import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "react-toastify";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    toast.success("Thank you for reaching out. We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    });
  };

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have a business idea or looking for a strategic partner? Get in
            touch with us to explore opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="bg-white p-8 rounded-2xl shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Get in Touch
              </h2>
              <h3 className="mb-3 text-lg font-semibold">Head Office</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-100 w-12 h-12 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="text-emerald-700" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Address
                    </h3>
                    <p className="text-gray-600">
                      2 The Parade Firmley
                      <br />
                      Camberley
                      <br />
                      United Kingdom
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-100 w-12 h-12 rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="text-emerald-700" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">+44 2070606117</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-100 w-12 h-12 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="text-emerald-700" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">contact@ezonegroup.com</p>
                  </div>
                </div>
              </div>
              <h3 className="mt-6 mb-3 text-lg font-semibold">Nepal Branch</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-100 w-12 h-12 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="text-emerald-700" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Address
                    </h3>
                    <p className="text-gray-600">
                      Kapan 10
                      <br />
                      Budhanilkantha
                      <br />
                      Nepal
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-100 w-12 h-12 rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="text-emerald-700" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">+977 9812345670</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-emerald-50 p-6 rounded-xl border-2 border-emerald-200">
              <p className="text-sm text-gray-700 leading-relaxed">
                Our team will review your proposal and connect with you for
                further discussion.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition"
                />
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition resize-none"
                  placeholder="Tell us about your business idea or partnership proposal..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                Send Message
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
