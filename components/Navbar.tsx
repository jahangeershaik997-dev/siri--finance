'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import SiriFinanceLogo from './SiriFinanceLogo'

const PRODUCTS = [
  { href: '/loans?tab=personal', label: 'Personal Loan', icon: '👤', desc: 'From ₹15K salary · 9.75% p.a.' },
  { href: '/loans?tab=home', label: 'Home Loan', icon: '🏠', desc: 'Salaried · Self-employed · NRI · 7.15%' },
  { href: '/loans?tab=mortgage', label: 'Mortgage Loan', icon: '🏢', desc: 'LAP · Upto ₹1000 Cr' },
  { href: '/loans?tab=business', label: 'Business Loan', icon: '💼', desc: 'With / without income proof' },
  { href: '/loans?tab=construction', label: 'Construction Loan', icon: '🏗️', desc: 'Self construction · Builder · Mestri' },
  { href: '/loans?tab=car', label: 'Car Loan', icon: '🚗', desc: 'New & used vehicles' },
  { href: '/loans?tab=education', label: 'Education Loan', icon: '🎓', desc: 'All banks & NBFCs' },
  { href: '/loans?tab=plot', label: 'Open Plot Loan', icon: '🌐', desc: 'HMDA · DTCP · HUDA · GP Plots' },
  { href: '/loans?tab=project', label: 'Project Finance', icon: '📊', desc: 'Large scale project funding' },
  { href: '/loans?tab=private', label: 'Private Finance', icon: '🔐', desc: 'Flexible private lending' },
  { href: '/apply?type=overdraft', label: 'Overdraft Facility', icon: '🏦', desc: 'OD against property, FD & salary' },
]

const navLinks = [
  { href: '/emi-calculator', label: 'EMI Calculator' },
  { href: '/apply', label: 'Apply Now' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center gap-6">
            <Link href="/" onClick={() => { setIsOpen(false); setProductsOpen(false) }}>
              <SiriFinanceLogo size={38} />
            </Link>

            {/* Desktop Products dropdown */}
            <div className="hidden md:block relative">
              <button
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
                className={`flex items-center gap-1 px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                  productsOpen ? 'text-navy bg-navy-50' : 'text-gray-600 hover:text-navy hover:bg-gray-50'
                }`}
              >
                Products
                <svg className={`w-4 h-4 transition-transform ${productsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {productsOpen && (
                <div
                  className="absolute left-0 top-full pt-2 w-96"
                  onMouseEnter={() => setProductsOpen(true)}
                  onMouseLeave={() => setProductsOpen(false)}
                >
                  <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-2 overflow-hidden">
                    <div className="grid grid-cols-2 gap-0.5">
                      {PRODUCTS.map((p) => (
                        <Link
                          key={p.href}
                          href={p.href}
                          onClick={() => setProductsOpen(false)}
                          className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl hover:bg-navy-50 transition-colors group"
                        >
                          <span className="text-xl">{p.icon}</span>
                          <div>
                            <p className="text-xs font-semibold text-navy group-hover:text-navy-dark leading-tight">{p.label}</p>
                            <p className="text-xs text-gray-400 leading-tight">{p.desc}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-2 mx-1 mb-1 bg-gradient-to-r from-[#1c7fe8]/10 to-[#e05526]/10 border border-[#e05526]/20 rounded-xl px-3 py-2 text-center">
                      <p className="text-xs font-semibold text-navy">✅ CIBIL Issue Cases &amp; No Income Proof — Also Accepted</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                    pathname === link.href ? 'text-navy bg-navy-50' : 'text-gray-600 hover:text-navy hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center">
            <Link
              href="/apply"
              className="text-white px-5 py-2 rounded-lg font-semibold text-sm shadow-sm hover:opacity-90 transition-all"
              style={{ background: 'linear-gradient(135deg, #1c7fe8, #0F2B46)' }}
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

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100 mt-1 pt-3 space-y-0.5">
            <p className="px-4 pt-1 pb-1 text-xs font-semibold text-gray-400 uppercase tracking-wide">Products</p>
            {PRODUCTS.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 px-4 py-2 rounded-lg text-sm text-gray-700 hover:bg-navy-50 hover:text-navy transition-colors"
              >
                <span>{p.icon}</span>
                <span className="font-medium">{p.label}</span>
              </Link>
            ))}
            <div className="mx-4 my-2 bg-amber-50 border border-amber-200 rounded-xl px-3 py-2">
              <p className="text-xs font-semibold text-amber-800">✅ CIBIL Issue & No Income Proof — Accepted</p>
            </div>
            <div className="border-t border-gray-100 pt-2 mt-2">
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
                className="block mx-4 mt-2 text-white px-4 py-2.5 rounded-lg font-semibold text-sm text-center hover:opacity-90 transition-all"
              style={{ background: 'linear-gradient(135deg, #1c7fe8, #0F2B46)' }}
              >
                Get Loan Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
