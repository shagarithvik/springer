import React from 'react';
import { Users, Mail, Globe, Award } from 'lucide-react';

const OrganizersPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Conference Organizers</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Meet the team behind the International Conference on Emerging Technologies
          </p>
        </div>
      </section>

      {/* Organizing Committee */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-900">Organizing Committee</h2>
          
          {/* Chief Patrons */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-blue-800 text-center">Chief Patrons</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
                    alt="Dr. P. Narasimha Reddy" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xl font-bold mb-1">Dr. P. Narasimha Reddy</h4>
                <p className="text-gray-600 mb-3">Chairman, SNIST</p>
                <p className="text-gray-700 mb-4">
                  Visionary leader with over 30 years of experience in education and administration.
                </p>
                <div className="flex justify-center space-x-4">
                  <a href="mailto:chairman@sreenidhi.edu.in" className="text-blue-600 hover:text-blue-800">
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                  <img 
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
                    alt="Dr. K.T. Mahi" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xl font-bold mb-1">Dr. K.T. Mahi</h4>
                <p className="text-gray-600 mb-3">Principal, SNIST</p>
                <p className="text-gray-700 mb-4">
                  Distinguished academician with significant contributions to engineering education and research.
                </p>
                <div className="flex justify-center space-x-4">
                  <a href="mailto:principal@sreenidhi.edu.in" className="text-blue-600 hover:text-blue-800">
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Conference Chairs */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-blue-800 text-center">Conference Chairs</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                  <img 
                    src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
                    alt="Prof. Rajesh Kumar" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-lg font-bold mb-1">Prof. Rajesh Kumar</h4>
                <p className="text-gray-600 mb-2">General Chair</p>
                <p className="text-gray-700 mb-3 text-sm">
                  Head, Department of Computer Science, SNIST
                </p>
                <div className="flex justify-center space-x-3">
                  <a href="mailto:rajesh.kumar@sreenidhi.edu.in" className="text-blue-600 hover:text-blue-800">
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                  <img 
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
                    alt="Dr. Priya Sharma" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-lg font-bold mb-1">Dr. Priya Sharma</h4>
                <p className="text-gray-600 mb-2">Technical Program Chair</p>
                <p className="text-gray-700 mb-3 text-sm">
                  Professor, Department of Electronics, SNIST
                </p>
                <div className="flex justify-center space-x-3">
                  <a href="mailto:priya.sharma@sreenidhi.edu.in" className="text-blue-600 hover:text-blue-800">
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
                    alt="Dr. Sanjay Mehta" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-lg font-bold mb-1">Dr. Sanjay Mehta</h4>
                <p className="text-gray-600 mb-2">Organizing Chair</p>
                <p className="text-gray-700 mb-3 text-sm">
                  Professor, Department of Mechanical Engineering, SNIST
                </p>
                <div className="flex justify-center space-x-3">
                  <a href="mailto:sanjay.mehta@sreenidhi.edu.in" className="text-blue-600 hover:text-blue-800">
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Technical Program Committee */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-blue-800 text-center">Technical Program Committee</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {/* Committee Members */}
              {[
                { name: "Prof. Anand Singh", affiliation: "IIT Delhi, India" },
                { name: "Dr. Maria Rodriguez", affiliation: "University of Barcelona, Spain" },
                { name: "Prof. John Williams", affiliation: "MIT, USA" },
                { name: "Dr. Yuki Tanaka", affiliation: "Tokyo University, Japan" },
                { name: "Prof. Sarah Johnson", affiliation: "Stanford University, USA" },
                { name: "Dr. Ahmed Hassan", affiliation: "Cairo University, Egypt" },
                { name: "Prof. Li Wei", affiliation: "Tsinghua University, China" },
                { name: "Dr. Elena Petrova", affiliation: "Moscow State University, Russia" },
                { name: "Prof. Michael Brown", affiliation: "University of Sydney, Australia" }
              ].map((member, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="text-lg font-semibold mb-1">{member.name}</h4>
                  <p className="text-gray-600 text-sm">{member.affiliation}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Advisory Committee */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-blue-800 text-center">Advisory Committee</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {/* Advisory Members */}
              {[
                { name: "Dr. Robert Chen", affiliation: "Harvard University, USA", expertise: "Artificial Intelligence" },
                { name: "Prof. Sophia Patel", affiliation: "University of Cambridge, UK", expertise: "Cybersecurity" },
                { name: "Dr. Carlos Mendez", affiliation: "University of São Paulo, Brazil", expertise: "IoT" },
                { name: "Prof. Aisha Khalid", affiliation: "KAUST, Saudi Arabia", expertise: "Data Science" },
                { name: "Dr. Thomas Mueller", affiliation: "ETH Zurich, Switzerland", expertise: "Blockchain" },
                { name: "Prof. Ji-Sung Kim", affiliation: "Seoul National University, South Korea", expertise: "Cloud Computing" }
              ].map((member, index) => (
                <div key={index} className="bg-white p-5 rounded-lg shadow-sm flex items-center">
                  <div className="mr-4">
                    <Award className="h-10 w-10 text-blue-700" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">{member.name}</h4>
                    <p className="text-gray-600 text-sm mb-1">{member.affiliation}</p>
                    <p className="text-gray-500 text-xs">Expertise: {member.expertise}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Organizing Institutions */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-900">Organizing Institutions</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
                  <Users className="h-24 w-24 text-blue-700" />
                </div>
                <div className="md:w-2/3 md:pl-8">
                  <h3 className="text-2xl font-bold mb-3 text-blue-800">Sreenidhi Institute of Science and Technology</h3>
                  <p className="text-gray-700 mb-4">
                    Established in 1997, SNIST has emerged as one of the premier engineering institutions in India, 
                    known for its academic excellence, research contributions, and industry collaborations.
                  </p>
                  <div className="flex items-center text-blue-600">
                    <Globe className="h-5 w-5 mr-2" />
                    <a href="https://www.sreenidhi.edu.in" target="_blank" rel="noopener noreferrer" className="hover:underline">
                      www.sreenidhi.edu.in
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
                  <Award className="h-24 w-24 text-blue-700" />
                </div>
                <div className="md:w-2/3 md:pl-8">
                  <h3 className="text-2xl font-bold mb-3 text-blue-800">IEEE Hyderabad Section</h3>
                  <p className="text-gray-700 mb-4">
                    IEEE Hyderabad Section supports the conference as a technical co-sponsor, providing valuable 
                    guidance and resources to ensure the success of the event.
                  </p>
                  <div className="flex items-center text-blue-600">
                    <Globe className="h-5 w-5 mr-2" />
                    <a href="https://ieee-hyderabad-section.org" target="_blank" rel="noopener noreferrer" className="hover:underline">
                      ieee-hyderabad-section.org
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-6">Contact the Organizing Committee</h2>
          <p className="mb-4 max-w-2xl mx-auto">
            For any queries related to the conference, please feel free to contact us.
          </p>
          <p className="text-xl mb-2">Email: conference@sreenidhi.edu.in</p>
          <p className="text-xl">Phone: +91-40-2719 5200</p>
        </div>
      </section>
    </div>
  );
};

export default OrganizersPage;