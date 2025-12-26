import Link from 'next/link'
import { Github, Linkedin, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">About</h3>
            <p className="text-body-sm leading-relaxed">
              Data & Software Developer building scalable, data-driven systems. 
              Based in <span className="font-medium text-gray-900 dark:text-white">Ontario, Canada</span>, 
              focused on delivering production-ready solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { href: '/about', label: 'About Me' },
                { href: '/projects', label: 'Projects' },
                { href: '/data-ml', label: 'Data & ML' },
                { href: '/resume', label: 'Resume' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-body-sm hover:text-accent transition-colors duration-200 inline-flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gray-400 group-hover:bg-accent transition-colors"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Connect</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-body-sm">
                <MapPin className="w-4 h-4 text-gray-500" />
                <span>Ontario, Canada</span>
              </div>
              <div className="flex items-center gap-3 mt-6">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800/50 transition-all duration-200 hover:scale-110 active:scale-95 border border-transparent hover:border-gray-300 dark:hover:border-gray-700"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800/50 transition-all duration-200 hover:scale-110 active:scale-95 border border-transparent hover:border-gray-300 dark:hover:border-gray-700"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                </a>
                <a
                  href="mailto:your.email@example.com"
                  className="p-2.5 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800/50 transition-all duration-200 hover:scale-110 active:scale-95 border border-transparent hover:border-gray-300 dark:hover:border-gray-700"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <p>&copy; {currentYear} Data & Software Developer. All rights reserved.</p>
            <p className="text-xs">
              Built with Next.js, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
