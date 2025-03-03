import React, { useState, useEffect } from 'react';
import { Calendar, Clock, ExternalLink } from 'lucide-react';

// This would be updated by the website maintainer
const VISITOR_COUNT_INITIAL = 1;
const REGISTRATION_COUNT_INITIAL = 0;

const HomePage = () => {
  const [visitorCount, setVisitorCount] = useState(VISITOR_COUNT_INITIAL);
  const [registrationCount, setRegistrationCount] = useState(REGISTRATION_COUNT_INITIAL);

  useEffect(() => {
    // Simulate visitor count increment on page load
    // In a real implementation, this would be handled by a backend service
    setVisitorCount(prev => prev + 1);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <img 
              src="/snist-logo.png" 
              alt="SNIST Logo" 
              className="h-24 w-auto"
              onError={(e) => {
                e.currentTarget.src = "https://via.placeholder.com/96x96?text=SNIST";
                e.currentTarget.onerror = null;
              }}
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">International Conference on Neural Nexus and Synergy</h1>
          <p className="text-xl md:text-2xl mb-4">Innovation in Emerging Technologies</p>
          <p className="text-lg mb-8">Hosted by Sreenidhi Institute of Science and Technology</p>
          <p className="text-lg mb-8">June 15-17, 2025 | Hyderabad, India</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <a 
              href="https://forms.google.com/example-form" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg inline-flex items-center justify-center transition-colors duration-300"
            >
              Register Now
              <ExternalLink className="ml-2 h-5 w-5" />
            </a>
            <a 
              href="#deadlines" 
              className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg inline-flex items-center justify-center transition-colors duration-300"
            >
              Important Dates
            </a>
          </div>
          <div className="flex justify-center space-x-8">
            <div className="text-center">
              <p className="text-3xl font-bold">{visitorCount}</p>
              <p className="text-sm">Page Visits</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">{registrationCount}</p>
              <p className="text-sm">Registrations</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Conference */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">About the Conference</h2>
          <div className="max-w-3xl mx-auto text-gray-700">
            <p className="mb-4">
              The International Conference on Neural Nexus and Synergy: Innovation in Emerging Technologies (ICNNS) brings together researchers, 
              academicians, and industry professionals from around the world to share their research findings, 
              innovations, and experiences in various fields of science and technology.
            </p>
            <p className="mb-4">
              This prestigious conference provides a platform for knowledge exchange, networking, and 
              collaboration among participants from diverse backgrounds and expertise.
            </p>
            <p>
              Join us at Sreenidhi Institute of Science and Technology for three days of inspiring keynotes, 
              technical sessions, workshops, and networking opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section id="deadlines" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Important Dates</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Calendar className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="text-xl font-semibold">Paper Submission</h3>
              </div>
              <p className="text-gray-700 mb-2"><strong>Deadline:</strong> March 15, 2025</p>
              <p className="text-gray-600 text-sm">Submit your full paper through the online submission system.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Calendar className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="text-xl font-semibold">Notification of Acceptance</h3>
              </div>
              <p className="text-gray-700 mb-2"><strong>Date:</strong> April 30, 2025</p>
              <p className="text-gray-600 text-sm">Authors will be notified about the acceptance of their papers.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Calendar className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="text-xl font-semibold">Camera-Ready Submission</h3>
              </div>
              <p className="text-gray-700 mb-2"><strong>Deadline:</strong> May 15, 2025</p>
              <p className="text-gray-600 text-sm">Submit the final version of your accepted paper.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Calendar className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="text-xl font-semibold">Early Bird Registration</h3>
              </div>
              <p className="text-gray-700 mb-2"><strong>Deadline:</strong> May 1, 2025</p>
              <p className="text-gray-600 text-sm">Register early to avail discounted registration fees.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Conference Tracks */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Conference Tracks</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <h3 className="text-xl font-semibold mb-3 text-blue-800">Artificial Intelligence & Machine Learning</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Deep Learning</li>
                <li>Natural Language Processing</li>
                <li>Computer Vision</li>
                <li>AI Ethics</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <h3 className="text-xl font-semibold mb-3 text-blue-800">Internet of Things</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>IoT Architectures</li>
                <li>Smart Cities</li>
                <li>IoT Security</li>
                <li>Industrial IoT</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <h3 className="text-xl font-semibold mb-3 text-blue-800">Cybersecurity</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Network Security</li>
                <li>Cryptography</li>
                <li>Secure Software Development</li>
                <li>Threat Intelligence</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <h3 className="text-xl font-semibold mb-3 text-blue-800">Blockchain Technology</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Smart Contracts</li>
                <li>Decentralized Applications</li>
                <li>Blockchain Security</li>
                <li>Consensus Mechanisms</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <h3 className="text-xl font-semibold mb-3 text-blue-800">Cloud Computing</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Cloud Security</li>
                <li>Serverless Computing</li>
                <li>Edge Computing</li>
                <li>Cloud-Native Applications</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <h3 className="text-xl font-semibold mb-3 text-blue-800">Data Science & Big Data</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Data Mining</li>
                <li>Big Data Analytics</li>
                <li>Predictive Analytics</li>
                <li>Data Visualization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-800 to-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Participate?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Submit your research paper and join us at this prestigious international conference.
          </p>
          <a 
            href="https://forms.google.com/example-form" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg inline-flex items-center transition-colors duration-300"
          >
            Register Now
            <ExternalLink className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default HomePage;