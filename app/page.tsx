import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import Problem from '@/components/sections/Problem';
import Solution from '@/components/sections/Solution';
import HowItWorks from '@/components/sections/HowItWorks';
import Validation from '@/components/sections/Validation';
import Enroll from '@/components/sections/Enroll';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-creamBackground">
      <Navbar />
      <Hero />
      
      <Section id="problem" title="The Problem" bgColor="bg-lightCream">
        <Problem />
      </Section>
      
      <Section id="solution" title="Solution" bgColor="bg-lightCream">
        <div className="text-center mb-12">
          <p className="text-lg md:text-xl text-mediumText max-w-4xl mx-auto leading-relaxed">
            Our platform reimagines industrial energy management with a <span className="text-brandAccent font-semibold">UI-less SCADA interface</span>, allowing operators to use <span className="text-brandAccent font-semibold">natural language prompts</span> instead of navigating complex charts and dashboards - while our AI agents handle the rest.
          </p>
        </div>
        <Solution />
      </Section>
      
      <Section id="how-it-works" title="How It Works" bgColor="bg-creamBackground">
        <HowItWorks />
      </Section>
      
      <Section id="validation" title="Customer Validation" bgColor="bg-lightCream">
        <Validation />
      </Section>
      
      <Section id="enroll" title="" bgColor="bg-creamBackground">
        <Enroll />
      </Section>
      
      <Footer />
    </main>
  );
}