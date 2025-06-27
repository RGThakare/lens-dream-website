
import React from 'react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted');
  };

  return (
    <section id="contact" className="py-20 bg-stone-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-stone-800 mb-4">
            Let's <span className="font-medium">Connect</span>
          </h2>
          <p className="text-xl text-stone-600 font-light">
            Ready to tell your love story? We'd love to hear about your special day.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-light text-stone-800 mb-6">Get in Touch</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-stone-700 font-medium mb-2">Email</h4>
                <p className="text-stone-600 font-light">hello@weddinglens.com</p>
              </div>
              
              <div>
                <h4 className="text-stone-700 font-medium mb-2">Phone</h4>
                <p className="text-stone-600 font-light">+1 (555) 123-4567</p>
              </div>
              
              <div>
                <h4 className="text-stone-700 font-medium mb-2">Location</h4>
                <p className="text-stone-600 font-light">Available Nationwide</p>
              </div>
              
              <div>
                <h4 className="text-stone-700 font-medium mb-2">Response Time</h4>
                <p className="text-stone-600 font-light">Within 24 hours</p>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-stone-700 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 bg-stone-50 border border-stone-300 text-stone-800 focus:outline-none focus:border-stone-500 transition-colors font-light"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-stone-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 bg-stone-50 border border-stone-300 text-stone-800 focus:outline-none focus:border-stone-500 transition-colors font-light"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="wedding-date" className="block text-stone-700 font-medium mb-2">
                  Wedding Date
                </label>
                <input
                  type="date"
                  id="wedding-date"
                  className="w-full px-4 py-3 bg-stone-50 border border-stone-300 text-stone-800 focus:outline-none focus:border-stone-500 transition-colors font-light"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-stone-700 font-medium mb-2">
                  Tell us about your wedding
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-stone-50 border border-stone-300 text-stone-800 focus:outline-none focus:border-stone-500 transition-colors font-light"
                  placeholder="Share details about your special day..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-stone-700 text-stone-50 py-3 font-light hover:bg-stone-800 transition-colors duration-300"
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
