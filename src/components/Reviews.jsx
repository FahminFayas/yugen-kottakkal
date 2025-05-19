const reviews = [
  {
    name: 'Thanvira Salam',
    location: 'Calicut',
    rating: 4.7,
    text: 'I am glad to be as a former student of Yugen. I had a best experience and training from Yugen and the faculties are Very talented and experienced. Yugen provides good future to their students.'
  },
  {
    name: 'Aswanth Mohan',
    location: 'Malappuram',
    rating: 4.8,
    text: 'I am a student recently finished studying from Yugen. I had an awesome experience. Teachers were awesome and so supportive. Teaching methods are so advanced and practical oriented.'
  },
  {
    name: 'Ayisha M',
    location: 'Calicut',
    rating: 5,
    text: 'Recently completed my course from Yugen. It was a nice experience, Teachers and management are very friendly and supportive. Advanced study techniques and well arranged facilities.'
  },
  {
    name: 'Susan Thomas',
    location: 'Kannur',
    rating: 4.7,
    text: 'Yugen provides good future to students who persuade accounting as their profession. They also maintain good relationship with students. They provide Modern Labs facilities and using advanced softwares.'
  },
];

export default function Reviews() {
  return (
    <section className="bg-white py-12 dark:bg-bg-dark dark:text-white">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-[32px]">Our Students <span className="text-primary">Reviews</span></h2>
        </div>
        <div className="flex flex-wrap gap-6 justify-center mb-8">
          {reviews.map((review, i) => (
            <div key={i} className="flex-1 min-w-[260px] bg-bg rounded-xl shadow-md p-5 max-w-[320px] dark:bg-bg2-dark" aria-label={`Review by ${review.name}`}> 
              <div className="flex items-center mb-3">
                <img src="/img/user.jpg" alt={`Profile photo of ${review.name}`} className="w-12 h-12 rounded-full mr-3" />
                <div>
                  <div className="font-bold text-[18px]">{review.name}</div>
                  <div className="text-primary font-semibold">{review.location}</div>
                  <div className="text-yellow-500 font-semibold">{'★'.repeat(Math.round(review.rating))} <span className="text-[#222] font-normal text-[14px] dark:text-dark3-dark">({review.rating})</span></div>
                </div>
              </div>
              <div className="text-[15px] text-[#444] dark:text-dark3-dark">{review.text}</div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <a href="https://www.google.com/search?q=yugen+school+of+accounting+Kottakkal&rlz=1C1CHBF_enIN993IN993&sxsrf=ALiCzsYVWYy9yofTkF8v-vU8jUYIV3eJEw%3A1651399938822&ei=Al1uYtzjMfPXz7sPqPOquAY&ved=0ahUKEwjc7PCViL73AhXz63MBHai5CmcQ4dUDCA4&uact=5&oq=yugen+school+of+accounting+Kottakkal&gs_lcp=Cgdnd3Mtd2l6EAMyBQghEKABMgUIIRCgAToOCC4QgAQQxwEQrwEQsAM6OggIABCABBCwAzoICAAQgAQQsAM6BQgAEIAEOgYIABAWEB46BAghEBU6BwghEAoQoAFKBAhBGAFKBAhGGABQswJYqxVgvhdoAXAAeACAAZcBiAHACpIBBDAuMTCYAQCgAQHIAQHAAQE&sclient=gws-wiz#lrd=0x3ba65bc08356bebb:0x7298bfed3501ec53,3,,," target="_blank" rel="noopener" className="bg-[#e0f7f1] text-primary px-6 py-2 rounded-lg no-underline font-semibold focus-outline" aria-label="Write a review for Yugen Education on Google">Write a review</a>
        </div>
      </div>
    </section>
  );
} 