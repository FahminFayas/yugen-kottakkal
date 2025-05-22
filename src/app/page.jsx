import Header from '../components/Header';
import HeroBanner from '../components/HeroBanner';
import FeaturedCourses from '../components/FeaturedCourses';
import Centers from '../components/Centers';
import Reviews from '../components/Reviews';
import CourseIncludes from '../components/CourseIncludes';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';
import FloatingContactButton from '../components/FloatingContactButton';
import Head from './head.js';

export default function HomePage() {
  return (
    <>
      <Head />
      <Header />
      <main className="bg-bg" aria-label="YUGEN School of Accounting and Taxation - Kottakkal main content">
        <h1 className="sr-only">Accounting Course in Kottakkal – YUGEN School of Accounting & Taxation</h1>
        <HeroBanner />
        <FeaturedCourses />
        <CourseIncludes />
        <Centers />
        <Reviews />
        <CallToAction />
      </main>
      <Footer />
      {/* Fixed Contact Bar (Home Page Only) */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 flex justify-center gap-6 py-4 z-[1001] shadow-lg dark:bg-bg2-dark dark:border-dark3-dark" style={{boxShadow: '0 -2px 16px rgba(0,0,0,0.04)'}}>
        <a href="tel:+918943888006" className="flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full font-semibold text-lg shadow hover:bg-primary-dark transition" style={{minWidth: 180}}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0-2.071 1.679-3.75 3.75-3.75h2.25c.414 0 .75.336.75.75v3.375c0 .414-.336.75-.75.75H6.75v1.5A8.25 8.25 0 0015 18.75h1.5v-2.25c0-.414.336-.75.75-.75h3.375c.414 0 .75.336.75.75v2.25a3.75 3.75 0 01-3.75 3.75h-2.25C6.679 21.75 2.25 17.321 2.25 12V6.75z" /></svg>
          call now
        </a>
        <a href="https://wa.me/918943888005" target="_blank" rel="noopener" className="flex items-center gap-2 bg-[#25D366] text-white px-8 py-3 rounded-full font-semibold text-lg shadow hover:bg-[#1ebe5d] transition" style={{minWidth: 180}}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M16.862 13.487a4.5 4.5 0 00-6.349-6.349m6.349 6.349l2.122 2.122m-2.122-2.122a9 9 0 11-12.728 0 9 9 0 0112.728 0z" /></svg>
          Whatsapp
        </a>
      </div>
      <link rel="canonical" href="https://yugenkottakkal.com/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'EducationalOrganization',
        'name': 'YUGEN School of Accounting and Taxation',
        'url': 'https://yugenkottakkal.com/',
        'logo': 'https://yugenkottakkal.com/img/logo-light.png',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': 'Smart Trade City, Near Kottakkal Bus Stand, Kottakkal (PO)',
          'addressLocality': 'Malappuram',
          'postalCode': '676503',
          'addressCountry': 'IN'
        },
        'contactPoint': [{
          '@type': 'ContactPoint',
          'telephone': '+91-8943888006',
          'contactType': 'customer service',
          'areaServed': 'IN',
          'availableLanguage': ['English', 'Malayalam']
        }],
        'hasCourse': {
          '@type': 'Course',
          'name': 'Accounting Course in Kottakkal',
          'description': 'Comprehensive accounting and taxation training by expert faculty. Includes GST, Income Tax, Tally, and job-oriented modules. 100% placement support.',
          'provider': {
            '@type': 'EducationalOrganization',
            'name': 'YUGEN School of Accounting and Taxation',
            'url': 'https://yugenkottakkal.com/'
          }
        }
      }) }} />
    </>
  );
} 