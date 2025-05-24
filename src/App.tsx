import React, { useState, useEffect } from "react";
import {
  Heart,
  Video,
  Shield,
  Users,
  CheckCircle,
  ChevronRight,
  Brain,
  Sparkles,
  Clock,
  Star,
  Play,
  ArrowRight,
} from "lucide-react";

const App = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const features = [
    {
      icon: <Video className="w-6 h-6" />,
      title: "Video-First Profiles",
      description:
        "See and hear therapists before booking. Assess compatibility through authentic video introductions.",
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Smart Matching Algorithm",
      description:
        "Our AI learns from your preferences to find therapists who truly understand your needs.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "HIPAA Compliant",
      description:
        "Your privacy is our priority. All data is encrypted and protected to medical standards.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Mutual Compatibility",
      description:
        "Building lasting therapeutic relationships through personality and approach matching.",
    },
  ];

  const patientBenefits = [
    "Find therapists who truly understand you",
    "Skip the awkward first sessions",
    "Switch therapists guilt-free",
    "Access diverse therapy approaches",
  ];

  const therapistBenefits = [
    "Connect with ideal-fit clients",
    "Reduce short-term turnover",
    "Focus on meaningful therapy",
    "Build lasting client relationships",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50/30 to-cyan-50/20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-100/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 px-6 py-6 md:px-12 lg:px-24">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Heart className="w-8 h-8 text-teal-600 fill-teal-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-teal-700 bg-clip-text text-transparent">
              Therahelp
            </span>
          </div>
          <div className="flex items-center space-x-6">
            <button className="hidden md:block text-gray-700 hover:text-teal-600 transition-colors">
              How it Works
            </button>
            <button className="hidden md:block text-gray-700 hover:text-teal-600 transition-colors">
              For Therapists
            </button>
            <button className="px-6 py-2.5 bg-gradient-to-r from-teal-600 to-teal-700 text-white rounded-full hover:shadow-lg hover:shadow-teal-200/50 transition-all duration-300 font-medium">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-20 md:px-12 lg:px-24 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-teal-100/50 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-teal-600" />
            <span className="text-sm font-medium text-teal-700">
              The Dating App of Therapy
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-teal-800 to-teal-600 bg-clip-text text-transparent">
              Find Your Perfect
            </span>
            <br />
            <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Therapeutic Match
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
            Experience therapy matching reimagined. See your therapist before
            you meet them, and let our algorithm learn what truly works for you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="group px-8 py-4 bg-gradient-to-r from-teal-600 to-teal-700 text-white rounded-full hover:shadow-2xl hover:shadow-teal-300/50 transition-all duration-300 font-semibold text-lg flex items-center space-x-2">
              <span>Find Your Therapist</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => setIsVideoModalOpen(true)}
              className="group px-8 py-4 bg-white/80 backdrop-blur-sm text-teal-700 rounded-full hover:shadow-xl transition-all duration-300 font-semibold text-lg border border-teal-200/50 flex items-center space-x-2"
            >
              <Play className="w-5 h-5" />
              <span>Watch Demo</span>
            </button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative z-10 px-6 py-20 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-teal-700 bg-clip-text text-transparent">
              Therapy Matching, Revolutionized
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're transforming how people find mental health support with
              technology that truly understands human connection.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 bg-white/60 backdrop-blur-sm rounded-3xl border border-teal-100/50 hover:shadow-2xl hover:shadow-teal-200/30 transition-all duration-500 hover:-translate-y-1"
                style={{ transform: `translateY(${scrollY * 0.02}px)` }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative z-10 px-6 py-20 md:px-12 lg:px-24 bg-gradient-to-b from-transparent to-teal-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-teal-700 bg-clip-text text-transparent">
              How Therahelp Works
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connection Lines */}
            <div className="hidden md:block absolute top-16 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-teal-200 via-teal-300 to-teal-200" />

            {[
              {
                step: "1",
                title: "Take Our Quiz",
                desc: "Share your needs, preferences, and what you're looking for in therapy",
              },
              {
                step: "2",
                title: "Meet Your Matches",
                desc: "Watch video profiles of therapists specifically matched to your needs",
              },
              {
                step: "3",
                title: "Start Healing",
                desc: "Connect with your chosen therapist or refine your matches anytime",
              },
            ].map((item, index) => (
              <div key={index} className="relative text-center">
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-3xl font-bold mb-6 shadow-xl shadow-teal-200/50">
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative z-10 px-6 py-20 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* For Patients */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
            <div className="relative p-10 bg-white/80 backdrop-blur-sm rounded-3xl border border-teal-100/50">
              <div className="flex items-center space-x-3 mb-6">
                <Heart className="w-8 h-8 text-teal-600" />
                <h3 className="text-3xl font-bold text-gray-900">
                  For Patients
                </h3>
              </div>
              <p className="text-gray-600 mb-8">
                Finally, a way to find therapy that feels right from the start.
              </p>
              <ul className="space-y-4 mb-8">
                {patientBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full px-6 py-3 bg-gradient-to-r from-teal-600 to-teal-700 text-white rounded-full hover:shadow-lg hover:shadow-teal-200/50 transition-all duration-300 font-semibold flex items-center justify-center space-x-2 group">
                <span>Find Your Therapist</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* For Therapists */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-teal-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
            <div className="relative p-10 bg-white/80 backdrop-blur-sm rounded-3xl border border-cyan-100/50">
              <div className="flex items-center space-x-3 mb-6">
                <Users className="w-8 h-8 text-cyan-600" />
                <h3 className="text-3xl font-bold text-gray-900">
                  For Therapists
                </h3>
              </div>
              <p className="text-gray-600 mb-8">
                Build meaningful, lasting relationships with clients who are the
                right fit.
              </p>
              <ul className="space-y-4 mb-8">
                {therapistBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-600 to-teal-600 text-white rounded-full hover:shadow-lg hover:shadow-cyan-200/50 transition-all duration-300 font-semibold flex items-center justify-center space-x-2 group">
                <span>Join as a Therapist</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="relative z-10 px-6 py-20 md:px-12 lg:px-24 bg-gradient-to-t from-teal-50/50 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-3xl mb-6">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-teal-700 bg-clip-text text-transparent">
            Your Privacy, Protected
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Therahelp is fully HIPAA compliant. Your personal information and
            therapy journey remain completely confidential and secure.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center space-x-2 text-gray-700">
              <CheckCircle className="w-5 h-5 text-teal-600" />
              <span>HIPAA Compliant</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <CheckCircle className="w-5 h-5 text-teal-600" />
              <span>End-to-End Encryption</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <CheckCircle className="w-5 h-5 text-teal-600" />
              <span>Secure Data Storage</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 py-24 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-teal-700 bg-clip-text text-transparent">
            Ready to Find Your Match?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Join thousands who've found their perfect therapeutic fit. Your
            journey to better mental health starts here.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="group px-10 py-4 bg-gradient-to-r from-teal-600 to-teal-700 text-white rounded-full hover:shadow-2xl hover:shadow-teal-300/50 transition-all duration-300 font-semibold text-lg flex items-center space-x-2">
              <span>Start Matching</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-10 py-4 bg-white/80 backdrop-blur-sm text-teal-700 rounded-full hover:shadow-xl transition-all duration-300 font-semibold text-lg border border-teal-200/50">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-12 md:px-12 lg:px-24 border-t border-teal-100/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Heart className="w-6 h-6 text-teal-600 fill-teal-600" />
              <span className="text-xl font-bold text-gray-900">Therahelp</span>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <a href="#" className="hover:text-teal-600 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-teal-600 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-teal-600 transition-colors">
                Contact
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-gray-500">
            © 2024 Therahelp. All rights reserved. Making therapy accessible for
            everyone.
          </div>
        </div>
      </footer>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div
            className="bg-white rounded-2xl p-8 max-w-2xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-video bg-gradient-to-br from-teal-100 to-cyan-100 rounded-xl flex items-center justify-center">
              <Play className="w-20 h-20 text-teal-600" />
            </div>
            <p className="mt-4 text-center text-gray-600">
              Demo video coming soon!
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
