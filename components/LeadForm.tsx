'use client'
import { useState, FormEvent } from 'react'

const WHATSAPP_NUMBER = '919059314625'
const WEB3FORMS_KEY = 'e5230a0d-5e3c-4326-8bb7-ede934da8a28'

interface LeadFormProps {
  prefilledAmount?: string
  prefilledBank?: string
}

interface FormData {
  name: string
  email: string
  phone: string
  salary: string
  loanAmount: string
  creditScore: string
}

function buildWhatsAppUrl(data: FormData): string {
  const message = `Hi, I am ${data.name}. My phone is ${data.phone}. I applied for a loan of ₹${data.loanAmount}. My salary is ₹${data.salary} and credit score is ${data.creditScore}.`
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export default function LeadForm({ prefilledAmount = '', prefilledBank = '' }: LeadFormProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    salary: '',
    loanAmount: prefilledAmount,
    creditScore: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New Loan Application — ${formData.name}`,
          from_name: 'Siri Finance',
          ...formData,
          bank: prefilledBank || 'Not specified',
        }),
      })

      if (response.ok) {
        setStatus('success')
        window.open(buildWhatsAppUrl(formData), '_blank')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const resetForm = () => {
    setStatus('idle')
    setFormData({ name: '', email: '', phone: '', salary: '', loanAmount: prefilledAmount, creditScore: '' })
  }

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-1">Application Submitted!</h3>
        <p className="text-gray-600 text-sm mb-5">
          Our team will contact you shortly. A WhatsApp chat should have opened — if not, click below.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={buildWhatsAppUrl(formData)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Open WhatsApp
          </a>
          <button
            onClick={resetForm}
            className="text-gray-500 font-medium hover:text-gray-700 text-sm px-4 py-3 rounded-xl border border-gray-200 hover:border-gray-300 transition-colors"
          >
            Submit Another
          </button>
        </div>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      action="https://api.web3forms.com/submit"
      method="POST"
      className="space-y-5"
    >
      <input type="hidden" name="access_key" value={WEB3FORMS_KEY} />
      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm flex items-center gap-2">
          <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Submission failed. Please try again or WhatsApp us directly at 90593 14625.
        </div>
      )}

      {prefilledBank && (
        <div className="bg-blue-50 border border-blue-100 rounded-xl px-4 py-3 text-sm text-blue-700 font-medium">
          Applying for: {prefilledBank}
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-4">
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

      <div className="grid sm:grid-cols-2 gap-4">
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

      <div className="grid sm:grid-cols-2 gap-4">
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
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Submitting...
          </span>
        ) : (
          'Submit & Connect on WhatsApp'
        )}
      </button>

      <p className="text-center text-xs text-gray-400 leading-relaxed">
        After submitting, you&apos;ll be redirected to WhatsApp to connect with our advisor instantly.
      </p>
    </form>
  )
}
