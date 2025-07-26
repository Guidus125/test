export default function Publications() {
  return (
    <section id="publications" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Publications & <span className="text-royal-purple">Research</span>
          </h2>
          <div className="w-24 h-1 bg-royal-purple mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Featured Publication */}
          <div className="md:col-span-2 bg-white rounded-xl shadow-lg overflow-hidden border-l-4 border-royal-purple">
            <div className="p-8">
              <div className="flex items-start justify-between mb-4">
                <div className="bg-royal-purple-lighter text-royal-purple px-3 py-1 rounded-full text-sm font-medium">
                  Featured Publication
                </div>
                <div className="text-gray-500 text-sm">July 2023</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Examining the Psychoactive Differences between Kratom Strains
              </h3>
              <p className="text-gray-600 mb-4">
                <strong>Authors:</strong> Guido Huisman, Maximilian Menke, Oliver Grundmann, Rudy Schreiber, Natasha Mason
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Published in the International Journal of Environmental Research and Public Health. This study investigated whether differently colored kratom products can induce distinct effects as reported by users, analyzing 644 current kratom users and alkaloid content analysis.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-royal-purple-lightest text-royal-purple px-3 py-1 rounded-full text-sm">Psychopharmacology</span>
                <span className="bg-royal-purple-lightest text-royal-purple px-3 py-1 rounded-full text-sm">Survey Research</span>
                <span className="bg-royal-purple-lightest text-royal-purple px-3 py-1 rounded-full text-sm">Alkaloid Analysis</span>
              </div>
              <div className="flex gap-4">
                <a
                  href="https://doi.org/10.3390/ijerph20146425"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-royal-purple text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-royal-purple-light transition-colors"
                >
                  <i className="fas fa-external-link-alt mr-2"></i>View Publication
                </a>
                <div className="flex items-center text-gray-600 text-sm">
                  <i className="fas fa-quote-left mr-2"></i>6 Citations | 3,828 Reads
                </div>
              </div>
            </div>
          </div>

          {/* MSc Thesis */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="bg-royal-purple-lighter text-royal-purple px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                MSc Thesis
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Modelling TNF-α mediated chronic pain in the F11 cell line
              </h3>
              <p className="text-gray-600 mb-4">
                University of Galway | First Class Honours (71%)
              </p>
              <p className="text-gray-600 mb-6 text-sm">
                Investigated chronic pain mechanisms using cell culture techniques, calcium imaging, and fluorescence microscopy in F11 neuronal cell lines.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-royal-purple-lightest text-royal-purple px-2 py-1 rounded text-xs">Cell Culture</span>
                <span className="bg-royal-purple-lightest text-royal-purple px-2 py-1 rounded text-xs">Calcium Imaging</span>
                <span className="bg-royal-purple-lightest text-royal-purple px-2 py-1 rounded text-xs">Pain Research</span>
              </div>
            </div>
          </div>

          {/* Conference Presentations */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="bg-royal-purple-lighter text-royal-purple px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                Conference Work
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                ICPR2020 Team Lead
              </h3>
              <p className="text-gray-600 mb-4">
                OPEN Foundation | January - November 2020
              </p>
              <p className="text-gray-600 mb-6 text-sm">
                Led organization of international conference on psychedelic research, managing marketing, finance, PR communications, and event management.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-royal-purple-lightest text-royal-purple px-2 py-1 rounded text-xs">Event Management</span>
                <span className="bg-royal-purple-lightest text-royal-purple px-2 py-1 rounded text-xs">Research Communication</span>
              </div>
            </div>
          </div>
        </div>

        {/* Research Interests */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Research Interests</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-royal-purple-lightest w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-pills text-royal-purple text-2xl"></i>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Drug Development</h4>
              <p className="text-gray-600 text-sm">Pre-clinical development of novel treatments for pain and substance abuse disorders</p>
            </div>
            <div className="text-center">
              <div className="bg-royal-purple-lightest w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-brain text-royal-purple text-2xl"></i>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Behavioral Pharmacology</h4>
              <p className="text-gray-600 text-sm">Studying drug effects on behavior using rodent models and cellular assays</p>
            </div>
            <div className="text-center">
              <div className="bg-royal-purple-lightest w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-chart-bar text-royal-purple text-2xl"></i>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Data Analysis</h4>
              <p className="text-gray-600 text-sm">Statistical analysis and interpretation of complex pharmacological datasets</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
