import React, { useState } from 'react';
import { Search, Download, ExternalLink } from 'lucide-react';

// This would be updated by the website maintainer
const REGISTRATIONS_INITIAL = [
  { id: "REG001", name: "Dr. Amit Kumar", email: "amit.kumar@example.com", affiliation: "Delhi University", paperTitle: "AI-Based Approach for Smart Healthcare Systems", status: "Confirmed", date: "2025-01-15" },
  { id: "REG002", name: "Dr. Sarah Johnson", email: "sarah.j@mit.edu", affiliation: "MIT", paperTitle: "Blockchain for Secure IoT Communications", status: "Confirmed", date: "2025-01-18" },
  { id: "REG003", name: "Prof. Li Wei", email: "li.wei@tsinghua.edu.cn", affiliation: "Tsinghua University", paperTitle: "Deep Learning for Natural Language Processing", status: "Confirmed", date: "2025-01-20" },
  { id: "REG004", name: "Dr. Elena Rodriguez", email: "elena.r@upm.es", affiliation: "Technical University of Madrid", paperTitle: "Smart Grid Technologies for Renewable Energy Integration", status: "Confirmed", date: "2025-01-22" },
  { id: "REG005", name: "Prof. James Wilson", email: "j.wilson@stanford.edu", affiliation: "Stanford University", paperTitle: "Quantum Computing: Challenges and Opportunities", status: "Confirmed", date: "2025-01-25" },
];

const RegistrationsPage = () => {
  const [registrations] = useState(REGISTRATIONS_INITIAL);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterBy, setFilterBy] = useState('all');

  const filteredRegistrations = registrations.filter(reg => {
    const matchesSearch = 
      reg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      reg.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      reg.affiliation.toLowerCase().includes(searchTerm.toLowerCase()) ||
      reg.paperTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      reg.id.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (filterBy === 'all') return matchesSearch;
    return matchesSearch && reg.status.toLowerCase() === filterBy.toLowerCase();
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Conference Registrations</h1>
          <p className="text-xl max-w-3xl mx-auto">
            View all successful registrations for the International Conference on Emerging Technologies
          </p>
        </div>
      </section>

      {/* Registration Search and Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="relative flex-grow max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search by name, email, affiliation..."
                className="pl-10 pr-4 py-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex items-center space-x-4">
              <label htmlFor="filter" className="text-gray-700 font-medium">Filter by:</label>
              <select
                id="filter"
                className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={filterBy}
                onChange={(e) => setFilterBy(e.target.value)}
              >
                <option value="all">All Registrations</option>
                <option value="confirmed">Confirmed</option>
                <option value="pending">Pending</option>
              </select>
              
              <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center">
                <Download className="h-4 w-4 mr-2" />
                Export CSV
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Registrations Table */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Registration ID
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Affiliation
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Paper Title
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Registration Date
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredRegistrations.length > 0 ? (
                    filteredRegistrations.map((registration, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {registration.id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          <div>{registration.name}</div>
                          <div className="text-xs text-gray-500">{registration.email}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {registration.affiliation}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">
                          {registration.paperTitle}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            registration.status === 'Confirmed' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {registration.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {registration.date}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={6} className="px-6 py-4 text-center text-gray-500">
                        No registrations found matching your search criteria.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Information */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold mb-6 text-center text-blue-900">Registration Information</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-700 mb-4">
              This page displays all successful registrations for the International Conference on Emerging Technologies. 
              If you have recently registered and don't see your name on the list, please allow up to 48 hours for your 
              registration to be processed and confirmed.
            </p>
            <p className="text-gray-700 mb-4">
              For any queries regarding your registration status, please contact us at 
              <a href="mailto:registration@sreenidhi.edu.in" className="text-blue-600 hover:underline ml-1">
                registration@sreenidhi.edu.in
              </a>
            </p>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-semibold mb-3 text-blue-800">Need to Register?</h3>
              <p className="text-gray-700 mb-4">
                If you haven't registered yet, please click the button below to complete your registration.
              </p>
              <a 
                href="https://forms.google.com/example-form" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg inline-flex items-center transition-colors duration-300"
              >
                Register Now
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegistrationsPage;