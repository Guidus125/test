export default function Education() {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Education & <span className="text-royal-purple">Qualifications</span>
          </h2>
          <div className="w-24 h-1 bg-royal-purple mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Current MSc */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-royal-purple">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-royal-purple-lightest p-3 rounded-lg mr-4">
                  <i className="fas fa-graduation-cap text-royal-purple text-xl"></i>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Research MSc</h3>
                  <p className="text-royal-purple font-medium">Maastricht University</p>
                </div>
              </div>
              <div className="text-gray-600 text-sm mb-3">Drug Development & Neurohealth | 2021 - 2023</div>
              <p className="text-gray-600 text-sm mb-4">
                Specialized program in Cognitive & Clinical Neuroscience, focusing on the intersection of neuropharmacology and therapeutic development.
              </p>
              <div className="bg-royal-purple-lightest text-royal-purple px-3 py-1 rounded-full text-sm font-medium inline-block">
                Current Program
              </div>
            </div>
          </div>

          {/* MSc Neuropharmacology */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-royal-purple-light">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-royal-purple-lightest p-3 rounded-lg mr-4">
                  <i className="fas fa-brain text-royal-purple text-xl"></i>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">MSc Neuropharmacology</h3>
                  <p className="text-royal-purple font-medium">University of Galway</p>
                </div>
              </div>
              <div className="text-gray-600 text-sm mb-3">First Class Honours (71%) | 2018 - 2019</div>
              <p className="text-gray-600 text-sm mb-4">
                Comprehensive study of psychiatric neuroscience and psychoactive substances, with extensive wet lab experience.
              </p>
              <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium inline-block">
                First Class Honours
              </div>
            </div>
          </div>

          {/* Business Foundation */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-royal-purple-light">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-royal-purple-lightest p-3 rounded-lg mr-4">
                  <i className="fas fa-briefcase text-royal-purple text-xl"></i>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">HBO-P Certification</h3>
                  <p className="text-royal-purple font-medium">Asian Trade Management</p>
                </div>
              </div>
              <div className="text-gray-600 text-sm mb-3">Business Foundation | International Trade</div>
              <p className="text-gray-600 text-sm mb-4">
                Foundational business education providing essential skills in international trade, cultural competency, and business communication.
              </p>
              <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium inline-block">
                Business Foundation
              </div>
            </div>
          </div>

          {/* Research Training */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-royal-purple-light">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-royal-purple-lightest p-3 rounded-lg mr-4">
                  <i className="fas fa-certificate text-royal-purple text-xl"></i>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Research Trainee Certificate</h3>
                  <p className="text-royal-purple font-medium">Erasmus University Rotterdam</p>
                </div>
              </div>
              <div className="text-gray-600 text-sm mb-3">Research Methods | 2018</div>
              <p className="text-gray-600 text-sm mb-4">
                Specialized training in research methodologies and scientific approaches to investigation.
              </p>
              <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium inline-block">
                Research Methods
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Core Competencies</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Business Skills */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                <i className="fas fa-chart-line text-royal-purple mr-2"></i>
                Business & Management
              </h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">International Trade</span>
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <div className="bg-royal-purple h-2 rounded-full" style={{ width: "90%" }}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Project Management</span>
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <div className="bg-royal-purple h-2 rounded-full" style={{ width: "85%" }}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Cultural Competency</span>
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <div className="bg-royal-purple h-2 rounded-full" style={{ width: "95%" }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Research Skills */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                <i className="fas fa-microscope text-royal-purple mr-2"></i>
                Research & Analysis
              </h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Data Analysis</span>
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <div className="bg-royal-purple h-2 rounded-full" style={{ width: "95%" }}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Statistical Methods</span>
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <div className="bg-royal-purple h-2 rounded-full" style={{ width: "90%" }}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Scientific Writing</span>
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <div className="bg-royal-purple h-2 rounded-full" style={{ width: "92%" }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Skills */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                <i className="fas fa-flask text-royal-purple mr-2"></i>
                Laboratory & Technical
              </h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Cell Culture</span>
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <div className="bg-royal-purple h-2 rounded-full" style={{ width: "90%" }}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Pharmacology</span>
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <div className="bg-royal-purple h-2 rounded-full" style={{ width: "95%" }}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Microscopy</span>
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <div className="bg-royal-purple h-2 rounded-full" style={{ width: "85%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
