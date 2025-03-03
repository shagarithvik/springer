import React from 'react';
import { BookOpen, Award, FileText, ExternalLink, Check } from 'lucide-react';

const PublisherPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Publication Partner: Springer</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Learn about our prestigious publication partner for the International Conference on Neural Nexus and Synergy
          </p>
        </div>
      </section>

      {/* Springer Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/3 flex justify-center">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Springer_logo.svg/1280px-Springer_logo.svg.png" 
                alt="Springer Logo" 
                className="max-w-full h-auto"
              />
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-6 text-blue-900">About Springer</h2>
              <p className="text-gray-700 mb-4">
                Springer is one of the world's leading scientific publishers, pioneering the future of publishing since 1842. 
                Springer publishes high-quality peer-reviewed journals, books, and conference proceedings across a wide range 
                of academic disciplines.
              </p>
              <p className="text-gray-700 mb-4">
                With a global presence in over 20 countries and more than 8,000 employees worldwide, Springer publishes 
                around 2,900 journals and 12,000 new books each year, and has the world's largest eBook collection in 
                science, technology, and medicine.
              </p>
              <p className="text-gray-700 mb-4">
                Springer's mission is to advance discovery by publishing robust and insightful research, supporting the 
                development of new areas of knowledge, and making ideas and information accessible around the world.
              </p>
              <div className="mt-6">
                <a 
                  href="https://www.springer.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 inline-flex items-center"
                >
                  Visit Springer's Official Website
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publication Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center text-blue-900">Benefits of Publishing with Springer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <Check className="h-6 w-6 text-blue-700" />
                </div>
                <h3 className="text-xl font-semibold text-blue-800">Global Visibility</h3>
              </div>
              <p className="text-gray-700">
                Springer's global distribution network ensures your research reaches a worldwide audience of researchers, 
                institutions, and libraries.
              </p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <Check className="h-6 w-6 text-blue-700" />
                </div>
                <h3 className="text-xl font-semibold text-blue-800">Prestigious Indexing</h3>
              </div>
              <p className="text-gray-700">
                Springer proceedings are submitted for inclusion in leading bibliographic databases including Scopus, 
                Web of Science, and EI Compendex.
              </p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <Check className="h-6 w-6 text-blue-700" />
                </div>
                <h3 className="text-xl font-semibold text-blue-800">Digital Preservation</h3>
              </div>
              <p className="text-gray-700">
                Your research is preserved in Springer's digital archives and platforms, ensuring long-term accessibility 
                and citability.
              </p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <Check className="h-6 w-6 text-blue-700" />
                </div>
                <h3 className="text-xl font-semibold text-blue-800">Quality Assurance</h3>
              </div>
              <p className="text-gray-700">
                Springer's rigorous peer-review process and editorial standards ensure the highest quality of published content.
              </p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <Check className="h-6 w-6 text-blue-700" />
                </div>
                <h3 className="text-xl font-semibold text-blue-800">Enhanced Discoverability</h3>
              </div>
              <p className="text-gray-700">
                Advanced search optimization and metadata enrichment make your research more discoverable to the scientific community.
              </p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <Check className="h-6 w-6 text-blue-700" />
                </div>
                <h3 className="text-xl font-semibold text-blue-800">Citation Impact</h3>
              </div>
              <p className="text-gray-700">
                Publications in Springer proceedings typically receive higher citation rates, increasing your research impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Publication Process */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center text-blue-900">Publication Process</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
              
              {/* Steps */}
              <div className="space-y-12">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-8 mb-4 md:mb-0 md:text-right">
                    <h3 className="text-xl font-semibold mb-2 text-blue-800">Paper Submission</h3>
                    <p className="text-gray-700">
                      Authors submit their papers through the conference submission system by the deadline.
                    </p>
                  </div>
                  <div className="md:w-8 md:h-8 bg-blue-500 rounded-full z-10 flex items-center justify-center">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div className="md:w-1/2 md:pl-8 md:text-left"></div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-8 md:text-right"></div>
                  <div className="md:w-8 md:h-8 bg-blue-500 rounded-full z-10 flex items-center justify-center">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div className="md:w-1/2 md:pl-8 mb-4 md:mb-0 md:text-left">
                    <h3 className="text-xl font-semibold mb-2 text-blue-800">Peer Review</h3>
                    <p className="text-gray-700">
                      Each paper undergoes a rigorous double-blind peer review process by at least three reviewers.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-8 mb-4 md:mb-0 md:text-right">
                    <h3 className="text-xl font-semibold mb-2 text-blue-800">Acceptance Notification</h3>
                    <p className="text-gray-700">
                      Authors are notified about the acceptance or rejection of their papers.
                    </p>
                  </div>
                  <div className="md:w-8 md:h-8 bg-blue-500 rounded-full z-10 flex items-center justify-center">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div className="md:w-1/2 md:pl-8 md:text-left"></div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-8 md:text-right"></div>
                  <div className="md:w-8 md:h-8 bg-blue-500 rounded-full z-10 flex items-center justify-center">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <div className="md:w-1/2 md:pl-8 mb-4 md:mb-0 md:text-left">
                    <h3 className="text-xl font-semibold mb-2 text-blue-800">Camera-Ready Submission</h3>
                    <p className="text-gray-700">
                      Authors of accepted papers prepare and submit the final version following Springer's formatting guidelines.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-8 mb-4 md:mb-0 md:text-right">
                    <h3 className="text-xl font-semibold mb-2 text-blue-800">Copyright Transfer</h3>
                    <p className="text-gray-700">
                      Authors complete the copyright transfer agreement for their accepted papers.
                    </p>
                  </div>
                  <div className="md:w-8 md:h-8 bg-blue-500 rounded-full z-10 flex items-center justify-center">
                    <span className="text-white font-bold">5</span>
                  </div>
                  <div className="md:w-1/2 md:pl-8 md:text-left"></div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-8 md:text-right"></div>
                  <div className="md:w-8 md:h-8 bg-blue-500 rounded-full z-10 flex items-center justify-center">
                    <span className="text-white font-bold">6</span>
                  </div>
                  <div className="md:w-1/2 md:pl-8 mb-4 md:mb-0 md:text-left">
                    <h3 className="text-xl font-semibold mb-2 text-blue-800">Publication</h3>
                    <p className="text-gray-700">
                      Springer publishes the proceedings in both print and digital formats, making them available worldwide.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Springer Series */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center text-blue-900">Springer Conference Proceedings Series</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <BookOpen className="h-8 w-8 text-blue-700 mr-3" />
                <h3 className="text-xl font-semibold text-blue-800">Lecture Notes in Computer Science (LNCS)</h3>
              </div>
              <p className="text-gray-700 mb-4">
                One of the most established and prestigious series in computer science, covering research in all areas 
                of computer science and information technology.
              </p>
              <a 
                href="https://www.springer.com/series/558" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 inline-flex items-center"
              >
                Learn more
                <ExternalLink className="ml-1 h-4 w-4" />
              </a>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <BookOpen className="h-8 w-8 text-blue-700 mr-3" />
                <h3 className="text-xl font-semibold text-blue-800">Advances in Intelligent Systems and Computing (AISC)</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Focuses on intelligent systems, computational intelligence, and their applications in various fields 
                of engineering and sciences.
              </p>
              <a 
                href="https://www.springer.com/series/11156" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 inline-flex items-center"
              >
                Learn more
                <ExternalLink className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Author Guidelines */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-900">Author Guidelines</h2>
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-700 mb-6">
              To ensure your paper meets Springer's publication standards, please follow these guidelines:
            </p>
            
            <h3 className="text-xl font-semibold mb-3 text-blue-800">Formatting Requirements</h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Use the Springer LNCS template for formatting your paper</li>
              <li>Paper length: 10-15 pages including figures, tables, and references</li>
              <li>Font: Times New Roman, 10pt</li>
              <li>Margins: 1 inch (2.54 cm) on all sides</li>
              <li>Single-spaced text</li>
              <li>Include an abstract of 150-250 words</li>
              <li>Include 3-5 keywords</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3 text-blue-800">Submission Requirements</h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Submit your paper in PDF format</li>
              <li>Ensure all fonts are embedded in the PDF file</li>
              <li>Remove author names and affiliations for the initial submission (for double-blind review)</li>
              <li>Include a separate title page with author information</li>
            </ul>
            
            <div className="mt-6 flex justify-center">
              <a 
                href="https://www.springer.com/gp/computer-science/lncs/conference-proceedings-guidelines" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg inline-flex items-center transition-colors duration-300"
              >
                Download Springer Templates
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-6">Publication Inquiries</h2>
          <p className="mb-4 max-w-2xl mx-auto">
            For any questions regarding the publication process or Springer guidelines, please contact:
          </p>
          <p className="text-xl mb-2">Email: publications@neuralnexus2025.org</p>
          <p className="text-lg mt-4">
            <a 
              href="https://www.springer.com/gp/authors-editors/conference-proceedings/conference-proceedings-guidelines" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-200 hover:text-white underline inline-flex items-center"
            >
              Visit Springer's Guidelines for Conference Proceedings
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default PublisherPage;