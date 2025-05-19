import Header from '../../components/Header';
import CallToAction from '../../components/CallToAction';
import Footer from '../../components/Footer';
import FloatingContactButton from '../../components/FloatingContactButton';

const galleryImages = [
  '1.jpg', '1.jpeg', '2.jpg', '2.jpeg', '3.jpg', '3.jpeg', '4.jpg', '4.jpeg', '5.jpg', '5.jpeg', '6.jpg', '6.jpeg', '7.jpg', '7.jpeg', '8.jpg', '8.jpeg', '9.jpeg', '10.jpeg'
];

const youtubeVideos = [
  'f8SblPNN7bw',
  'tRtPlTHDnls',
  'p3gbLKaenjs',
  'IHn5Yk9Jbbk',
  'pwPhc0l6S6c',
  'xGO9FsTN0ZI',
];

export default function GalleryPage() {
  return (
    <>
      <Header />
      {/* Hero Section */}
      <section className="bg-cover bg-center text-white py-16 min-h-[220px] flex items-center dark:bg-bg-dark dark:text-white" style={{ backgroundImage: "url('/img/banner-1.jpg')" }}>
        <div className="max-w-[900px] mx-auto w-full">
          <h1 className="text-[40px] mb-2">Gallery</h1>
        </div>
      </section>

      {/* Gallery Images */}
      <section className="bg-white py-12 dark:bg-bg-dark dark:text-white">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-[32px]">Photo <span className="text-primary">Gallery</span></h2>
          </div>
          <div className="flex flex-wrap gap-6 justify-center">
            {galleryImages.map((img, i) => (
              <div key={img} className="flex-1 min-w-[220px] max-w-[260px] bg-bg rounded-xl shadow-md p-2 dark:bg-bg2-dark" aria-label={`Gallery image ${i + 1}`}> 
                <img src={`/img/gallery/${img}`} alt={`Yugen Education event photo ${i + 1}`} className="w-full h-[180px] object-cover rounded-lg" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube Videos */}
      <section className="bg-bg py-12 dark:bg-bg2-dark dark:text-white">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-[32px]">Video <span className="text-primary">Gallery</span></h2>
          </div>
          <div className="flex flex-wrap gap-6 justify-center">
            {youtubeVideos.map((id, i) => (
              <div key={id} className="flex-1 min-w-[320px] max-w-[400px] bg-white rounded-xl shadow-md p-2 dark:bg-bg-dark" aria-label={`YouTube video ${i + 1}`}> 
                <iframe width="100%" height="220" src={`https://www.youtube.com/embed/${id}`} title={`Yugen Education YouTube video ${i + 1}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="rounded-lg"></iframe>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a href="https://www.youtube.com/channel/UCAUOchT1ACMHk7VAns5Bilw/community?pvf=CAI%253D" target="_blank" rel="noopener" className="bg-[#e0f7f1] text-primary px-6 py-2 rounded-lg no-underline font-semibold focus-outline" aria-label="View more Yugen Education videos on YouTube">View More Videos</a>
          </div>
        </div>
      </section>
      <CallToAction />
      <Footer />
      <FloatingContactButton />
    </>
  );
} 