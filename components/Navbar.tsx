'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import SiriFinanceLogo from './SiriFinanceLogo'

const navLinks = [
  { href: '/loans', label: 'Loan Offers' },
  { href: '/emi-calculator', label: 'EMI Calculator' },
  { href: '/apply', label: 'Apply Now' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" onClick={() => setIsOpen(false)}>
              <SiriFinanceLogo size={36} />
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                  pathname === link.href
                    ? 'text-navy bg-navy-50'
                    : 'text-gray-600 hover:text-navy hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/apply"
              className="ml-3 bg-navy text-white px-5 py-2 rounded-lg font-semibold text-sm hover:bg-navy-light transition-colors shadow-sm"
            >
              Get Loan
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-navy p-2 rounded-lg hover:bg-gray-50 transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100 mt-1 pt-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2.5 rounded-lg font-medium text-sm transition-colors ${
                  pathname === link.href ? 'text-navy bg-navy-50' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/apply"
              onClick={() => setIsOpen(false)}
              className="block mx-4 mt-2 bg-navy text-white px-4 py-2.5 rounded-lg font-semibold text-sm text-center hover:bg-navy-light transition-colors"
            >
              Get Loan Now
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
