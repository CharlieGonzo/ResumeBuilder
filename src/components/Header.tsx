import React from 'react';
import { FileText } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface HeaderProps {
  onTemplatesClick: () => void;
  onEditorClick: () => void;
  onPricingClick: () => void;
  onAuthClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ 
  onTemplatesClick, 
  onEditorClick, 
  onPricingClick,
  onAuthClick 
}) => {
  const { user, signOut } = useAuth();

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={onEditorClick}>
            <FileText className="text-blue-600" size={32} />
            <h1 className="text-2xl font-bold text-gray-800">ResumeBuilder</h1>
          </div>
          <nav>
            <ul className="flex items-center space-x-6">
              <li>
                <button
                  onClick={onTemplatesClick}
                  className="text-gray-600 hover:text-blue-600"
                >
                  Templates
                </button>
              </li>
              <li>
                <button
                  onClick={onPricingClick}
                  className="text-gray-600 hover:text-blue-600"
                >
                  Pricing
                </button>
              </li>
              {user ? (
                <>
                  <li>
                    <span className="text-gray-600">
                      {user.email}
                    </span>
                  </li>
                  <li>
                    <button
                      onClick={() => signOut()}
                      className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      Sign Out
                    </button>
                  </li>
                </>
              ) : (
                <li>
                  <button
                    onClick={onAuthClick}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Sign In
                  </button>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;