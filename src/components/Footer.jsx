export default function Footer() {
  return (
    <footer className="bg-white text-[#222] pt-12 pb-4 text-center dark:bg-[#18181b] dark:text-white transition-colors duration-300 border-t border-gray-200 dark:border-dark3-dark">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex flex-wrap justify-between gap-8 mb-8">
          <div className="flex-1 min-w-[260px] text-left">
            <img src="/img/logo-light.png" alt="Yugen Education" className="w-40 mb-4" />
            <p className="text-[#ccc] text-[15px] mb-4 dark:text-dark3-dark">Yugen School of Accounting & Taxation - Kottakkal aims to provide world class training for Global Accounting and Taxation qualifications and develop the professional Accountant of upcoming Days.</p>
            <a href="/yugen.pdf" className="bg-primary text-white px-6 py-2 rounded-lg no-underline font-semibold focus-outline dark:bg-primary-dark dark:text-white" download>Download Brochure</a>
          </div>
          <div className="flex-1 min-w-[180px] text-left">
            <h4 className="text-[#222] mb-3 dark:text-white font-bold">Company</h4>
            <ul className="list-none p-0 text-[#ccc] text-[15px] dark:text-dark3-dark">
              <li><a href="/about" className="text-[#ccc] no-underline focus-outline dark:text-dark3-dark">About</a></li>
              <li><a href="/courses" className="text-[#ccc] no-underline focus-outline dark:text-dark3-dark">Courses</a></li>
              <li><a href="/gallery" className="text-[#ccc] no-underline focus-outline dark:text-dark3-dark">Gallery</a></li>
              <li><a href="/contact" className="text-[#ccc] no-underline focus-outline dark:text-dark3-dark">Contact Us</a></li>
            </ul>
          </div>
          <div className="flex-1 min-w-[180px] text-left">
            <h4 className="text-[#222] mb-3 dark:text-white font-bold">Social</h4>
            <ul className="list-none p-0 text-[#ccc] text-[15px] dark:text-dark3-dark">
              <li><a href="https://www.facebook.com/yugeneducation/" target="_blank" rel="noopener" className="text-[#ccc] no-underline focus-outline dark:text-dark3-dark">Facebook</a></li>
              <li><a href="https://www.instagram.com/yugenkottakkal/" target="_blank" rel="noopener" className="text-[#ccc] no-underline focus-outline dark:text-dark3-dark">Instagram</a></li>
              <li><a href="https://www.youtube.com/channel/UCAUOchT1ACMHk7VAns5Bilw/community?pvf=CAI%253D" target="_blank" rel="noopener" className="text-[#ccc] no-underline focus-outline dark:text-dark3-dark">Youtube</a></li>
              <li><a href="https://wa.me/918943888005" target="_blank" rel="noopener" className="text-[#ccc] no-underline focus-outline dark:text-dark3-dark">Whatsapp</a></li>
            </ul>
          </div>
          <div className="flex-1 min-w-[240px] text-left">
            <h4 className="text-[#222] mb-3 dark:text-white font-bold">Office Address</h4>
            <ul className="list-none p-0 text-[#ccc] text-[15px] dark:text-dark3-dark">
              <li>Yugen Education, Smart Trade City, Near Kottakkal Bus Stand, Kottakkal (PO), Malappuram - 676503</li>
              <li><a href="tel:+918943888006" className="text-[#ccc] no-underline focus-outline dark:text-dark3-dark">+918943888006</a></li>
              <li><a href="tel:+918943888005" className="text-[#ccc] no-underline focus-outline dark:text-dark3-dark">+918943888005</a></li>
              <li><a href="mailto:yugenkottakkal@gmail.com" className="text-[#ccc] no-underline focus-outline dark:text-dark3-dark">yugenkottakkal@gmail.com</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-4 text-[#888] text-[14px] dark:border-dark3-dark dark:text-dark3-dark">
          © 2025 Yugen Education. Developed By <a href="https://www.instagram.com/__fahmin/" target="_blank" rel="noopener" className="text-primary no-underline focus-outline dark:text-primary-dark">Fahmin</a>.
        </div>
      </div>
    </footer>
  );
} 