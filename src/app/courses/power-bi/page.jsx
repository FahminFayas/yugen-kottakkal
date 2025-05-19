import CallToAction from '../../../components/CallToAction';
import Footer from '../../../components/Footer';
import Header from '../../../components/Header';

// Consider moving this data to a separate file or fetching it if it becomes complex
const powerBiCourseData = {
  title: "Unlock Data Insights with Power BI",
  subtitle: "Master Power BI from fundamentals to advanced techniques and transform raw data into actionable intelligence.",
  brochureUrl: "/yugen.pdf", // Assuming this is the correct path
  about: {
    description: "Power BI is a powerful suite of business analytics tools by Microsoft that lets you visualize your data and share insights across your organization, or embed them in your app or website. Connect to hundreds of data sources and bring your data to life with live dashboards and reports.",
    keyTopics: [
      { id: "t1", title: "Getting Started with Power BI", icon: "🚀" },
      { id: "t2", title: "Data Connections & Importing", icon: "🔗" },
      { id: "t3", title: "Mastering Visualizations", icon: "📊" },
      { id: "t4", title: "Power BI Desktop Interface", icon: "💻" },
      { id: "t5", title: "DAX Essentials: Basic to Advanced", icon: "💡" },
      { id: "t6", title: "Power Query for Data Transformation", icon: "✨" },
      { id: "t7", title: "Building Interactive Dashboards", icon: "🎨" },
      { id: "t8", title: "The Power of DAX Functions", icon: "🧮" },
      { id: "t9", title: "Sharing & Collaboration", icon: "🤝" },
      { id: "t10", title: "Data Modeling & Relationships", icon: "🧬" },
    ],
  },
  applications: [
    {
      id: "a1",
      title: "Business Analytics",
      description: "Analyze sales data, customer demographics, and market trends to identify opportunities and make informed business decisions.",
      icon: "📈"
    },
    {
      id: "a2",
      title: "Interactive Reporting",
      description: "Create dynamic reports and dashboards to visually represent data for stakeholders, management, or clients.",
      icon: "📄"
    },
    {
      id: "a3",
      title: "Data Visualization",
      description: "Turn complex datasets into easy-to-understand visualizations such as charts, graphs, and maps.",
      icon: "🖼️"
    },
    {
      id: "a4",
      title: "Data Exploration",
      description: "Explore large datasets to uncover patterns, trends, and insights that can drive strategic initiatives.",
      icon: "🔍"
    },
    {
      id: "a5",
      title: "Performance Monitoring",
      description: "Track key performance indicators (KPIs) in real-time to monitor business performance and identify areas for improvement.",
      icon: "⏱️"
    },
    {
      id: "a6",
      title: "Forecasting & Predictive Analytics",
      description: "Use historical data to forecast future trends and outcomes, helping businesses anticipate market changes and plan accordingly.",
      icon: "🔮"
    },
    {
      id: "a7",
      title: "Data Collaboration",
      description: "Share and collaborate on data and reports within teams or across departments to ensure everyone has access to critical insights.",
      icon: "👥"
    },
  ],
  contactPrompt: {
    title: "Ready to Elevate Your Data Skills?",
    description: "We're here to help you grow your career. Get in touch to learn more about our Power BI course.",
    ctaText: "Enroll Today",
    ctaLink: "/contact", // Or your enrollment page
  }
};

// A simple Icon component for demonstration (replace with a proper icon library like Heroicons if needed)
const IconWrapper = ({ icon, className = "" }) => <span className={`mr-3 text-xl ${className}`}>{icon}</span>;

export default function PowerBICoursePage() {
  const { title, subtitle, brochureUrl, about, applications, contactPrompt } = powerBiCourseData;

  return (
    <>
      <Header />
      <main className="bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary via-primary-dark to-blue-700 dark:from-primary-dark dark:via-blue-800 dark:to-slate-900 text-white pt-32 pb-20 md:pt-40 md:pb-28 text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
              {title}
            </h1>
            <p className="text-lg sm:text-xl text-primary-light dark:text-slate-300 mb-10 max-w-2xl mx-auto">
              {subtitle}
            </p>
            <a
              href={brochureUrl}
              className="inline-block bg-white text-primary dark:bg-slate-100 dark:text-primary-dark px-8 py-3 rounded-lg font-bold text-lg shadow-lg hover:bg-opacity-90 dark:hover:bg-slate-200 transform hover:scale-105 transition duration-300 ease-in-out"
              download
            >
              Download Brochure
            </a>
          </div>
        </section>

        {/* About Power BI & Key Topics Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                What is Power BI?
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                {about.description}
              </p>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-white mb-8 text-center sm:text-left">
                Key Topics You'll Master
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {about.keyTopics.map((topic) => (
                  <div
                    key={topic.id}
                    className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
                  >
                    <div className="flex items-center mb-3">
                      <IconWrapper icon={topic.icon} className="text-primary dark:text-primary-light" />
                      <h4 className="text-lg font-semibold text-slate-800 dark:text-white">
                        {topic.title}
                      </h4>
                    </div>
                    {/* Optional: Add a short description for each topic if available */}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Applications of Power BI Section */}
        <section className="bg-slate-100 dark:bg-slate-800 py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Why Learn Power BI?
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Discover how Power BI empowers professionals across various industries:
              </p>
            </div>
            <div className="space-y-8">
              {applications.map((app) => (
                <div
                  key={app.id}
                  className="bg-white dark:bg-slate-700/50 p-6 rounded-xl shadow-lg flex flex-col sm:flex-row items-start"
                >
                  <IconWrapper icon={app.icon} className="text-2xl text-primary dark:text-primary-light mb-3 sm:mb-0 sm:mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                      {app.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      {app.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Custom CTA Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gradient-to-r from-primary/10 to-blue-500/10 dark:from-primary-dark/20 dark:to-blue-800/20 rounded-xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                {contactPrompt.title}
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
                {contactPrompt.description}
              </p>
              <a
                href={contactPrompt.ctaLink}
                className="inline-block bg-primary text-white px-10 py-3 rounded-lg font-bold text-lg shadow-md hover:bg-primary-dark dark:bg-primary-dark dark:hover:bg-primary transition-colors duration-300 transform hover:scale-105"
              >
                {contactPrompt.ctaText}
              </a>
            </div>
          </div>
        </section>

        <CallToAction /> {/* Your existing global CallToAction */}
      </main>
      <Footer />
    </>
  );
}