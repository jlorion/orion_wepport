'use client'
import Image from "next/image";
import { useState } from 'react';
import { Linkedin, Github, Twitter, Facebook, MapPin, Mail } from 'lucide-react';
import Experience from "@/components/Major/Experience";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { List, Tabs } from "@radix-ui/react-tabs";


export default function Home() {
  const [activeTab, setActiveTab] = useState('about');
  const iconVariants = {
    initial: { rotate: 0 },
    wiggle: {
      rotate: [0, -15, 15, -10, 10, -5, 5, 0],
      transition: { duration: 0.6 },
    },
  };
  const handleCopyEmail = () => {
    const email = "orionjl1106@gmail.com"; // Replace with your actual email
    navigator.clipboard.writeText(email).then(() => {
      alert("Email copied to clipboard! ✨"); // Optional: Show a confirmation
    }).catch(err => {
      alert("Failed to copy email 😔");
      console.error(err);
    });
  };
  return (
    <div className="min-h-screen bg-slate-800 p-4 sm:p-8 md:p-12 flex justify-center items-center font-[family-name:var(--font-geist-sans)]">
      <div className="max-w-4xl w-full bg-gray-900 rounded-xl shadow-xl overflow-hidden">
        {/* Profile Section */}
        <div className="flex flex-col md:flex-row gap-6 p-6">
          {/* Left - Profile Image */}
          <div className="flex flex-col items-center md:items-center">
            <div className="w-32 h-32 overflow-hidden rounded-lg border-2 border-blue-400 relative">
              <Image 
                src="/orion.png"
                alt="Profile" 
                width={128}
                height={128}
                className="object-cover"
              />
            </div>
            <div className="flex gap-2 mt-4">
          <motion.a
            href="https://www.linkedin.com/in/jl-orion-6335a3216/"
            className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition"
            whileHover={{ scale: 1.2 }} // Scale up on hover
            transition={{ duration: 0.3 }} // Smooth transition
          >
            <Linkedin size={16} className="text-blue-400" />
          </motion.a>
          <motion.a
            href="https://github.com/jlorion"
            className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition"
            whileHover={{ scale: 1.2 }} // Scale up on hover
            transition={{ duration: 0.3 }} // Smooth transition
          >
            <Github size={16} className="text-gray-200" />
          </motion.a>
          <motion.a
            href="#"
            className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition"
            whileHover={{ scale: 1.2 }} // Scale up on hover
            transition={{ duration: 0.3 }} // Smooth transition
            onClick={handleCopyEmail}
          >
            <Mail size={16} className="text-gray-200" />
          </motion.a>
          </div>
            {/* <Button className="mt-4 px-4 py-2 bg-transparent border-2 border-blue-700 hover:bg-slate-700 hover:border-0 text-amber-50 rounded-md text-sm transition">
              button here
            </Button> */}
          </div>

          {/* Right - Info */}
          <div className="flex-1 mt-6 md:mt-0">
            <h1 className="flex flex-col md:flex-row text-2xl font-bold items-center md:items-center text-blue-400">
              Hey! I'm Sef<motion.span whileHover={{ scale: [1, 1.3, 1], transition: { duration: 0.6, repeat: Infinity } }} className="text-yellow-400 inline-block cursor-pointer text-4xl">💛</motion.span>
            </h1>
           
            <motion.p
            className="flex flex-col md:flex-row items-center md:items-center gap-1 text-gray-400 mt-1 cursor-pointer"
            initial="initial"
            whileHover="wiggle"
            variants={{}} // optional: required if using global animation coordination
            >
              <div className="flex items-center">
              <motion.span variants={iconVariants}>
                <MapPin size={16} />
              </motion.span>
                Davao City, Philippines
              </div>
            </motion.p>

            {/* Experience Cards */}
            <div className="mt-4 space-y-4">
             <Experience/>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="p-6 pt-0">
          <div className="border-t border-gray-700 pt-6">
            <h2 className="text-blue-400 text-xl font-semibold mb-2">About</h2>
            <p className="text-gray-300 mb-4">
                Hey! I’m Sef and I do <strong>BACKEND DEV🌐</strong>, I build the stuff that you don’t see: APIs, servers, databases, data pipelines, you name it ⚙️📡. 
                <br/>
                I’m also into <strong>DATA ENGINEERING🗂️</strong> — moving data around, cleaning it up, making it useful🪄📊.
                <br/>
                Frontend? Yeah, I know my way around it — not my main thing, but I can jump in when needed 🖥️🔧.
                <br/>
                <br/>
                I use  <i className="devicon-vim-plain"></i>⌨️ btw😉
            </p>
            <h2 className="text-blue-400 text-xl font-semibold mb-2">Technologies</h2>
            <p className="text-gray-300">Technologies that I have touched so far.</p>
            <br />
          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
            <div className="bg-gray-800 rounded-lg p-4 flex items-center justify-center transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
              <i className="devicon-react-original-wordmark colored text-5xl"></i>
          
            </div>
            <div className="bg-gray-800 rounded-lg p-4 flex items-center justify-center transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
              <i className="devicon-redux-original text-3xl text-purple-400"></i>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 flex items-center justify-center transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
              <i className="devicon-typescript-plain text-3xl text-blue-500"></i>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 flex items-center justify-center transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
              <i className="devicon-javascript-plain text-3xl text-yellow-400"></i>
            </div>

            {/* <!-- Tools & Build Systems --> */}
            <div className="bg-gray-800 rounded-lg p-4 flex items-center justify-center transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
              <i className="devicon-framermotion-original-wordmark colored text-6xl"></i>
          
            </div>
            <div className="bg-gray-800 rounded-lg p-4 flex items-center justify-center transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" width={35} height={35} />
            </div>
            <div className="bg-gray-800 rounded-lg p-4 flex items-center justify-center transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
              <i className="devicon-spring-original-wordmark colored text-5xl"></i>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 flex items-center justify-center transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                <i className="devicon-fastapi-plain-wordmark text-6xl"></i>
            </div>

            {/* <!-- Frameworks & Extensions --> */}
            <div className="bg-gray-800 rounded-lg p-4 flex items-center justify-center transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
              <i className="devicon-nextjs-original-wordmark text-5xl"></i>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 flex items-center justify-center transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
              <i className="devicon-rails-plain-wordmark colored text-5xl"></i>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 flex items-center justify-center transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
              <i className="devicon-graphql-plain-wordmark colored text-5xl"></i>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 flex items-center justify-center transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
              <i className="devicon-bootstrap-plain-wordmark colored text-5xl"></i>
            </div>
            
            {/* <!-- CSS & Styling --> */}
            <div className="bg-gray-800 rounded-lg p-4 flex items-center justify-center transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
              <i className="devicon-postcss-plain-wordmark colored text-5xl"></i>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 flex items-center justify-center transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
              <i className="devicon-tailwindcss-plain-wordmark colored text-6xl"></i>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 flex items-center justify-center transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
              <i className="devicon-css3-plain-wordmark colored text-5xl"></i>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 flex items-center justify-center transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
              <i className="devicon-redis-plain-wordmark colored text-5xl"></i>
            </div>
            
            {/* <!-- Backend & APIs --> */}
            <div className="bg-gray-800 rounded-lg p-4 flex items-center justify-center transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
              <i className="devicon-nodejs-plain-wordmark colored text-6xl"></i>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 flex items-center justify-center transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
              <i className="devicon-express-original-wordmark text-6xl "></i>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 flex items-center justify-center transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
              <i className="devicon-firebase-plain-wordmark colored text-5xl"></i>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 flex items-center justify-center transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
              <i className="devicon-mongodb-plain-wordmark colored text-5xl"></i>
            </div>
            
            {/* <!-- DevOps & Deployment --> */}
            <div className="bg-gray-800 rounded-lg p-4 flex items-center justify-center transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
              <i className="devicon-docker-plain-wordmark colored text-5xl"></i>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 flex items-center justify-center transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
              <i className="devicon-github-original-wordmark colored text-5xl"></i>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 flex items-center justify-center transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
              <i className="devicon-amazonwebservices-plain-wordmark colored text-5xl"></i>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 flex items-center justify-center transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
              <i className="devicon-vercel-original-wordmark colored text-6xl"></i>
            </div>
            
            {/* <!-- Package Managers & More --> */}
            <div className="bg-gray-800 rounded-lg p-4 flex items-center justify-center transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
              <i className="devicon-npm-original-wordmark text-3xl text-red-500"></i>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 flex items-center justify-center transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
              <i className="devicon-archlinux-plain-wordmark colored text-6xl "></i>

            </div>
            <div className="bg-gray-800 rounded-lg p-4 flex items-center justify-center transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
              <i className="devicon-vscode-plain colored text-4xl "></i>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 flex items-center justify-center transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
              <i className="devicon-figma-plain colored text-5xl"></i>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-4 flex items-center justify-center transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
              <i className="devicon-laravel-original-wordmark colored text-6xl"></i>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 flex items-center justify-center transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
              <i className="devicon-python-plain-wordmark colored text-5xl"></i>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 flex items-center justify-center transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
              <i className="devicon-postgresql-plain-wordmark colored text-5xl"></i>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 flex items-center justify-center transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
              <i className="devicon-tauri-plain-wordmark colored text-6xl"></i>
            </div>
          </div>
          

            {/* Tabs */}
            <div className="mt-8">
              <div className="flex border-b border-gray-700">
                <button 
                  className={`px-4 py-2 ${activeTab === 'about' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400'}`}
                  onClick={() => setActiveTab('about')}
                >
                  Badges
                </button>
                <button 
                  className={`px-4 py-2 ${activeTab === 'affiliations' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400'}`}
                  onClick={() => setActiveTab('affiliations')}
                >
                  Affiliations
                </button>
                <button 
                  className={`px-4 py-2 ${activeTab === 'projects' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400'}`}
                  onClick={() => setActiveTab('projects')}
                >
                  Projects
                </button>
              </div>

              <div className="py-4">
                {activeTab === 'about' && (
                  <div className=" flex items-center justify-center ">
                    <div className="grid grid-cols-2 gap-8">
                      <div className="w-full">
                        <a href="https://www.credly.com/badges/a86f0fb0-3578-42d6-8bb7-1a0eb839f7d8/public_url">
                          <Image src="/databases.png" width={200} height={200} alt="Databases Badge" />
                        </a>
                      </div>
                      <div className="w-full">
                        <a href="https://api.badgr.io/public/assertions/8dUkDaN_T-OMjvsyqtMUpQ?identity__email=orionjl1106%40gmail.com">
                          <Image src="/postman.png" width={200} height={200} alt="Postman Badge" />
                        </a>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'affiliations' && (
                
                  <div className="grid grid-cols-1 gap-4">
                    <div className="bg-gray-800 p-3 rounded-lg w-full flex items-center">
                      <div className="rounded-full">
                        <Image className="rounded-full" src="/durianpy.jpg" alt="" width={50} height={50} />
                      </div>
                      <div className="mx-3">
                      <h4 className="font-bold text-violet-400">DurianPy</h4>
                      <div className="mx-1">
                          <p className="text-sm text-gray-600">(2025)</p>
                          <p className="text-sm text-gray-400">Volunteer</p>
                      </div>
                      </div>
                    </div>
                    <div className="bg-gray-800 p-3 rounded-lg w-full flex items-center">
                      <div className="rounded-full">
                        <Image className="rounded-full" src="/doum.jpg" alt="" width={50} height={50} />
                      </div>
                      <div className="mx-3">
                      <h4 className="font-bold text-violet-400">Data Owls University of Mindanao (DOUM)</h4>
                      <div className="mx-1">
                          <p className="text-sm text-gray-600">(2024 - Present)</p>
                          <p className="text-sm text-gray-400">Analytics Team</p>
                      </div>
                      </div>
                    </div>
                    <div className="bg-gray-800 p-3 rounded-lg w-full flex items-center">
                      <div className="rounded-full">
                        <Image className="rounded-full" src="/enigmaum.jpg" alt="" width={50} height={50} />
                      </div>
                      <div className="mx-3">
                      <h4 className="font-bold text-violet-400">Enigma University of Mindanao</h4>
                      <div className="mx-1">
                          <p className="text-sm text-gray-600">(2024 - Present)</p>
                          <p className="text-sm text-gray-400">Tech Team / Dev Team</p>
                      </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'projects' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border border-gray-700 rounded-lg overflow-hidden">
                      <div className="w-full h-40 relative">
                        <Image 
                          src="/enigmaweb.png" 
                          alt="Project" 
                          width={400}
                          height={200}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-gray-200">Enigma UM Webiste</h3>
                        <p className="text-sm text-gray-400">Built with React, Node.js and MySql</p>
                        <p className="text-sm text-gray-400">Role: Fullstack Development</p>
                        <div className="mt-3 flex gap-2">
                          <a href="https://umenigma.org/register" className="text-xs bg-blue-600 px-3 py-1 rounded">View Website</a>
                        </div>
                      </div>
                    </div>
                    <div className="border border-gray-700 rounded-lg overflow-hidden">
                      <div className="w-full h-40 relative">
                        <Image 
                          src="/Minjee.png" 
                          alt="Project" 
                          width={400}
                          height={200}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-gray-200">Minjee Rental Commerce Website</h3>
                        <p className="text-sm text-gray-400">Built with Nextjs, Fastapi, and Postgresql</p>
                        <p className="text-sm text-gray-400">Role: Backend Development</p>
                        <div className="mt-3 flex gap-2">
                          <p className="text-sm text-gray-400">(Under Development)</p>
                        </div>
                      </div>
                    </div>
                    <div className="border border-gray-700 rounded-lg overflow-hidden">
                      <div className="w-full h-40 relative">
                        <Image 
                          src="/Shoetally.png" 
                          alt="Project" 
                          width={400}
                          height={200}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-gray-200">Shoetally Mobile Development</h3>
                        <p className="text-sm text-gray-400">Built with Flutter and Firebase</p>
                        <p className="text-sm text-gray-400">Role: Lead Developer</p>
                        <div className="mt-3 flex gap-2">
                          <a href="https://github.com/jlorion/flutter-shoetally" className="text-xs bg-gray-700 px-3 py-1 rounded">GitHub</a>
                        </div>
                      </div>
                    </div>
                    <div className="border border-gray-700 rounded-lg overflow-hidden">
                      <div className="w-full h-40 relative">
                        <Image 
                          src="/panhs.png" 
                          alt="Project" 
                          width={400}
                          height={200}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-gray-200">PANHS Student Attendance System</h3>
                        <p className="text-sm text-gray-400">Built with Laravel and HTMX </p>
                        <p className="text-sm text-gray-400">Role: FullStack Developer</p>
                        <div className="mt-3 flex  gap-2">
                          <p className="text-sm text-gray-400">(For Rewrite and Upgrade)</p>
                          <a href="https://github.com/jlorion/PANHS" className="text-xs bg-gray-700 px-3 py-1 rounded">GitHub</a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-900 p-4 text-center text-gray-500 text-sm border-t border-gray-800">
          <p>© {new Date().getFullYear()} | Built with Next.js & Tailwind CSS</p>
        </footer>
      </div>
      </div>
  );
}