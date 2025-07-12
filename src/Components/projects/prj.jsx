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
    <section id="prj" className="flex bg-[#BDC3C7] text-white min-h-screen">
      {/* Left Side: Fixed Title */}
      <div className="w-1/3 h-screen sticky top-0 flex items-center justify-center p-8">
        <h2 className="text-8xl font-bold">Projects</h2>
      </div>

      {/* Right Side: Scrollable Cards */}
      <div className="w-2/3 flex flex-col gap-10 py-16 px-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-[#ECF0F1] p-8 ml-72 h-auto rounded-xl shadow-md">
            <h3 className="text-3xl text-[#2C3E50] font-semibold mb-4">{project.title}</h3>
            <p className="text-[#2C3E50] mb-6">{project.description}</p>
            <div className="flex gap-4">
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
    </section>
  );
}
