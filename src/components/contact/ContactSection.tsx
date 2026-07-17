"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ChevronDown,
} from "lucide-react";
import { Twitter, Linkedin, Github, Instagram } from "@/components/icons/SocialIcons";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Website Development",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);

  const serviceOptions = [
    "Website Development",
    "Landing Page Development",
    "Web Application Development",
    "UI/UX Design",
    "Website Maintenance",
    "SEO Optimization",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      // Append Web3Forms access key and settings
      const payload = {
        ...formData,
        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "46e5c165-5f74-4741-b028-bd8f06064908", 
        subject: `New Project Inquiry from ${formData.name}`,
        from_name: "Spark Tech Web Solution Portal",
      };

      if (!payload.access_key) {
        throw new Error("Web3Forms access key is missing. Please configure it in your environment variables.");
      }

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Failed to submit message.");
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "Website Development",
        message: "",
      });
    } catch (err: unknown) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "An error occurred while sending your message.");
    }
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Ambient Lighting */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs sm:text-sm font-semibold tracking-wide mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Connect With Us</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            Let&apos;s Build Your <span className="text-gradient">Next Big Project</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg leading-relaxed mt-4"
          >
            Reach out to discuss your software architecture, landing page conversion targets, or full-stack web application.
          </motion.p>
        </div>

        {/* Contact Bento Grid Card Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Glass Card: Contact Info & Google Maps Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 glass-card p-8 sm:p-10 flex flex-col justify-between bg-gradient-to-br from-slate-900/90 via-slate-950/90 to-blue-950/30 border border-white/10 shadow-2xl relative overflow-hidden"
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 block mb-2">
                Agency Headquarters
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-6">
                Spark Tech Web Solution
              </h3>

              <div className="space-y-6">
                <a
                  href="https://wa.me/917060675133?text=Hello%20Spark%20Tech%20Web%20Solution%2C%20I%20am%20interested%20in%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-left flex items-start gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all group focus:outline-none break-all"
                >
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 group-hover:scale-110 transition-transform flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block">
                      Direct WhatsApp & Phone
                    </span>
                    <span className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                      +91 7060675133
                    </span>
                    <span className="block text-xs text-slate-400 mt-0.5">
                      Mon-Sat: 9 AM - 8 PM IST (Click for WhatsApp)
                    </span>
                  </div>
                </a>

                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=sparktech1404@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all group break-all"
                >
                  <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 group-hover:scale-110 transition-transform flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block">
                      Direct Email
                    </span>
                    <span className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      sparktech1404@gmail.com
                    </span>
                    <span className="block text-xs text-slate-400 mt-0.5">
                      24/7 Response Guaranteed
                    </span>
                  </div>
                </a>

                {/* Google Maps Styled Interactive Placeholder */}
                <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/10 relative overflow-hidden group/map">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-cyan-400" />
                      <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                        Global Digital Presence
                      </span>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                  
                  {/* Map Visual Simulation */}
                  <div className="w-full h-36 rounded-xl bg-gradient-to-tr from-slate-950 via-slate-900 to-blue-950 border border-white/10 flex flex-col items-center justify-center relative overflow-hidden">
                    {/* Grid Pattern */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:16px_16px] opacity-40" />
                    <div className="absolute inset-0 bg-radial-gradient opacity-60" />

                    <div className="relative z-10 flex flex-col items-center text-center p-2">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-500 p-0.5 shadow-lg shadow-blue-500/40 flex items-center justify-center mb-2 animate-bounce">
                        <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center">
                          <MapPin className="w-5 h-5 text-cyan-400" />
                        </div>
                      </div>
                      <span className="text-xs font-bold text-white tracking-wide">
                        Remote First Software Agency
                      </span>
                      <span className="text-[11px] text-slate-400">
                        Serving clients globally across US, UK, EU & India
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3">
                Follow Our Social Networks
              </span>
              <div className="flex items-center gap-3">
                {[
                  { icon: Twitter, label: "Twitter", href: "#" },
                  { icon: Linkedin, label: "LinkedIn", href: "#" },
                  { icon: Github, label: "GitHub", href: "#" },
                  { icon: Instagram, label: "Instagram", href: "#" },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    aria-label={social.label}
                    className="flex-1 py-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-gradient-to-br hover:from-blue-600/20 hover:to-purple-600/20 hover:border-cyan-500/50 transition-all duration-200"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Glass Card: Interactive Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-card p-8 sm:p-10 bg-gradient-to-br from-slate-900/90 via-slate-950/90 to-purple-950/30 border border-white/10 shadow-2xl relative"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              Send Us a Message
            </h3>
            <p className="text-slate-400 text-sm sm:text-base mb-8">
              Fill out the form below and our lead engineer will respond within 2 business hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3.5 glass-input text-white placeholder-slate-500 text-sm focus:border-cyan-400 transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3.5 glass-input text-white placeholder-slate-500 text-sm focus:border-cyan-400 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 7060675133"
                    className="w-full px-4 py-3.5 glass-input text-white placeholder-slate-500 text-sm focus:border-cyan-400 transition-all"
                  />
                </div>

                {/* Service Dropdown */}
                <div className="relative">
                  <label htmlFor="service" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Required Service
                  </label>

                  {/* Backdrop to close when clicking outside */}
                  {serviceDropdownOpen && (
                    <div
                      className="fixed inset-0 z-30"
                      onClick={() => setServiceDropdownOpen(false)}
                    />
                  )}

                  <button
                    type="button"
                    onClick={() => setServiceDropdownOpen(!serviceDropdownOpen)}
                    className="w-full px-4 py-3.5 glass-input text-white bg-slate-900/90 text-sm focus:border-cyan-400 transition-all flex items-center justify-between text-left relative z-40 border border-white/10 hover:border-cyan-400/50"
                  >
                    <span className="font-semibold text-slate-100">{formData.service}</span>
                    <ChevronDown className={`w-4 h-4 text-cyan-400 transition-transform duration-200 ${serviceDropdownOpen ? "rotate-180" : ""}`} />
                  </button>

                  <AnimatePresence>
                    {serviceDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.98 }}
                        transition={{ duration: 0.15 }}
                        className="absolute z-50 left-0 right-0 mt-2 bg-slate-950/95 backdrop-blur-2xl border border-cyan-500/30 rounded-2xl shadow-2xl shadow-cyan-950/50 overflow-hidden py-2 max-h-60 overflow-y-auto ring-1 ring-white/10"
                      >
                        {serviceOptions.map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => {
                              setFormData((prev) => ({ ...prev, service: opt }));
                              setServiceDropdownOpen(false);
                            }}
                            className={`w-full px-4 py-3 text-left text-sm flex items-center justify-between transition-all ${
                              formData.service === opt
                                ? "bg-gradient-to-r from-blue-600/30 to-cyan-500/20 text-cyan-300 font-bold border-l-4 border-cyan-400"
                                : "text-slate-300 hover:bg-white/10 hover:text-white"
                            }`}
                          >
                            <span>{opt}</span>
                            {formData.service === opt && <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  Project Details or Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your requirements, goals, timeline, and server specifications..."
                  className="w-full px-4 py-3.5 glass-input text-white placeholder-slate-500 text-sm focus:border-cyan-400 transition-all resize-none"
                />
              </div>

              {/* Status Notifications */}
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-sm flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block">Message Sent Successfully!</span>
                    <span>Thank you for contacting Spark Tech Web Solution. Our engineering team will get in touch with you shortly.</span>
                  </div>
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-300 text-sm flex items-start gap-3"
                >
                  <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block">Failed to Send Message</span>
                    <span>{errorMessage || "Please try submitting again or call +91 7060675133 directly."}</span>
                  </div>
                </motion.div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-4 px-8 rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-base shadow-lg shadow-blue-500/30 hover:shadow-cyan-500/40 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2 group/btn"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Sending Project Details...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Inquiry</span>
                    <Send className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
