export default function Hero(){
    return(
        <div id="hero" className="hero bg-[#2C3E50] text-[#ECF0F1] max-h-screen flex items-center justify-around">
            <div className="my-20 w-2xl backdrop-blur-md bg-white/30 p-6 rounded-xl">
                <h1 className="text-6xl ">Hey, <br /> I'm Siddhesh Chavan</h1>
                <p className="text-xl mt-5">I'm a passionate full-stack web developer specializing in building exceptional digital experiences using Next.js, React, and Node.js. <br /> From pixel-perfect UIs to powerful backends — I build with performance and purpose.</p>
                <p className="text-xl mt-3">Crafting Clean, Responsive & Fast Web Experiences.</p>
                <br />
                <a className="bg-[#34495E] hover:bg-[#2C3E50] text-[#ECF0F1] p-1.5 rounded-md" href="#prj">Projects</a>
                <a className="bg-[#34495E] hover:bg-[#2C3E50] text-[#ECF0F1] ml-2.5 p-1.5 rounded-md" href="#contact">Contact me</a>
            </div>

            <div>
                <img src="./hero.img.png" height={350}  width={350} alt="" />
            </div>
        </div>
    );
}