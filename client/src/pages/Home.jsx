import React from 'react'
import { FaChartLine, FaTasks, FaUsers, FaRocket, FaCheckCircle, FaArrowRight, FaStar } from 'react-icons/fa'

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <FaRocket className="text-3xl text-[#04123d]" />
              <span className="text-2xl font-bold text-[#04123d]">TaskFlow</span>
            </div>
 
            <div className="flex space-x-4">
              <button 
                onClick={() => window.location.href = '/login'}
                className="px-6 py-2 text-[#04123d] font-semibold hover:bg-gray-100 rounded-lg transition-all"
              >
                Login
              </button>
              <button 
                onClick={() => window.location.href = '/register'}
                className="px-6 py-2 bg-[#04123d] text-white font-semibold rounded-lg hover:bg-[#0a1f63] transition-all shadow-lg"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#04123d] via-[#0a1f63] to-[#1a3c8a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Manage Your Products
                <span className="block text-[#60a5fa]">Like a Pro</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Streamline your product management workflow with our powerful yet intuitive platform. 
                Track, organize, and scale your products effortlessly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => window.location.href = '/register'}
                  className="px-8 py-4 bg-white text-[#04123d] font-bold rounded-lg hover:bg-gray-100 transition-all shadow-xl flex items-center justify-center gap-2"
                >
                  Start Free Trial
                  <FaArrowRight />
                </button>
                <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-[#04123d] transition-all">
                  Watch Demo
                </button>
              </div>
              <div className="mt-12 flex items-center gap-8">
                <div>
                  <p className="text-4xl font-bold text-[#60a5fa]">10K+</p>
                  <p className="text-gray-400">Active Users</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-[#60a5fa]">50K+</p>
                  <p className="text-gray-400">Products Managed</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-[#60a5fa]">99.9%</p>
                  <p className="text-gray-400">Uptime</p>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
                alt="Product Dashboard"
                className="rounded-2xl shadow-2xl border-4 border-white/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#04123d] mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to manage your products effectively in one place
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#04123d] rounded-lg flex items-center justify-center mb-6">
                <FaChartLine className="text-3xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#04123d] mb-3">Analytics & Insights</h3>
              <p className="text-gray-600 leading-relaxed">
                Real-time analytics and comprehensive reports to help you make data-driven decisions.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#04123d] rounded-lg flex items-center justify-center mb-6">
                <FaTasks className="text-3xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#04123d] mb-3">Task Management</h3>
              <p className="text-gray-600 leading-relaxed">
                Organize tasks, assign priorities, and track progress with our intuitive system.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#04123d] rounded-lg flex items-center justify-center mb-6">
                <FaUsers className="text-3xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#04123d] mb-3">Team Collaboration</h3>
              <p className="text-gray-600 leading-relaxed">
                Work together seamlessly. Share updates, comment, and collaborate in real-time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#04123d] mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Get started in minutes, not hours</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#04123d] to-[#0a1f63] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold text-[#04123d] mb-3">Create Account</h3>
              <p className="text-gray-600">Sign up in under 2 minutes</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#04123d] to-[#0a1f63] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold text-[#04123d] mb-3">Add Products</h3>
              <p className="text-gray-600">Import or create your products</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#04123d] to-[#0a1f63] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-[#04123d] mb-3">Organize</h3>
              <p className="text-gray-600">Categorize and prioritize</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#04123d] to-[#0a1f63] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-bold text-[#04123d] mb-3">Track & Grow</h3>
              <p className="text-gray-600">Monitor progress and scale</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#04123d] to-[#0a1f63]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Product Management?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Join thousands of teams already using TaskFlow
          </p>
          <button 
            onClick={() => window.location.href = '/register'}
            className="px-10 py-5 bg-white text-[#04123d] font-bold text-lg rounded-lg hover:bg-gray-100 transition-all shadow-xl inline-flex items-center gap-3"
          >
            Get Started for Free
            <FaArrowRight />
          </button>
          <p className="text-gray-400 mt-6">No credit card required • 14-day free trial</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#04123d] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <FaRocket className="text-3xl" />
                <span className="text-2xl font-bold">TaskFlow</span>
              </div>
              <p className="text-gray-400">
                The ultimate product management platform for modern teams.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">Integrations</a></li>
                <li><a href="#" className="hover:text-white">Changelog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2026 TaskFlow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home