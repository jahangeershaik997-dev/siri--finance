'use client'
import { useState, FormEvent } from 'react'

interface LeadFormProps {
  prefilledAmount?: string
  prefilledBank?: string
}

export default function LeadForm({ prefilledAmount = '', prefilledBank = '' }: LeadFormProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    salary: '',
    loanAmount: prefilledAmount,
    creditScore: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('https://formspree.io/f/xjgjjedp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          bank: prefilledBank || 'Not specified',
          _subject: `New Loan Application — ${formData.name}`,
        }),
      })

      if (response.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Application Submitted!</h3>
        <p className="text-gray-600 mb-2 font-semibold">Our team will contact you shortly.</p>
        <p className="text-gray-500 text-sm mb-8">
          We&apos;ll match you with the best loan offers and call you within 24 working hours.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => {
              setStatus('idle')
              setFormData({ name: '', email: '', phone: '', salary: '', loanAmount: prefilledAmount, creditScore: '' })
            }}
            className="text-blue-600 font-medium hover:underline text-sm"
          >
            Submit another application
          </button>
        </div>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      action="https://formspree.io/f/xjgjjedp"
      method="POST"
      className="space-y-5"
    >
      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm flex items-center gap-2">
          <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Something went wrong. Please try again or call us at 1800-XXX-XXXX.
        </div>
      )}

      {prefilledBank && (
        <div className="bg-blue-50 border border-blue-100 rounded-xl px-4 py-3 text-sm text-blue-700 font-medium">
          Applying for: {prefilledBank}
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Rajesh Kumar"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address *</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="rajesh@example.com"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-sm"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Mobile Number *</label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="98765 43210"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Monthly Salary (₹) *</label>
          <input
            type="number"
            name="salary"
            required
            value={formData.salary}
            onChange={handleChange}
            placeholder="50000"
            min="10000"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-sm"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Loan Amount (₹) *</label>
          <input
            type="number"
            name="loanAmount"
            required
            value={formData.loanAmount}
            onChange={handleChange}
            placeholder="500000"
            min="50000"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">CIBIL Score *</label>
          <input
            type="number"
            name="creditScore"
            required
            value={formData.creditScore}
            onChange={handleChange}
            placeholder="750"
            min="300"
            max="900"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-sm"
          />
        </div>
      </div>

      {prefilledBank && <input type="hidden" name="bank" value={prefilledBank} />}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-xl font-semibold text-base hover:from-blue-700 hover:to-blue-800 disabled:opacity-70 disabled:cursor-not-allowed transition-all shadow-lg shadow-blue-100"
      >
        {status === 'loading' ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            Submitting Application...
          </span>
        ) : (
          'Submit Application — It\'s Free'
        )}
      </button>

      <p className="text-center text-xs text-gray-400 leading-relaxed">
        By submitting, you agree to our Terms &amp; Privacy Policy.
        We never share your data without consent.
      </p>
    </form>
  )
}
