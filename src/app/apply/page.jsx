import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CallToAction from '../../components/CallToAction';
import FloatingContactButton from '../../components/FloatingContactButton';

export default function ApplyPage() {
  return (
    <>
      <Header />
      <main className="bg-gradient-to-br from-blue-50 to-primary/10 dark:from-bg-dark dark:to-primary-dark/10 min-h-screen py-0" aria-label="Apply to YUGEN School of Accounting and Taxation">
        {/* Hero Banner */}
        <section className="relative w-full h-[220px] md:h-[320px] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/img/banner-5.jpg')" }}>
          <div className="absolute inset-0 bg-black/40 dark:bg-black/60" />
          {/* <div className="relative z-10 flex flex-col items-center justify-center text-center w-full">
            <img src="/img/logo.png" alt="Yugen Logo" className="w-20 h-20 mb-4 mx-auto drop-shadow-lg" />
            <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow mb-2">Apply to Yugen Kottakkal</h1>
            <p className="text-lg md:text-xl text-white/90 max-w-xl mx-auto">Kickstart your accounting career with world-class training and 100% job support.</p>
          </div> */}
        </section>
        {/* Application Card */}
        <section className="max-w-2xl mx-auto -mt-20 md:-mt-32 z-20 relative px-2">
          <div className="bg-white dark:bg-bg2-dark rounded-2xl shadow-2xl p-8 md:p-12 flex flex-col items-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2 text-center">Enquiry Form</h2>
            <ul className="flex flex-col md:flex-row gap-3 md:gap-6 mb-6 mt-2 text-gray-700 dark:text-gray-200 text-base md:text-lg justify-center">
              <li className="flex items-center gap-2"><img src="/img/icons/job.svg" alt="Job" className="w-6 h-6" /> 100% Job Assured Courses</li>
              <li className="flex items-center gap-2"><img src="/img/icons/computer.svg" alt="Computer" className="w-6 h-6" /> Practical Training</li>
              <li className="flex items-center gap-2"><img src="/img/logo-square.png" alt="Support" className="w-6 h-6 rounded" /> Lifetime Support</li>
            </ul>
            <div className="w-full flex justify-center items-center min-h-[700px] bg-gradient-to-br from-primary/10 to-blue-100 dark:from-primary-dark/20 dark:to-blue-900/20 rounded-xl shadow-lg p-2 md:p-4">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSdD4S8oUnGpgvAIaWSh8X0r-emjoxukMPjfdzsehDc8Ao_B5g/viewform?embedded=true"
                width="100%"
                height="1200"
                style={{ maxWidth: '700px', minHeight: '900px', border: 'none', borderRadius: '1rem', background: 'white' }}
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                title="Yugen Kottakkal Enquiry Form"
                allowFullScreen
              >
                Loading…
              </iframe>
            </div>
          </div>
        </section>
      </main>
      <CallToAction />
      <Footer />
      <FloatingContactButton />
      <link rel="canonical" href="https://yugenkottakkal.com/apply" />
      <meta name="description" content="Apply for accounting and finance courses at YUGEN School of Accounting and Taxation, Kottakkal. Fill out the enquiry form to get started." />
      <title>Apply | YUGEN School of Accounting and Taxation</title>
    </>
  );
} 