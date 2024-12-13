import About from "@/components/About";
import Blog from "@/components/Blog";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Services from "@/components/Services";
import Skill from "@/components/Skill";
import Testimonial from "@/components/Testimonial";
import NoxfolioLayout from "@/layout/NoxfolioLayout";

export default function Home() {
  return (
    <NoxfolioLayout>
      {/* Hero Section Start */}
      <Hero />
      {/* Hero Section End */}

      {/* About Area Start */}
      <About />
      {/* About Area End */}

      {/* Resume Area Start */}
      <Resume />
      {/* Resume Area End */}

      {/* Services Area Start */}
      <Services />
      {/* Services Area End */}

      {/* Skill Area Start */}
      <Skill />
      {/* Skill Area End */}

      {/* Projects Area Start */}
      <Projects />
      {/* Projects Area End */}

      {/* Testimonial Area Start */}
      <Testimonial />
      {/* Testimonial Area End */}

      {/* Pricing Area Start */}
      <Pricing />
      {/* Pricing Area End */}

      {/* Contact Area Start */}
      <Contact />
      {/* Contact Area End */}

      {/* Blog Area Start */}
      <Blog />
      {/* Blog Area End */}

      {/* Client Log Start */}
      <Clients />
      {/* Client Log End */}
    </NoxfolioLayout>
  );
}
