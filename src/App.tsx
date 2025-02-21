import React, { useState } from 'react';
import { Download, FileText, Mail } from 'lucide-react';
import { Toaster } from 'react-hot-toast';
import ResumeForm from './components/ResumeForm';
import ResumePreview from './components/ResumePreview';
import Header from './components/Header';
import TemplatesPage from './components/TemplatesPage';
import PricingPage from './components/PricingPage';
import AuthModal from './components/AuthModal';
import { AuthProvider } from './context/AuthContext';
import { ResumeData } from './types';

const initialResumeData: ResumeData = {
  personalInfo: {
    fullName: '',
    email: '',
    phone: '',
    location: '',
    title: '',
  },
  summary: '',
  experience: [{
    company: '',
    position: '',
    startDate: '',
    endDate: '',
    description: '',
  }],
  education: [{
    school: '',
    degree: '',
    graduationDate: '',
    gpa: '',
  }],
  skills: [''],
};

function App() {
  const [resumeData, setResumeData] = useState<ResumeData>(initialResumeData);
  const [activeTab, setActiveTab] = useState<'resume' | 'cover'>('resume');
  const [currentPage, setCurrentPage] = useState<'editor' | 'templates' | 'pricing'>('editor');
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const handleDataChange = (newData: ResumeData) => {
    setResumeData(newData);
  };

  return (
    <AuthProvider>
      <div className="min-h-screen bg-gray-50">
        <Toaster position="top-center" />
        <Header 
          onTemplatesClick={() => setCurrentPage('templates')} 
          onEditorClick={() => setCurrentPage('editor')}
          onPricingClick={() => setCurrentPage('pricing')}
          onAuthClick={() => setIsAuthModalOpen(true)}
        />
        
        {currentPage === 'editor' ? (
          <main className="container mx-auto px-4 py-8">
            <div className="flex justify-center space-x-4 mb-8">
              <button
                onClick={() => setActiveTab('resume')}
                className={`px-6 py-2 rounded-lg flex items-center space-x-2 ${
                  activeTab === 'resume'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                <FileText size={20} />
                <span>Resume</span>
              </button>
              <button
                onClick={() => setActiveTab('cover')}
                className={`px-6 py-2 rounded-lg flex items-center space-x-2 ${
                  activeTab === 'cover'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Mail size={20} />
                <span>Cover Letter</span>
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <ResumeForm data={resumeData} onChange={handleDataChange} />
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold text-gray-800">Preview</h2>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition-colors">
                    <Download size={20} />
                    <span>Download PDF</span>
                  </button>
                </div>
                <ResumePreview data={resumeData} />
              </div>
            </div>
          </main>
        ) : currentPage === 'templates' ? (
          <TemplatesPage />
        ) : (
          <PricingPage />
        )}

        <AuthModal 
          isOpen={isAuthModalOpen}
          onClose={() => setIsAuthModalOpen(false)}
        />
      </div>
    </AuthProvider>
  );
}

export default App;