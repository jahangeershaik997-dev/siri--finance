export default function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'FinancialService',
        '@id': 'https://siri-finance-knax.vercel.app/#organization',
        name: 'Siri Finance',
        url: 'https://siri-finance-knax.vercel.app',
        description:
          'India\'s smart loan aggregation platform. Compare personal loans, home loans, and business loans from 50+ lenders.',
        areaServed: 'IN',
        currenciesAccepted: 'INR',
        telephone: '+917095899552',
        email: 'jahangeershaik997@gmail.com',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'IN',
        },
        sameAs: ['https://github.com/jahangeershaik997-dev/siri--finance'],
        offers: {
          '@type': 'AggregateOffer',
          priceCurrency: 'INR',
          description: 'Personal loans from 9.75% p.a. Home loans from 7.15% p.a.',
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://siri-finance-knax.vercel.app/#website',
        url: 'https://siri-finance-knax.vercel.app',
        name: 'Siri Finance',
        description: 'Smart Loans. Faster Decisions.',
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://siri-finance-knax.vercel.app/loans?q={search_term_string}',
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is the minimum salary required for a personal loan?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Minimum monthly salary accepted is ₹15,000. Banks typically require ₹25,000+. NBFCs like Bajaj Finance, Tata Capital, and Fullerton India accept from ₹15,000.',
            },
          },
          {
            '@type': 'Question',
            name: 'What CIBIL score is needed for a personal loan?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A CIBIL score of 700+ is ideal for bank loans. NBFCs may approve loans for scores as low as 600. A score above 750 qualifies you for the lowest interest rates.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the lowest interest rate on personal loans in India?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Personal loans start from 9.75% p.a. Home loans from 7.15% p.a. through Siri Finance. Rates depend on your credit score, salary, and employer profile.',
            },
          },
          {
            '@type': 'Question',
            name: 'How quickly can I get a personal loan?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Pre-approved customers can get same-day disbursal. New applicants typically receive funds within 2–7 working days after document verification.',
            },
          },
        ],
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
