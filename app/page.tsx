import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Capabilities } from "@/components/sections/capabilities";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";
import { ScrollProgress } from "@/components/motion/scroll-progress";
import { AnimatedBackground } from "@/components/motion/animated-background";
import { portfolio } from "@/config/portfolio";

export default function Page() {
  const sameAs = [
    portfolio.contact.github, 
    portfolio.contact.linkedin
  ].filter(Boolean);

  const ld = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: portfolio.person.name,
    jobTitle: portfolio.person.title,
    email: portfolio.contact.email,
    telephone: portfolio.contact.phoneDisplay,
    address: {
      "@type": "PostalAddress",
      addressLocality: portfolio.person.location,
    },
    sameAs,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(ld).replace(/</g, "\\u003c"),
        }}
      />
      <ScrollProgress />
      <AnimatedBackground />
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Capabilities />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}