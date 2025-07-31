export default function About() {
  return (
    <section id="abt" className="bg-[#ECF0F1] py-20 px-6 sm:px-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Text Block */}
        <div className="bg-[#BDC3C7] p-8 rounded-2xl shadow-md w-full md:w-1/2">
          <h2 className="text-[#34495E] text-3xl sm:text-2xl md:text-3xl font-semibold mb-4">
            About Me
          </h2>
          <p className="text-[#2C3E50] leading-relaxed text-base sm:text-lg md:text-base">
            I am a dedicated and enthusiastic developer with a passion for creating innovative web applications.
            My journey in the tech world has been driven by a love for problem-solving and a desire to make technology
            accessible to everyone. I specialize in both front-end and back-end development, allowing me to build complete,
            full-stack solutions. My goal is to create seamless user experiences while ensuring robust functionality behind the scenes.
          </p>
        </div>

        {/* Image Block */}
        <div className="bg-[#BDC3C7] p-4 rounded-2xl shadow-lg w-full md:w-auto flex justify-center">
          <img
            src="/image-og.png"
            alt="Siddhesh Chavan"
            className="rounded-xl object-cover max-h-[300px] sm:max-h-[400px] w-full md:w-auto"
          />
        </div>
      </div>
    </section>
  );
}
