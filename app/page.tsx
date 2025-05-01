'use client'
import Image from "next/image";
import { useState } from 'react';
import { Linkedin, Github, Twitter, Facebook, MapPin, Mail } from 'lucide-react';
import Experience from "@/components/Major/Experience";

export default function Home() {
  const [activeTab, setActiveTab] = useState('about');

  
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
              <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition">
                <Linkedin size={16} className="text-blue-400" />
              </a>
              <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition">
                <Github size={16} className="text-gray-200" />
              </a>
              <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition">
                <Mail size={16} className="text-gray-200" />
              </a>
            </div>
            <button className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm transition">
              Hire me
            </button>
          </div>

          {/* Right - Info */}
          <div className="flex-1 mt-6 md:mt-0">
            <h1 className="text-2xl font-bold text-blue-400">
              Hey! I'm Sef, Back-End Developer and Data Engineer <span className="text-yellow-400">💛</span>
            </h1>
            <p className="flex items-center gap-1 text-gray-400 mt-1">
              <MapPin size={14} /> Davao City, Philippines
            </p>

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
              Every great design begins with an even better story
            </p>
            <p className="text-gray-400">
              I've always had a passion for coding and design since I was a teen.
              My approach to development is unique, focusing on creating intuitive 
              user experiences that blend aesthetics with functionality. I understand 
              business and consumer pain points by placing emphasis on 
              performance, working tirelessly to achieve what's possible and a little 
              beyond.
            </p>

            {/* Tabs */}
            <div className="mt-8">
              <div className="flex border-b border-gray-700">
                <button 
                  className={`px-4 py-2 ${activeTab === 'about' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400'}`}
                  onClick={() => setActiveTab('about')}
                >
                  Education & Experience
                </button>
                <button 
                  className={`px-4 py-2 ${activeTab === 'skills' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400'}`}
                  onClick={() => setActiveTab('skills')}
                >
                  Skills
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
                  <div>
                    <div className="mb-6">
                      <h3 className="font-bold text-lg text-gray-200">Software Engineer</h3>
                      <p className="text-gray-400">2020 - Present</p>
                    </div>
                    <div className="mb-6">
                      <h3 className="font-bold text-lg text-gray-200">Freelance Designer</h3>
                      <p className="text-gray-400">2018 - 2020</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-200">Team Lead of Marketing</h3>
                      <p className="text-gray-400">2016 - 2018</p>
                    </div>
                  </div>
                )}

                {activeTab === 'skills' && (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="bg-gray-800 p-3 rounded-lg">
                      <h4 className="font-bold text-gray-200">Frontend</h4>
                      <p className="text-sm text-gray-400">React, Vue, Angular</p>
                    </div>
                    <div className="bg-gray-800 p-3 rounded-lg">
                      <h4 className="font-bold text-gray-200">Backend</h4>
                      <p className="text-sm text-gray-400">Node.js, Python, Java</p>
                    </div>
                    <div className="bg-gray-800 p-3 rounded-lg">
                      <h4 className="font-bold text-gray-200">Data Engineering</h4>
                      <p className="text-sm text-gray-400">SQL, MongoDB, ETL</p>
                    </div>
                    <div className="bg-gray-800 p-3 rounded-lg">
                      <h4 className="font-bold text-gray-200">DevOps</h4>
                      <p className="text-sm text-gray-400">Docker, Kubernetes, AWS</p>
                    </div>
                    <div className="bg-gray-800 p-3 rounded-lg">
                      <h4 className="font-bold text-gray-200">UI/UX</h4>
                      <p className="text-sm text-gray-400">Figma, Adobe XD</p>
                    </div>
                  </div>
                )}

                {activeTab === 'projects' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border border-gray-700 rounded-lg overflow-hidden">
                      <div className="w-full h-40 relative">
                        <Image 
                          src="/assets/project1.jpg" 
                          alt="Project" 
                          width={400}
                          height={200}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-gray-200">E-commerce Platform</h3>
                        <p className="text-sm text-gray-400">Built with React, Node.js and MongoDB</p>
                        <div className="mt-3 flex gap-2">
                          <a href="#" className="text-xs bg-blue-600 px-3 py-1 rounded">View Demo</a>
                          <a href="#" className="text-xs bg-gray-700 px-3 py-1 rounded">GitHub</a>
                        </div>
                      </div>
                    </div>
                    <div className="border border-gray-700 rounded-lg overflow-hidden">
                      <div className="w-full h-40 relative">
                        <Image 
                          src="/assets/project2.jpg" 
                          alt="Project" 
                          width={400}
                          height={200}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-gray-200">Data Visualization Dashboard</h3>
                        <p className="text-sm text-gray-400">Built with D3.js and React</p>
                        <div className="mt-3 flex gap-2">
                          <a href="#" className="text-xs bg-blue-600 px-3 py-1 rounded">View Demo</a>
                          <a href="#" className="text-xs bg-gray-700 px-3 py-1 rounded">GitHub</a>
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