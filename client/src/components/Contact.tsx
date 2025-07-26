import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to send a message.",
        variant: "destructive"
      });
      return;
    }

    // In a real implementation, this would send the email
    toast({
      title: "Message sent successfully!",
      description: "Thank you for your interest. I'll get back to you soon.",
    });

    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-royal-purple">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let's <span className="text-royal-purple-lighter">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
          <p className="text-royal-purple-lighter mt-6 text-lg">
            Ready to discuss opportunities in neuropharmacology research, drug development, or interdisciplinary collaboration
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-white/10 p-3 rounded-lg">
                <i className="fas fa-envelope text-white text-xl"></i>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-royal-purple-lighter">huisman.g@ufl.edu</p>
                <a
                  href="mailto:huisman.g@ufl.edu"
                  className="text-white hover:text-royal-purple-lighter transition-colors text-sm"
                >
                  Send a message →
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-white/10 p-3 rounded-lg">
                <i className="fas fa-map-marker-alt text-white text-xl"></i>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Location</h3>
                <p className="text-royal-purple-lighter">Gainesville, Florida, United States</p>
                <p className="text-white text-sm">Open to remote and hybrid opportunities</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-white/10 p-3 rounded-lg">
                <i className="fab fa-linkedin text-white text-xl"></i>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">LinkedIn</h3>
                <p className="text-royal-purple-lighter">Connect with me professionally</p>
                <a
                  href="https://www.linkedin.com/in/guido-huisman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-royal-purple-lighter transition-colors text-sm"
                >
                  View Profile →
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-white/10 p-3 rounded-lg">
                <i className="fab fa-researchgate text-white text-xl"></i>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">ResearchGate</h3>
                <p className="text-royal-purple-lighter">View publications and research</p>
                <a
                  href="https://www.researchgate.net/profile/Guido-Huisman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-royal-purple-lighter transition-colors text-sm"
                >
                  View Profile →
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-colors"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-white font-medium mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-colors"
                  placeholder="What would you like to discuss?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-white text-royal-purple px-6 py-3 rounded-lg font-medium hover:bg-royal-purple-lighter hover:text-white transition-colors"
              >
                <i className="fas fa-paper-plane mr-2"></i>Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Download CV */}
        <div className="text-center mt-16">
          <a
            href="mailto:huisman.g@ufl.edu?subject=CV%20Request&body=Hello%20Guido,%0A%0AI%20would%20like%20to%20request%20a%20copy%20of%20your%20CV.%0A%0AThank%20you!"
            className="bg-white text-royal-purple px-8 py-4 rounded-lg font-medium hover:bg-royal-purple-lighter hover:text-white transition-colors inline-flex items-center"
          >
            <i className="fas fa-download mr-3"></i>Request Full CV
          </a>
        </div>
      </div>
    </section>
  );
}
