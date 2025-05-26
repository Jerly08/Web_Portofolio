import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const technologies = {
    frontend: ['React', 'Vue.js', 'Angular', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Material UI', 'Bootstrap'],
    backend: ['Node.js', 'Python', 'Java', 'C#', 'PHP', 'Go', 'Ruby', 'Express', 'Django', 'Spring Boot'],
    database: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Oracle', 'SQL Server'],
    cloud: ['AWS', 'Google Cloud', 'Azure', 'Docker', 'Kubernetes'],
    tools: ['Git', 'CI/CD', 'Jest', 'Webpack', 'Babel', 'GraphQL', 'REST APIs']
  }

  return (
    <main className="min-h-screen relative">
      <div className="animate-shimmer absolute inset-0 opacity-50 z-0" />
      
      {/* Header/Navigation */}
      <nav className="fixed top-0 w-full glass-nav z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold gradient-text">Jerly.dev</div>
            <div className="hidden md:flex space-x-8">
              <Link href="#about" className="hover:text-sky-500 transition-colors font-medium">About</Link>
              <Link href="#skills" className="hover:text-sky-500 transition-colors font-medium">Skills</Link>
              <Link href="#projects" className="hover:text-sky-500 transition-colors font-medium">Projects</Link>
              <Link href="#experience" className="hover:text-sky-500 transition-colors font-medium">Experience</Link>
              <Link href="#contact" className="hover:text-sky-500 transition-colors font-medium">Contact</Link>
            </div>
            <div className="md:hidden">
              <button className="text-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Banner Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-50/50 via-white/50 to-indigo-50/50 dark:from-sky-950/50 dark:via-slate-900/50 dark:to-indigo-950/50" />
          <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-[0.02]" />
          <div className="absolute -top-[30%] -left-[10%] w-[60%] h-[60%] rounded-full bg-sky-200/20 dark:bg-sky-500/10 blur-3xl animate-pulse-slow" />
          <div className="absolute -bottom-[30%] -right-[10%] w-[60%] h-[60%] rounded-full bg-indigo-200/20 dark:bg-indigo-500/10 blur-3xl animate-pulse-slow" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left space-y-8 animate-fadeIn">
              <div className="space-y-4">
                <div className="inline-flex items-center rounded-full px-3 py-1 text-sm bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 mb-4">
                  <span className="relative flex h-3 w-3 mr-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                  </span>
                  Available for freelance work
                </div>
                <h2 className="text-2xl font-medium text-sky-600 dark:text-sky-400">
                  Hello, I'm
                </h2>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold gradient-text leading-tight text-shadow">
                  Jerly Refo
                </h1>
                <p className="text-xl sm:text-2xl font-medium text-slate-600 dark:text-slate-300">
                  Full-Stack Software Engineer
                </p>
              </div>
              <p className="text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto lg:mx-0">
                Versatile software engineer proficient in all aspects of software development. 
                From front-end to back-end, databases to cloud infrastructure, I bring comprehensive 
                expertise to build complete, scalable solutions.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <a href="#projects" className="primary-button">
                  View My Work
                </a>
                <a href="#contact" className="secondary-button">
                  Let's Connect
                </a>
              </div>
              {/* Social Links */}
              <div className="flex items-center gap-6 justify-center lg:justify-start text-slate-600 dark:text-slate-400">
                <a href="https://github.com/Jerly08" target="_blank" rel="noopener noreferrer" 
                   className="hover:text-sky-500 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" clipRule="evenodd"/>
                  </svg>
                </a>
                <a href="https://linkedin.com/in/jerly-merentek" target="_blank" rel="noopener noreferrer"
                   className="hover:text-sky-500 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="mailto:jerlyjy@gmail.com" 
                   className="hover:text-sky-500 transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Animated Illustration/Avatar */}
            <div className="relative hidden lg:block">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-sky-500/10 to-indigo-500/10 rounded-full blur-3xl" />
              <div className="relative w-full aspect-square rounded-full border-2 border-sky-200/30 dark:border-sky-700/30 overflow-hidden glass-card glow-effect">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/20 to-indigo-500/20" />
                <div className="absolute inset-0 flex items-center justify-center text-8xl animate-float">
                  👨‍💻
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-slate-400 hover:text-sky-500 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
            </svg>
          </a>
        </div>
      </section>

      {/* Skills Section with Categories */}
      <section id="skills" className="relative py-20">
        <div className="container mx-auto px-4">
          <h2 className="section-heading gradient-text">Technical Expertise</h2>
          
          <div className="max-w-6xl mx-auto space-y-8 stagger-children">
            {Object.entries(technologies).map(([category, techs]) => (
              <div key={category} className="glass-card p-8 rounded-xl gradient-border glass-card-hover">
                <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
                  <div className="flex-shrink-0">
                    {category === 'frontend' && (
                      <div className="w-16 h-16 rounded-xl bg-sky-100 dark:bg-sky-900/30 flex items-center justify-center text-sky-500">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                    )}
                    {category === 'backend' && (
                      <div className="w-16 h-16 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-500">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                        </svg>
                      </div>
                    )}
                    {category === 'database' && (
                      <div className="w-16 h-16 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-500">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                        </svg>
                      </div>
                    )}
                    {category === 'cloud' && (
                      <div className="w-16 h-16 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-500">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                        </svg>
                      </div>
                    )}
                    {category === 'tools' && (
                      <div className="w-16 h-16 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-500">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold capitalize">
                      {category} <span className="text-sky-500 dark:text-sky-400">Technologies</span>
                </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      {category === 'frontend' && 'Building beautiful, responsive user interfaces with modern frameworks and tools.'}
                      {category === 'backend' && 'Creating robust server-side applications with scalable architectures.'}
                      {category === 'database' && 'Designing efficient data models and optimizing database performance.'}
                      {category === 'cloud' && 'Deploying and managing applications in cloud environments with modern DevOps practices.'}
                      {category === 'tools' && 'Utilizing industry-standard tools for development, testing, and deployment.'}
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {techs.map((tech) => (
                    <div key={tech} className="tech-tag">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20">
        <div className="container mx-auto px-4">
          <h2 className="section-heading gradient-text">About Me</h2>
          <div className="max-w-6xl mx-auto">
            <div className="glass-card p-8 rounded-2xl gradient-border glass-card-hover">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                  <div className="prose prose-lg dark:prose-invert">
                    <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  As a versatile full-stack software engineer, I bring comprehensive expertise across the entire 
                  technology stack. My broad knowledge spans multiple programming languages, frameworks, and development 
                  methodologies, allowing me to choose the best tools for each unique challenge.
                </p>
                    <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  I specialize in building scalable, efficient applications from concept to deployment. Whether it's 
                  crafting intuitive user interfaces, designing robust backend systems, or optimizing database performance, 
                  I deliver solutions that drive business success.
                </p>
                    
                    <div className="mt-8">
                      <h3 className="text-xl font-bold mb-4">Professional Journey</h3>
                      <div className="space-y-4">
                        <div className="timeline-item">
                          <div className="timeline-dot"></div>
                          <h4 className="font-semibold text-sky-600 dark:text-sky-400">Software Engineer</h4>
                          <p className="text-sm text-slate-500 dark:text-slate-400">2020 - Present</p>
                          <p className="mt-2 text-slate-600 dark:text-slate-300">Leading development of enterprise applications using modern web technologies.</p>
                        </div>
                        <div className="timeline-item">
                          <div className="timeline-dot"></div>
                          <h4 className="font-semibold text-sky-600 dark:text-sky-400">Frontend Developer</h4>
                          <p className="text-sm text-slate-500 dark:text-slate-400">2018 - 2020</p>
                          <p className="mt-2 text-slate-600 dark:text-slate-300">Specialized in creating responsive, user-friendly interfaces with React and Vue.js.</p>
                        </div>
                        <div className="timeline-item">
                          <div className="timeline-dot"></div>
                          <h4 className="font-semibold text-sky-600 dark:text-sky-400">Web Developer</h4>
                          <p className="text-sm text-slate-500 dark:text-slate-400">2016 - 2018</p>
                          <p className="mt-2 text-slate-600 dark:text-slate-300">Built and maintained websites for small businesses and startups.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-indigo-500/10 rounded-2xl blur-2xl"></div>
                    <div className="relative glass-card gradient-border p-6 rounded-2xl glow-effect">
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-xl font-bold mb-3">Education</h3>
                          <div className="glass-card p-4 rounded-xl">
                            <h4 className="font-semibold">Bachelor of Computer Science</h4>
                            <p className="text-sm text-slate-500 dark:text-slate-400">University of Technology</p>
                            <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">Graduated with honors, focusing on software engineering and web technologies.</p>
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="text-xl font-bold mb-3">Key Skills</h3>
                          <div className="space-y-3">
                            <div>
                              <div className="flex justify-between mb-1">
                                <span className="font-medium">Full-Stack Development</span>
                                <span>95%</span>
                              </div>
                              <div className="skill-progress">
                                <div className="skill-progress-bar" style={{ width: "95%" }}></div>
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between mb-1">
                                <span className="font-medium">UI/UX Design</span>
                                <span>85%</span>
                              </div>
                              <div className="skill-progress">
                                <div className="skill-progress-bar" style={{ width: "85%" }}></div>
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between mb-1">
                                <span className="font-medium">Cloud Infrastructure</span>
                                <span>90%</span>
                              </div>
                              <div className="skill-progress">
                                <div className="skill-progress-bar" style={{ width: "90%" }}></div>
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between mb-1">
                                <span className="font-medium">Project Management</span>
                                <span>80%</span>
                              </div>
                              <div className="skill-progress">
                                <div className="skill-progress-bar" style={{ width: "80%" }}></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="text-xl font-bold mb-3">Languages</h3>
                          <div className="flex gap-3">
                            <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-sm">English (Fluent)</span>
                            <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-sm">Indonesian (Native)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-20">
        <div className="container mx-auto px-4">
          <h2 className="section-heading gradient-text">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto stagger-children">
            <div className="project-card glass-card-hover">
              <div className="relative h-full w-full overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-indigo-500 opacity-20"></div>
                <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-20 bg-center mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>
                <div className="relative h-full flex flex-col justify-between p-6 text-white">
                  <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-lg flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div className="mt-auto">
                    <span className="px-3 py-1 rounded-full bg-sky-500/20 backdrop-blur-md text-xs font-medium text-sky-300 inline-block mb-2">Enterprise Solution</span>
                    <h3 className="text-xl font-bold mb-2">Business Management Platform</h3>
                    <p className="text-gray-300 mb-4 line-clamp-2">Full-stack enterprise application with microservices architecture, real-time data processing, and advanced analytics.</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 rounded-full bg-white/10 text-xs">React</span>
                      <span className="px-2 py-1 rounded-full bg-white/10 text-xs">Node.js</span>
                      <span className="px-2 py-1 rounded-full bg-white/10 text-xs">PostgreSQL</span>
                      <span className="px-2 py-1 rounded-full bg-white/10 text-xs">Docker</span>
                    </div>
                    <a href="#" className="text-sky-300 hover:text-sky-200 font-medium flex items-center gap-1 text-sm">
                      View Details
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="project-card glass-card-hover">
              <div className="relative h-full w-full overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-sky-500 opacity-20"></div>
                <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-20 bg-center mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>
                <div className="relative h-full flex flex-col justify-between p-6 text-white">
                  <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-lg flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </div>
                  <div className="mt-auto">
                    <span className="px-3 py-1 rounded-full bg-emerald-500/20 backdrop-blur-md text-xs font-medium text-emerald-300 inline-block mb-2">E-Commerce Platform</span>
                    <h3 className="text-xl font-bold mb-2">Modern Shopping Experience</h3>
                    <p className="text-gray-300 mb-4 line-clamp-2">Scalable e-commerce solution with payment integration, inventory management, and real-time order tracking.</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 rounded-full bg-white/10 text-xs">Vue.js</span>
                      <span className="px-2 py-1 rounded-full bg-white/10 text-xs">Python</span>
                      <span className="px-2 py-1 rounded-full bg-white/10 text-xs">MongoDB</span>
                      <span className="px-2 py-1 rounded-full bg-white/10 text-xs">AWS</span>
                    </div>
                    <a href="#" className="text-emerald-300 hover:text-emerald-200 font-medium flex items-center gap-1 text-sm">
                      View Details
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="project-card glass-card-hover">
              <div className="relative h-full w-full overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-20"></div>
                <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-20 bg-center mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>
                <div className="relative h-full flex flex-col justify-between p-6 text-white">
                  <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-lg flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                  <div className="mt-auto">
                    <span className="px-3 py-1 rounded-full bg-purple-500/20 backdrop-blur-md text-xs font-medium text-purple-300 inline-block mb-2">IoT Dashboard</span>
                    <h3 className="text-xl font-bold mb-2">Smart Device Monitoring</h3>
                    <p className="text-gray-300 mb-4 line-clamp-2">Real-time IoT monitoring dashboard with data visualization, alerts, and predictive maintenance features.</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 rounded-full bg-white/10 text-xs">Angular</span>
                      <span className="px-2 py-1 rounded-full bg-white/10 text-xs">C#</span>
                      <span className="px-2 py-1 rounded-full bg-white/10 text-xs">Azure</span>
                      <span className="px-2 py-1 rounded-full bg-white/10 text-xs">GraphQL</span>
                    </div>
                    <a href="#" className="text-purple-300 hover:text-purple-200 font-medium flex items-center gap-1 text-sm">
                      View Details
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20">
        <div className="container mx-auto px-4">
          <h2 className="section-heading gradient-text">Let's Connect</h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="glass-card p-8 rounded-2xl gradient-border glass-card-hover">
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                    placeholder="Project inquiry / Job opportunity"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={5} 
                    className="w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                    placeholder="Tell me about your project or inquiry..."
                  ></textarea>
                </div>
                <button type="submit" className="primary-button w-full">
                  Send Message
                </button>
              </form>
            </div>
            <div className="space-y-8">
              <div className="glass-card p-8 rounded-2xl gradient-border glass-card-hover h-auto">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-sky-100 dark:bg-sky-900/30 flex items-center justify-center text-sky-500 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Email</h4>
                      <p className="text-slate-600 dark:text-slate-400">jerlyjy@gmail.com</p>
                      <a href="mailto:jerlyjy@gmail.com" className="text-sky-500 hover:text-sky-600 text-sm font-medium mt-1 inline-block">Send an email</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-sky-100 dark:bg-sky-900/30 flex items-center justify-center text-sky-500 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Location</h4>
                      <p className="text-slate-600 dark:text-slate-400">Manado, Indonesia</p>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">Available for remote work worldwide</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="glass-card p-8 rounded-2xl gradient-border glass-card-hover">
                <h3 className="text-2xl font-bold mb-6">Connect On Social Media</h3>
                <div className="grid grid-cols-2 gap-4">
                  <a href="https://github.com/Jerly08" target="_blank" rel="noopener noreferrer" 
                     className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                    <svg className="w-6 h-6 text-slate-700 dark:text-slate-300" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" clipRule="evenodd"/>
                    </svg>
                    <span className="font-medium">GitHub</span>
                  </a>
                  <a href="https://linkedin.com/in/jerly-merentek" target="_blank" rel="noopener noreferrer" 
                     className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                    <svg className="w-6 h-6 text-slate-700 dark:text-slate-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    <span className="font-medium">LinkedIn</span>
                  </a>
                  <a href="https://twitter.com/jerly_merentek" target="_blank" rel="noopener noreferrer" 
                     className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                    <svg className="w-6 h-6 text-slate-700 dark:text-slate-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                    <span className="font-medium">Twitter</span>
                  </a>
                  <a href="https://medium.com/@jerlymerentek" target="_blank" rel="noopener noreferrer" 
                     className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                    <svg className="w-6 h-6 text-slate-700 dark:text-slate-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                    </svg>
                    <span className="font-medium">Medium</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <div className="text-2xl font-bold gradient-text mb-4">Jerly.dev</div>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Full-stack software engineer with a passion for building elegant, efficient, and scalable solutions.
                </p>
                <div className="flex items-center gap-4 text-slate-600 dark:text-slate-400">
                  <a href="https://github.com/Jerly08" target="_blank" rel="noopener noreferrer" 
                     className="hover:text-sky-500 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" clipRule="evenodd"/>
                    </svg>
                  </a>
                  <a href="https://linkedin.com/in/jerly-merentek" target="_blank" rel="noopener noreferrer"
                     className="hover:text-sky-500 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href="https://twitter.com/jerly_merentek" target="_blank" rel="noopener noreferrer"
                     className="hover:text-sky-500 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <div className="space-y-2">
                  <a href="#about" className="block text-slate-600 dark:text-slate-400 hover:text-sky-500 transition-colors">About</a>
                  <a href="#skills" className="block text-slate-600 dark:text-slate-400 hover:text-sky-500 transition-colors">Skills</a>
                  <a href="#projects" className="block text-slate-600 dark:text-slate-400 hover:text-sky-500 transition-colors">Projects</a>
                  <a href="#contact" className="block text-slate-600 dark:text-slate-400 hover:text-sky-500 transition-colors">Contact</a>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Subscribe to Newsletter</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Get the latest updates on tech trends and my new projects directly to your inbox.
                </p>
                <form className="flex gap-2">
                  <input 
                    type="email" 
                    placeholder="Your email" 
                    className="flex-grow px-4 py-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                  />
                  <button type="submit" className="primary-button">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
            <div className="mt-12 pt-6 border-t border-slate-200 dark:border-slate-800 text-center text-slate-500 dark:text-slate-400">
              <p>© {new Date().getFullYear()} Jerly Refo Merentek. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
} 