export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-royal-purple-lighter">GH</span>
              <span className="ml-2 text-gray-300">Guido Huisman</span>
            </div>
            <p className="text-gray-400 mt-2">Neuropharmacology Researcher & Business Professional</p>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://www.linkedin.com/in/guido-huisman"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-royal-purple-lighter transition-colors"
            >
              <i className="fab fa-linkedin text-xl"></i>
            </a>
            <a
              href="https://www.researchgate.net/profile/Guido-Huisman"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-royal-purple-lighter transition-colors"
            >
              <i className="fab fa-researchgate text-xl"></i>
            </a>
            <a
              href="mailto:huisman.g@ufl.edu"
              className="text-gray-400 hover:text-royal-purple-lighter transition-colors"
            >
              <i className="fas fa-envelope text-xl"></i>
            </a>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Guido Huisman. All rights reserved. | Built with passion for scientific advancement.
          </p>
        </div>
      </div>
    </footer>
  );
}
