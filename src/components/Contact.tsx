
import React from 'react';
import { Instagram } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted');
  };

  return (
    <section id="contact" className="py-20 bg-stone-100 relative">
      {/* Traditional border pattern */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-500 via-red-500 to-amber-500"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="mb-6">
            <div className="text-4xl mb-2">🙏</div>
            <p className="text-amber-600 font-light tracking-wider">संपर्क</p>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-light text-stone-800 mb-4">
            Let's <span className="font-medium text-amber-700">Connect</span>
          </h2>
          <p className="text-xl text-stone-600 font-light">
            Ready to preserve your sacred Maharashtrian wedding traditions? We'd love to hear about your special day.
          </p>
          <p className="text-stone-500 text-sm mt-2 italic">
            "शुभ विवाह" - Auspicious Wedding Blessings
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="relative">
            {/* Traditional decorations */}
            <div className="absolute -top-4 -left-4 text-amber-500 text-2xl opacity-40">
              ✨
            </div>
            
            <h3 className="text-2xl font-light text-stone-800 mb-6 flex items-center">
              <span className="mr-3">📞</span>
              Get in Touch
            </h3>
            
            <div className="space-y-6">
              <div className="bg-stone-50 p-4 rounded border-l-4 border-amber-500">
                <h4 className="text-stone-700 font-medium mb-2 flex items-center">
                  <span className="mr-2">📧</span>
                  Email
                </h4>
                <p className="text-stone-600 font-light">hello@weddinglens.com</p>
              </div>
              
              <div className="bg-stone-50 p-4 rounded border-l-4 border-red-500">
                <h4 className="text-stone-700 font-medium mb-2 flex items-center">
                  <span className="mr-2">📱</span>
                  Phone
                </h4>
                <p className="text-stone-600 font-light">+1 (555) 123-4567</p>
              </div>
              
              <div className="bg-stone-50 p-4 rounded border-l-4 border-amber-500">
                <h4 className="text-stone-700 font-medium mb-2 flex items-center">
                  <Instagram className="mr-2" size={16} />
                  Instagram
                </h4>
                <a 
                  href="https://instagram.com/weddinglens_photography" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-stone-600 font-light hover:text-amber-600 transition-colors"
                >
                  @weddinglens_photography
                </a>
              </div>
              
              <div className="bg-stone-50 p-4 rounded border-l-4 border-red-500">
                <h4 className="text-stone-700 font-medium mb-2 flex items-center">
                  <span className="mr-2">📍</span>
                  Location
                </h4>
                <p className="text-stone-600 font-light">Maharashtra & Pan-India</p>
              </div>
              
              <div className="bg-stone-50 p-4 rounded border-l-4 border-amber-500">
                <h4 className="text-stone-700 font-medium mb-2 flex items-center">
                  <span className="mr-2">⏰</span>
                  Response Time
                </h4>
                <p className="text-stone-600 font-light">Within 24 hours</p>
              </div>
            </div>

            <div className="mt-6 bg-gradient-to-r from-amber-50 to-orange-50 p-4 rounded text-center">
              <div className="text-2xl mb-2">🌺</div>
              <p className="text-stone-700 font-light italic">
                "आपले स्वागत आहे"
              </p>
              <p className="text-stone-600 text-sm">
                You are always welcome
              </p>
            </div>
          </div>

          <div className="relative">
            {/* Traditional decorations */}
            <div className="absolute -top-4 -right-4 text-red-500 text-2xl opacity-40">
              🌺
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-stone-700 font-medium mb-2">
                  नाव / Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 bg-stone-50 border border-stone-300 text-stone-800 focus:outline-none focus:border-amber-500 transition-colors font-light rounded"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-stone-700 font-medium mb-2">
                  ईमेल / Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 bg-stone-50 border border-stone-300 text-stone-800 focus:outline-none focus:border-amber-500 transition-colors font-light rounded"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="wedding-date" className="block text-stone-700 font-medium mb-2">
                  विवाह दिनांक / Wedding Date
                </label>
                <input
                  type="date"
                  id="wedding-date"
                  className="w-full px-4 py-3 bg-stone-50 border border-stone-300 text-stone-800 focus:outline-none focus:border-amber-500 transition-colors font-light rounded"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-stone-700 font-medium mb-2">
                  आपल्या विवाहाबद्दल सांगा / Tell us about your wedding
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-stone-50 border border-stone-300 text-stone-800 focus:outline-none focus:border-amber-500 transition-colors font-light rounded"
                  placeholder="Share details about your special day, rituals you want captured, venue details..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-600 to-amber-700 text-stone-50 py-3 font-light hover:from-amber-700 hover:to-amber-800 transition-all duration-300 rounded shadow-lg flex items-center justify-center space-x-2"
              >
                <span>🌺</span>
                <span>Send Message</span>
                <span>🙏</span>
              </button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Bottom decorative border */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-500 via-red-500 to-amber-500"></div>
    </section>
  );
};

export default Contact;
