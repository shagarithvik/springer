import React from 'react';
import { Award, BookOpen, Users, MapPin } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">About Sreenidhi Institute of Science and Technology</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Excellence in Education, Research and Innovation
          </p>
        </div>
      </section>

      {/* College Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-blue-900">Our Institution</h2>
              <p className="text-gray-700 mb-4">
                Sreenidhi Institute of Science and Technology (SNIST) was established in 1997 by the Sreenidhi 
                Educational Group with a vision to provide quality education and create competent professionals 
                to meet the growing demands of the industry and society.
              </p>
              <p className="text-gray-700 mb-4">
                Located in Hyderabad, SNIST has emerged as one of the premier engineering institutions in India, 
                known for its academic excellence, research contributions, and industry collaborations.
              </p>
              <p className="text-gray-700 mb-4">
                The institute is approved by AICTE and affiliated to Jawaharlal Nehru Technological University 
                Hyderabad (JNTUH). SNIST is accredited by NAAC with 'A' grade and most of its engineering 
                programs are accredited by NBA.
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Sreenidhi Institute Campus" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-900">Why Choose SNIST?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <Award className="h-12 w-12 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Academic Excellence</h3>
              <p className="text-gray-700">
                Consistently ranked among the top engineering colleges in India with excellent academic records and placements.
              </p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <Users className="h-12 w-12 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Experienced Faculty</h3>
              <p className="text-gray-700">
                Highly qualified and experienced faculty members dedicated to providing quality education and mentorship.
              </p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <BookOpen className="h-12 w-12 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Research Focus</h3>
              <p className="text-gray-700">
                Strong emphasis on research and innovation with state-of-the-art laboratories and research centers.
              </p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <MapPin className="h-12 w-12 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Strategic Location</h3>
              <p className="text-gray-700">
                Located in Hyderabad, a major IT hub, providing excellent opportunities for industry exposure and placements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Programs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-900">Academic Programs</h2>
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">Undergraduate Programs (B.Tech)</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="bg-white p-4 rounded shadow-sm">Computer Science and Engineering</li>
                <li className="bg-white p-4 rounded shadow-sm">Information Technology</li>
                <li className="bg-white p-4 rounded shadow-sm">Electronics and Communication Engineering</li>
                <li className="bg-white p-4 rounded shadow-sm">Electrical and Electronics Engineering</li>
                <li className="bg-white p-4 rounded shadow-sm">Mechanical Engineering</li>
                <li className="bg-white p-4 rounded shadow-sm">Civil Engineering</li>
                <li className="bg-white p-4 rounded shadow-sm">Artificial Intelligence and Machine Learning</li>
                <li className="bg-white p-4 rounded shadow-sm">Data Science</li>
              </ul>
            </div>
            
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">Postgraduate Programs (M.Tech)</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="bg-white p-4 rounded shadow-sm">Computer Science and Engineering</li>
                <li className="bg-white p-4 rounded shadow-sm">VLSI System Design</li>
                <li className="bg-white p-4 rounded shadow-sm">Embedded Systems</li>
                <li className="bg-white p-4 rounded shadow-sm">Power Electronics</li>
                <li className="bg-white p-4 rounded shadow-sm">CAD/CAM</li>
                <li className="bg-white p-4 rounded shadow-sm">Structural Engineering</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">Doctoral Programs (Ph.D)</h3>
              <p className="bg-white p-4 rounded shadow-sm">
                SNIST offers Ph.D programs in various disciplines of Engineering, Science, and Management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Facilities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-900">Campus Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="SNIST Library" 
                className="w-full h-64 object-cover rounded-lg shadow-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">State-of-the-art Library</h3>
              <p className="text-gray-700">
                A comprehensive library with a vast collection of books, journals, and digital resources to support academic and research activities.
              </p>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="SNIST Labs" 
                className="w-full h-64 object-cover rounded-lg shadow-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Modern Laboratories</h3>
              <p className="text-gray-700">
                Well-equipped laboratories with the latest equipment and technology to provide hands-on experience to students.
              </p>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="SNIST Sports Facilities" 
                className="w-full h-64 object-cover rounded-lg shadow-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Sports and Recreation</h3>
              <p className="text-gray-700">
                Excellent sports facilities including indoor and outdoor sports arenas, gymnasium, and recreation areas for overall development.
              </p>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="SNIST Auditorium" 
                className="w-full h-64 object-cover rounded-lg shadow-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Auditorium and Seminar Halls</h3>
              <p className="text-gray-700">
                Modern auditorium and seminar halls equipped with audio-visual facilities for conducting conferences, seminars, and cultural events.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl mb-4">Sreenidhi Institute of Science and Technology</p>
            <p className="mb-2">Yamnampet, Ghatkesar, Hyderabad, Telangana, India - 501301</p>
            <p className="mb-2">Phone: +91-40-2719 5200</p>
            <p className="mb-6">Email: info@sreenidhi.edu.in</p>
            <a 
              href="https://www.sreenidhi.edu.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-200 hover:text-white underline"
            >
              Visit Official Website
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;