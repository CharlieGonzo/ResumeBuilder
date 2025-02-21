import React from 'react';
import { ResumeData } from '../types';

interface ResumePreviewProps {
  data: ResumeData;
}

const ResumePreview: React.FC<ResumePreviewProps> = ({ data }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-8 min-h-[1056px] max-w-[816px] mx-auto">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{data.personalInfo.fullName}</h1>
        <p className="text-xl text-gray-600 mb-4">{data.personalInfo.title}</p>
        <div className="flex justify-center space-x-4 text-gray-600">
          <span>{data.personalInfo.email}</span>
          <span>•</span>
          <span>{data.personalInfo.phone}</span>
          <span>•</span>
          <span>{data.personalInfo.location}</span>
        </div>
      </div>

      {data.summary && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3 pb-2 border-b border-gray-200">
            Professional Summary
          </h2>
          <p className="text-gray-700 whitespace-pre-line">{data.summary}</p>
        </div>
      )}

      {data.experience.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3 pb-2 border-b border-gray-200">
            Work Experience
          </h2>
          {data.experience.map((exp, index) => (
            <div key={index} className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-medium text-gray-800">{exp.position}</h3>
                  <p className="text-gray-600">{exp.company}</p>
                </div>
                <p className="text-gray-600 text-sm">
                  {exp.startDate} - {exp.endDate}
                </p>
              </div>
              <p className="text-gray-700 whitespace-pre-line">{exp.description}</p>
            </div>
          ))}
        </div>
      )}

      {data.education.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3 pb-2 border-b border-gray-200">
            Education
          </h2>
          {data.education.map((edu, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-medium text-gray-800">{edu.school}</h3>
                  <p className="text-gray-600">{edu.degree}</p>
                </div>
                <p className="text-gray-600 text-sm">{edu.graduationDate}</p>
              </div>
              {edu.gpa && <p className="text-gray-600">GPA: {edu.gpa}</p>}
            </div>
          ))}
        </div>
      )}

      {data.skills.length > 0 && data.skills[0] !== '' && (
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-3 pb-2 border-b border-gray-200">
            Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumePreview;