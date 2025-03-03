import React from 'react';
import { HelpCircle } from 'lucide-react';

const FAQPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Find answers to common questions about the International Conference on Emerging Technologies
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-8">
            {/* General Questions */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-blue-900 flex items-center">
                <HelpCircle className="h-6 w-6 mr-2 text-blue-700" />
                General Questions
              </h2>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2 text-blue-800">When and where will the conference be held?</h3>
                  <p className="text-gray-700">
                    The International Conference on Emerging Technologies will be held from June 15-17, 2025, at Sreenidhi Institute of Science and Technology, Hyderabad, India.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2 text-blue-800">Who can attend the conference?</h3>
                  <p className="text-gray-700">
                    The conference is open to researchers, academicians, industry professionals, and students from around the world who are interested in emerging technologies and their applications.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2 text-blue-800">Is there a registration fee?</h3>
                  <p className="text-gray-700">
                    Yes, there is a registration fee for the conference. The fee structure varies for different categories of participants (students, academicians, industry professionals) and also depends on early bird or regular registration. Please check the registration page for detailed information.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Paper Submission */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-blue-900 flex items-center">
                <HelpCircle className="h-6 w-6 mr-2 text-blue-700" />
                Paper Submission
              </h2>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2 text-blue-800">What is the deadline for paper submission?</h3>
                  <p className="text-gray-700">
                    The deadline for paper submission is March 15, 2025. We strongly recommend submitting your papers well before the deadline to avoid any last-minute technical issues.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2 text-blue-800">What are the formatting guidelines for paper submission?</h3>
                  <p className="text-gray-700">
                    Papers should be formatted according to IEEE conference template. The maximum page limit is 6 pages including figures, tables, and references. Papers exceeding the page limit may be rejected without review.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2 text-blue-800">How do I submit my paper?</h3>
                  <p className="text-gray-700">
                    Papers should be submitted through the online submission system available on the conference website. You need to create an account on the submission portal and follow the instructions provided there.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2 text-blue-800">Can I submit more than one paper?</h3>
                  <p className="text-gray-700">
                    Yes, you can submit multiple papers. However, each paper requires a separate submission and will undergo independent review.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Review Process */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-blue-900 flex items-center">
                <HelpCircle className="h-6 w-6 mr-2 text-blue-700" />
                Review Process
              </h2>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2 text-blue-800">How are papers reviewed?</h3>
                  <p className="text-gray-700">
                    All submitted papers will undergo a double-blind peer review process by at least three reviewers who are experts in the relevant field. The review criteria include originality, technical soundness, clarity, and relevance to the conference themes.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2 text-blue-800">When will I be notified about the acceptance of my paper?</h3>
                  <p className="text-gray-700">
                    Notification of acceptance will be sent by April 30, 2025. Authors of accepted papers will receive detailed instructions for camera-ready submission and presentation.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2 text-blue-800">What if my paper is rejected?</h3>
                  <p className="text-gray-700">
                    If your paper is rejected, you will receive feedback from the reviewers explaining the reasons for rejection. This feedback can be valuable for improving your paper for future submissions.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Registration and Attendance */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-blue-900 flex items-center">
                <HelpCircle className="h-6 w-6 mr-2 text-blue-700" />
                Registration and Attendance
              </h2>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2 text-blue-800">Is it mandatory for authors to register for the conference?</h3>
                  <p className="text-gray-700">
                    Yes, at least one author of each accepted paper must register for the conference and present the paper. Failure to register may result in the paper being excluded from the conference proceedings.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2 text-blue-800">Can I attend the conference without submitting a paper?</h3>
                  <p className="text-gray-700">
                    Yes, you can attend the conference as a participant without submitting a paper. You need to register as a participant and pay the registration fee.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2 text-blue-800">Will there be virtual participation options?</h3>
                  <p className="text-gray-700">
                    Yes, we will provide virtual participation options for those who cannot attend in person. Virtual participants will have access to all conference sessions, presentations, and materials. The registration fee for virtual participation is different from in-person attendance.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Publication */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-blue-900 flex items-center">
                <HelpCircle className="h-6 w-6 mr-2 text-blue-700" />
                Publication
              </h2>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2 text-blue-800">Where will the accepted papers be published?</h3>
                  <p className="text-gray-700">
                    All accepted and presented papers will be published in the conference proceedings, which will be submitted for inclusion in IEEE Xplore Digital Library. Selected high-quality papers may be invited for extension and publication in special issues of reputed international journals.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2 text-blue-800">Will the conference proceedings be indexed?</h3>
                  <p className="text-gray-700">
                    Yes, the conference proceedings will be submitted for indexing in major databases such as Scopus, Web of Science, and EI Compendex.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Travel and Accommodation */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-blue-900 flex items-center">
                <HelpCircle className="h-6 w-6 mr-2 text-blue-700" />
                Travel and Accommodation
              </h2>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2 text-blue-800">Does the conference provide accommodation?</h3>
                  <p className="text-gray-700">
                    The conference does not provide accommodation directly. However, we have negotiated special rates with several hotels near the conference venue. Information about these hotels will be available on the conference website.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2 text-blue-800">How do I reach the conference venue?</h3>
                  <p className="text-gray-700">
                    Detailed information about reaching the conference venue, including directions from the airport and railway station, will be provided on the conference website. We will also arrange shuttle services from major transportation hubs to the venue on the conference days.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2 text-blue-800">Do I need a visa to attend the conference?</h3>
                  <p className="text-gray-700">
                    International participants may need a visa to enter India. We recommend checking the visa requirements well in advance. The conference organizers can provide invitation letters for visa purposes upon request after registration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for More Questions */}
      <section className="py-12 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            If you couldn't find the answer to your question, please feel free to contact us. We're here to help!
          </p>
          <p className="text-xl">Email: conference@sreenidhi.edu.in</p>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;