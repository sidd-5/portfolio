const projects = [
  {
    title: "Petfit",
    description:
      "A web platform that helps pet owners track their pets' health, nutrition, exercise routines, and vet appointments. Designed with user-friendly dashboards and responsive design.",
    github: "#",
    demo: "#",
  },
  {
    title: "Mercedes Clone",
    description:
      "A high-fidelity front-end clone of the Mercedes-Benz official website. Features luxury-themed UI, car models showcase, interactive sliders, and responsive layout.",
    github: "#",
    demo: "#",
  },
  {
    title: "Amazon Clone",
    description:
      "Fully functional e-commerce clone of Amazon with product listings, dynamic cart, checkout page, and integrated payment gateway simulation.",
    github: "#",
    demo: "#",
  },
  {
    title: "Bhoomi Jewellery",
    description:
      "A beautifully crafted website for a jewellery business featuring a product gallery, enquiry form, and mobile-optimized layout for seamless shopping experience.",
    github: "#",
    demo: "#",
  },
  {
    title: "Don Bosco School",
    description:
      "An informative and clean website for Don Bosco School showcasing announcements, student resources, photo gallery, and contact form for parents.",
    github: "#",
    demo: "#",
  },
  {
    title: "Jai Malhar Fruits Merchant",
    description:
      "Business website for a local fruit merchant with catalog display, seasonal offers, order form integration, and a responsive, user-friendly interface.",
    github: "#",
    demo: "#",
  },
];

export default function ProjectsSection() {
  return (
    <section id="prj" className="bg-[#BDC3C7] text-[#2C3E50] min-h-screen px-6 py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
        {/* Left Side: Sticky Title on md and larger */}
        <div className="md:w-1/3 md:h-screen md:sticky md:top-0 flex items-center justify-center">
          <h2 className="text-6xl md:text-8xl font-bold select-none text-[#34495E] text-center md:text-left whitespace-nowrap">
            Projects
          </h2>
        </div>

        {/* Right Side: Project Cards */}
        <div className="md:w-2/3 flex flex-col gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">{project.title}</h3>
              <p className="mb-6 text-base md:text-lg leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-[#34495E] hover:bg-[#2C3E50] text-[#ECF0F1] rounded-md transition"
                >
                  GitHub Repo
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-[#34495E] hover:bg-[#2C3E50] text-[#ECF0F1] rounded-md transition"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
