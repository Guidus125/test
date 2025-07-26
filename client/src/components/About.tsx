export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About <span className="text-royal-purple">Me</span>
          </h2>
          <div className="w-24 h-1 bg-royal-purple mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Multidisciplinary Journey</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              My career represents a unique convergence of business acumen and scientific expertise. Starting with a foundation in Asian Trade Management (HBO-P certification), I developed essential business and intercultural communication skills that continue to inform my approach to research and collaboration.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              This business foundation led me to psychology, where I discovered my passion for understanding human behavior at its most fundamental levels. This fascination naturally evolved into neuropharmacology, where I now investigate the molecular mechanisms that drive behavior and therapeutic interventions.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Currently at the University of Florida, I specialize in behavioral pharmacology and drug development, with over 4 years of experience spanning multiple departments and research areas. My work bridges the gap between academic research and practical applications, always with an eye toward translating findings into real-world solutions.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-royal-purple mb-2">4+</div>
                <div className="text-gray-600">Years at UF</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-royal-purple mb-2">6+</div>
                <div className="text-gray-600">Publications</div>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-royal-purple-lightest p-6 rounded-lg">
              <h4 className="font-semibold text-royal-purple mb-2">
                <i className="fas fa-chart-line mr-2"></i>Business Foundation
              </h4>
              <p className="text-gray-600 text-sm">HBO-P Asian Trade Management certification providing essential business acumen and intercultural competency</p>
            </div>
            <div className="bg-royal-purple-lightest p-6 rounded-lg">
              <h4 className="font-semibold text-royal-purple mb-2">
                <i className="fas fa-brain mr-2"></i>Psychology Expertise
              </h4>
              <p className="text-gray-600 text-sm">Deep understanding of human behavior and psychological mechanisms informing research approach</p>
            </div>
            <div className="bg-royal-purple-lightest p-6 rounded-lg">
              <h4 className="font-semibold text-royal-purple mb-2">
                <i className="fas fa-flask mr-2"></i>Neuropharmacology Research
              </h4>
              <p className="text-gray-600 text-sm">Specialized expertise in behavioral pharmacology, drug development, and molecular mechanisms</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
