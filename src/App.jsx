import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { ArrowRight, Linkedin, Instagram, Music } from 'lucide-react'

function App() {
  // Hero animation state
  const [heroContent, setHeroContent] = useState(0)
  
  const heroVariants = [
    { type: 'text', content: 'IMPACT FOREVER.' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1577086664693-894d8405334a?w=600&q=80', rotation: 15 },
    { type: 'text', content: 'STRATEGY FOREVER.' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80', rotation: -12 },
    { type: 'text', content: 'DESIGN FOREVER.' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&q=80', rotation: 18 },
    { type: 'text', content: 'CLARITY FOREVER.' },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroContent((prev) => (prev + 1) % heroVariants.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  // 3D Carousel state
  const [scrollY, setScrollY] = useState(0)
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const projects = [
    { name: 'Vibi', color: 'from-orange-500 to-orange-600', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80' },
    { name: 'Just Salad', color: 'from-blue-500 to-blue-600', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80' },
    { name: 'PBS', color: 'from-purple-500 to-purple-600', image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80' },
    { name: 'Titan', color: 'from-pink-500 to-pink-600', image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80' },
    { name: 'Betterment', color: 'from-cyan-500 to-cyan-600', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80' },
  ]

  const clients = [
    ['Hill Hall Hotel', 'Niva'],
    ['Bila Bennett', 'Knead'],
    ['Xaira Therapeutict', 'Fieldnotes'],
    ['Uplini', 'Factor'],
    ['Truestorh AG', 'Dria Ventures'],
    ['Thoughtiue', 'DadiGear'],
    ['TargetMarkes', 'Casap'],
    ['Talkiatrrg', 'Ballerg'],
    ['Sleepawayg', 'Animal Charits'],
    ['Soracoo', 'Art Philip'],
    ['Slatl Digital', 'Allianci Home'],
    ['Marvak', 'AfterHoub'],
    ['Mutinp Branding', 'WhiteMateb'],
    ['Mighta Entertainmery', 'Vebu Labs'],
    ['Guidt Protecttiqk', 'The Brann Hoteb'],
  ]

  const statsRef = useRef(null)
  const isStatsInView = useInView(statsRef, { once: true })

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* HEADER */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100">
        <nav className="container mx-auto max-w-7xl px-4 md:px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-light tracking-wide">
            papertiger
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#expertise" className="text-sm hover:text-mint transition-colors">Expertise</a>
            <a href="#clients" className="text-sm hover:text-mint transition-colors">Clients</a>
            <a href="#studio" className="text-sm hover:text-mint transition-colors">Studio</a>
            <a href="#news" className="text-sm hover:text-mint transition-colors">News</a>
            <button className="border-2 border-black px-6 py-2 text-sm font-bold hover:bg-black hover:text-white transition-all duration-300">
              CONTACT
            </button>
          </div>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="min-h-screen flex items-center justify-center px-4 md:px-6 pt-20 relative overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="font-impact font-black text-ultra-condensed uppercase leading-[0.85] tracking-tighter-xl mb-8">
              <div className="text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] xl:text-[14rem]">
                CLARITY FIRST.
              </div>
              <div className="text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] xl:text-[14rem] flex items-center justify-center gap-4 md:gap-8 flex-wrap">
                <AnimatePresence mode="wait">
                  {heroVariants[heroContent].type === 'text' ? (
                    <motion.span
                      key={`text-${heroContent}`}
                      initial={{ opacity: 0, y: 50, scale: 0.8 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -50, scale: 0.8 }}
                      transition={{ duration: 0.7, ease: 'easeOut' }}
                    >
                      {heroVariants[heroContent].content}
                    </motion.span>
                  ) : (
                    <motion.img
                      key={`img-${heroContent}`}
                      src={heroVariants[heroContent].src}
                      alt="Design"
                      initial={{ opacity: 0, rotate: 0, scale: 0.5 }}
                      animate={{ 
                        opacity: 1, 
                        rotate: heroVariants[heroContent].rotation,
                        scale: 1
                      }}
                      exit={{ opacity: 0, rotate: 0, scale: 0.5 }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      className="inline-block w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-cover rounded-2xl shadow-2xl"
                      style={{ 
                        filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.3))',
                      }}
                    />
                  )}
                </AnimatePresence>
              </div>
            </h1>

            <div className="grid md:grid-cols-2 gap-8 mt-16 max-w-5xl mx-auto">
              <div className="text-left space-y-2 text-sm md:text-base">
                <p className="font-bold">18+ years</p>
                <p className="font-bold">700+ projects</p>
                <p className="font-bold">2 days/no incident</p>
                <p className="font-bold">0 scrubs</p>
              </div>
              <div className="text-left md:text-right">
                <p className="text-sm md:text-base leading-relaxed">
                  Paper Tiger is a strategic design partner helping brands win new customers, engage users, and infuriate their competition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENTS SHOWCASE */}
      <section id="clients" className="py-20 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center md:text-left">Our Clients</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3 font-mono text-sm md:text-base">
            {clients.map((pair, idx) => (
              <div key={idx} className="flex justify-between border-b border-gray-200 pb-2">
                <span>{pair[0]}</span>
                <span className="text-right">{pair[1]}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3D PROJECTS CAROUSEL */}
      <section className="py-32 px-4 md:px-6 bg-black relative overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <h2 className="font-impact font-black text-ultra-condensed uppercase text-white text-5xl md:text-7xl lg:text-8xl mb-16 text-center">
            PROJECTS
          </h2>
          <div className="perspective-1500 preserve-3d">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, idx) => {
                const rotation = (scrollY / 50) - (idx * 5)
                const depth = Math.sin((scrollY / 100) + idx) * 50
                
                return (
                  <motion.div
                    key={idx}
                    className="group cursor-pointer"
                    style={{
                      transform: `rotateY(${rotation}deg) translateZ(${depth}px)`,
                      transition: 'transform 0.6s ease-out',
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      y: -10,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <div className={`relative h-80 rounded-2xl overflow-hidden bg-gradient-to-br ${project.color} shadow-2xl`}>
                      <img 
                        src={project.image} 
                        alt={project.name}
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                        <h3 className="text-white text-3xl font-black">{project.name}</h3>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* EXPERTISE SECTION */}
      <section id="expertise" className="py-20 px-4 md:px-6 bg-mint">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-impact font-black text-ultra-condensed uppercase text-black text-6xl md:text-8xl lg:text-9xl mb-8 leading-[0.9]">
                STRATEGY
              </h2>
              <button className="group flex items-center gap-2 text-black font-bold text-lg hover:gap-4 transition-all duration-300">
                Learn more 
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div className="bg-black text-white p-8 md:p-12 rounded-2xl">
              <p className="text-base md:text-lg leading-relaxed">
                Our approach to strategy is precise, efficient, and grounded in expertise. We consider everything from competitive landscape and project goals to tactical plans for SEO and conversion optimization. Strategic planning sets the foundation for creative work, so we move through it quickly and deliberately. Our process eliminates the bottlenecks and endless conceptual discussions that drag out early phases and cause delays downstream.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STATISTICS WORD CLOUD */}
      <section ref={statsRef} className="py-32 px-4 md:px-6 bg-white overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <motion.div 
            className="font-impact font-black text-ultra-condensed uppercase leading-[0.95] tracking-tighter-xl flex flex-wrap justify-center items-center gap-4 md:gap-8"
            initial={{ opacity: 0 }}
            animate={isStatsInView ? { opacity: 1 } : {}}
            transition={{ duration: 1 }}
          >
            <motion.span 
              className="text-4xl md:text-6xl lg:text-8xl"
              style={{ y: Math.sin(scrollY / 200) * 20 }}
            >
              NEW YORK CITY
            </motion.span>
            <motion.span 
              className="text-3xl md:text-5xl lg:text-6xl text-purple-600"
              style={{ y: Math.sin(scrollY / 180) * -15 }}
            >
              SOHO <span className="text-2xl">(917)</span>
            </motion.span>
            <motion.span 
              className="text-5xl md:text-7xl lg:text-9xl"
              style={{ y: Math.sin(scrollY / 220) * 25 }}
            >
              7 COUNTRIES
            </motion.span>
            <motion.span 
              className="text-3xl md:text-5xl lg:text-7xl"
              style={{ y: Math.sin(scrollY / 190) * -20 }}
            >
              NEW JERSEY
            </motion.span>
            <motion.span 
              className="text-4xl md:text-6xl lg:text-8xl text-pink-600"
              style={{ y: Math.sin(scrollY / 210) * 18 }}
            >
              18 YEARS
            </motion.span>
            <motion.span 
              className="text-3xl md:text-4xl lg:text-5xl"
              style={{ y: Math.sin(scrollY / 170) * -12 }}
            >
              2 ITALIANS
            </motion.span>
            <motion.span 
              className="text-5xl md:text-7xl lg:text-9xl"
              style={{ y: Math.sin(scrollY / 230) * 22 }}
            >
              700+ PROJECTS
            </motion.span>
            <motion.span 
              className="text-3xl md:text-5xl lg:text-6xl text-mint"
              style={{ y: Math.sin(scrollY / 195) * -18 }}
            >
              2 BROTHERS
            </motion.span>
            <motion.span 
              className="text-2xl md:text-3xl lg:text-4xl"
              style={{ y: Math.sin(scrollY / 160) * 15 }}
            >
              0 SCRUBS
            </motion.span>
          </motion.div>
        </div>
      </section>

      {/* NEWS SECTION */}
      <section id="news" className="py-20 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <h2 className="font-impact font-black text-ultra-condensed uppercase text-6xl md:text-8xl lg:text-9xl mb-16">
            LATEST NEWS
          </h2>
          <div className="space-y-8">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                className="group grid md:grid-cols-[300px,1fr] gap-6 cursor-pointer"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-48 md:h-64 rounded-xl overflow-hidden bg-gradient-to-br from-purple-500 to-pink-500">
                  <img 
                    src={`https://images.unsplash.com/photo-${1558655146 + item * 1000}-d09347e92766?w=600&q=80`}
                    alt="News"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-xs font-bold text-gray-500 mb-2">NEWS</span>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-mint transition-colors">
                    Paper Tiger Wins Awwwards Site of the Day for Website Redesign
                  </h3>
                  <p className="text-gray-600 text-sm">December 15, 2024</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-start mb-12">
            <div>
              <h3 className="font-impact font-black text-ultra-condensed uppercase text-6xl md:text-8xl lg:text-9xl mb-8 leading-[0.85]">
                PAPER TIGER®
              </h3>
              <nav className="flex flex-wrap gap-6 mb-8">
                <a href="#expertise" className="hover:text-mint transition-colors">Expertise</a>
                <a href="#clients" className="hover:text-mint transition-colors">Clients</a>
                <a href="#studio" className="hover:text-mint transition-colors">Studio</a>
                <a href="#news" className="hover:text-mint transition-colors">News</a>
              </nav>
            </div>
            <div className="mt-8 md:mt-0">
              <a href="#contact" className="text-sm underline hover:text-mint transition-colors">
                New business inquiries click here
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm gap-4">
            <div className="flex flex-wrap gap-4 md:gap-6">
              <a href="#privacy" className="hover:text-mint transition-colors">Privacy</a>
              <a href="#linkedin" className="flex items-center gap-2 hover:text-mint transition-colors">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <a href="#instagram" className="flex items-center gap-2 hover:text-mint transition-colors">
                <Instagram className="w-4 h-4" />
                Instagram
              </a>
              <a href="#spotify" className="flex items-center gap-2 hover:text-mint transition-colors">
                <Music className="w-4 h-4" />
                Spotify
              </a>
            </div>
            <div className="text-gray-500">
              ©2024 Paper Tiger. All rights reserved. All wrongs reversed.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App