import Header from '../../../components/Header';
import CallToAction from '../../../components/CallToAction';
import Footer from '../../../components/Footer';
import FloatingContactButton from '../../../components/FloatingContactButton';
import { notFound } from 'next/navigation';

const courseData = {
  mftg: {
    title: 'MFTG (Master in Finance Taxation and GST)',
    hero: 'MFTG (Master in finance taxation and GST)',
    details: [
      {
        name: 'Business manual accounts',
        desc: 'Gain foundational understanding and proficiency in managing business finances through our Business Manual Accounts course, covering essential accounting principles and manual record-keeping techniques. Learn to maintain accurate financial records, enabling effective financial decision-making for business growth and sustainability.'
      },
      {
        name: 'Tally prime',
        desc: 'Learn to harness the full potential of Tally Prime\'s features and optimize financial processes for enhanced productivity and accuracy through our course.'
      },
      {
        name: 'GST',
        desc: 'Our GST course provides comprehensive training on Goods and Services Tax (GST) laws, procedures, and compliance, equipping individuals with the knowledge and skills to navigate the complex GST framework and ensure compliance in taxation. Learn how to effectively handle GST accounting, reporting, and filing, crucial for businesses and professionals in the evolving tax landscape.'
      },
      {
        name: 'Income tax',
        desc: 'This course enables students to comprehend tax laws, regulations, and procedures, empowering you to navigate the complexities of income taxation for individuals and businesses. Gain expertise in tax planning, compliance, and filing, crucial for financial professionals and individuals to ensure adherence to income tax laws.'
      },
      {
        name: 'TDS',
        desc: 'This course enables students to understand Tax Deducted at Source (TDS) regulations and procedures, mastering the compliance and calculation aspects for accurate withholding of taxes as per legal requirements. Learn to effectively manage TDS deductions, filings, and reporting, ensuring compliance and smooth financial operations for businesses and professionals.'
      },
      {
        name: 'TCS',
        desc: 'This course enables students to grasp the intricacies of Tax Collection at Source (TCS) regulations and processes, enabling you to ensure compliance and accurate tax collections in various transactions. Gain proficiency in managing TCS documentation, reporting, and procedures, essential for businesses and professionals in navigating tax compliance obligations.'
      },
      {
        name: 'Esi',
        desc: 'Learn the nuances of ESI fund management, documentation, and regulatory requirements to ensure compliance with labor laws and employee benefits.'
      },
      {
        name: 'Epfo',
        desc: 'Learn essential skills for accurate fund handling, reporting, and compliance with EPFO regulations, crucial for HR professionals and organizations ensuring employee financial security.'
      },
      {
        name: 'Advanced excel',
        desc: 'Learn to elevate your spreadsheet skills, mastering complex functions, data analysis, and automation techniques, empowering you to efficiently manage and visualize data for informed decision-making in various professional domains.'
      }
    ]
  },
  mfa: {
    title: 'MFA (Master in Foreign Accounting)',
    hero: 'MFA (Master in foreign accounting)',
    details: [
      {
        name: 'Business manual accounting',
        desc: 'Grasp the core principles of traditional accounting methods, covering ledger management, financial statement preparation, and essential record-keeping techniques for businesses. Gain fundamental skills to proficiently manage financial data without reliance on digital tools, laying a strong foundation for effective manual accounting practices.'
      },
      {
        name: 'Tally prime',
        desc: 'Tally Prime is an advanced accounting software that streamlines business operations by efficiently managing financial tasks, invoicing, inventory, and payroll. Learn to harness the full potential of Tally Prime\'s features and optimize financial processes for enhanced productivity and accuracy.'
      },
      {
        name: 'SAP',
        desc: 'Master the world\'s leading enterprise resource planning software, equipping yourself with the skills to streamline business processes, enhance productivity, and integrate data across various departments. Learn to navigate SAP\'s comprehensive suite, gaining expertise in data analytics, financial management, supply chain operations, and more, essential for modern businesses seeking efficient and integrated solutions.'
      },
      {
        name: 'Advanced excel',
        desc: 'Learn to elevate your spreadsheet skills, mastering complex functions, data analysis, and automation techniques, empowering you to efficiently manage and visualize data for informed decision-making in various professional domains.'
      },
      {
        name: 'GCC vat',
        desc: 'This course is designed for the students to understand the nuances of Value Added Tax (VAT) regulations and compliance specific to the Gulf Cooperation Council (GCC) region, equipping you with the knowledge to navigate VAT laws and procedures in GCC countries effectively. Gain insights into VAT implementation, registration, filing, and reporting, essential for businesses and professionals to ensure compliance with regional tax requirements.'
      }
    ]
  },
  powerbi: {
    title: 'Power BI',
    hero: 'Power BI Course',
    details: [
      {
        name: 'About Power BI',
        desc: 'Power BI is a super-smart tool for analyzing data. It lets you take all kinds of info, like sales numbers or website visits, and turn it into interactive visualizations and reports. Basically, it helps you understand your data better and make smarter decisions. Plus, it\'s user-friendly, so even if you\'re not a data expert, you can still use it to uncover insights.'
      },
      {
        name: 'Main Topics',
        list: [
          'Getting Started with Power BI',
          'Data Connections and Importing in Power BI',
          'Visualizations in Power BI',
          'Power BI Desktop Interface Overview',
          'DAX Essentials: Basic to Advanced',
          'Power Query: Data Transformation',
          'Interactive Dashboards in Power BI',
          'Importance of DAX Functions',
          'Sharing Reports in Power BI',
          'Data Modeling & Relationship',
          'Business Analytics',
          'Reporting',
          'Data Visualization',
          'Data Exploration',
          'Performance Monitoring',
          'Forecasting and Predictive Analytics',
          'Data Collaboration'
        ]
      }
    ]
  }
};

export default function CoursePage({ params }) {
  const { slug } = params;
  const course = courseData[slug];
  if (!course) return notFound();

  return (
    <>
      <Header />
      {/* Hero Section */}
      <section className="bg-cover bg-center text-white py-16 min-h-[220px] flex items-center dark:bg-bg-dark dark:text-white" style={{ backgroundImage: "url('/img/banner-2.jpg')" }}>
        <div className="max-w-[900px] mx-auto w-full">
          <h1 className="text-[40px] mb-2">{course.hero}</h1>
          <nav className="text-white text-[16px]" aria-label="Breadcrumb">
            <a href="/" className="text-white underline focus-outline">Home</a> &gt; <a href="/courses" className="text-white underline focus-outline">Courses</a> &gt; <span className="text-primary">{course.title}</span>
          </nav>
        </div>
      </section>

      {/* Course Details */}
      <section className="bg-white py-12 dark:bg-bg-dark dark:text-white">
        <div className="max-w-[900px] mx-auto px-4">
          {course.details.map((item, i) => (
            <div key={i} className="mb-8">
              <h3 className="text-green-600 font-bold text-[22px] flex items-center gap-2 dark:text-green-dark">
                <span className="text-[20px]" role="img" aria-label="check">✔️</span> {item.name}
              </h3>
              <p className="text-[#444] text-[16px] mt-2 dark:text-dark3-dark">{item.desc}</p>
              {item.list && (
                <ul className="text-[#444] text-[16px] mt-2 ml-6 list-disc dark:text-dark3-dark">
                  {item.list.map((li, j) => <li key={j}>{li}</li>)}
                </ul>
              )}
              {i !== course.details.length - 1 && <div className="border-t border-[#eee] my-6 dark:border-dark3-dark" />}
            </div>
          ))}
        </div>
      </section>

      <CallToAction />
      <Footer />
      <FloatingContactButton />
    </>
  );
} 