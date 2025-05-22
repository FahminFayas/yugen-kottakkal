import Header from '../../components/Header';
import CallToAction from '../../components/CallToAction';
import Footer from '../../components/Footer';
import FloatingContactButton from '../../components/FloatingContactButton';

const blogs = [
  {
    image: '1.jpg',
    title: 'How to Become a Professional Accountant',
    description: 'Learn the steps and skills required to become a professional accountant in today\'s competitive world.',
    author: 'Admin',
    date: '2023-01-10',
  },
  {
    image: '2.jpg',
    title: 'GST: What You Need to Know',
    description: 'A comprehensive guide to GST, its benefits, and how it impacts businesses and individuals.',
    author: 'Admin',
    date: '2023-02-15',
  },
  {
    image: '3.jpg',
    title: 'Career Opportunities in Taxation',
    description: 'Explore the various career opportunities available in the field of taxation and how to get started.',
    author: 'Admin',
    date: '2023-03-05',
  },
];

export default function BlogPage() {
  return (
    <>
      <Header />
      <main aria-label="YUGEN School of Accounting and Taxation - Kottakkal Blog">
      {/* Hero Section */}
      <section className="bg-cover bg-center text-white py-16 min-h-[220px] flex items-center dark:bg-bg-dark dark:text-white" style={{ backgroundImage: "url('/img/banner-6.jpg')" }}>
        <div className="max-w-[900px] mx-auto w-full">
          <h1 className="text-[40px] mb-2">Blog</h1>
        </div>
      </section>

      {/* Blog Cards */}
      <section className="bg-white py-12 dark:bg-bg-dark dark:text-white">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-[32px]">Latest <span className="text-primary">Blog Posts</span></h2>
          </div>
          <div className="flex flex-wrap gap-8 justify-center">
            {blogs.map((blog, i) => (
              <div key={i} className="flex-1 min-w-[320px] max-w-[400px] bg-bg rounded-xl shadow-md p-0 flex flex-col dark:bg-bg2-dark" aria-label={`Blog post: ${blog.title}`}> 
                <div className="w-full h-[200px] overflow-hidden rounded-t-xl">
                  <img src={`/img/gallery/${blog.image}`} alt={blog.title + ' - blog cover image'} className="w-full h-full object-cover" />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h4 className="text-[22px] mb-3">{blog.title}</h4>
                  <p className="text-[#444] text-[16px] mb-4 dark:text-dark3-dark">{blog.description}</p>
                  <div className="text-primary font-semibold mb-2">{blog.author} <span className="text-[#888] font-normal ml-2 dark:text-dark3-dark">{blog.date}</span></div>
                  <button className="bg-primary text-white px-6 py-2 rounded-lg font-semibold cursor-pointer focus-outline dark:bg-primary-dark dark:text-white" aria-label={`Read more about ${blog.title}`}>Read More</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </main>
      <CallToAction />
      <Footer />
      <FloatingContactButton />
      <link rel="canonical" href="https://yugenkottakkal.com/blog" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Blog',
        'name': 'YUGEN School of Accounting and Taxation Blog',
        'url': 'https://yugenkottakkal.com/blog',
        'description': 'Read the latest articles, tips, and news from YUGEN School of Accounting & Taxation Kottakkal on accounting, taxation, and career development.'
      }) }} />
    </>
  );
} 