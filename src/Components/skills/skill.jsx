import Image from 'next/image';

export default function Skills() {
  return (
    <section id="skills" className="bg-[#7F8C8D] text-[#ECF0F1] py-16 px-8">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">My Skills</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center">
          <Image src="/skills/html.png" alt="HTML" width={60} height={60} className="mb-4" />
          <h3 className="text-xl font-semibold text-gray-700">HTML</h3>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center">
          <Image src="/skills/css.png" alt="CSS" width={60} height={60} className="mb-4" />
          <h3 className="text-xl font-semibold text-gray-700">CSS</h3>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center">
          <Image src="/skills/javascript.png" alt="JavaScript" width={60} height={60} className="mb-4" />
          <h3 className="text-xl font-semibold text-gray-700">JavaScript</h3>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center">
          <Image src="/skills/react.png" alt="React.js" width={60} height={60} className="mb-4" />
          <h3 className="text-xl font-semibold text-gray-700">React.js</h3>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center">
          <Image src="/skills/next.jpg" alt="Next.js" width={60} height={60} className="mb-4" />
          <h3 className="text-xl font-semibold text-gray-700">Next.js</h3>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center">
          <Image src="/skills/node.png" alt="Node.js" width={60} height={60} className="mb-4" />
          <h3 className="text-xl font-semibold text-gray-700">Node.js</h3>
        </div>
      </div>
    </section>
  );
}
