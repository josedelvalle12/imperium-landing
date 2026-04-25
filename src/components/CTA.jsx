import { motion } from 'framer-motion';
import { C, CINZEL, EASE, fadeUp } from '../tokens';
import logoImperium from '../assets/Logo_Imperium.svg';
import marmolBg from '../assets/fondo_marmol.jpg';

export default function CTA() {
  return (
    <section id="cta-final" className="s-pad-tall" style={{
      background:   C.surface,
      borderTop:    `1px solid ${C.border}`,
      textAlign:    'center',
      position:     'relative',
      overflow:     'hidden',
    }}>
      {/* Marble overlay */}
      <div style={{
        position:           'absolute',
        inset:              0,
        backgroundImage:    `url(${marmolBg})`,
        backgroundSize:     'cover',
        backgroundPosition: 'center',
        opacity:            0.06,
        pointerEvents:      'none',
        zIndex:             0,
      }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <motion.img
          {...fadeUp(0)}
          src={logoImperium}
          alt="Imperium"
          style={{ height: 72, margin: '0 auto 40px', display: 'block', opacity: 0.95 }}
        />

        <motion.h2 {...fadeUp(0.1)} style={{
          fontFamily:    CINZEL,
          fontSize:      'clamp(30px, 4vw, 52px)',
          fontWeight:    900,
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
          marginBottom:  18,
          lineHeight:    1.1,
        }}>
          Empieza a construir<br />tu Imperium hoy
        </motion.h2>

        <motion.p {...fadeUp(0.2)} style={{
          fontSize:     15,
          fontWeight:   300,
          color:        C.onVariant,
          letterSpacing:'0.04em',
          marginBottom: 52,
        }}>
          Sin excusas. Sin interrupciones. Solo progreso.
        </motion.p>

        <motion.div {...fadeUp(0.3)}>
          <motion.a
            href="#"
            whileHover={{ y: -3, scale: 1.025, boxShadow: '0 0 56px rgba(0,114,240,0.45)', borderColor: 'rgba(120,180,255,0.45)' }}
            transition={{ duration: 0.25, ease: EASE }}
            style={{
              display:        'inline-flex',
              alignItems:     'center',
              gap:            10,
              padding:        '18px 38px',
              background:     'linear-gradient(135deg, #0055cc, #0072F0)',
              color:          '#fff',
              fontSize:       13,
              fontWeight:     500,
              letterSpacing:  '0.1em',
              textTransform:  'uppercase',
              textDecoration: 'none',
              border:         '1px solid transparent',
              borderRadius:   8,
              boxShadow:      '0 0 36px rgba(0,114,240,0.25)',
            }}
          >
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <path d="M2.5 7.5h10M8.5 3.5l4 4-4 4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Comenzar gratis
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
