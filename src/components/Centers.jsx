const centers = [
  {
    city: 'Malappuram',
    name: 'Kottakkal',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.030797431813!2d76.0031883146249!3d11.00413499214496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7b3a1b96cd4c9%3A0x8a9a6f8f7e7b9f0e!2sYugen%20Education%20Kottakkal!5e0!3m2!1sen!2sin!4v1678083095025!5m2!1sen!2sin',
    phone: '+918943888006',
    coordinates: { lat: 11.004130, lng: 76.005363 }
  }
];

export default function Centers() {
  return (
    <section className="bg-bg dark:bg-bg-dark py-16">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold dark:text-white mb-4">Our <span className="text-primary">Center</span></h2>
        </div>
        <div className="flex justify-center">
          {centers.map((center, i) => (
            <div key={i} className="w-full max-w-2xl bg-white dark:bg-bg2-dark rounded-3xl shadow-2xl border border-primary/20 dark:border-primary-dark/30 p-8 flex flex-col items-center">
              <div className="mb-6 w-full rounded-2xl overflow-hidden shadow-lg">
                <iframe src={center.map} width="100%" height="320" style={{ border: 0, borderRadius: 16 }} allowFullScreen="" loading="lazy" title={center.name}></iframe>
              </div>
              <div className="font-semibold text-primary text-xl mb-2">{center.city}</div>
              <div className="font-bold text-3xl my-2 dark:text-white text-center">{center.name}</div>
              {/* <div className="text-gray-600 dark:text-gray-300 text-lg mb-6 text-center">Latitude: {center.coordinates.lat}, Longitude: {center.coordinates.lng}</div> */}
              <a href={`tel:${center.phone}`} className="inline-block mt-2 bg-primary text-white px-8 py-3 rounded-xl font-bold text-lg shadow-lg hover:bg-primary-dark transition">Call Now</a>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <a href="/contact#Centers" className="bg-[#e0f7f1] dark:bg-bg2-dark text-primary dark:text-primary-dark px-8 py-3 rounded-xl font-semibold text-lg shadow hover:bg-primary/10 dark:hover:bg-primary-dark/20 transition">Know More</a>
        </div>
      </div>
    </section>
  );
} 