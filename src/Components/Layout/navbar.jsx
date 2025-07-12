export default function Navbar(){
    return (
        <div >
            {/* <nav className="navbar flex bg-gray-800 h-16 items-center justify-between px-8 text-white mx-3 my-3 rounded-md "> */}
            <nav className="flex bg-[#2C3E50] text-[#ECF0F1] h-16 items-center justify-between px-8 ">
            <div className="logo">Siddhesh Chavan</div>

            <div className="links p-10 gap-10 flex">
                <a href="#hero">Home</a>
                <a href="#abt">About</a>
                <a href="#prj">Projects</a>
                <a href="#skills">Skills</a>
                <a href="#contact">Contact</a>
            </div>
        </nav>
        </div>
    
    );
}