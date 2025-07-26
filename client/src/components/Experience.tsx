export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Professional <span className="text-royal-purple">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-royal-purple mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-royal-purple-lighter"></div>

          {/* Experience items */}
          <div className="space-y-12">
            {/* Current Position */}
            <div className="relative flex items-center justify-between">
              <div className="w-5/12">
                <div className="bg-white border-2 border-royal-purple rounded-xl p-6 shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="bg-royal-purple-lightest p-2 rounded-lg mr-4">
                      <i className="fas fa-university text-royal-purple"></i>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Associate Researcher</h3>
                      <p className="text-royal-purple font-medium">University of Florida</p>
                    </div>
                  </div>
                  <div className="text-gray-600 text-sm mb-3">College of Medicine | 2023 - Present</div>
                  <p className="text-gray-600 text-sm mb-4">
                    Working in Dr. Adriaan Bruijnzeel's lab, designing and conducting behavioral pharmacology studies with rodents. Managing volunteer students and contributing to research on substance abuse treatments.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-royal-purple-lightest text-royal-purple px-2 py-1 rounded text-xs">Behavioral Pharmacology</span>
                    <span className="bg-royal-purple-lightest text-royal-purple px-2 py-1 rounded text-xs">Team Management</span>
                  </div>
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-royal-purple rounded-full border-4 border-white shadow"></div>
              <div className="w-5/12 text-right">
                <div className="bg-royal-purple-lightest text-royal-purple px-4 py-2 rounded-full text-sm font-medium inline-block">
                  Current Position
                </div>
              </div>
            </div>

            {/* Previous Position */}
            <div className="relative flex items-center justify-between">
              <div className="w-5/12 text-right">
                <div className="bg-gray-50 px-4 py-2 rounded-full text-sm font-medium text-gray-600 inline-block">
                  2021 - 2023
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-royal-purple-light rounded-full border-4 border-white shadow"></div>
              <div className="w-5/12">
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="bg-royal-purple-lightest p-2 rounded-lg mr-4">
                      <i className="fas fa-flask text-royal-purple"></i>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Associate Researcher</h3>
                      <p className="text-royal-purple font-medium">University of Florida</p>
                    </div>
                  </div>
                  <div className="text-gray-600 text-sm mb-3">College of Pharmacy | 2 years</div>
                  <p className="text-gray-600 text-sm mb-4">
                    Worked in Dr. Christopher McCurdy's lab specializing in pre-clinical drug development. Gained interdisciplinary experience across medicinal chemistry, pharmacodynamics, and toxicology.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-royal-purple-lightest text-royal-purple px-2 py-1 rounded text-xs">Drug Development</span>
                    <span className="bg-royal-purple-lightest text-royal-purple px-2 py-1 rounded text-xs">Cell Culture</span>
                  </div>
                </div>
              </div>
            </div>

            {/* OPEN Foundation */}
            <div className="relative flex items-center justify-between">
              <div className="w-5/12">
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="bg-royal-purple-lightest p-2 rounded-lg mr-4">
                      <i className="fas fa-users text-royal-purple"></i>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Team Lead & Volunteer</h3>
                      <p className="text-royal-purple font-medium">OPEN Foundation</p>
                    </div>
                  </div>
                  <div className="text-gray-600 text-sm mb-3">2019 - 2021 | 2 years 4 months</div>
                  <p className="text-gray-600 text-sm mb-4">
                    Led organization of ICPR2020 conference and served as newstracker, advancing scientific research on psychedelics through academic events and communications.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-royal-purple-lightest text-royal-purple px-2 py-1 rounded text-xs">Event Management</span>
                    <span className="bg-royal-purple-lightest text-royal-purple px-2 py-1 rounded text-xs">Research Communication</span>
                  </div>
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-royal-purple-light rounded-full border-4 border-white shadow"></div>
              <div className="w-5/12 text-right">
                <div className="bg-gray-50 px-4 py-2 rounded-full text-sm font-medium text-gray-600 inline-block">
                  Voluntary Leadership
                </div>
              </div>
            </div>

            {/* MSc Internship */}
            <div className="relative flex items-center justify-between">
              <div className="w-5/12 text-right">
                <div className="bg-gray-50 px-4 py-2 rounded-full text-sm font-medium text-gray-600 inline-block">
                  2018 - 2019
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-royal-purple-light rounded-full border-4 border-white shadow"></div>
              <div className="w-5/12">
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="bg-royal-purple-lightest p-2 rounded-lg mr-4">
                      <i className="fas fa-microscope text-royal-purple"></i>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">MSc Intern</h3>
                      <p className="text-royal-purple font-medium">University of Galway</p>
                    </div>
                  </div>
                  <div className="text-gray-600 text-sm mb-3">Ireland | 1 year 1 month</div>
                  <p className="text-gray-600 text-sm mb-4">
                    Conducted thesis research on TNF-α mediated chronic pain modeling using F11 cell lines, gaining expertise in cell culture and imaging techniques.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-royal-purple-lightest text-royal-purple px-2 py-1 rounded text-xs">Cell Culture</span>
                    <span className="bg-royal-purple-lightest text-royal-purple px-2 py-1 rounded text-xs">Microscopy</span>
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
