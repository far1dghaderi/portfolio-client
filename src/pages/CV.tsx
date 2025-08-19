import { userInfo } from '../data/mockData';

const CV = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">{userInfo.name}</h1>
            <p className="text-xl text-blue-600 mb-4">{userInfo.title}</p>
            <p className="text-gray-600 mb-4">{userInfo.location}</p>
            <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
              {userInfo.bio}
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <span className="font-medium text-gray-700">Email:</span>
              <a href={`mailto:${userInfo.email}`} className="text-blue-600 hover:text-blue-800 ml-2">
                {userInfo.email}
              </a>
            </div>
            <div>
              <span className="font-medium text-gray-700">Location:</span>
              <span className="text-gray-600 ml-2">{userInfo.location}</span>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {userInfo.skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Professional Experience</h2>
          <div className="space-y-8">
            {userInfo.experience.map((exp, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{exp.position}</h3>
                  <span className="text-blue-600 font-medium">{exp.duration}</span>
                </div>
                <p className="text-lg text-gray-700 mb-2">{exp.company}</p>
                <p className="text-gray-600 leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Education</h2>
          <div className="space-y-6">
            {userInfo.education.map((edu, index) => (
              <div key={index} className="border-l-4 border-green-500 pl-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{edu.degree}</h3>
                  <span className="text-green-600 font-medium">{edu.year}</span>
                </div>
                <p className="text-lg text-gray-700">{edu.school}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Information */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Additional Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Languages</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span className="text-gray-700">English</span>
                  <span className="text-gray-500">Native</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-700">Spanish</span>
                  <span className="text-gray-500">Intermediate</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Interests</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Open Source Contribution</li>
                <li>• Web Development</li>
                <li>• Machine Learning</li>
                <li>• Hiking & Outdoor Activities</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Download CV Button */}
        <div className="text-center mt-8">
          <button className="btn-primary px-8 py-3">
            Download CV (PDF)
          </button>
        </div>
      </div>
    </div>
  );
};

export default CV;
