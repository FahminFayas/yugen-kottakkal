import Header from '../../components/Header';
import CourseIncludes from '../../components/CourseIncludes';
import Reviews from '../../components/Reviews';
import CallToAction from '../../components/CallToAction';
import Footer from '../../components/Footer';
import FloatingContactButton from '../../components/FloatingContactButton';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main aria-label="About YUGEN School of Accounting and Taxation - Kottakkal">
      {/* Hero Section */}
      <section className="bg-cover bg-center text-white py-16 min-h-[220px] flex items-center" style={{ backgroundImage: "url('/img/banner-4.jpg')" }}>
        <div className="max-w-[900px] mx-auto w-full">
          <h1 className="text-[40px] pt-4 mb-4">Who We Are?</h1>
          <div className="text-[18px] opacity-90">About Us</div>
        </div>
      </section>

      {/* About Details */}
      <section className="bg-bg dark:bg-bg-dark py-12">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="flex flex-wrap gap-10 items-center mb-10">
            <div className="flex-1 min-w-[300px]">
              <span className="text-primary font-bold text-[18px]">About Us</span>
              <h2 className="text-[28px] my-3 dark:text-white">What We Do &amp; Our Aim</h2>
              <p className="text-[17px] text-[#444] dark:text-dark3-dark">
                YUGEN SCHOOL OF ACCOUNTING &amp; TAXATION - Kottakkal aims to provide world class training for Global Accounting and Taxation qualifications and develop the professional Accountant of upcoming Days. Our faculties are comprising of professionals and academicians with years of industry experienced and CA Article ship members. Our institutions have air-conditioned classroom with modern facilities, Wi-Fi enabled and ample parking space. Our flagship courses are MFTG (Master in Finance Taxation and GST) &amp; GIT (GST, INCOME TAX AND TDS).<br /><br />
                Main objective of YUGEN is reduce the skill gap in accounting domain through quality skill development education.  Plenty of job opportunities are vacant in accounting fields due to the lack of skilled accounting people. YUGEN tailored the courses to attain that objective.  Who completed at the course from YUGEN can enter in to job directly without further repeated training.
              </p>
            </div>
            <div className="flex-1 min-w-[300px] text-center">
              <img src="/img/about.jpg" alt="About Yugen" className="w-full max-w-[400px] rounded-xl shadow-lg inline-block" />
            </div>
          </div>
          <div className="flex flex-wrap gap-10 items-center">
            <div className="flex-1 min-w-[300px]">
              <p className="text-[17px] text-[#444] dark:text-dark3-dark">
                YUGEN BOARD OF STUDIES (BoS) is the basic constituent of the academic system of YUGEN. Its functions will include framing the content of various courses, reviewing and updating the content from time to time, introducing new courses according to the demand of Industry relevance(R&amp;D).<br /><br />
                YUGEN having own ERP software for managing administration process called "YUGEN Suite". Own quality course material prepared by Chattered Accountant (CA) Trainers, provides for students to ensure the standard of the course.  The ambiance of Airconditioned Theory and Practical lab can make students more enthusiastic for successful completion of their course. Online Examination system is the golden feather of YUGEN for keeping Quality Education. All examinations are evaluated by YUGEN Examination System called "YES".  After the successful completion with appropriate GRADE, YUGEN will issue MERIT CERTIFICATE.<br /><br />
                YUGEN CAREER ZONE is the back born of the placement wing.  Identify the Employers requirement and full fill with right candidate select from YUGEN
              </p>
            </div>
            <div className="flex-1 min-w-[300px]">
              <div className="mb-5 flex items-center gap-3">
                <span className="bg-[#e0f7f1] dark:bg-bg2-dark text-primary dark:text-primary-dark rounded-full w-9 h-9 flex items-center justify-center font-bold text-[20px]">✓</span>
                <span className="font-semibold text-[18px] dark:text-white">Full lifetime Support</span>
              </div>
              <div className="mb-5 flex items-center gap-3">
                <span className="bg-[#e0f7f1] dark:bg-bg2-dark text-primary dark:text-primary-dark rounded-full w-9 h-9 flex items-center justify-center font-bold text-[20px]">✓</span>
                <span className="font-semibold text-[18px] dark:text-white">Certificate of completion</span>
              </div>
              <div className="mb-5 flex items-center gap-3">
                <span className="bg-[#e0f7f1] dark:bg-bg2-dark text-primary dark:text-primary-dark rounded-full w-9 h-9 flex items-center justify-center font-bold text-[20px]">✓</span>
                <span className="font-semibold text-[18px] dark:text-white">Flexible Timings</span>
              </div>
              <div className="mt-8">
                <a href="/apply" rel="noopener" className="bg-primary text-white px-8 py-3 rounded-lg no-underline font-bold text-[18px]">Join Now</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Includes Section */}
      <CourseIncludes />
      <Reviews />
      </main>
      <CallToAction />
      <Footer />
      <FloatingContactButton />
      <link rel="canonical" href="https://yugenkottakkal.com/about" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        'name': 'About YUGEN School of Accounting and Taxation',
        'url': 'https://yugenkottakkal.com/about',
        'description': 'Learn about YUGEN School of Accounting & Taxation Kottakkal, our mission, vision, and the world-class training we provide for global accounting and taxation qualifications.'
      }) }} />
    </>
  );
} 