export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const targetPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-royal-purple-lightest to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-block bg-royal-purple-lighter text-royal-purple px-4 py-2 rounded-full text-sm font-medium mb-6">
              <i className="fas fa-flask mr-2"></i>Neuropharmacology Researcher
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Guido <span className="text-royal-purple">Huisman</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Bridging neuropharmacology research with business acumen. Specialized in behavioral pharmacology, drug development, and translating complex scientific findings into actionable insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-royal-purple text-white px-6 py-3 rounded-lg font-medium hover:bg-royal-purple-light transition-colors text-center"
              >
                <i className="fas fa-envelope mr-2"></i>Contact Me
              </button>
              <button
                onClick={() => scrollToSection("publications")}
                className="border-2 border-royal-purple text-royal-purple px-6 py-3 rounded-lg font-medium hover:bg-royal-purple hover:text-white transition-colors text-center"
              >
                <i className="fas fa-file-alt mr-2"></i>View Publications
              </button>
            </div>
            <div className="flex gap-6 mt-8">
              <a
                href="https://www.linkedin.com/in/guido-huisman"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-royal-purple transition-colors"
              >
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
              <a
                href="https://www.researchgate.net/profile/Guido-Huisman"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-royal-purple transition-colors"
              >
                <i className="fab fa-researchgate text-2xl"></i>
              </a>
              <a
                href="mailto:huisman.g@ufl.edu"
                className="text-gray-600 hover:text-royal-purple transition-colors"
              >
                <i className="fas fa-envelope text-2xl"></i>
              </a>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full border-4 border-royal-purple shadow-2xl overflow-hidden">
                <img
                  src="data:image/jpeg;base64,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"
                  alt="Guido Huisman"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-royal-purple text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg">
                <i className="fas fa-microscope text-2xl"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
