import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import Problem from '@/components/sections/Problem';
import Solution from '@/components/sections/Solution';
import HowItWorks from '@/components/sections/HowItWorks';
import Market from '@/components/sections/Market';
import Validation from '@/components/sections/Validation';
import Team from '@/components/sections/Team';
import Funding from '@/components/sections/Funding';
import Enroll from '@/components/sections/Enroll';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-coolGray">
      <Navbar />
      <Hero />
      
      <Section id="problem" title="The Problem">
        <Problem />
      </Section>
      
      <Section id="solution" title="Our Solution">
        <Solution />
      </Section>
      
      <Section id="how-it-works" title="How It Works">
        <HowItWorks />
      </Section>
      
      <Section id="market" title="Market Opportunity" bgColor="bg-darkNavy">
        <Market />
      </Section>
      
      <Section id="validation" title="Customer Validation">
        <Validation />
      </Section>
      
      <Section id="team" title="Our Team">
        <Team />
      </Section>
      
      <Section id="funding" title="Funding" bgColor="bg-darkNavy">
        <Funding />
      </Section>
      
      <Section id="enroll" title="">
        <Enroll />
      </Section>
      
      <Footer />
    </main>
  );
}