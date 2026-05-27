import {
  FaGithub,
  FaLinkedin,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
} from "react-icons/si";
import profilePic from "./assets/maneesh.jpeg";
import { useState, useEffect } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
export default function Portfolio() {
	const [active, setActive] = useState("Home");
	const [menuOpen, setMenuOpen] = useState(false);
	const [mousePosition, setMousePosition] = useState({
  x: 0,
  y: 0,
});
	
	useEffect(() => {

  const handleScroll = () => {

    const sections = [
      "home",
      "about",
      "skills",
      "projects",
      "contact",
    ];

    const scrollPosition = window.scrollY + 200;

    sections.forEach((section) => {

      const element =
        section === "home"
          ? document.body
          : document.getElementById(section);

      if (!element) return;

      const offsetTop =
        section === "home"
          ? 0
          : element.offsetTop;

      const offsetHeight =
        section === "home"
          ? window.innerHeight
          : element.offsetHeight;

      if (
        scrollPosition >= offsetTop &&
        scrollPosition < offsetTop + offsetHeight
      ) {

        setActive(
          section.charAt(0).toUpperCase() + section.slice(1)
        );

      }

    });

  };

  window.addEventListener("scroll", handleScroll);

  handleScroll();

  return () =>
    window.removeEventListener("scroll", handleScroll);

}, []);
useEffect(() => {

    const handleMouseMove = (e) => {

      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });

    };

    window.addEventListener("mousemove", handleMouseMove);

    return () =>
      window.removeEventListener("mousemove", handleMouseMove);

  }, []);
  return (
    <div className="bg-[#030712] text-white min-h-screen overflow-x-hidden relative">
	{/* CURSOR GLOW */}
	<div className="pointer-events-none fixed inset-0 z-0">

  <div
    className="absolute w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]"
    style={{
      left: mousePosition.x - 250,
      top: mousePosition.y - 250,
    }}
  ></div>

</div>

       {/* ANIMATED BG */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[140px] animate-pulse"></div>

        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[140px] animate-pulse"></div>

      </div>
      {/* NAVBAR */}
<nav className="fixed top-5 left-1/2 -translate-x-1/2 w-[92%] z-[100]">

  <div className="backdrop-blur-xl bg-white/5 border border-blue-500/20 rounded-3xl px-6 md:px-8 py-5 flex items-center justify-between shadow-[0_0_30px_rgba(59,130,246,0.08)]">

    {/* LOGO */}
    <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
      Maneesh<span className="text-blue-500">.</span>
    </h1>

    {/* DESKTOP NAV */}
    <div className="hidden md:flex gap-14 text-lg text-gray-300">

      {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (

        <a
          key={item}
          href={item === "Home" ? "#" : `#${item.toLowerCase()}`}
          onClick={() => setActive(item)}
          className={`relative transition duration-300 hover:text-white pb-2 ${
            active === item
              ? "text-blue-500"
              : "text-gray-300"
          }`}
        >

          {item}

          <span
            className={`absolute left-0 -bottom-1 h-[2px] bg-blue-500 rounded-full transition-all duration-300 ${
              active === item
                ? "w-full opacity-100"
                : "w-0 opacity-0"
            }`}
          ></span>

        </a>

      ))}

    </div>

    {/* DESKTOP BUTTON */}
    <button className="hidden md:block px-7 py-3 rounded-2xl border border-blue-500/40 hover:border-blue-400 bg-blue-500/10 backdrop-blur-md transition hover:bg-blue-500/20">

      Download Resume

    </button>

    {/* MOBILE MENU BUTTON */}
    <button
      className="md:hidden text-3xl text-blue-400"
      onClick={() => setMenuOpen(!menuOpen)}
    >

      {menuOpen ? <HiX /> : <HiMenuAlt3 />}

    </button>

  </div>

  {/* MOBILE MENU */}
  {menuOpen && (

    <div className="md:hidden mt-4 backdrop-blur-xl bg-[#0B1120]/95 border border-blue-500/20 rounded-3xl p-6 shadow-[0_0_30px_rgba(59,130,246,0.08)]">

      <div className="flex flex-col gap-6 text-lg">

        {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (

          <a
            key={item}
            href={item === "Home" ? "#" : `#${item.toLowerCase()}`}
            onClick={() => {
              setActive(item);
              setMenuOpen(false);
            }}
            className={`transition ${
              active === item
                ? "text-blue-500"
                : "text-gray-300"
            }`}
          >

            {item}

          </a>

        ))}

        <button className="mt-4 px-6 py-4 rounded-2xl border border-blue-500/40 bg-blue-500/10 text-white">

          Download Resume

        </button>

      </div>

    </div>

  )}

</nav>

      {/* HERO */}
      <section id="home"
	  className="min-h-screen flex items-center justify-center px-6 relative z-10">

        <div className="max-w-6xl text-center relative z-10">

          <p className="text-blue-400 text-3xl mb-8 font-medium">
            Hey, I'm
          </p>

          <h1 className="text-7xl md:text-[120px] font-extrabold tracking-tight leading-none mb-8">

            <span className="bg-gradient-to-r from-white via-blue-100 to-blue-500 bg-clip-text text-transparent">

              Maneesh Raj

            </span>

          </h1>

          <h2 className="text-2xl md:text-5xl font-medium text-gray-200 mb-10 leading-relaxed">

            Engineering Student

            <span className="text-blue-500"> | </span>

            MERN Stack Learner

            <span className="text-blue-500"> | </span>

            Full Stack Developer

          </h2>

          <div className="flex justify-center mb-12">

            <div className="w-40 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent relative">

              <div className="w-3 h-3 bg-blue-500 rounded-full absolute left-1/2 -translate-x-1/2 -top-[5px] shadow-[0_0_25px_#3b82f6]"></div>

            </div>

          </div>

          <p className="text-gray-400 text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto mb-14">

            I enjoy building responsive web applications, exploring modern technologies,
            and turning ideas into real projects while continuously improving my development skills.

          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">

            <button className="px-10 py-5 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 transition duration-300 font-semibold text-lg shadow-[0_0_40px_rgba(59,130,246,0.35)]">

              Download Resume

            </button>

            <a
              href="#projects"
              className="px-10 py-5 rounded-2xl border border-blue-500/30 hover:border-blue-400 bg-white/5 backdrop-blur-md transition duration-300 font-semibold text-lg hover:-translate-y-1"
            >

              View Projects

            </a>

          </div>
		  
		  <div className="hidden lg:block">

  <FaReact className="absolute top-[25%] left-[10%] text-cyan-400 text-6xl animate-bounce opacity-70" />

  <FaNodeJs className="absolute top-[65%] left-[15%] text-green-400 text-6xl animate-bounce opacity-70" />

  <SiMongodb className="absolute top-[30%] right-[12%] text-green-500 text-5xl animate-bounce opacity-70" />

  <SiExpress className="absolute bottom-[18%] right-[15%] text-gray-300 text-5xl animate-bounce opacity-70" />

</div>

        </div>

      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="px-6 pb-24 relative z-10"
      >

        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8 items-center">

          <div>

            <div className="flex items-center gap-5 mb-6">

              <div className="w-14 h-14 rounded-2xl border border-blue-500/40 flex items-center justify-center text-blue-500 text-2xl bg-blue-500/10">

                01

              </div>

              <h2 className="text-5xl font-bold">
                About Me
              </h2>

            </div>

            <p className="text-gray-400 text-xl leading-relaxed">

              I'm a BTech student who enjoys learning by building projects.
              From web applications to problem-solving and modern development tools,
              I like experimenting with technologies and improving step by step through practical experience.

            </p>

          </div>

          {/* IMAGE */}
          <div className="flex justify-center">

            <div className="w-[320px] h-[420px] rounded-3xl border border-blue-500/30 overflow-hidden bg-[#111827]">

              <img
                src={profilePic}
                alt="profile"
                className="w-full h-full object-cover"
              />

            </div>

          </div>

          {/* RIGHT CARDS */}
          <div className="space-y-6">

            <div className="bg-white/5 backdrop-blur-xl border border-blue-500/20 rounded-3xl p-7">

              <h3 className="text-2xl font-semibold mb-3">
                Education
              </h3>

              <p className="text-gray-400 text-lg">
                BTech Engineering Student
              </p>

            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-blue-500/20 rounded-3xl p-7">

              <h3 className="text-2xl font-semibold mb-3">
                Interests
              </h3>

              <p className="text-gray-400 text-lg">
                Web Development • DevOps • UI Design • Backend Basics
              </p>

            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-blue-500/20 rounded-3xl p-7">

              <h3 className="text-2xl font-semibold mb-3">
                Current Focus
              </h3>

              <p className="text-gray-400 text-lg">
                Building full-stack projects and improving development skills.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="px-6 py-28 relative z-10"
      >

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <p className="text-blue-400 text-xl mb-4">
              My Stack
            </p>

            <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
              Skills & Technologies
            </h2>

          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

            {[
              "Java",
              "HTML",
              "CSS",
              "JavaScript",
              "MongoDB",
              "Express JS",
              "DevOps",
              "React",
            ].map((skill, index) => (

              <div
                key={index}
                className="bg-white/5 backdrop-blur-xl border border-blue-500/20 rounded-3xl p-8 text-center hover:-translate-y-2 hover:border-blue-400 transition duration-300"
              >

                <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 mx-auto mb-5 flex items-center justify-center text-blue-400 text-2xl">

                  {index + 1}

                </div>

                <h3 className="text-2xl font-semibold">
                  {skill}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>
	  {/* PROJECTS */}
      <section
        id="projects"
        className="px-6 py-28 relative z-10"
      >

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <p className="text-blue-400 text-xl mb-4">
              My Work
            </p>

            <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
              Featured Projects
            </h2>

          </div>

          <div className="grid lg:grid-cols-2 gap-10">

            {/* PROJECT 1 */}
            <a
              href="https://maneeshraj422007.github.io/Employee-Management-System/"
              target="_blank"
              className="group"
            >

              <div className="bg-white/5 backdrop-blur-xl border border-blue-500/20 rounded-[32px] overflow-hidden hover:border-blue-400 transition duration-300 hover:-translate-y-2">

                {/* IMAGE */}
                <div className="h-[260px] overflow-hidden">

                  <img
                    src="/portfolio/ems.png"
                    alt="project"
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
				  
				  {/* OVERLAY */}
					<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">

						<div className="px-6 py-3 rounded-2xl border border-blue-400 bg-blue-500/10 backdrop-blur-md text-white font-semibold">

							View Project

						</div>

					</div>	

                </div>

                {/* CONTENT */}
                <div className="p-8">

                  <h3 className="text-3xl font-bold mb-4">
                    Employee Management System
                  </h3>

                  <p className="text-gray-400 text-lg leading-relaxed mb-6">

                    A responsive employee management system with authentication,
                    employee records, department management, and search functionality
                    built using the MERN stack.

                  </p>

                  <div className="flex flex-wrap gap-3">

                    {["React", "Node.js", "MongoDB", "Express"].map((tech, i) => (

                      <span
                        key={i}
                        className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300"
                      >

                        {tech}

                      </span>

                    ))}

                  </div>

                </div>

              </div>

            </a>

            {/* PROJECT 2 */}
            <a
              href="https://maneeshraj422007.github.io/Task-Manager/"
              target="_blank"
              className="group"
            >

              <div className="bg-white/5 backdrop-blur-xl border border-blue-500/20 rounded-[32px] overflow-hidden hover:border-blue-400 transition duration-300 hover:-translate-y-2">

                {/* IMAGE */}
                <div className="h-[260px] overflow-hidden">

                  <img
                    src="/portfolio/task.png"
                    alt="Task Manager"
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
				  
				  {/* OVERLAY */}
					<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">

						<div className="px-6 py-3 rounded-2xl border border-blue-400 bg-blue-500/10 backdrop-blur-md text-white font-semibold">

							View Project

						</div>

					</div>

                </div>

                {/* CONTENT */}
                <div className="p-8">

                  <h3 className="text-3xl font-bold mb-4">
                    Task Manager App
                  </h3>

                  <p className="text-gray-400 text-lg leading-relaxed mb-6">

                    A full-stack task management application that allows users
                    to organize tasks, manage workflow, and track progress with
                    a clean responsive interface.

                  </p>

                  <div className="flex flex-wrap gap-3">

                    {["React", "Express", "MongoDB"].map((tech, i) => (

                      <span
                        key={i}
                        className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300"
                      >

                        {tech}

                      </span>

                    ))}

                  </div>

                </div>

              </div>

            </a>

          </div>

        </div>

      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="px-6 py-28 relative z-10"
      >

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-20">

            <p className="text-blue-400 text-xl mb-4">
              Contact
            </p>

            <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
              Let's Connect
            </h2>

          </div>

          <div className="grid lg:grid-cols-2 gap-10">

            {/* LEFT */}
            <div className="bg-white/5 backdrop-blur-xl border border-blue-500/20 rounded-[32px] p-10">

              <h3 className="text-3xl font-bold mb-8">
                Contact Information
              </h3>

              <div className="space-y-8">

                <div>

                  <p className="text-blue-400 mb-2">
                    Email
                  </p>

                  <p className="text-xl text-gray-300">
                    maneesh@example.com
                  </p>

                </div>

                <div>

                  <p className="text-blue-400 mb-2">
                    Location
                  </p>

                  <p className="text-xl text-gray-300">
                    India
                  </p>

                </div>

                <div>

                  <p className="text-blue-400 mb-2">
                    Availability
                  </p>

                  <p className="text-xl text-gray-300">
                    Open to internships & collaborations
                  </p>

                </div>

              </div>

              {/* SOCIALS */}
              <div className="flex gap-5 mt-12">

                <a
                  href="https://github.com/maneeshraj422007"
                  target="_blank"
                  className="px-6 py-4 rounded-2xl border border-blue-500/20 bg-blue-500/10 hover:border-blue-400 transition"
                >

                  <div className="flex items-center gap-3">
					<FaGithub />
						GitHub
				</div>

                </a>

                <a
                  href="https://www.linkedin.com/in/maneesh-raj-4982ba325/"
                  target="_blank"
                  className="px-6 py-4 rounded-2xl border border-blue-500/20 bg-blue-500/10 hover:border-blue-400 transition"
                >

                  <div className="flex items-center gap-3">
					<FaLinkedin />
						LinkedIn
				</div>

                </a>

              </div>

            </div>

            {/* FORM */}
            <div className="bg-white/5 backdrop-blur-xl border border-blue-500/20 rounded-[32px] p-10">

              <form className="space-y-6">

                <div>

                  <label className="block text-gray-300 mb-3 text-lg">
                    Your Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full bg-[#030712] border border-blue-500/20 rounded-2xl px-6 py-5 outline-none focus:border-blue-400 transition text-lg"
                  />

                </div>

                <div>

                  <label className="block text-gray-300 mb-3 text-lg">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-[#030712] border border-blue-500/20 rounded-2xl px-6 py-5 outline-none focus:border-blue-400 transition text-lg"
                  />

                </div>

                <div>

                  <label className="block text-gray-300 mb-3 text-lg">
                    Message
                  </label>

                  <textarea
                    rows="6"
                    placeholder="Write your message..."
                    className="w-full bg-[#030712] border border-blue-500/20 rounded-2xl px-6 py-5 outline-none focus:border-blue-400 transition text-lg"
                  ></textarea>

                </div>

                <button
                  type="submit"
                  className="w-full py-5 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 transition duration-300 font-semibold text-lg shadow-[0_0_40px_rgba(59,130,246,0.35)]"
                >

                  Send Message

                </button>

              </form>

            </div>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-blue-500/10 py-10 text-center text-gray-500 text-lg relative z-10">

        Built with React & Tailwind CSS by Maneesh Raj

      </footer>
	    </div>
  );
}