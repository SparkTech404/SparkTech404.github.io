"use client";

import React from "react";
import { Sparkles, Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { Twitter, Linkedin, Github, Instagram } from "@/components/icons/SocialIcons";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative z-10 bg-slate-950/90 border-t border-white/10 pt-16 pb-12 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-gradient-to-t from-blue-600/10 via-purple-600/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/30">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Spark Tech <span className="text-cyan-400 font-light">Web Solution</span>
              </span>
            </Link>
            <p className="text-sm font-semibold text-gradient tracking-wide">
              Empowering Your Digital Future
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              We deliver secure, scalable, and modern digital solutions designed to accelerate business growth and maximize online presence.
            </p>
            {/* <div className="flex items-center gap-3 pt-2">
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
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-200"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div> */}
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-base tracking-wide border-b border-white/10 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Our Services", href: "/services" },
                { name: "Development Process", href: "/process" },
                { name: "FAQ", href: "/faq" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-cyan-400 transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-base tracking-wide border-b border-white/10 pb-2">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                "Website Development",
                "Landing Page Development",
                "Web Application Development",
                "UI/UX Design",
                "SEO Optimization",
                "Website Maintenance",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-slate-400 hover:text-cyan-400 transition-colors duration-200 block truncate"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-base tracking-wide border-b border-white/10 pb-2">
              Contact Information
            </h3>
            <ul className="space-y-3.5 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs text-slate-500 uppercase font-bold tracking-wider">
                    Phone
                  </span>
                  <a
                    href="https://wa.me/917060675133?text=Hello%20Spark%20Tech%20Web%20Solution%2C%20I%20am%20interested%20in%20your%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-emerald-400 font-medium transition-colors break-all block"
                  >
                    +91 7060675133 (WhatsApp Chat)
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs text-slate-500 uppercase font-bold tracking-wider">
                    Email
                  </span>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=sparktech1404@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan-400 font-medium transition-colors break-all"
                  >
                    sparktech1404@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs text-slate-500 uppercase font-bold tracking-wider">
                    Location
                  </span>
                  <span className="text-slate-400">
                    Digital First Software Agency (Global Service)
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; 2026 <span className="text-slate-300 font-medium">Spark Tech Web Solution</span>. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
