import React from 'react';
import { Check, Star, Zap, Crown } from 'lucide-react';

interface PricingFeature {
  name: string;
  basic: boolean;
  pro: boolean;
  enterprise: boolean;
}

const features: PricingFeature[] = [
  { name: 'Basic Templates', basic: true, pro: true, enterprise: true },
  { name: 'Download as PDF', basic: true, pro: true, enterprise: true },
  { name: 'ATS-Friendly Formats', basic: true, pro: true, enterprise: true },
  { name: 'Premium Templates', basic: false, pro: true, enterprise: true },
  { name: 'Cover Letter Builder', basic: false, pro: true, enterprise: true },
  { name: 'Multiple Download Formats', basic: false, pro: true, enterprise: true },
  { name: 'Custom Fonts', basic: false, pro: true, enterprise: true },
  { name: 'Priority Support', basic: false, pro: false, enterprise: true },
  { name: 'Personal Career Coach', basic: false, pro: false, enterprise: true },
  { name: 'LinkedIn Profile Review', basic: false, pro: false, enterprise: true },
];

const PricingPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Choose the perfect plan for your career journey
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Basic Plan */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-8">
            <div className="h-12 flex items-center justify-center">
              <Star className="text-blue-600" size={32} />
            </div>
            <h2 className="text-2xl font-bold text-center text-gray-900 mt-4">Basic</h2>
            <div className="mt-4 text-center">
              <span className="text-4xl font-bold">$0</span>
              <span className="text-gray-600">/month</span>
            </div>
            <p className="mt-4 text-gray-600 text-center">
              Perfect for getting started with your job search
            </p>
            <button className="w-full mt-8 bg-gray-100 text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors">
              Get Started Free
            </button>
          </div>
          <div className="p-8 bg-gray-50">
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className={`flex items-center ${feature.basic ? 'text-gray-800' : 'text-gray-400'}`}>
                  {feature.basic ? (
                    <Check size={20} className="mr-3 text-green-500 flex-shrink-0" />
                  ) : (
                    <div className="w-5 h-5 mr-3 flex-shrink-0" />
                  )}
                  <span>{feature.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Pro Plan */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform scale-105 relative">
          <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 rounded-bl-lg text-sm font-medium">
            Popular
          </div>
          <div className="p-8">
            <div className="h-12 flex items-center justify-center">
              <Zap className="text-blue-600" size={32} />
            </div>
            <h2 className="text-2xl font-bold text-center text-gray-900 mt-4">Pro</h2>
            <div className="mt-4 text-center">
              <span className="text-4xl font-bold">$15</span>
              <span className="text-gray-600">/month</span>
            </div>
            <p className="mt-4 text-gray-600 text-center">
              Advanced features for serious job seekers
            </p>
            <button className="w-full mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Start Pro Trial
            </button>
          </div>
          <div className="p-8 bg-gray-50">
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className={`flex items-center ${feature.pro ? 'text-gray-800' : 'text-gray-400'}`}>
                  {feature.pro ? (
                    <Check size={20} className="mr-3 text-green-500 flex-shrink-0" />
                  ) : (
                    <div className="w-5 h-5 mr-3 flex-shrink-0" />
                  )}
                  <span>{feature.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Enterprise Plan */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-8">
            <div className="h-12 flex items-center justify-center">
              <Crown className="text-blue-600" size={32} />
            </div>
            <h2 className="text-2xl font-bold text-center text-gray-900 mt-4">Enterprise</h2>
            <div className="mt-4 text-center">
              <span className="text-4xl font-bold">$29</span>
              <span className="text-gray-600">/month</span>
            </div>
            <p className="mt-4 text-gray-600 text-center">
              Complete career advancement solution
            </p>
            <button className="w-full mt-8 bg-gray-100 text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors">
              Contact Sales
            </button>
          </div>
          <div className="p-8 bg-gray-50">
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className={`flex items-center ${feature.enterprise ? 'text-gray-800' : 'text-gray-400'}`}>
                  {feature.enterprise ? (
                    <Check size={20} className="mr-3 text-green-500 flex-shrink-0" />
                  ) : (
                    <div className="w-5 h-5 mr-3 flex-shrink-0" />
                  )}
                  <span>{feature.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-16 bg-blue-50 rounded-2xl p-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-lg mb-2">Can I cancel my subscription?</h3>
              <p className="text-gray-600">Yes, you can cancel your subscription at any time. You'll continue to have access to your plan features until the end of your billing period.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Do you offer refunds?</h3>
              <p className="text-gray-600">We offer a 14-day money-back guarantee for all paid plans. If you're not satisfied, we'll refund your payment, no questions asked.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Can I switch plans?</h3>
              <p className="text-gray-600">You can upgrade or downgrade your plan at any time. The change will take effect on your next billing cycle.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-600">We accept all major credit cards, PayPal, and Apple Pay for your convenience.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;