import Script from 'next/script'

const GA_ID = process.env.NEXT_PUBLIC_GA_ID
const AW_ID = process.env.NEXT_PUBLIC_AW_ID

export default function GoogleAnalytics() {
  if (!GA_ID && !AW_ID) return null

  const trackingId = GA_ID || AW_ID

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${trackingId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          ${GA_ID ? `gtag('config', '${GA_ID}', { page_path: window.location.pathname });` : ''}
          ${AW_ID ? `gtag('config', '${AW_ID}');` : ''}
        `}
      </Script>
    </>
  )
}
