import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { C, CINZEL, fadeUp } from '../tokens';

export default function Philosophy() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const colY = useTransform(scrollYProgress, [0, 1], [40, -160]);

  return (
    <section ref={ref} id="philosophy" style={{
      background:   C.surface,
      textAlign:    'center',
      padding:      '160px 56px',
      position:     'relative',
      overflow:     'hidden',
    }}>
      {/* Marble overlay */}
      <div style={{
        position:           'absolute',
        inset:              0,
        backgroundImage:    'url(/assets/fondo_marmol.jpg)',
        backgroundSize:     'cover',
        backgroundPosition: 'center',
        opacity:            0.05,
        pointerEvents:      'none',
        zIndex:             0,
      }} />

      {/* Vignette */}
      <div style={{
        position:      'absolute',
        inset:         0,
        background:    'radial-gradient(ellipse 70% 70% at 50% 50%, transparent 30%, rgba(0,0,0,0.7) 100%)',
        pointerEvents: 'none',
        zIndex:        0,
      }} />

      {/* Background columns — both sides */}
      <motion.div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0, y: colY }}>
        <div style={{ position: 'absolute', left: 0, bottom: 0, opacity: 0.038 }}>
          <svg width="130" height="900" viewBox="0 0 130 900" fill="white">
            <rect x="43" y="0"   width="44" height="12"  rx="2"/>
            <rect x="33" y="12"  width="64" height="8"   rx="1"/>
            <rect x="46" y="20"  width="38" height="768"/>
            <rect x="33" y="788" width="64" height="8"   rx="1"/>
            <rect x="24" y="796" width="82" height="14"  rx="2"/>
            <line x1="55" y1="20" x2="55" y2="788" stroke="black" strokeWidth="2" strokeOpacity="0.3"/>
            <line x1="65" y1="20" x2="65" y2="788" stroke="black" strokeWidth="2" strokeOpacity="0.3"/>
            <line x1="75" y1="20" x2="75" y2="788" stroke="black" strokeWidth="2" strokeOpacity="0.3"/>
          </svg>
        </div>
        <div style={{ position: 'absolute', right: 0, bottom: 0, opacity: 0.038 }}>
          <svg width="130" height="900" viewBox="0 0 130 900" fill="white">
            <rect x="43" y="0"   width="44" height="12"  rx="2"/>
            <rect x="33" y="12"  width="64" height="8"   rx="1"/>
            <rect x="46" y="20"  width="38" height="768"/>
            <rect x="33" y="788" width="64" height="8"   rx="1"/>
            <rect x="24" y="796" width="82" height="14"  rx="2"/>
            <line x1="55" y1="20" x2="55" y2="788" stroke="black" strokeWidth="2" strokeOpacity="0.3"/>
            <line x1="65" y1="20" x2="65" y2="788" stroke="black" strokeWidth="2" strokeOpacity="0.3"/>
            <line x1="75" y1="20" x2="75" y2="788" stroke="black" strokeWidth="2" strokeOpacity="0.3"/>
          </svg>
        </div>
      </motion.div>

      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <motion.span {...fadeUp(0)} style={{
          fontSize: 10, fontWeight: 600, letterSpacing: '0.25em',
          textTransform: 'uppercase', color: C.primary, display: 'block', marginBottom: 40,
        }}>
          Filosofía
        </motion.span>

        <motion.div {...fadeUp(0.1)} style={{
          fontFamily:    CINZEL,
          fontSize:      'clamp(28px, 4.2vw, 58px)',
          fontWeight:    900,
          letterSpacing: '0.04em',
          textTransform: 'uppercase',
          lineHeight:    1.15,
          maxWidth:      900,
          margin:        '0 auto 28px',
        }}>
          La motivación es temporal.
          <span style={{ color: C.primary, display: 'block' }}>La disciplina es permanente.</span>
        </motion.div>

        <motion.p {...fadeUp(0.2)} style={{
          fontSize:      13,
          fontWeight:    400,
          color:         C.onDim,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
        }}>
          Imperium está construido para quien ya lo decidió.
        </motion.p>
      </div>
    </section>
  );
}
