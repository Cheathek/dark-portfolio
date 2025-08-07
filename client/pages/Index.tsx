import { Layout } from '@/components/Layout';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';

export default function Index() {
  return (
    <Layout>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Contact />
    </Layout>
  );
}