
import React, { useState } from "react";

const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="container mx-auto py-16">
      <h2 className="text-3xl font-bold text-primary mb-8">Contact</h2>
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <form
          className="bg-white bg-opacity-95 rounded-xl shadow-lg p-8 flex-1 mb-8 md:mb-0 animate-fade-in"
          onSubmit={e => {
            e.preventDefault();
            setSubmitted(true);
            setTimeout(() => setSubmitted(false), 3000);
          }}
        >
          <div className="mb-5">
            <label className="block text-primary-dark font-semibold mb-2">Name</label>
            <input required className="w-full px-4 py-2 rounded-lg border border-primary/30 focus:border-primary outline-none transition"
              type="text" name="name" />
          </div>
          <div className="mb-5">
            <label className="block text-primary-dark font-semibold mb-2">Email</label>
            <input required className="w-full px-4 py-2 rounded-lg border border-primary/30 focus:border-primary outline-none transition"
              type="email" name="email" />
          </div>
          <div className="mb-6">
            <label className="block text-primary-dark font-semibold mb-2">Message</label>
            <textarea required rows={4} className="w-full px-4 py-2 rounded-lg border border-primary/30 focus:border-primary outline-none transition resize-none"
              name="message" />
          </div>
          <button
            type="submit"
            className="bg-primary text-white font-semibold px-7 py-3 rounded-full shadow transition-all duration-300 hover:scale-110 focus:scale-105 focus:outline-none"
          >
            {submitted ? "Thank you!" : "Send Message"}
          </button>
          {submitted && <p className="text-green-600 mt-4">Your message was sent (demo only).</p>}
        </form>
        <div className="flex-1 flex flex-col gap-6 animate-fade-in">
          <div>
            <span className="block font-semibold text-xl text-primary-dark mb-2">Email</span>
            <a href="mailto:siddhartha.subudhi5@gmail.com" className="text-primary underline hover:text-primary-light">siddhartha.subudhi5@gmail.com</a>
          </div>
          <div>
            <span className="block font-semibold text-xl text-primary-dark mb-2">Phone</span>
            <a href="tel:+917008171609" className="text-primary underline hover:text-primary-light">+91-7008171609</a>
          </div>
          <div>
            <span className="block font-semibold text-xl text-primary-dark mb-2">Location</span>
            <span>Bhubaneswar, Odisha, India</span>
            {/* Embedded Map for location, shown below */}
            <iframe
              title="Bhubaneswar Map"
              src="https://maps.google.com/maps?q=Bhubaneswar%20Odisha%20India&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="160"
              allowFullScreen
              loading="lazy"
              className="mt-3 rounded-lg border border-gray-200 shadow"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
