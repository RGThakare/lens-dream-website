
import React from 'react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted');
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's <span className="text-amber-400">Connect</span>
          </h2>
          <p className="text-xl text-gray-300">
            Ready to capture your special moments? Let's discuss your vision.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-amber-400 font-semibold mb-2">Email</h4>
                <p className="text-gray-300">hello@lensart.com</p>
              </div>
              
              <div>
                <h4 className="text-amber-400 font-semibold mb-2">Phone</h4>
                <p className="text-gray-300">+1 (555) 123-4567</p>
              </div>
              
              <div>
                <h4 className="text-amber-400 font-semibold mb-2">Location</h4>
                <p className="text-gray-300">San Francisco, CA</p>
              </div>
              
              <div>
                <h4 className="text-amber-400 font-semibold mb-2">Response Time</h4>
                <p className="text-gray-300">Within 24 hours</p>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-amber-400 transition-colors"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-amber-400 transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-white font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-amber-400 transition-colors"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-amber-400 transition-colors"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-amber-400 text-black py-3 rounded-lg font-semibold hover:bg-amber-300 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
