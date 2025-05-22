// src/app/courses/[slug]/page.js

import Header from '../../../components/Header';
import CallToAction from '../../../components/CallToAction';
import Footer from '../../../components/Footer';
import FloatingContactButton from '../../../components/FloatingContactButton';
import { notFound } from 'next/navigation';
import Head from '../../head.js';

// It's good practice to define types for your data
// interface CourseDetailItem {
//   id: string;
//   icon?: string; // Emoji or SVG path/component name
//   name: string;
//   desc: string;
//   list?: string[];
// }
//
// interface Course {
//   title: string;
//   hero: string;
//   tagline?: string;
//   description?: string;
//   keyFeatures?: string[];
//   details: CourseDetailItem[];
// }
//
// interface CourseData {
//   [key: string]: Course;
// }

const courseData = {
  mftg: {
    title: 'MFTG (Master in Finance Taxation and GST)',
    hero: 'Master in Finance, Taxation & GST (MFTG)',
    tagline: 'Unlock expertise in financial regulations and tax management.',
    description: "The MFTG program is designed to provide comprehensive knowledge in finance, direct and indirect taxation, and Goods and Services Tax (GST). Ideal for professionals seeking to become experts in financial compliance and advisory.",
    details: [
      {
        id: 'business-manual-accounts',
        icon: '📖', // Example: Book icon (You can replace with SVG imports or a dedicated icon component)
        name: 'Business Manual Accounts',
        desc: 'Gain foundational understanding and proficiency in managing business finances through our Business Manual Accounts course, covering essential accounting principles and manual record-keeping techniques. Learn to maintain accurate financial records, enabling effective financial decision-making for business growth and sustainability.'
      },
      {
        id: 'tally-prime',
        icon: '💻',
        name: 'Tally Prime',
        desc: 'Learn to harness the full potential of Tally Prime\'s features and optimize financial processes for enhanced productivity and accuracy through our course.'
      },
      {
        id: 'gst',
        icon: '📄',
        name: 'GST (Goods and Services Tax)',
        desc: 'Our GST course provides comprehensive training on Goods and Services Tax (GST) laws, procedures, and compliance, equipping individuals with the knowledge and skills to navigate the complex GST framework and ensure compliance in taxation. Learn how to effectively handle GST accounting, reporting, and filing, crucial for businesses and professionals in the evolving tax landscape.'
      },
      {
        id: 'income-tax',
        icon: '💰',
        name: 'Income Tax',
        desc: 'This course enables students to comprehend tax laws, regulations, and procedures, empowering you to navigate the complexities of income taxation for individuals and businesses. Gain expertise in tax planning, compliance, and filing, crucial for financial professionals and individuals to ensure adherence to income tax laws.'
      },
      {
        id: 'tds',
        icon: '✂️',
        name: 'TDS (Tax Deducted at Source)',
        desc: 'This course enables students to understand Tax Deducted at Source (TDS) regulations and procedures, mastering the compliance and calculation aspects for accurate withholding of taxes as per legal requirements. Learn to effectively manage TDS deductions, filings, and reporting, ensuring compliance and smooth financial operations for businesses and professionals.'
      },
      {
        id: 'tcs',
        icon: '📥',
        name: 'TCS (Tax Collected at Source)',
        desc: 'This course enables students to grasp the intricacies of Tax Collection at Source (TCS) regulations and processes, enabling you to ensure compliance and accurate tax collections in various transactions. Gain proficiency in managing TCS documentation, reporting, and procedures, essential for businesses and professionals in navigating tax compliance obligations.'
      },
      {
        id: 'esi',
        icon: '🏥',
        name: 'ESI (Employee State Insurance)',
        desc: 'Learn the nuances of ESI fund management, documentation, and regulatory requirements to ensure compliance with labor laws and employee benefits.'
      },
      {
        id: 'epfo',
        icon: '🏦',
        name: 'EPFO (Employees Provident Fund Organisation)',
        desc: 'Learn essential skills for accurate fund handling, reporting, and compliance with EPFO regulations, crucial for HR professionals and organizations ensuring employee financial security.'
      },
      {
        id: 'advanced-excel',
        icon: '📊',
        name: 'Advanced Excel',
        desc: 'Learn to elevate your spreadsheet skills, mastering complex functions, data analysis, and automation techniques, empowering you to efficiently manage and visualize data for informed decision-making in various professional domains.'
      }
    ]
  },
  mfa: {
    title: 'MFA (Master in Foreign Accounting)',
    hero: 'Master in Foreign Accounting (MFA)',
    tagline: 'Navigate international accounting standards and practices.',
    description: "The MFA program equips professionals with the skills to manage accounting tasks in a global context, covering international financial reporting standards, Tally, SAP, and GCC VAT.",
    details: [
      {
        id: 'business-manual-accounting-mfa',
        icon: '📖',
        name: 'Business Manual Accounting',
        desc: 'Grasp the core principles of traditional accounting methods, covering ledger management, financial statement preparation, and essential record-keeping techniques for businesses. Gain fundamental skills to proficiently manage financial data without reliance on digital tools, laying a strong foundation for effective manual accounting practices.'
      },
      {
        id: 'tally-prime-mfa',
        icon: '💻',
        name: 'Tally Prime',
        desc: 'Tally Prime is an advanced accounting software that streamlines business operations by efficiently managing financial tasks, invoicing, inventory, and payroll. Learn to harness the full potential of Tally Prime\'s features and optimize financial processes for enhanced productivity and accuracy.'
      },
      {
        id: 'sap-mfa',
        icon: '⚙️',
        name: 'SAP',
        desc: 'Master the world\'s leading enterprise resource planning software, equipping yourself with the skills to streamline business processes, enhance productivity, and integrate data across various departments. Learn to navigate SAP\'s comprehensive suite, gaining expertise in data analytics, financial management, supply chain operations, and more, essential for modern businesses seeking efficient and integrated solutions.'
      },
      {
        id: 'advanced-excel-mfa',
        icon: '📊',
        name: 'Advanced Excel',
        desc: 'Learn to elevate your spreadsheet skills, mastering complex functions, data analysis, and automation techniques, empowering you to efficiently manage and visualize data for informed decision-making in various professional domains.'
      },
      {
        id: 'gcc-vat-mfa',
        icon: '🌍',
        name: 'GCC VAT',
        desc: 'This course is designed for the students to understand the nuances of Value Added Tax (VAT) regulations and compliance specific to the Gulf Cooperation Council (GCC) region, equipping you with the knowledge to navigate VAT laws and procedures in GCC countries effectively. Gain insights into VAT implementation, registration, filing, and reporting, essential for businesses and professionals to ensure compliance with regional tax requirements.'
      }
    ]
  },
  powerbi: {
    title: 'Power BI Data Analyst Certification',
    hero: 'Power BI Data Analyst Certification Course',
    tagline: 'Transform data into actionable insights with Power BI.',
    description: "Become proficient in Power BI, a leading business analytics service. This course covers everything from data connection and transformation to creating compelling visualizations and interactive dashboards.",
    keyFeatures: [
        "Connect to and transform data from various sources.",
        "Build interactive dashboards and reports.",
        "Master DAX for custom calculations.",
        "Share insights and collaborate effectively."
    ],
    details: [
      {
        id: 'about-powerbi',
        icon: '💡',
        name: 'Understanding Power BI',
        desc: 'Power BI is a suite of business analytics tools to analyze data and share insights. It allows you to connect to hundreds of data sources, simplify data prep, and drive ad hoc analysis. Produce beautiful reports, then publish them for your organization to consume on the web and across mobile devices.'
      },
      {
        id: 'main-topics-powerbi',
        icon: '📚',
        name: 'Core Curriculum & Main Topics',
        list: [
          'Getting Started with Power BI Desktop',
          'Connecting to Data Sources & Importing Data',
          'Data Transformation with Power Query Editor',
          'Data Modeling and Relationships',
          'Introduction to DAX (Data Analysis Expressions)',
          'Creating Visualizations and Reports',
          'Building Interactive Dashboards',
          'Publishing and Sharing Reports in Power BI Service',
          'Advanced DAX Functions and Scenarios',
          'Best Practices for Business Analytics',
          'Real-world Case Studies and Projects'
        ]
      }
    ]
  }
};

// New Component for Course Module Card
const CourseModuleCard = ({ icon, name, desc, list }) => {
  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
      <div className="flex items-start sm:items-center mb-4">
        {icon && <span className="text-4xl mr-4 text-primary dark:text-primary-dark flex-shrink-0">{icon}</span>}
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white">{name}</h3>
      </div>
      <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed mb-3">{desc}</p>
      {list && (
        <div className="mt-5">
          <h4 className="text-md font-semibold text-gray-700 dark:text-gray-200 mb-2">Key Topics Covered:</h4>
          <ul className="space-y-2 pl-1">
            {list.map((item, index) => (
              <li key={index} className="flex items-start py-1">
                <svg
                  className="w-5 h-5 text-green-500 dark:text-green-400 mr-3 flex-shrink-0 mt-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-gray-600 dark:text-gray-300 text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};


export default function CoursePage({ params }) {
  const { slug } = params;
  const course = courseData[slug];

  if (!course) {
    notFound();
    return null;
  }

  return (
    <>
      <Head />
      <Header />

      {/* Hero Section */}
      <section
        className="bg-cover bg-center text-white relative dark:bg-gray-900" // Simplified dark mode for hero, image might need overlay
      >
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for better text readability on image */}
        <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">
            {course.hero}
          </h1>
          {course.tagline && (
            <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              {course.tagline}
            </p>
          )}
          <nav className="text-gray-300 text-sm sm:text-base" aria-label="Breadcrumb">
            <a href="/" className="hover:text-primary-light dark:hover:text-primary-dark transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary rounded-sm">Home</a>
            <span className="mx-2" aria-hidden="true">&gt;</span>
            <a href="/courses" className="hover:text-primary-light dark:hover:text-primary-dark transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary rounded-sm">Courses</a>
            <span className="mx-2" aria-hidden="true">&gt;</span>
            <span className="text-primary-light dark:text-primary-dark font-medium">{course.title}</span>
          </nav>
        </div>
      </section>

      {/* Course Overview Section */}
      {course.description && (
        <section className="bg-white dark:bg-bg-dark py-12 md:py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Course Overview
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              {course.description}
            </p>
            {course.keyFeatures && (
                <div className="mt-10 text-left">
                    <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-5 text-center sm:text-left">Key Features</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                        {course.keyFeatures.map((feature, index) => (
                            <li key={index} className="flex items-start p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg shadow-sm">
                                <svg className="w-6 h-6 text-primary dark:text-primary-dark mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
          </div>
        </section>
      )}

      {/* Course Modules / Details Section */}
      <section className="bg-slate-50 dark:bg-slate-900 py-12 md:py-16">
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              What You'll Learn
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Dive deep into the core components of the {course.title}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-8"> {/* Single column for better readability of detailed cards */}
            {course.details.map((item) => (
              <CourseModuleCard
                key={item.id}
                icon={item.icon}
                name={item.name}
                desc={item.desc}
                list={item.list}
              />
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
      <Footer />
      <FloatingContactButton />
      <link rel="canonical" href={`https://yugenkottakkal.com/courses/${params.slug}`} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Course',
        'name': course.title,
        'description': course.description,
        'provider': {
          '@type': 'EducationalOrganization',
          'name': 'YUGEN School of Accounting and Taxation',
          'url': 'https://yugenkottakkal.com/'
        }
      }) }} />
    </>
  );
}