"use client"

import { useState } from "react"
import { ArrowRight, Menu, Check, ChevronRight, Send } from "lucide-react"

export default function GamingWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Referral URL for all download buttons
  const downloadUrl = "https://flyingchess.com?from_gameid=8188019&channelCode=100000"

  return (
    <div className="min-h-screen bg-[#0d1117] text-white overflow-hidden">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6 flex items-center justify-between relative z-10">
        <div className="flex items-center">
          <div className="text-2xl font-bold flex items-center">
            <div className="bg-blue-500 p-1 mr-1">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" fill="white" />
                <path d="M6 8.5L12 14.5L18 8.5" stroke="black" strokeWidth="2" />
              </svg>
            </div>
            <span className="text-white">
              FLYING-<span className="text-blue-500">CHESS</span>
            </span>
          </div>
        </div>

        <div
          className={`lg:flex items-center space-x-8 ${isMenuOpen ? "flex flex-col absolute top-20 right-0 bg-[#0d1117] p-4 w-full" : "hidden"}`}
        >
          <a href="#" className="text-blue-500 font-medium">
            HOME
          </a>
          <a href="#" className="hover:text-blue-500 font-medium">
            ABOUT US
          </a>
          <a href="#" className="hover:text-blue-500 font-medium">
            SERVICE DETAILS
          </a>
          <a href="#" className="hover:text-blue-500 font-medium">
            TEAM DETAILS
          </a>
        </div>

        <button className="lg:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu size={24} />
        </button>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 relative">
        {/* Circular light effects */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute bottom-20 right-1/4 w-24 h-24 bg-yellow-500 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-yellow-500 rounded-full opacity-10 blur-xl"></div>

        <div className="max-w-3xl">
          <div className="inline-block bg-blue-500 px-6 py-2 rounded-md mb-6">
            <span className="text-white font-medium">DEVELOPING</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-extrabold mb-4 leading-tight text-shadow-lg">
            <span className="text-blue-500">BEST</span> <span className="text-yellow-500">PAKISTAN</span>
            <br />
            <span className="bg-gradient-to-r from-blue-500 to-yellow-500 bg-clip-text text-transparent">GAMES</span>
          </h1>

          <p className="text-xl md:text-2xl font-medium mb-8">FROM LAST 3-YEARS</p>

          <div className="inline-block bg-blue-500 px-8 py-3 rounded-full transform rotate-1 hover:rotate-0 transition-transform duration-300">
            <a href="#games" className="text-white font-bold">
              OUR GAMES
            </a>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="fill-blue-500">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>

      {/* Games Section */}
    <div id="games" className="bg-[#0d1117] py-16">
  <div className="container mx-auto px-4">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

  {/* Game Card 1 - 3PATTI FLYING CHESS */}
  <div className="bg-[#131b26] rounded-lg overflow-hidden border border-gray-700 hover:border-blue-500 transition-colors">
    <div className="p-4">
      <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
        <img
          src="/teenpatti.jpeg"
          alt="3 PATTI FLYING Chess"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
    <div className="p-4 flex justify-between items-center">
      <h3 className="text-xl font-bold">3PATTI FLYING CHESS</h3>
      <a
        href={downloadUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-yellow-500 text-black px-4 py-2 rounded-md flex items-center font-bold hover:bg-yellow-400 transition-colors"
      >
        Download <ArrowRight size={16} className="ml-1" />
      </a>
    </div>
  </div>

  {/* Game Card 2 - TEEN PATTI FLYING CHESS */}
  <div className="bg-[#131b26] rounded-lg overflow-hidden border border-gray-700 hover:border-blue-500 transition-colors">
    <div className="p-4">
      <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
        <img
          src="/flying.jpg"
          alt="TEEN PATTI FLYING CHESS"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
    <div className="p-4 flex justify-between items-center">
      <h3 className="text-xl font-bold">TEEN PATTI FLYING CHESS</h3>
      <a
        href={downloadUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-yellow-500 text-black px-4 py-2 rounded-md flex items-center font-bold hover:bg-yellow-400 transition-colors"
      >
        Download <ArrowRight size={16} className="ml-1" />
      </a>
    </div>
  </div>

  {/* Game Card 3 - 3PATTI DRAGON TIGER CLUB */}
  <div className="bg-[#131b26] rounded-lg overflow-hidden border border-gray-700 hover:border-blue-500 transition-colors">
    <div className="p-4">
      <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
        <img
          src="/daragon.jpg"
          alt="3PATTI DRAGON TIGER CLUB"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
    <div className="p-4 flex justify-between items-center">
      <h3 className="text-xl font-bold">3PATTI DRAGON TIGER CLUB</h3>
      <a
        href={downloadUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-yellow-500 text-black px-4 py-2 rounded-md flex items-center font-bold hover:bg-yellow-400 transition-colors"
      >
        Download <ArrowRight size={16} className="ml-1" />
      </a>
    </div>
  </div>

</div>




  </div>
</div>


      {/* Top Rated Steamers Section */}
      <div className="bg-[#0d1117] py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-blue-500 px-4 py-1 rounded-md mb-4">
              <span className="text-white text-sm font-medium">COME ALONG US</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">TOP RATED STEAMERS</h2>

            <div className="flex justify-center space-x-4 mb-8">
              <a
                href={downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white px-6 py-2 rounded-md font-bold hover:bg-blue-400 transition-colors"
              >
                BUY SKINS
              </a>
              <a
                href={downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-500 text-black px-6 py-2 rounded-md font-bold hover:bg-yellow-400 transition-colors"
              >
                BUY GAMES
              </a>
            </div>

            <div className="flex justify-center space-x-4 mb-12">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">👤</span>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-pink-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">👤</span>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">👤</span>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-[#131b26] rounded-lg overflow-hidden border border-gray-700">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2">
                  <div className="h-64 bg-gradient-to-br from-blue-600 via-purple-600 to-orange-500 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                    <div className="relative z-10 text-center">
                      <div className="text-6xl mb-4">⚔️</div>
                      <div className="text-white font-bold text-2xl">AXE INFINITY</div>
                      <div className="text-yellow-400 text-sm">BATTLE GAME</div>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2 p-6">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-white mb-2">AXE INFINITY</h3>
                    <p className="text-yellow-400 font-medium mb-4">AXIE INFINITY</p>
                    <p className="text-gray-300 text-sm leading-relaxed mb-6">
                      Axie Infinity is a blockchain-based trading and battling game that is partially owned and operated
                      by its players. Inspired by popular games like Pokémon and Tamagotchi, Axie Infinity allows
                      players to collect, breed, raise, battle and trade token-based creatures known as Axies.
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-[#1a2332] p-3 rounded-lg text-center">
                      <div className="text-yellow-400 text-xs mb-1">🏆</div>
                      <div className="text-white text-xs font-bold">Champion Ranked</div>
                    </div>
                    <div className="bg-[#1a2332] p-3 rounded-lg text-center">
                      <div className="text-yellow-400 text-xs mb-1">🎮</div>
                      <div className="text-white text-xs font-bold">Super Active Player</div>
                    </div>
                    <div className="bg-[#1a2332] p-3 rounded-lg text-center">
                      <div className="text-yellow-400 text-xs mb-1">⭐</div>
                      <div className="text-white text-xs font-bold">Professional</div>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <button className="bg-gray-600 text-white px-4 py-2 rounded-md text-sm font-bold hover:bg-gray-500 transition-colors">
                      DISCORD BALL
                    </button>
                    <a
                      href={downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-bold hover:bg-blue-400 transition-colors"
                    >
                      NFT MARKET
                    </a>
                    <a
                      href={downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-yellow-500 text-black px-4 py-2 rounded-md text-sm font-bold hover:bg-yellow-400 transition-colors"
                    >
                      SUPPORT
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Active Team Members Section */}
      <div className="bg-[#0d1117] py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-blue-500 px-4 py-1 rounded-md mb-4">
              <span className="text-white text-sm font-medium">TEAM GALLERY</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">ACTIVE TEAM MEMBERS</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">👨‍💻</span>
              </div>
              <h3 className="text-white font-bold text-lg mb-2">KILLER MASTER</h3>
              <p className="text-blue-100 text-sm">Game Developer</p>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">👨‍🎨</span>
              </div>
              <h3 className="text-white font-bold text-lg mb-2">YASH PATEL</h3>
              <p className="text-blue-100 text-sm">UI/UX Designer</p>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">👨‍💼</span>
              </div>
              <h3 className="text-white font-bold text-lg mb-2">THOMPSON SCOT</h3>
              <p className="text-blue-100 text-sm">Project Manager</p>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">👨‍🔧</span>
              </div>
              <h3 className="text-white font-bold text-lg mb-2">SHAAN DANIAL</h3>
              <p className="text-blue-100 text-sm">Technical Lead</p>
            </div>
          </div>
        </div>
      </div>

      {/* Roadmap Seasons Section */}
      <div className="bg-[#0d1117] py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row">
            {/* Left side - Title and description */}
            <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                A LOOK INTO
                <br />
                ROADMAPS
                <br />
                SEASONS
              </h2>
              <p className="text-gray-300 mb-8 max-w-lg">
                With Season 1 ending with our play and earn focus, we're now moving to Season 2 where we'll continue to
                enhance gameplay, build out our open world, and expand the ecosystem with Machine Apps and more.
              </p>
              <a
                href={downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-500 text-black px-8 py-3 rounded-md font-bold flex items-center hover:bg-yellow-400 transition-colors w-fit"
              >
                EXPLORE <ChevronRight size={20} className="ml-2" />
              </a>

              {/* Blue dot indicator */}
              <div className="hidden lg:block absolute left-1/2 top-1/3 w-2 h-2 bg-blue-500 rounded-full"></div>
            </div>

            {/* Right side - Season cards */}
            <div className="lg:w-1/2 relative">
              {/* Vertical blue line */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 hidden lg:block"></div>

              {/* Season 1 */}
              <div className="bg-[#131b26] rounded-lg p-6 mb-6 ml-0 lg:ml-6 relative">
                <h3 className="text-xl font-bold text-white mb-4">SEASON 1</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-blue-500 rounded-full p-1 mr-3 mt-1">
                      <Check size={12} className="text-white" />
                    </div>
                    <span className="text-gray-300 text-sm">Battle Prototype Alpha</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-500 rounded-full p-1 mr-3 mt-1">
                      <Check size={12} className="text-white" />
                    </div>
                    <span className="text-gray-300 text-sm">NFT Drops Alpha</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-500 rounded-full p-1 mr-3 mt-1">
                      <Check size={12} className="text-white" />
                    </div>
                    <span className="text-gray-300 text-sm">3D Character Models</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-500 rounded-full p-1 mr-3 mt-1">
                      <Check size={12} className="text-white" />
                    </div>
                    <span className="text-gray-300 text-sm">Land Creation & Building</span>
                  </li>
                </ul>
              </div>

              {/* Season 2 */}
              <div className="bg-[#131b26] rounded-lg p-6 mb-6 ml-0 lg:ml-6 relative">
                <h3 className="text-xl font-bold text-white mb-4">SEASON 2</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-blue-500 rounded-full p-1 mr-3 mt-1">
                      <Check size={12} className="text-white" />
                    </div>
                    <span className="text-gray-300 text-sm">Land Creation & Building</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-500 rounded-full p-1 mr-3 mt-1">
                      <Check size={12} className="text-white" />
                    </div>
                    <span className="text-gray-300 text-sm">Android Apps Development</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-500 rounded-full p-1 mr-3 mt-1">
                      <Check size={12} className="text-white" />
                    </div>
                    <span className="text-gray-300 text-sm">3D Open World Test</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-500 rounded-full p-1 mr-3 mt-1">
                      <Check size={12} className="text-white" />
                    </div>
                    <span className="text-gray-300 text-sm">Building Creation</span>
                  </li>
                </ul>
              </div>

              {/* Season 3 */}
              <div className="bg-[#131b26] rounded-lg p-6 ml-0 lg:ml-6 relative">
                <h3 className="text-xl font-bold text-white mb-4">SEASON 3</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-blue-500 rounded-full p-1 mr-3 mt-1">
                      <Check size={12} className="text-white" />
                    </div>
                    <span className="text-gray-300 text-sm">Switch to 3D gameplay</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-500 rounded-full p-1 mr-3 mt-1">
                      <Check size={12} className="text-white" />
                    </div>
                    <span className="text-gray-300 text-sm">Metaverse Integration</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-500 rounded-full p-1 mr-3 mt-1">
                      <Check size={12} className="text-white" />
                    </div>
                    <span className="text-gray-300 text-sm">3D Open World</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-500 rounded-full p-1 mr-3 mt-1">
                      <Check size={12} className="text-white" />
                    </div>
                    <span className="text-gray-300 text-sm">Building Creation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#0a0e14] py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold text-lg mb-6">QUICK LINK</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-blue-500 text-sm">
                    Gaming
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-blue-500 text-sm">
                    Product
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-blue-500 text-sm">
                    All NFTs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-blue-500 text-sm">
                    Social Activity
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-blue-500 text-sm">
                    Connect us for Game Development Services
                  </a>
                </li>
              </ul>
            </div>

            {/* Supports */}
            <div>
              <h4 className="text-white font-bold text-lg mb-6">SUPPORTS</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-blue-500 text-sm">
                    Setting & Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-blue-500 text-sm">
                    Help & Support
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-blue-500 text-sm">
                    Live Guideline
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-blue-500 text-sm">
                    All NFTs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-blue-500 text-sm">
                    Server Network
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-blue-500 text-sm">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-blue-500 text-sm">
                    Collection Help
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-white font-bold text-lg mb-6">NEWSLETTER</h4>
              <p className="text-gray-400 text-sm mb-4">Subscribe our newsletter to get our latest update & news</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="bg-[#131b26] text-gray-300 px-4 py-3 rounded-l-md focus:outline-none w-full"
                />
                <button className="bg-blue-500 text-white px-4 py-3 rounded-r-md hover:bg-blue-400 transition-colors">
                  <Send size={18} />
                </button>
              </div>
            </div>

            {/* Social With Us */}
            <div>
              <h4 className="text-white font-bold text-lg mb-6">SOCIAL WITH US</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-[#131b26] rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-[#131b26] rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M23 3.00005C22.0424 3.67552 20.9821 4.19216 19.86 4.53005C19.2577 3.83756 18.4573 3.34674 17.567 3.12397C16.6767 2.90121 15.7395 2.95724 14.8821 3.2845C14.0247 3.61176 13.2884 4.19445 12.773 4.95376C12.2575 5.71308 11.9877 6.61238 12 7.53005V8.53005C10.2426 8.57561 8.50127 8.18586 6.93101 7.39549C5.36074 6.60513 4.01032 5.43868 3 4.00005C3 4.00005 -1 13 8 17C5.94053 18.398 3.48716 19.099 1 19C10 24 21 19 21 7.50005C20.9991 7.2215 20.9723 6.94364 20.92 6.67005C21.9406 5.66354 22.6608 4.39276 23 3.00005Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-[#131b26] rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6 9H2V21H6V9Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400 text-sm">© 2025 FLYING-CHESS. All Rights Reserved.</p>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        .text-shadow-lg {
          text-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
        }
        
        .text-stroke {
          -webkit-text-stroke: 1px white;
          color: transparent;
          text-shadow: 
            0 0 5px rgba(255, 255, 255, 0.1),
            0 0 10px rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </div>
  )
}
