import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { C, CINZEL, EASE, fadeUp } from '../tokens';

const DeviceFrame = ({ children, style = {} }) => (
  <div style={{
    borderRadius:  38,
    background:    '#080808',
    border:        '1.5px solid rgba(255,255,255,0.1)',
    overflow:      'hidden',
    boxShadow:     'inset 0 0 0 1px rgba(255,255,255,0.04), 0 40px 80px rgba(0,0,0,0.75), 0 0 60px rgba(0,122,255,0.07)',
    ...style,
  }}>
    {children}
  </div>
);

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const colY = useTransform(scrollYProgress, [0, 1], [0, -180]);

  return (
    <section ref={ref} id="hero" className="hero-pad" style={{
      minHeight:  '100vh',
      display:    'flex',
      alignItems: 'center',
      position:   'relative',
      overflow:   'hidden',
    }}>
      {/* Marble overlay */}
      <div style={{
        position:           'absolute',
        inset:              0,
        backgroundImage:    'url(/assets/fondo_marmol.jpg)',
        backgroundSize:     'cover',
        backgroundPosition: 'center',
        opacity:            0.07,
        pointerEvents:      'none',
        zIndex:             0,
      }} />

      {/* Vignette */}
      <div style={{
        position:      'absolute',
        inset:         0,
        background:    'radial-gradient(ellipse 80% 60% at 50% 50%, transparent 40%, rgba(0,0,0,0.55) 100%)',
        pointerEvents: 'none',
        zIndex:        0,
      }} />

      {/* Background columns — Layer 1: slowest */}
      <motion.div style={{
        position:      'absolute',
        inset:         0,
        pointerEvents: 'none',
        overflow:      'hidden',
        zIndex:        0,
        y:             colY,
      }}>
        <div style={{ position: 'absolute', left: '2%', bottom: 0, opacity: 0.028 }}>
          <svg width="110" height="900" viewBox="0 0 110 900" fill="white">
            <rect x="36" y="0" width="38" height="10" rx="2"/>
            <rect x="28" y="10" width="54" height="7" rx="1"/>
            <rect x="38" y="17" width="34" height="778"/>
            <rect x="28" y="795" width="54" height="7" rx="1"/>
            <rect x="20" y="802" width="70" height="13" rx="2"/>
            <line x1="46" y1="17" x2="46" y2="795" stroke="black" strokeWidth="2" strokeOpacity="0.3"/>
            <line x1="55" y1="17" x2="55" y2="795" stroke="black" strokeWidth="2" strokeOpacity="0.3"/>
            <line x1="64" y1="17" x2="64" y2="795" stroke="black" strokeWidth="2" strokeOpacity="0.3"/>
          </svg>
        </div>
        <div style={{ position: 'absolute', right: '3%', bottom: 0, opacity: 0.028 }}>
          <svg width="90" height="780" viewBox="0 0 90 780" fill="white">
            <rect x="28" y="0" width="34" height="9" rx="2"/>
            <rect x="21" y="9" width="48" height="6" rx="1"/>
            <rect x="30" y="15" width="30" height="660"/>
            <rect x="21" y="675" width="48" height="6" rx="1"/>
            <rect x="14" y="681" width="62" height="11" rx="2"/>
            <line x1="37" y1="15" x2="37" y2="675" stroke="black" strokeWidth="1.8" strokeOpacity="0.3"/>
            <line x1="45" y1="15" x2="45" y2="675" stroke="black" strokeWidth="1.8" strokeOpacity="0.3"/>
            <line x1="53" y1="15" x2="53" y2="675" stroke="black" strokeWidth="1.8" strokeOpacity="0.3"/>
          </svg>
        </div>
        <div style={{ position: 'absolute', left: '14%', bottom: 0, opacity: 0.015 }}>
          <svg width="60" height="600" viewBox="0 0 60 600" fill="white">
            <rect x="18" y="0" width="24" height="7" rx="1"/>
            <rect x="13" y="7" width="34" height="5"/>
            <rect x="19" y="12" width="22" height="500"/>
            <rect x="13" y="512" width="34" height="5"/>
            <rect x="8"  y="517" width="44" height="8" rx="1"/>
            <line x1="24" y1="12" x2="24" y2="512" stroke="black" strokeWidth="1.2" strokeOpacity="0.25"/>
            <line x1="30" y1="12" x2="30" y2="512" stroke="black" strokeWidth="1.2" strokeOpacity="0.25"/>
            <line x1="36" y1="12" x2="36" y2="512" stroke="black" strokeWidth="1.2" strokeOpacity="0.25"/>
          </svg>
        </div>
      </motion.div>

      {/* Foreground content — Layer 3 */}
      <div style={{ maxWidth: 1100, margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
        <div className="hero-grid">
          {/* Left: copy */}
          <div>
            <motion.div {...fadeUp(0)} style={{
              fontSize:      10,
              fontWeight:    600,
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color:         C.primary,
              marginBottom:  28,
              display:       'flex',
              alignItems:    'center',
              gap:           12,
            }}>
              <div style={{ width: 20, height: 1, background: C.primary, flexShrink: 0 }} />
              Sistema de entrenamiento
            </motion.div>

            <motion.h1 {...fadeUp(0.1)} style={{
              fontFamily:    CINZEL,
              fontSize:      'clamp(42px, 5.5vw, 72px)',
              lineHeight:    1.05,
              letterSpacing: '0.04em',
              fontWeight:    900,
              textTransform: 'uppercase',
              marginBottom:  28,
            }}>
              Construye<br />
              <span style={{ color: C.primary }}>tu Imperium</span>
            </motion.h1>

            <motion.p {...fadeUp(0.2)} style={{
              fontSize:     16,
              fontWeight:   300,
              color:        C.onVariant,
              lineHeight:   1.8,
              maxWidth:     400,
              marginBottom: 48,
            }}>
              Disciplina, estructura y progreso medible.<br />
              Cada sesión cuenta. Cada récord queda.<br />
              Cada racha define quién sos.
            </motion.p>

            <motion.div {...fadeUp(0.3)}>
              <motion.a
                href="#cta-final"
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
                Comenzar ahora
              </motion.a>
            </motion.div>
          </div>

          {/* Right: phones — Layer 2 */}
          <div className="hero-phone-wrap">
            <motion.div {...fadeUp(0.2)} className="hero-phone-main float-a">
              <DeviceFrame style={{ width: '100%', height: '100%' }}>
                <img src="/assets/pantalla_Planner.png" alt="Planner Imperium" style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
              </DeviceFrame>
            </motion.div>

            <motion.div {...fadeUp(0.35)} className="float-b hero-phone-secondary" style={{
              position:     'absolute',
              right:        -20,
              top:          48,
              width:        190,
              height:       412,
              zIndex:       1,
              opacity:      0.65,
              borderRadius: 30,
              overflow:     'hidden',
              boxShadow:    '0 20px 60px rgba(0,0,0,0.65)',
              background:   '#080808',
              border:       '1.5px solid rgba(255,255,255,0.1)',
              flexShrink:   0,
            }}>
              <img src="/assets/pantalla_Entrena.png" alt="Entrenamiento Imperium" style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
