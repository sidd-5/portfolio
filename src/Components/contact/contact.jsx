export default function Contact (){
    return (
        <section id="contact" className="bg-[#2C3E50] min-h-screen flex flex-col md:flex-row items-center justify-center px-8 py-16 gap-10">
  
  {/* Contact Info Box */}
  <div className="bg-[#34495E] text-[#ECF0F1] p-8 rounded-2xl shadow-xl w-full md:w-1/2">
    <h2 className="text-4xl font-semibold mb-8">Contact Me</h2>

    <div className="flex items-center gap-4 bg-[#7F8C8D] p-4 rounded-lg mb-4">
      <span>📞</span>
      <p>+91 85917 59837</p>
    </div>

    <div className="flex items-center gap-4 bg-[#7F8C8D] p-4 rounded-lg mb-4">
      <span>✉️</span>
      <p>siddhchavan1@gmail.com</p>
    </div>

    <div className="flex items-center gap-4 bg-[#7F8C8D] p-4 rounded-lg mb-4">
      <img src="./contact/linkedin.png" alt="LinkedIn" className="h-6 w-6"/>
      <a href="https://linkedin.com" target="_blank" className="hover:underline">LinkedIn</a>
    </div>

    <div className="flex items-center gap-4 bg-[#7F8C8D] p-4 rounded-lg">
      <img src="./contact/instagram.png" alt="Instagram" className="h-6 w-6" />
      <a href="https://instagram.com" target="_blank" className="hover:underline">Instagram</a>
    </div>
  </div>

  {/* Illustration or Image */}
  <div className="bg-[#BDC3C7] rounded-2xl p-4 shadow-xl w-full md:w-1/2 flex justify-center">
    <img
      src="/contact.png"
      alt="Contact Illustration"
      className="max-h-[300px] object-contain"
    />
  </div>

</section>

    );
}