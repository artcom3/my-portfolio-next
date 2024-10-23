"use client"

import { useState, useEffect } from 'react'
import { ArrowUpCircle, Linkedin, Mail, Phone, Menu, X, Globe } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image';

const globalStyles = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fade-in {
    animation: fadeIn 0.5s ease-out forwards;
  }
`;

const portfolioData = {
  personalInformation: {
    name: "Kevin Haro",
    location: "Salt Lake City, Utah",
    email: "kevin.haro.r3@gmail.com",
    phone: "(385) 461-5172",
    linkedin: "https://linkedin.com/in/kevinharor",
    website: "https://kharo.dev",
    bio: "I am a dedicated web developer with experience in full-stack development, specializing in creating dynamic, responsive websites using modern technologies like Next.js and React. With a strong foundation in both front-end and back-end development, I am passionate about building efficient, scalable solutions that enhance user experiences. I thrive in collaborative environments and am always eager to learn and apply new technologies to solve complex problems. Bilingual in English and Spanish, I am driven by a desire to contribute to impactful projects.",
    picture: "/profile.png"
  },
  skills: {
    languagesFrameworks: ["JavaScript", "HTML5", "CSS3", "Angular", "React", "Next.js", "PHP", "Python", "Java", "Tailwind"],
    technologiesTools: ["Node.js", "Docker", "MySQL", "PostgreSQL", "AWS (EC2, Lambda)", "MongoDB", "Redis", "GIT"],
    other: ["SCRUM", "Jira", "Linux", "SharePoint", "Bilingual (Spanish)", "Responsive Design Techniques"]
  },
  projects: [
    {
      title: "E-Commerce Website",
      description: "Developed a custom e-commerce website with Next.js, integrating real-time inventory management with the store's in-house database.",
      technologies: ["Next.js", "Database Integration"],
      link: "https://viasolutec.com"
    }
  ],
  experience: [
    {
      jobTitle: "Missionary Support",
      company: "BYU Pathway Worldwide",
      location: "Salt Lake City, USA",
      dates: "Mar 2024 – Present",
      responsibilities: [
        "Provided technical support to missionaries, resolving software and SharePoint-related issues.",
        "Created automated workflows in Power Automate to enhance operational efficiency."
      ]
    },
    {
      jobTitle: "Web Developer",
      company: "Via Solutec SAC",
      location: "Trujillo, Peru",
      dates: "Aug 2023 – Jan 2024",
      responsibilities: [
        "Developed a custom e-commerce website with Next.js, integrated with the in-house database.",
        "Collaborated with the internal team to optimize site performance and database connectivity."
      ]
    },
    {
      jobTitle: "Junior Software Developer",
      company: "RedTeam Software",
      location: "Remote - Peru",
      dates: "Jan 2023 – Aug 2023",
      responsibilities: [
        "Resolved bugs in web applications using ASP, Angular, and SQL Server.",
        "Contributed to the development and maintenance of web applications."
      ]
    }
  ],
  education: [
    {
      degree: "Bachelor of Applied Science in Information Technology - Software Engineering",
      institution: "Ensign College",
      location: "Salt Lake City, Utah",
      dates: "Sep 2024 – Apr 2026"
    },
    {
      degree: "Associate of Applied Science - Applied Technology",
      institution: "Brigham Young University–Idaho",
      location: "Rexburg, Idaho",
      dates: "Apr 2021 – Apr 2023"
    }
  ]
}

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = globalStyles;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <header className="sticky top-0 z-50 bg-gray-800 shadow-md">
        <nav className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">KH</Link>
            <button onClick={toggleMenu} className="md:hidden">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <ul className={`md:flex md:space-x-4 ${isMenuOpen ? 'block' : 'hidden'} absolute md:relative top-full left-0 right-0 bg-gray-800/80 backdrop-blur-md md:bg-transparent p-4 md:p-0 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100' : 'opacity-0 md:opacity-100'}`}>
              {['about', 'skills', 'projects', 'experience', 'education', 'contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item}`} 
                    className="block py-2 md:py-0 hover:text-blue-400 transition-colors capitalize"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById(item);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                      closeMenu();
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl py-8">
        <section id="about" className="mb-24 scroll-mt-16">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3">
              <h1 className="text-4xl font-bold mb-4">{portfolioData.personalInformation.name}</h1>
              <p className="text-xl mb-4">{portfolioData.personalInformation.location}</p>
              <p className="mb-6">{portfolioData.personalInformation.bio}</p>
              <div className="flex space-x-4">
                <Link href={portfolioData.personalInformation.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </Link>
                <Link href={portfolioData.personalInformation.website} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                  <Globe className="w-6 h-6" />
                </Link>
              </div>
            </div>
            <div className="md:w-1/3 mt-8 md:mt-0">
              <Image src={portfolioData.personalInformation.picture} width={500} height={500} alt={portfolioData.personalInformation.name} className="rounded-full w-64 h-64 object-cover mx-auto" />
            </div>
          </div>
        </section>

        <section id="skills" className="mb-24 scroll-mt-16">
          <h2 className="text-3xl font-bold mb-6">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {Object.entries(portfolioData.skills).map(([category, skills]) => (
              <div key={category}>
                <h3 className="text-xl font-semibold mb-4 capitalize">{category.replace(/([A-Z])/g, ' $1').trim()}</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span key={skill} className="bg-gray-700 text-sm rounded-full px-3 py-1">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="mb-24 scroll-mt-16">
          <h2 className="text-3xl font-bold mb-6">Projects</h2>
          {portfolioData.projects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span key={tech} className="bg-blue-600 text-sm rounded-full px-3 py-1">{tech}</span>
                ))}
              </div>
              <Link href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors">
                View Project
              </Link>
            </div>
          ))}
        </section>

        <section id="experience" className="mb-24 scroll-mt-16">
          <h2 className="text-3xl font-bold mb-6">Experience</h2>
          <div className="space-y-12">
            {portfolioData.experience.map((job, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-semibold mb-2">{job.jobTitle}</h3>
                <p className="text-lg mb-2">{job.company} - {job.location}</p>
                <p className="text-gray-400 mb-4">{job.dates}</p>
                <ul className="list-disc list-inside space-y-2">
                  {job.responsibilities.map((responsibility, idx) => (
                    <li key={idx}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="education" className="mb-24 scroll-mt-16">
          <h2 className="text-3xl font-bold mb-6">Education</h2>
          <div className="space-y-12">
            {portfolioData.education.map((edu, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-semibold mb-2">{edu.degree}</h3>
                <p className="text-lg mb-2">{edu.institution}</p>
                <p className="text-gray-400 mb-2">{edu.location}</p>
                <p>{edu.dates}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="scroll-mt-16">
          <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2">Name</label>
                <input type="text" id="name" name="name" className="w-full p-2 rounded bg-gray-700 text-white" required />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">Email</label>
                <input type="email" id="email" name="email" className="w-full p-2 rounded bg-gray-700 text-white" required />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">Message</label>
                <textarea id="message" name="message" rows={4} className="w-full p-2 rounded bg-gray-700 text-white" required></textarea>
              </div>
              <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors">Send Message</button>
            </form>
            <div className="mt-8 flex items-center space-x-4">
              <Mail className="w-6 h-6" />
              <a href={`mailto:${portfolioData.personalInformation.email}`} className="hover:text-blue-400 transition-colors">{portfolioData.personalInformation.email}</a>
            </div>
            <div className="mt-4 flex items-center space-x-4">
              <Phone className="w-6 h-6" />
              <a href={`tel:${portfolioData.personalInformation.phone}`} className="hover:text-blue-400 transition-colors">{portfolioData.personalInformation.phone}</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-center py-4 mt-16">
        <p>&copy; {new Date().getFullYear()} {portfolioData.personalInformation.name}. All rights reserved.</p>
      </footer>

      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-600 transition-colors"
          aria-label="Scroll to top"
        >
          <ArrowUpCircle className="w-6 h-6" />
        </button>
      )}
    </div>
  )
}