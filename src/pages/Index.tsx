
import { useState, useEffect } from "react";
import { Code, Search, MonitorPlay, FileText, User, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";

// Placeholder profile image - Would be replaced with actual image
const profileImage = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800&h=800";

const Index = () => {
  const { toast } = useToast();
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
      duration: 5000,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-background to-muted">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className={`md:col-span-7 ${isLoaded ? 'animate-fade-in-right' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
                Hi, I'm <span className="text-highlight">Dhanush H M</span>
              </h1>
              <p className="text-xl md:text-2xl mb-6 text-foreground/80 font-light">
                Digital Marketing & AI-Coding Expert
              </p>
              <p className="text-foreground/70 mb-8 max-w-lg">
                BCA graduate with 5+ years of self-taught experience in digital marketing, 
                web monetization, and AI-assisted coding. Founder of ITZ Agency and a 
                freelance digital marketer managing 100+ websites.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#portfolio" className="btn-primary">
                  View Portfolio
                </a>
                <a href="#contact" className="btn-secondary">
                  Contact Me
                </a>
              </div>
            </div>
            <div className={`md:col-span-5 ${isLoaded ? 'animate-fade-in-left' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
              <div className="relative">
                <div className="absolute inset-0 -m-3 rounded-full bg-highlight/20 blur-xl"></div>
                <img 
                  src={profileImage} 
                  alt="Dhanush H M" 
                  className="rounded-full w-56 h-56 md:w-72 md:h-72 object-cover mx-auto border-4 border-highlight shadow-xl" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section bg-accent/5">
        <div className="container-custom">
          <SectionTitle title="About Me" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="mb-4">
                I'm a BCA graduate from Vivekananda College (Class of 2025) with over 5 years of 
                self-taught experience in digital marketing, web monetization, and AI-assisted coding. 
                As the founder of ITZ Agency, I've helped businesses optimize their online presence 
                and revenue streams.
              </p>
              <p className="mb-4">
                My journey began with a passion for technology and digital solutions, which led me
                to develop expertise in SEO, SEM, Google Ads, and website monetization through platforms
                like AdSense. I've managed over 100 websites, optimizing their performance and revenue.
              </p>
              <p>
                I specialize in utilizing AI tools like ChatGPT to enhance coding projects and 
                solve complex problems efficiently. My business-oriented mindset combined with 
                technical skills allows me to deliver results that drive real value.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">My Strengths</h3>
              <div className="space-y-3">
                <div className="bg-card p-4 rounded-lg border border-border">
                  <h4 className="font-semibold">Global Communication</h4>
                  <p className="text-foreground/70 text-sm mt-1">
                    Collaborating effectively with clients and teams across different cultural contexts.
                  </p>
                </div>
                <div className="bg-card p-4 rounded-lg border border-border">
                  <h4 className="font-semibold">Fast Learning</h4>
                  <p className="text-foreground/70 text-sm mt-1">
                    Quickly adapting to new tools, technologies, and industry changes.
                  </p>
                </div>
                <div className="bg-card p-4 rounded-lg border border-border">
                  <h4 className="font-semibold">AI-Assisted Problem-Solving</h4>
                  <p className="text-foreground/70 text-sm mt-1">
                    Leveraging AI tools to find innovative solutions and optimize workflows.
                  </p>
                </div>
                <div className="bg-card p-4 rounded-lg border border-border">
                  <h4 className="font-semibold">Business-Oriented Mindset</h4>
                  <p className="text-foreground/70 text-sm mt-1">
                    Focusing on solutions that deliver real business value and ROI.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section">
        <div className="container-custom">
          <SectionTitle title="Services" subtitle="Expert solutions to help grow your digital presence" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard 
              title="Digital Marketing Solutions" 
              description="SEO, SEM, Google Ads, Facebook/Instagram Ads, and comprehensive analytics setup to drive growth and visibility."
              icon={<Search size={24} />}
            />
            <ServiceCard 
              title="AI-Powered Coding Help" 
              description="Bug fixing, project enhancement, and code optimization using AI tools for efficient development."
              icon={<Code size={24} />}
            />
            <ServiceCard 
              title="Publisher Support" 
              description="Helping publishers monetize effectively and onboard with GCPP and various ad networks for maximum revenue."
              icon={<FileText size={24} />}
            />
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "HTML/CSS/JavaScript", 
                "PHP & MySQL", 
                "Google Ads", 
                "SEO/SEM",
                "AdSense Optimization", 
                "Web Monetization", 
                "AI Tools Integration",
                "Analytics & Reporting"
              ].map((skill, index) => (
                <div 
                  key={index} 
                  className="bg-card p-4 rounded-lg text-center border border-border hover:border-highlight transition-colors"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="section bg-accent/5">
        <div className="container-custom">
          <SectionTitle title="Portfolio" subtitle="Showcasing some of my recent projects" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard 
              title="Hospital Appointment System"
              description="Developed a comprehensive appointment scheduling system for a local hospital, enhancing patient experiences and optimizing staff scheduling."
              image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600"
              tags={["PHP", "MySQL", "Bootstrap", "AI-Assisted"]}
            />
            <ProjectCard 
              title="Publisher Revenue Maximization"
              description="Helped multiple quality publishers boost their advertising income by optimizing ad placements, implementing new monetization strategies, and improving user engagement."
              image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600"
              tags={["AdSense", "Monetization", "SEO", "Analytics"]}
            />
            <ProjectCard 
              title="College Project Mentorship"
              description="Provided technical guidance and mentorship to peers on their final year projects, utilizing AI tools to enhance functionality and performance."
              image="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=600"
              tags={["Mentorship", "AI Tools", "Project Management"]}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container-custom">
          <SectionTitle title="Contact Me" subtitle="Let's discuss how I can help with your project" />
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-7">
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-foreground/70 mb-1">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      placeholder="Your name" 
                      className="w-full px-4 py-3 rounded-md bg-card border border-border focus:border-highlight outline-none transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-foreground/70 mb-1">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      placeholder="Your email" 
                      className="w-full px-4 py-3 rounded-md bg-card border border-border focus:border-highlight outline-none transition-colors"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-foreground/70 mb-1">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    placeholder="Subject" 
                    className="w-full px-4 py-3 rounded-md bg-card border border-border focus:border-highlight outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-foreground/70 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    rows={5} 
                    placeholder="Your message" 
                    className="w-full px-4 py-3 rounded-md bg-card border border-border focus:border-highlight outline-none transition-colors resize-none"
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="btn-secondary flex items-center"
                >
                  Send Message
                  <ArrowRight size={16} className="ml-2" />
                </button>
              </form>
            </div>
            <div className="md:col-span-5">
              <div className="bg-card p-6 rounded-lg shadow-lg border border-border h-full">
                <h3 className="text-xl font-bold mb-4">Get In Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <User size={20} className="text-highlight mr-3 mt-1" />
                    <div>
                      <h4 className="font-medium">Dhanush H M</h4>
                      <p className="text-foreground/70 text-sm">Founder, ITZ Agency</p>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-foreground/70">+91 8088786524</p>
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-foreground/70">hello@reallygreatsite.com</p>
                  </div>
                  <div>
                    <p className="font-medium">Website</p>
                    <p className="text-foreground/70">www.reallygreatsite.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
