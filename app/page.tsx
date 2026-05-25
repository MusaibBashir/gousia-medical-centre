import Header from '@/components/header';
import Hero from '@/components/hero';
import Doctor from '@/components/doctor';
import Services from '@/components/services';
import Hours from '@/components/hours';
import Values from '@/components/values';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="bg-background">
      <Header />
      <Hero />
      <Doctor />
      <Services />
      <Hours />
      <Values />
      <Contact />
      <Footer />
    </main>
  );
}
