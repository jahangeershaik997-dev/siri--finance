const testimonials = [
  {
    name: 'Priya Sharma',
    location: 'Mumbai, Maharashtra',
    rating: 5,
    text: 'Got a personal loan at 10.5% through Siri Finance. The process was incredibly smooth and my loan was disbursed in just 2 days. The team helped me compare 15+ offers before I chose HDFC. Highly recommended!',
    loan: 'Personal Loan ₹5L',
    initials: 'PS',
    bgColor: 'bg-purple-100',
    textColor: 'text-purple-700',
  },
  {
    name: 'Rahul Gupta',
    location: 'Bengaluru, Karnataka',
    rating: 5,
    text: 'As a freelancer with irregular income, I was worried about getting a loan. Siri Finance found me a Bajaj Finance loan with flexible EMI options that perfectly suited my cashflow. Great service, great team!',
    loan: 'Personal Loan ₹2L',
    initials: 'RG',
    bgColor: 'bg-navy-100',
    textColor: 'text-navy',
  },
  {
    name: 'Anita Patel',
    location: 'Ahmedabad, Gujarat',
    rating: 5,
    text: 'The EMI calculator helped me plan my finances. I compared 10+ offers and chose the best one. Saved almost ₹18,000 in total interest by switching from my bank\'s quote to the one Siri Finance found me!',
    loan: 'Home Improvement ₹15L',
    initials: 'AP',
    bgColor: 'bg-green-100',
    textColor: 'text-green-700',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-gold-dark font-semibold text-sm uppercase tracking-wide mb-2">Testimonials</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">Trusted by Thousands</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Real stories from real people who found their perfect loan through Siri Finance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-7">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-md hover:border-gold/20 transition-all flex flex-col"
            >
              <div className="flex mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed flex-1 text-sm">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-3 mt-6 pt-5 border-t border-gray-100">
                <div
                  className={`w-10 h-10 rounded-full ${t.bgColor} ${t.textColor} flex items-center justify-center font-bold text-sm flex-shrink-0`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-navy text-sm">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.location}</p>
                  <p className="text-xs text-gold-dark font-medium mt-0.5">{t.loan}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-white border border-gray-200 rounded-2xl px-8 py-4 shadow-sm">
            <div className="flex -space-x-2">
              {['bg-purple-400', 'bg-navy', 'bg-green-400', 'bg-gold'].map((color, i) => (
                <div key={i} className={`w-8 h-8 ${color} rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold`}>
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
            </div>
            <div className="text-left">
              <p className="font-bold text-navy text-sm">2,00,000+ Happy Customers</p>
              <p className="text-xs text-gray-500">4.8/5 average rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
