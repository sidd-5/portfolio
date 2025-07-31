import Image from 'next/image';

export default function Skills() {
  return (
    <section 
      id="skills" 
      className="bg-[#7F8C8D] text-[#ECF0F1] py-16 px-6 sm:px-10"
      aria-labelledby="skills-heading"
    >
      <h2
        id="skills-heading"
        className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white"
      >
        My Skills
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[
          { src: "/skills/html.png", alt: "HTML", label: "HTML" },
          { src: "/skills/css.png", alt: "CSS", label: "CSS" },
          { src: "/skills/javascript.png", alt: "JavaScript", label: "JavaScript" },
          { src: "/skills/react.png", alt: "React.js", label: "React.js" },
          { src: "/skills/next.jpg", alt: "Next.js", label: "Next.js" },
          { src: "/skills/node.png", alt: "Node.js", label: "Node.js" },
        ].map(({ src, alt, label }) => (
          <div
            key={label}
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center cursor-default focus:outline-none focus:ring-4 focus:ring-[#34495E]"
            tabIndex={0}
          >
            <Image src={src} alt={alt} width={60} height={60} className="mb-4" />
            <h3 className="text-xl font-semibold text-gray-700">{label}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
