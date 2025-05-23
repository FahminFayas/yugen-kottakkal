import Header from '../../components/Header';
import Reviews from '../../components/Reviews';
import CallToAction from '../../components/CallToAction';
import Footer from '../../components/Footer';
import FloatingContactButton from '../../components/FloatingContactButton';

const courses = [
  {
    icon: 'fa-chart-bar',
    name: 'Power BI',
    subtitle: 'Business Analytics & Data Visualization',
    details: [
      'Getting Started with Power BI',
      'Data Connections & Importing',
      'Mastering Visualizations',
      'DAX Essentials',
      'Building Interactive Dashboards'
    ],
    apply: '/apply',
  },
  {
    icon: 'fa-percent',
    name: 'MFTG',
    subtitle: 'Master in Finance Taxation and GST',
    details: ['Business Manual Accounts', 'Tally Prime', 'GST'],
    apply: '/apply',
  },
  {
    icon: 'fa-chart-pie',
    name: 'MFA',
    subtitle: 'Master in Foreign Accounting',
    details: ['Business Manual Accounts', 'Tally Prime', 'SAP'],
    apply: '/apply',
  },
];

export default function CoursesPage() {
  return (
    <>
      <Header />
      {/* Hero Section */}
      <section className="bg-cover bg-center text-white py-16 min-h-[220px] flex items-center dark:bg-bg-dark dark:text-white" style={{ backgroundImage: "url('/img/banner-2.jpg')" }}>
        <div className="max-w-[900px] mx-auto w-full">
          <h1 className="text-[40px] mb-2">Our Courses</h1>
        </div>
      </section>

      {/* Courses List */}
      <section className="bg-bg dark:bg-bg-dark py-12">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-[32px] dark:text-white">Select Your <span className="text-primary">Courses</span></h2>
            <p className="text-[18px] text-[#444] dark:text-dark3-dark">Yugen Education has specialized courses for students, working People & other professionals in Accounting, Taxation & GST.</p>
          </div>
          <div className="flex flex-wrap gap-8 justify-center">
            {courses.map((course, i) => (
              <div key={i} className="flex-1 min-w-[260px] max-w-[340px] bg-bg dark:bg-bg2-dark rounded-xl shadow-md p-6" aria-label={course.name + ' course card'}>
                <div className="text-center mb-4">
                  <span className="text-[36px] text-primary" role="img" aria-label={course.name + ' icon'}>{course.icon === 'fa-chart-bar' ? '📊' : course.icon === 'fa-percent' ? '％' : '🥧'}</span>
                </div>
                <div className="font-bold text-[22px] mb-1 dark:text-white">{course.name}</div>
                <div className="text-primary font-semibold mb-3">{course.subtitle}</div>
                <ul className="text-[#444] text-[16px] mb-4 pl-5 list-disc dark:text-dark3-dark">
                  {course.details.map((d, j) => <li key={j}>{d}</li>)}
                </ul>
                <div className="flex gap-2">
                  <a href={`/courses/${course.name.toLowerCase().replace(/\s+/g, '-')}`} className="bg-primary text-white px-6 py-2 rounded-lg no-underline font-semibold focus-outline dark:bg-primary-dark dark:text-white">View Details</a>
                  <a href={course.apply} rel="noopener" className="bg-primary text-white px-6 py-2 rounded-lg no-underline font-semibold focus-outline dark:bg-primary-dark dark:text-white">Apply Now</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Reviews />
      <CallToAction />
      <Footer />
      <FloatingContactButton />
    </>
  );
} 