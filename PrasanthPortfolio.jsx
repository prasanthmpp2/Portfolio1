import React from "react";

export default function PrasanthPortfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-800 text-white">
      {/* NAVBAR */}
      <nav className="backdrop-blur-lg bg-white/10 shadow-lg fixed w-full top-0 z-50 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6">
          <h1 className="text-2xl font-bold tracking-wider">Prasanth</h1>
          <div className="space-x-6 hidden md:block">
            <a href="#about" className="hover:text-yellow-300">About</a>
            <a href="#skills" className="hover:text-yellow-300">Skills</a>
            <a href="#projects" className="hover:text-yellow-300">Projects</a>
            <a href="#contact" className="hover:text-yellow-300">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="pt-32 pb-20">
        <div className="max-w-5xl mx-auto text-center px-6">
          <img
            src="/your-photo.png" 
            alt="Prasanth"
            className="h-40 w-40 mx-auto rounded-full border-4 border-white shadow-xl"
          />

          <h2 className="text-4xl font-bold mt-6">Hi, I'm Prasanth 👋</h2>
          <p className="text-xl mt-4 opacity-90">
            B.E CSE (AI & ML) Student | Developer | AI Enthusiast
          </p>

          <button className="mt-8 px-6 py-3 bg-white text-black rounded-full font-semibold shadow-lg hover:bg-yellow-300 transition">
            Download Resume
          </button>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-20 bg-white/10 backdrop-blur-xl">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-6">About Me</h3>
          <p className="text-lg opacity-90 leading-relaxed">
            I’m Prasanth, a dedicated Computer Science engineering student 
            specializing in AI & ML. I love building real-world applications, 
            exploring machine learning models, and creating interactive UI/UX designs.
          </p>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-8">Skills</h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Python", "C++", "React", "Machine Learning", "UI/UX", "Tailwind", "TensorFlow", "API Development"].map(skill => (
              <div
                key={skill}
                className="bg-white/10 p-4 rounded-xl text-center font-semibold backdrop-blur-lg shadow-lg hover:bg-white/20 transition"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-20 bg-white/10 backdrop-blur-lg">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-8">Projects</h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 p-6 rounded-2xl shadow-lg hover:bg-white/20 transition">
              <h4 className="text-xl font-bold">AI Healthcare Chatbot</h4>
              <p className="opacity-90 mt-2">
                Built using Llama model + HuggingFace API + Streamlit.
              </p>
            </div>

            <div className="bg-white/10 p-6 rounded-2xl shadow-lg hover:bg-white/20 transition">
              <h4 className="text-xl font-bold">2D & 3D Game Engine</h4>
              <p className="opacity-90 mt-2">
                Custom engine supporting physics, rendering, assets & scripting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-6">Contact</h3>
          <p className="text-lg opacity-90">
            📧 prasanth@example.com  
            <br />
            🔗 github.com/prasanth  
            <br />
            🔗 linkedin.com/in/prasanth
          </p>

          <button className="mt-8 px-8 py-3 bg-yellow-300 text-black rounded-full shadow-lg hover:bg-white transition">
            Send Message
          </button>
        </div>
      </section>
    </div>
  );
}
