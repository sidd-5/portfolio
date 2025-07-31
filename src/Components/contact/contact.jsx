import Image from "next/image";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#2C3E50] min-h-screen flex flex-col md:flex-row items-center justify-center px-6 sm:px-10 py-16 gap-10"
      aria-labelledby="contact-heading"
    >
      {/* Contact Info Box */}
      <div className="bg-[#34495E] text-[#ECF0F1] p-8 rounded-2xl shadow-xl w-full md:w-1/2 max-w-lg">
        <h2
          id="contact-heading"
          className="text-4xl font-semibold mb-8 text-center md:text-left"
        >
          Contact Me
        </h2>

        <div className="flex items-center gap-4 bg-[#7F8C8D] p-4 rounded-lg mb-4">
          <span aria-hidden="true" className="text-xl">📞</span>
          <p className="select-all">+91 85917 59837</p>
        </div>

        <div className="flex items-center gap-4 bg-[#7F8C8D] p-4 rounded-lg mb-4">
          <span aria-hidden="true" className="text-xl">✉️</span>
          <p className="break-all">siddhchavan1@gmail.com</p>
        </div>

        <div className="flex items-center gap-4 bg-[#7F8C8D] p-4 rounded-lg mb-4">
          <img
            src="/contact/linkedin.png"
            alt="LinkedIn icon"
            className="h-6 w-6 flex-shrink-0"
            loading="lazy"
          />
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline focus:outline-none focus:ring-2 focus:ring-[#ECF0F1] rounded"
            aria-label="Visit my LinkedIn profile"
          >
            LinkedIn
          </a>
        </div>

        <div className="flex items-center gap-4 bg-[#7F8C8D] p-4 rounded-lg">
          <img
            src="/contact/instagram.png"
            alt="Instagram icon"
            className="h-6 w-6 flex-shrink-0"
            loading="lazy"
          />
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline focus:outline-none focus:ring-2 focus:ring-[#ECF0F1] rounded"
            aria-label="Visit my Instagram profile"
          >
            Instagram
          </a>
        </div>
      </div>

      {/* Illustration or Image */}
      <div className="bg-[#BDC3C7] rounded-2xl p-4 shadow-xl w-full md:w-1/2 max-w-lg flex justify-center">
        {/* Optionally use Next.js Image component for optimization */}
        <img
          src="/contact.png"
          alt="Contact Illustration"
          className="max-h-[300px] w-auto object-contain"
          loading="lazy"
        />
      </div>
    </section>
  );
}
