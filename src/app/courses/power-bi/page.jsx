import CallToAction from '../../../components/CallToAction';
import Footer from '../../../components/Footer';
import Header from '../../../components/Header';

export default function PowerBICoursePage() {
  return (
    <>
      <Header />
      <main className="bg-bg pt-24 pb-10 min-h-screen">
        <section className="max-w-3xl mx-auto px-4 py-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">Power BI Course</h1>
          <a href="/yugen.pdf" className="inline-block mb-6 border-2 border-primary text-primary px-8 py-3 rounded-lg font-bold text-lg bg-white/80 hover:bg-primary hover:text-white transition" download>Download Brochure</a>
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">About Power BI</h2>
            <ul className="list-disc pl-6 space-y-1 mb-4 text-lg">
              <li>Getting Started with Power BI</li>
              <li>Data Connections and Importing in Power BI</li>
              <li>Visualizations in Power BI</li>
              <li>Power BI Desktop Interface Overview</li>
              <li>DAX Essentials: Basic to Advanced</li>
              <li>Power Query: Data Transformation</li>
              <li>Interactive Dashboards in Power BI</li>
              <li>Importance of DAX Functions</li>
              <li>Sharing Reports in Power BI</li>
              <li>Data Modeling & Relationship</li>
            </ul>
            <p className="mb-4 text-lg">Power BI is like a super-smart tool for analyzing data. It lets you take all kinds of info, like sales numbers or website visits, and turn it into interactive visualizations and reports. Basically, it helps you understand your data better and make smarter decisions. Plus, it's user friendly, so even if you're not a data expert, you can still use it to uncover insights.</p>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">Power BI is used in various ways across different industries and roles:</h2>
            <ul className="list-disc pl-6 space-y-1 text-lg">
              <li><b>Business Analytics:</b> Analyzing sales data, customer demographics, and market trends to identify opportunities and make informed business decisions.</li>
              <li><b>Reporting:</b> Creating interactive reports and dashboards to visually represent data for stakeholders, management, or clients.</li>
              <li><b>Data Visualization:</b> Turning complex data sets into easy-to-understand visualizations such as charts, graphs, and maps.</li>
              <li><b>Data Exploration:</b> Exploring large data sets to uncover patterns, trends, and insights that can drive strategic initiatives.</li>
              <li><b>Performance Monitoring:</b> Tracking key performance indicators (KPIs) in real-time to monitor business performance and identify areas for improvement.</li>
              <li><b>Forecasting and Predictive Analytics:</b> Using historical data to forecast future trends and outcomes, helping businesses anticipate market changes and plan accordingly.</li>
              <li><b>Data Collaboration:</b> Sharing and collaborating on data and reports within teams or across departments to ensure everyone has access.</li>
            </ul>
          </div>
          <div className="bg-primary/10 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-bold mb-2">Do You Have Questions?</h3>
            <p className="mb-2">We'll help you to grow your career and growth.</p>
            <a href="/contact" className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-bold shadow hover:bg-primary-dark transition">Contact Us Today</a>
          </div>
        </section>
        <CallToAction />
      </main>
      <Footer />
    </>
  );
} 