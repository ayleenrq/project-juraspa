import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import BrandStory from './components/BrandStory';
import Testimonials from './components/Testimonials';
import ConfiguratorCTA from './components/ConfiguratorCTA';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Products />
        <BrandStory />
        <Testimonials />
        <ConfiguratorCTA />
      </main>
      <Footer />
    </>
  );
}
