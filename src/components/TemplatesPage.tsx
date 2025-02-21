import React from 'react';
import { Check } from 'lucide-react';

interface Template {
  id: string;
  name: string;
  description: string;
  image: string;
  premium: boolean;
}

const templates: Template[] = [
  {
    id: 'minimal',
    name: 'Minimal',
    description: 'Clean and straightforward design that puts your content first',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=400&h=500',
    premium: false,
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'Traditional template perfect for corporate positions',
    image: 'https://images.unsplash.com/photo-1626197031507-c17099753214?auto=format&fit=crop&q=80&w=400&h=500',
    premium: true,
  },
  {
    id: 'creative',
    name: 'Creative',
    description: 'Stand out with a modern and unique layout',
    image: 'https://images.unsplash.com/photo-1574236170880-952841038aa9?auto=format&fit=crop&q=80&w=400&h=500',
    premium: true,
  },
  {
    id: 'executive',
    name: 'Executive',
    description: 'Sophisticated design for senior positions',
    image: 'https://images.unsplash.com/photo-1586282391129-76a6df230234?auto=format&fit=crop&q=80&w=400&h=500',
    premium: true,
  }
];

const TemplatesPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Professional Resume Templates</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Choose from our collection of professionally designed templates to make your resume stand out
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {templates.map((template) => (
          <div key={template.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative">
              <img
                src={template.image}
                alt={template.name}
                className="w-full h-[300px] object-cover"
              />
              {template.premium && (
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Premium
                </div>
              )}
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{template.name}</h3>
              <p className="text-gray-600 mb-4">{template.description}</p>
              <div className="space-y-2">
                <div className="flex items-center text-gray-700">
                  <Check size={16} className="mr-2 text-green-500" />
                  <span>ATS-Friendly</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Check size={16} className="mr-2 text-green-500" />
                  <span>Multiple Formats</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Check size={16} className="mr-2 text-green-500" />
                  <span>Customizable</span>
                </div>
              </div>
              <button
                className={`w-full mt-6 px-4 py-2 rounded-lg font-medium ${
                  template.premium
                    ? 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {template.premium ? 'Upgrade to Premium' : 'Use Template'}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-blue-50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Premium Features</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div>
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="text-blue-600" size={24} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Multiple Formats</h3>
            <p className="text-gray-600">Download in PDF, Word, or plain text formats</p>
          </div>
          <div>
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="text-blue-600" size={24} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Premium Templates</h3>
            <p className="text-gray-600">Access to all premium template designs</p>
          </div>
          <div>
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="text-blue-600" size={24} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Priority Support</h3>
            <p className="text-gray-600">Get help when you need it most</p>
          </div>
        </div>
        <button className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
          Upgrade to Premium
        </button>
      </div>
    </div>
  );
};

export default TemplatesPage;