"use client";

import type React from "react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-20 bg-[#1E2840]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Left Column - Contact info */}
          <div className="text-white space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-white leading-snug">
                Get In Touch
              </h2>
              <p className="text-gray-400 mt-2">
                Let&apos;s Discuss How We Can Create Meaningful Growth Together
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-[#f7814b] font-semibold mb-2">Email</p>
                <a
                  href="mailto:info@ietmalaysia.com"
                  className="text-white hover:text-[#f7814b] transition-colors"
                >
                  info@ietmalaysia.com
                </a>
              </div>

              <div>
                <p className="text-[#f7814b] font-semibold mb-2">Phone</p>
                <a
                  href="tel:+60 12 3456 7890"
                  className="text-white hover:text-[#f7814b] transition-colors"
                >
                  +60 12 3456 7890
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full bg-[#2B3A57] border border-[#2B3A57] rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-[#f7814b] focus:outline-none"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full bg-[#2B3A57] border border-[#2B3A57] rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-[#f7814b] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-[#2B3A57] border border-[#2B3A57] rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-[#f7814b] focus:outline-none"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-[#2B3A57] border border-[#2B3A57] rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-[#f7814b] focus:outline-none"
                />
              </div>

              <input
                type="text"
                name="company"
                placeholder="Company Name"
                value={formData.company}
                onChange={handleChange}
                className="w-full bg-[#2B3A57] border border-[#2B3A57] rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-[#f7814b] focus:outline-none"
              />

              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-[#2B3A57] border border-[#2B3A57] rounded-lg px-4 py-3 text-white focus:border-[#f7814b] focus:outline-none cursor-pointer appearance-none bg-no-repeat bg-[length:16px] bg-[right_0.75rem_center]"
                style={{
                  color: formData.subject ? "#fff" : "#9ca3af",
                  backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%239ca3af' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")",
                }}
              >
                <option value="" disabled>
                  Select subject
                </option>
                <option value="Consultation">Consultation</option>
                <option value="Project Inquiry">Project Inquiry</option>
                <option value="Partnership">Partnership</option>
                <option value="Other">Other</option>
              </select>

              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full bg-[#2B3A57] border border-[#2B3A57] rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-[#f7814b] focus:outline-none resize-none"
              />

              <button
                type="submit"
                className="w-full bg-[#f7814b] text-[#0a1628] px-6 py-3 rounded-lg font-semibold hover:bg-[#e06d3a] transition-colors"
              >
                Send Message
              </button>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
