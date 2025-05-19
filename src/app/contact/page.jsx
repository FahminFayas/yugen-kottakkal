import Header from '../../components/Header';
import CallToAction from '../../components/CallToAction';
import Footer from '../../components/Footer';
import FloatingContactButton from '../../components/FloatingContactButton';

export default function ContactPage() {
  return (
    <>
      <Header />
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
      <CallToAction />
      <Footer />
      <FloatingContactButton />
    </>
  );
} 