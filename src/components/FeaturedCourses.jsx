'use client';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const posters = [
  '1.png', '2.jpg', '3.jpg',
];

export default function FeaturedCourses() {
  const sliderSettings = {
    rtl: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    dots: false,
    infinite: true,
    pauseOnHover: true,
    adaptiveHeight: true,
  };

  return (
    <section className="bg-bg dark:bg-bg-dark py-8 md:py-8">
      <div className="max-w-6xl mx-auto px-2 md:px-4">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-stretch">
          {/* Left Column - Redesigned */}
          <div className="md:w-1/2 w-full flex flex-col justify-center h-full">
            <div className="flex flex-col justify-center h-full px-2 md:px-6 py-4 md:py-0">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-3 dark:text-white text-primary drop-shadow-sm">
                Explore <span className="text-primary">Top Courses</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 dark:text-dark3-dark mb-6 max-w-md">
                Yugen Education offers specialized courses for students, working professionals, and others in Accounting, Taxation & GST.
              </p>
              <a
                href="/courses"
                className="inline-block bg-primary text-white px-7 py-3 rounded-lg font-semibold shadow hover:bg-primary-dark transition mb-8 text-lg"
              >
                Explore More Courses
              </a>
              <div className="flex flex-col gap-4 w-full">
                {/* Course Card 1 */}
                <div className="flex-1 bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary-dark/20 dark:to-primary-dark/10 rounded-xl shadow p-5 flex flex-row items-center gap-4 hover:scale-[1.02] transition-transform">
                  <div className="flex-shrink-0 bg-primary/20 dark:bg-primary-dark/30 rounded-full p-3">
                    <img src="/img/icons/job.svg" alt="job" className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg text-primary-dark dark:text-primary-dark mb-1">
                      ACCOUNTING COURSE
                    </h4>
                    <a
                      href="/apply"
                      className="inline-block mt-2 bg-primary text-white px-4 py-1.5 rounded font-semibold hover:bg-primary-dark transition text-sm"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
                {/* Course Card 2 */}
                <div className="flex-1 bg-gradient-to-r from-blue-100 to-blue-50 dark:from-blue-900/30 dark:to-blue-800/10 rounded-xl shadow p-5 flex flex-row items-center gap-4 hover:scale-[1.02] transition-transform">
                  <div className="flex-shrink-0 bg-blue-200 dark:bg-blue-900/40 rounded-full p-3">
                    <img src="/img/icons/computer.svg" alt="Computer" className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg text-blue-900 dark:text-blue-200 mb-1">
                      POWER BI COURSE
                    </h4>
                    <a
                      href="/apply"
                      className="inline-block mt-2 bg-blue-700 text-white px-4 py-1.5 rounded font-semibold hover:bg-blue-900 transition text-sm"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right Column: Poster Carousel, height adapts to image */}
          <div className="md:w-1/2 w-full flex justify-center items-center">
            <div className="w-full flex items-center">
              <Slider {...sliderSettings} className="w-full">
                {posters.map((img, i) => (
                  <div key={img} className="bg-bg dark:bg-bg2-dark rounded-lg shadow flex items-center justify-center w-full">
                    <a href="#" tabIndex={-1} className="block w-full">
                      <img
                        src={`/img/posters/${img}`}
                        alt={`Poster ${i + 1}`}
                        className="w-full max-h-[420px] object-contain rounded-md mx-auto"
                        style={{height: 'auto'}}
                      />
                    </a>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 