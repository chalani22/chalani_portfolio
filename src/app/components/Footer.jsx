import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#121212] border-t border-[#33353F] text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo/Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-800 to-green-600 ">
              CHALANI NADEESHA
            </h3>
            <p className="text-[#ADB7BE] text-sm leading-relaxed">
              AI Engineer & Software Developer passionate about creating innovative solutions 
              that bridge technology and user experience. Always exploring the latest in AI 
              and web technologies.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="https://x.com/ChalaniNad59157" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ADB7BE] hover:text-white transition-colors duration-300 hover:scale-110 transform"
                aria-label="Twitter"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26L22.5 21.75h-6.422l-4.916-6.455-5.63 6.455H2.223l7.694-8.82L1.5 2.25h6.594l4.457 5.946L18.244 2.25zM17.16 19.5h1.833L7.005 4.5H5.04l12.12 15z"/>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/chalani-nadeesha-b384b1249/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ADB7BE] hover:text-white transition-colors duration-300 hover:scale-110 transform"
                aria-label="LinkedIn"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="https://github.com/chalani22"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ADB7BE] hover:text-white transition-colors duration-300 hover:scale-110 transform"
                aria-label="GitHub"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/_.chalanyy._?igsh=ZXN6b2YwY2wyZWl0" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ADB7BE] hover:text-white transition-colors duration-300 hover:scale-110 transform"
                aria-label="Instagram"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <nav className="flex flex-col space-y-3">
              <a 
                href="#about" 
                className="text-[#ADB7BE] hover:text-white transition-colors duration-300 hover:translate-x-1 transform"
              >
                About Me
              </a>
              <a 
                href="#skills" 
                className="text-[#ADB7BE] hover:text-white transition-colors duration-300 hover:translate-x-1 transform"
              >
                Skills & Technologies
              </a>
              <a 
                href="#projects" 
                className="text-[#ADB7BE] hover:text-white transition-colors duration-300 hover:translate-x-1 transform"
              >
                Projects & Portfolio
              </a>
              <a 
                href="#contact" 
                className="text-[#ADB7BE] hover:text-white transition-colors duration-300 hover:translate-x-1 transform"
              >
                Get In Touch
              </a>
            </nav>
          </div>

          {/* Contact Info & Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <svg className="h-4 w-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                <span className="text-[#ADB7BE]">chalaninadeesha2345@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="h-4 w-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
                <span className="text-[#ADB7BE]">Colombo, Sri Lanka</span>
              </div>
            </div>
            
            {/* Newsletter Signup */}
            <div className="mt-6">
              <h5 className="text-sm font-semibold text-white mb-3">Stay Updated</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-[#1a1a1a] border border-[#333] rounded-l-md text-white text-sm focus:outline-none focus:border-green-800 transition-colors"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-r-md hover:from-green-900 hover:to-green-700 transition-all duration-300 text-sm font-medium">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-[#ADB7BE] mt-2">
                Get updates on new projects and tech insights
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-[#33353F] pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-[#ADB7BE] text-sm">
                © {new Date().getFullYear()} Chalani Nadeesha. All rights reserved.
              </p>
              <p className="text-[#ADB7BE] text-xs mt-1">
                Built with 💚🐨 using Next.js, React & Tailwind CSS
              </p>
            </div>

            {/* Additional Links */}
            <div className="flex space-x-6 text-xs">
              <a 
                href="/privacy" 
                className="text-[#ADB7BE] hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a 
                href="/terms" 
                className="text-[#ADB7BE] hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </a>
              <a 
                href="/sitemap" 
                className="text-[#ADB7BE] hover:text-white transition-colors duration-300"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;