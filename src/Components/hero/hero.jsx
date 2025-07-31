export default function Hero() {
  return (
    <div
      id="hero"
      className="
        hero bg-[#2C3E50] text-[#ECF0F1] 
        min-h-screen flex flex-col-reverse md:flex-row 
        items-center justify-center md:justify-around px-4
      "
    >
      {/* Left Content */}
      <div
        className="
          mt-8 md:my-20 w-full md:w-2/3 lg:w-2/5 
          backdrop-blur-md bg-white/30 p-6 rounded-xl shadow-lg
          flex flex-col items-center md:items-start
        "
      >
        <h1
          className="
            text-4xl sm:text-5xl md:text-6xl font-bold text-center md:text-left
          "
        >
          Hey, <br /> I'm Siddhesh Chavan
        </h1>
        <p className="text-base sm:text-lg md:text-xl mt-5 text-center md:text-left">
          I'm a passionate full-stack web developer specializing in building exceptional digital experiences using Next.js, React, and Node.js.
          <br />From pixel-perfect UIs to powerful backends — I build with performance and purpose.
        </p>
        <p className="text-base sm:text-lg md:text-xl mt-3 text-center md:text-left">
          Crafting Clean, Responsive & Fast Web Experiences.
        </p>
        <div className="mt-6 flex gap-4">
          <a
            className="bg-[#34495E] hover:bg-[#2C3E50] text-[#ECF0F1] px-4 py-2 rounded-md transition"
            href="#prj"
          >
            Projects
          </a>
          <a
            className="bg-[#34495E] hover:bg-[#2C3E50] text-[#ECF0F1] px-4 py-2 rounded-md transition"
            href="#contact"
          >
            Contact me
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="mb-6 md:mb-0 flex justify-center">
        <img
          src="./hero.img.png"
          alt="Hero illustration"
          className="w-48 h-48 sm:w-64 sm:h-64 md:w-[350px] md:h-[350px] object-cover rounded-full shadow-lg"
        />
      </div>
    </div>
  );
}
