import useLenis    from './hooks/useLenis';
import CursorGlow  from './components/CursorGlow';
import Nav         from './components/Nav';
import Hero        from './components/Hero';
import Value       from './components/Value';
import Features    from './components/Features';
import Progression from './components/Progression';
import Philosophy  from './components/Philosophy';
import Preview     from './components/Preview';
import CTA         from './components/CTA';
import Footer      from './components/Footer';

export default function App() {
  useLenis();

  return (
    <>
      <CursorGlow />
      <Nav />
      <main>
        <Hero />
        <Value />
        <Features />
        <Progression />
        <Philosophy />
        <Preview />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
