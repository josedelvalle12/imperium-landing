import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { C, CINZEL, fadeUp, containerStyle, sectionPad } from '../tokens';

const pillars = [
  {
    num: 'I',
    title: 'Estructura',
    body: 'Un sistema ordenado donde cada entrenamiento tiene su lugar. Sin improvisación, sin azar.',
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <rect x="16" y="5" width="12" height="3" rx="1" fill="#007AFF"/>
        <rect x="14" y="8" width="16" height="2" rx="0.5" fill="#007AFF" opacity="0.55"/>
        <rect x="17.5" y="10" width="9" height="21" fill="#007AFF" opacity="0.85"/>
        <rect x="14" y="31" width="16" height="2" rx="0.5" fill="#007AFF" opacity="0.55"/>
        <rect x="12" y="33" width="20" height="3" rx="1" fill="#007AFF"/>
        <line x1="18.5" y1="10" x2="18.5" y2="31" stroke="rgba(0,122,255,0.35)" strokeWidth="1"/>
        <line x1="22"   y1="10" x2="22"   y2="31" stroke="rgba(0,122,255,0.35)" strokeWidth="1"/>
        <line x1="25.5" y1="10" x2="25.5" y2="31" stroke="rgba(0,122,255,0.35)" strokeWidth="1"/>
      </svg>
    ),
  },
  {
    num: 'II',
    title: 'Control',
    body: 'Registrás cada variable. El peso, las repeticiones, el progreso. Nada se pierde, nada se asume.',
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <circle cx="22" cy="22" r="14" stroke="#007AFF" strokeWidth="1.5"/>
        <circle cx="22" cy="22" r="8"  stroke="#007AFF" strokeWidth="1.5" opacity="0.6"/>
        <circle cx="22" cy="22" r="3"  fill="#007AFF"/>
        <line x1="22" y1="5"  x2="22" y2="12" stroke="#007AFF" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="22" y1="32" x2="22" y2="39" stroke="#007AFF" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="5"  y1="22" x2="12" y2="22" stroke="#007AFF" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="32" y1="22" x2="39" y2="22" stroke="#007AFF" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: 'III',
    title: 'Consistencia',
    body: 'La suma de los días define el resultado. Imperium mide y recompensa tu constancia.',
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <rect x="6"  y="30" width="6" height="8"  rx="1" fill="#007AFF" opacity="0.45"/>
        <rect x="15" y="24" width="6" height="14" rx="1" fill="#007AFF" opacity="0.65"/>
        <rect x="24" y="17" width="6" height="21" rx="1" fill="#007AFF" opacity="0.85"/>
        <rect x="33" y="9"  width="6" height="29" rx="1" fill="#007AFF"/>
        <path d="M9 30 L18 24 L27 17 L36 9" stroke="#007AFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="2 2"/>
      </svg>
    ),
  },
];

export default function Value() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const colY = useTransform(scrollYProgress, [0, 1], [40, -120]);

  return (
    <section ref={ref} id="value" className="s-pad" style={{
      background:   C.surfaceLow,
      borderTop:    `1px solid ${C.border}`,
      borderBottom: `1px solid ${C.border}`,
      position:     'relative',
      overflow:     'hidden',
    }}>
      {/* Background column */}
      <motion.div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0, y: colY }}>
        <div style={{ position: 'absolute', right: '1%', bottom: 0, opacity: 0.022 }}>
          <svg width="100" height="820" viewBox="0 0 100 820" fill="white">
            <rect x="33" y="0"   width="34" height="9"   rx="2"/>
            <rect x="26" y="9"   width="48" height="6"   rx="1"/>
            <rect x="35" y="15"  width="30" height="710"/>
            <rect x="26" y="725" width="48" height="6"   rx="1"/>
            <rect x="19" y="731" width="62" height="11"  rx="2"/>
            <line x1="42" y1="15" x2="42" y2="725" stroke="black" strokeWidth="1.5" strokeOpacity="0.25"/>
            <line x1="50" y1="15" x2="50" y2="725" stroke="black" strokeWidth="1.5" strokeOpacity="0.25"/>
            <line x1="58" y1="15" x2="58" y2="725" stroke="black" strokeWidth="1.5" strokeOpacity="0.25"/>
          </svg>
        </div>
      </motion.div>

      <div style={containerStyle}>
        {/* Value statement */}
        <div style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto 80px' }}>
          <motion.p {...fadeUp(0)} style={{
            fontFamily:    CINZEL,
            fontSize:      'clamp(20px, 2.8vw, 34px)',
            fontWeight:    700,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            marginBottom:  14,
          }}>
            No es otra app de fitness.
          </motion.p>
          <motion.p {...fadeUp(0.1)} style={{ fontSize: 17, fontWeight: 300, color: C.onVariant, letterSpacing: '0.02em' }}>
            Es un sistema basado en disciplina y control.
          </motion.p>
        </div>

        {/* Pillars grid */}
        <div className="value-grid" style={{
          background: C.border,
          gap:        1,
          border:     `1px solid ${C.border}`,
        }}>
          {pillars.map((p, i) => (
            <motion.div
              key={p.num}
              {...fadeUp(i * 0.1)}
              whileHover={{ background: C.surfaceMid }}
              className="pillar-cell"
              style={{
                background: C.surface,
                textAlign:  'center',
                transition: 'background 0.3s',
              }}
            >
              <span style={{
                fontFamily:    "'Manrope', sans-serif",
                fontSize:      10,
                fontWeight:    700,
                letterSpacing: '0.22em',
                color:         C.primary,
                display:       'block',
                marginBottom:  24,
              }}>{p.num}</span>
              <div style={{ marginBottom: 24, display: 'flex', justifyContent: 'center' }}>{p.icon}</div>
              <h3 style={{
                fontFamily:    CINZEL,
                fontSize:      18,
                fontWeight:    600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom:  14,
              }}>{p.title}</h3>
              <p style={{ fontSize: 13, color: C.onVariant, lineHeight: 1.75 }}>{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
