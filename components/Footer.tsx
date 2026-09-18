import { Github, Linkedin, Mail, Instagram, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="border-t border-border">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-text mb-6">Let&apos;s Connect</h3>
            <p className="text-text-muted mb-8 max-w-md">
              Interested in collaborating? Have a project in mind? Feel free to reach out &mdash;
              I am always open to discussing new opportunities and ideas.
            </p>

            <div className="flex gap-4">
              <a
                href="https://github.com/pahleviii"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-border rounded-full hover:bg-surface transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} className="text-text-muted" />
              </a>
              <a
                href="https://www.linkedin.com/in/pahleviii"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-border rounded-full hover:bg-surface transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} className="text-text-muted" />
              </a>
              <a
                href="https://www.instagram.com/rezapahlevi1511"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-border rounded-full hover:bg-surface transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} className="text-text-muted" />
              </a>
              <a
                href="mailto:reza35553@gmail.com"
                className="p-3 border border-border rounded-full hover:bg-surface transition-colors"
                aria-label="Email"
              >
                <Mail size={20} className="text-text-muted" />
              </a>
              <a
                href="https://wa.me/6285748913967"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-border rounded-full hover:bg-surface transition-colors"
                aria-label="WhatsApp"
              >
                <Phone size={20} className="text-text-muted" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-text mb-6">Quick Links</h4>
            <div className="space-y-4">
              <a href="#about" className="block text-text-muted hover:text-text transition-colors">
                About
              </a>
              <a href="#skills" className="block text-text-muted hover:text-text transition-colors">
                Skills
              </a>
              <a href="#projects" className="block text-text-muted hover:text-text transition-colors">
                Projects
              </a>
              <a href="#contact" className="block text-text-muted hover:text-text transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-text-muted">
          <p>
            &copy; {currentYear} Reza Pahlevi. All rights reserved.
            <br className="sm:hidden" />
            <span className="hidden sm:inline"> &bull; </span>
            Built with Next.js &amp; Tailwind CSS. Hosted on Vercel.
          </p>
        </div>
      </div>
    </footer>
  );
}