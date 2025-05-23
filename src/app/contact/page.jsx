import Header from '../../components/Header';
import CallToAction from '../../components/CallToAction';
import Footer from '../../components/Footer';
import FloatingContactButton from '../../components/FloatingContactButton';

export default function ContactPage() {
  return (
    <>
      <Header />
      <main aria-label="Contact YUGEN School of Accounting and Taxation - Kottakkal">
        {/* Hero Section */}
        <section className="bg-cover bg-center text-white py-16 min-h-[220px] flex items-center dark:bg-bg-dark dark:text-white" style={{ backgroundImage: "url('/img/banner-5.jpg')" }}>
          <div className="max-w-[900px] mx-auto w-full">
            <h1 className="text-[40px] mb-2">Get In Touch</h1>
          </div>
        </section>

        {/* Contact Details */}
        <section className="bg-white py-12 dark:bg-bg-dark dark:text-white">
          <div className="max-w-[900px] mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-[32px]">Contact <span className="text-primary">Information</span></h2>
            </div>
            <div className="flex flex-wrap gap-10 justify-center">
              <div className="flex-1 min-w-[300px] bg-bg rounded-xl shadow-md p-8 dark:bg-bg2-dark">
                <h4 className="text-primary mb-3">Reach Us</h4>
                <p className="text-[#444] text-[16px] mb-4 dark:text-dark3-dark">
                Smart Trade City,<br />Near Kottakkal Bus Stand,<br />Kottakkal (PO),<br />Malappuram - 676503
                </p>
                <h4 className="text-primary mb-3">Drop A Mail</h4>
                <p className="text-[#444] text-[16px] mb-4 dark:text-dark3-dark">
                  <a href="mailto:yugenkottakkal@gmail.com" className="text-primary no-underline focus-outline" aria-label="Email Yugen Education">yugenkottakkal@gmail.com</a>
                </p>
                <h4 className="text-primary mb-3">Make a Call</h4>
                <p className="text-[#444] text-[16px] mb-2 dark:text-dark3-dark">
                  <a href="tel:+919747884066" className="text-primary no-underline focus-outline" aria-label="Call +91 8943888006">+91 8943888006</a>
                </p>
                <p className="text-[#444] text-[16px] dark:text-dark3-dark">
                  <a href="tel:+918943888005" className="text-primary no-underline focus-outline" aria-label="Call +91 8943888005">+91 8943888005</a>
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Google Map Location */}
        <section className="bg-white py-0 dark:bg-bg-dark dark:text-white">
          <div className="max-w-[900px] mx-auto px-4 pb-12">
            <div className="rounded-xl overflow-hidden shadow-md border border-gray-200 dark:border-[#333]">
              <iframe
                title="Yugen Education Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d559.4436988581792!2d76.00470173579167!3d11.004046884111705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7b5c547fb94b9%3A0x5c847a3391d580fb!2sYUGEN%20School%20of%20Accounting%20and%20Taxation%20-%20Kottakkal!5e1!3m2!1sen!2sin!4v1747988396268!5m2!1sen!2sin"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
      <CallToAction />
      <Footer />
      <FloatingContactButton />
      <link rel="canonical" href="https://yugenkottakkal.com/contact" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        'name': 'Contact YUGEN School of Accounting and Taxation',
        'url': 'https://yugenkottakkal.com/contact',
        'description': 'Contact YUGEN School of Accounting & Taxation Kottakkal for inquiries about our courses, admissions, and training options.',
        'contactOption': [
          'TollFree',
          'CustomerService'
        ],
        'contactPoint': [{
          '@type': 'ContactPoint',
          'telephone': '+91-8943888006',
          'contactType': 'customer service',
          'areaServed': 'IN',
          'availableLanguage': ['English', 'Malayalam']
        }]
      }) }} />
    </>
  );
} 