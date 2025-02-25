import React, { useEffect, useState } from 'react';
import { Shield, Lock, Wallet, ArrowRight } from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white shadow-sm fixed w-full z-50 animate-fade-in-up">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center animate-float">
            <Shield className="w-8 h-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold">Trezor</span>
          </div>
          <div className="flex space-x-4">
            <a href="#features" className="text-gray-600 hover:text-gray-900 hover-lift">Features</a>
            <a href="#setup" className="text-gray-600 hover:text-gray-900 hover-lift">Setup Guide</a>
            <a href="#support" className="text-gray-600 hover:text-gray-900 hover-lift">Support</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 mt-16">
        <div className="text-center">
          <h1 className={`text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl animate-fade-in-up ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            Start Your Journey with Trezor
          </h1>
          <p className={`mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl animate-fade-in-up delay-100 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            The complete guide to setting up your Trezor hardware wallet. Secure your digital assets with the most trusted name in cryptocurrency security.
          </p>
          <div className={`mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8 animate-fade-in-up delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="rounded-md shadow hover-scale">
              <a href="#setup-guide" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition-colors duration-300">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 border rounded-lg hover-lift animate-scale-in">
              <Lock className="w-10 h-10 text-blue-600 animate-float" />
              <h3 className="mt-4 text-lg font-medium">Secure Storage</h3>
              <p className="mt-2 text-gray-500">Keep your cryptocurrencies safe with military-grade security features.</p>
            </div>
            <div className="p-6 border rounded-lg hover-lift animate-scale-in delay-100">
              <Wallet className="w-10 h-10 text-blue-600 animate-float" />
              <h3 className="mt-4 text-lg font-medium">Easy Setup</h3>
              <p className="mt-2 text-gray-500">Quick and intuitive setup process for your Trezor device.</p>
            </div>
            <div className="p-6 border rounded-lg hover-lift animate-scale-in delay-200">
              <ArrowRight className="w-10 h-10 text-blue-600 animate-float" />
              <h3 className="mt-4 text-lg font-medium">Instant Access</h3>
              <p className="mt-2 text-gray-500">Access your assets anywhere, anytime with complete security.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Setup Guide */}
      <section id="setup-guide" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in-up">Complete Setup Guide</h2>
          <div className="prose prose-lg mx-auto">
            <img 
              src="https://images.unsplash.com/photo-1625806786037-2af608423424?auto=format&fit=crop&w=1200&q=80" 
              alt="Trezor hardware wallet setup process demonstration"
              className="w-full rounded-lg shadow-lg mb-8 hover-scale transition-transform duration-300"
            />
            <div className="animate-slide-in">
              <h3>Getting Started with Your Trezor Device</h3>
              <p>Welcome to the comprehensive guide for setting up your Trezor hardware wallet (Version 22.9.3). This step-by-step tutorial will walk you through the entire process of initializing and securing your device.</p>
            </div>
            
            <div className="animate-slide-in delay-100">
              <h4>Initial Setup Process</h4>
              <p>Begin by connecting your Trezor device to your computer using the provided USB cable. Visit trezor.io/start to download the latest firmware and Trezor Suite software. This ensures you have the most up-to-date security features and functionality.</p>
            </div>

            <div className="animate-slide-in delay-200">
              <h4>Security Measures</h4>
              <p>Your Trezor wallet generates a unique 24-word recovery seed during setup. This seed is crucial for recovering your funds if your device is lost or damaged. Store it securely offline and never share it with anyone.</p>
            </div>

            <div className="animate-slide-in delay-300">
              <h4>Advanced Features</h4>
              <p>Explore advanced security features like passphrase protection and hidden wallets. These additional layers of security make your Trezor one of the most secure hardware wallets available.</p>
            </div>

            <div className="my-8 p-4 bg-blue-50 rounded-lg hover-lift animate-scale-in">
              <h5 className="font-bold">Quick Setup Checklist:</h5>
              <ul className="list-disc pl-6">
                <li className="hover-lift">Unbox and connect your Trezor device</li>
                <li className="hover-lift">Install Trezor Suite from trezor.io/start</li>
                <li className="hover-lift">Follow the on-screen instructions</li>
                <li className="hover-lift">Securely store your recovery seed</li>
                <li className="hover-lift">Set up additional security features</li>
              </ul>
            </div>

            <p>For more detailed information, visit our <a href="https://trezor.io/learn" className="text-blue-600 hover:text-blue-800 hover-lift">learning center</a> or contact our <a href="https://trezor.io/support" className="text-blue-600 hover:text-blue-800 hover-lift">support team</a>.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="animate-fade-in-up">
              <h3 className="text-lg font-semibold mb-4">About Trezor</h3>
              <p className="text-gray-400">Securing your digital assets with the most trusted hardware wallet solution.</p>
            </div>
            <div className="animate-fade-in-up delay-100">
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white hover-lift">Shop</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white hover-lift">Support</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white hover-lift">Blog</a></li>
              </ul>
            </div>
            <div className="animate-fade-in-up delay-200">
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white hover-lift">Twitter</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white hover-lift">Discord</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white hover-lift">Reddit</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400 animate-fade-in-up delay-300">
            <p>&copy; 2024 Trezor. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;