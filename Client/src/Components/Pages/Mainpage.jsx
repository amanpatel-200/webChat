import React, { useState } from "react";
import { Link } from "react-router-dom";
import chatLogo from "../assets/chatLogo1.png";

// Replace these with your actual screenshots
import chatDashboard from "../assets/chatdashboard.png";
import loginPage from "../assets/login.png";


const Mainpage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const features = [
    {
     
      title: "Real-Time Messaging",
      desc: "Instant messaging powered by Socket.IO.",
    },
    {
     
      title: "Image Sharing",
      desc: "Send and receive images securely.",
    },
   
    
    {
      
      title: "Online Status",
      desc: "See who's active in real-time.",
    },
    {
      
      title: "Secure Chat",
      desc: "Protected with JWT authentication.",
    },
  ];

  const techStack = [
    "React",
    
    "Tailwind CSS",
    "Socket.IO",
    "Node.js",
    "Express.js",
    "MongoDB",
    
    
  ];

  return (
    <div className="bg-slate-950 text-white min-h-screen">
      {/* NAVBAR */}
      <nav className="bg-slate-900 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-5">
          <div className="flex justify-between items-center h-20">
            <img
              src={chatLogo}
              alt="logo"
              className="h-12 object-contain"
            />

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8 text-gray-300">
              <a href="#home" className="hover:text-green-500">Home</a>
              <a href="#features" className="hover:text-green-500">Features</a>
              <a href="#tech" className="hover:text-green-500">Tech Stack</a>
              <a href="#gallery" className="hover:text-green-500">Gallery</a>
            </div>

            {/* Desktop Buttons */}
            <div className="hidden md:flex gap-3">
              <Link to="/login">
                <button className="border border-green-500 px-4 py-2 rounded-lg hover:bg-green-600 transition">
                  Login
                </button>
              </Link>

              <Link to="/signup">
                <button className="bg-green-600 px-4 py-2 rounded-lg hover:bg-green-700 transition">
                  Signup
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-3xl"
            >
              ☰
            </button>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden flex flex-col gap-4 pb-5 text-center">
              <a href="#home">Home</a>
              <a href="#features">Features</a>
              <a href="#tech">Tech Stack</a>
              <a href="#gallery">Gallery</a>

              <Link to="/login">
                <button className="border border-green-500 py-2 rounded-lg w-full">
                  Login
                </button>
              </Link>

              <Link to="/signup">
                <button className="bg-green-600 py-2 rounded-lg w-full">
                  Signup
                </button>
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* HERO SECTION */}
      <section
        id="home"
        className="max-w-7xl mx-auto px-6 lg:px-12 py-16 flex flex-col lg:flex-row items-center justify-between gap-12"
      >
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Real-Time
            <span className="text-green-500"> Chat Platform</span>
          </h1>

          <p className="text-gray-400 mt-6 text-lg">
            Secure messaging, image sharing, group chats, typing indicators,
            online presence, and encrypted communication powered by MERN Stack
            and Socket.IO.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link to="/signup">
              <button className="bg-green-600 px-6 py-3 rounded-lg hover:bg-green-700">
                Get Started
              </button>
            </Link>

            
          </div>
        </div>

        <div className="lg:w-1/2">
          <img
            src={chatDashboard}
            alt="dashboard"
            className="rounded-2xl shadow-2xl w-full"
          />
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Features
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-slate-800 p-6 rounded-xl hover:-translate-y-2 transition"
              >
                <div className="text-4xl">{feature.icon}</div>

                <h3 className="text-xl font-semibold mt-4">
                  {feature.title}
                </h3>

                <p className="text-gray-400 mt-3">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section id="tech" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Tech Stack
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="bg-slate-800 p-5 rounded-xl text-center hover:bg-green-600 transition"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCREENSHOTS */}
      <section id="gallery" className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Application Screenshots
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <img
              src={loginPage}
              alt="login"
              className="rounded-xl shadow-xl hover:scale-105 transition"
            />

            <img
              src={chatDashboard}
              alt="chat"
              className="rounded-xl shadow-xl hover:scale-105 transition"
            />

           
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 border-t border-slate-800 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-xl font-semibold">
            ChatApp
          </h3>

          <p className="text-gray-400 mt-3">
            Real-Time Messaging Platform built with MERN Stack & Socket.IO.
          </p>

          <div className="flex justify-center gap-6 mt-5">
            <a href="#">GitHub</a>
            <a href="#">LinkedIn</a>
            <a href="#">Contact</a>
          </div>

          <p className="text-gray-500 mt-5">
            © 2026 ChatApp. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Mainpage;