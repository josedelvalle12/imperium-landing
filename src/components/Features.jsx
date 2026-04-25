import { motion } from 'framer-motion';
import { C, CINZEL, fadeUp, containerStyle, sectionPad } from '../tokens';

const features = [
  {
    num: '01',
    title: 'Seguimiento de entrenamientos',
    body: 'Registrá cada sesión con precisión. Ejercicios, series, repeticiones y pesos quedan documentados en tu historial permanente.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="6" y="4" width="20" height="24" rx="3" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5"/>
        <line x1="10" y1="10" x2="22" y2="10" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="10" y1="14" x2="22" y2="14" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="10" y1="18" x2="17" y2="18" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="22" cy="22" r="4" fill="#007AFF"/>
        <path d="M20 22l1.5 1.5L24 20" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Registros Personales',
    body: 'Cada PR queda marcado con una corona. El sistema detecta automáticamente tus mejores marcas y las preserva como tus victorias históricas.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M4 24h24v3H4z" fill="rgba(255,255,255,0.25)"/>
        <path d="M4 22l4-14 8 8 4-10 4 10 8-8 4 14H4z" fill="rgba(255,255,255,0.25)"/>
        <circle cx="8"  cy="8" r="2" fill="#007AFF"/>
        <circle cx="16" cy="6" r="2" fill="#007AFF"/>
        <circle cx="24" cy="8" r="2" fill="#007AFF"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Sistema de Rachas',
    body: 'La constancia tiene su recompensa. Cada día consecutivo construye tu racha — una métrica visible de tu disciplina acumulada.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M5 26c-3-5-2-12 4-17"  stroke="rgba(255,255,255,0.3)"  strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M27 26c3-5 2-12-4-17"  stroke="rgba(255,255,255,0.3)"  strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M9 28c-4-3-5-10-1-16"  stroke="rgba(255,255,255,0.22)" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M23 28c4-3 5-10 1-16"  stroke="rgba(255,255,255,0.22)" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M13 29c-2-3-3-8-1-13"  stroke="rgba(255,255,255,0.18)" strokeWidth="1.3" strokeLinecap="round"/>
        <path d="M19 29c2-3 3-8 1-13"   stroke="rgba(255,255,255,0.18)" strokeWidth="1.3" strokeLinecap="round"/>
        <line x1="16" y1="29" x2="16" y2="11" stroke="rgba(255,255,255,0.15)" strokeWidth="1.2" strokeLinecap="round"/>
        <circle cx="16" cy="9" r="2.5" fill="#007AFF"/>
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Progreso Claro',
    body: 'Visualizá tu evolución a lo largo del tiempo. Gráficos precisos, sin ruido, que reflejan exactamente cuánto avanzaste.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M4 26 L10 20 L15 22 L20 14 L28 8" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="28" cy="8" r="2.5" fill="#007AFF"/>
        <line x1="4" y1="28" x2="28" y2="28" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeLinecap="round"/>
        <line x1="4" y1="6"  x2="4"  y2="28" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section id="features" className="s-pad" style={{ background: C.surface }}>
      <div style={containerStyle}>
        <motion.div {...fadeUp(0)} style={{ marginBottom: 64 }}>
          <span style={{
            fontSize:      10,
            fontWeight:    600,
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color:         C.primary,
            display:       'block',
            marginBottom:  20,
          }}>Funcionalidades</span>
          <h2 style={{
            fontFamily:    CINZEL,
            fontSize:      'clamp(26px, 3vw, 40px)',
            fontWeight:    700,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            lineHeight:    1.1,
            marginBottom:  20,
          }}>El sistema completo</h2>
          <div style={{ width: 36, height: 1, background: C.primary }} />
        </motion.div>

        <div className="features-grid" style={{
          background: C.border,
          gap:        1,
          border:     `1px solid ${C.border}`,
        }}>
          {features.map((f, i) => (
            <FeatureItem key={f.num} feature={f} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureItem({ feature, delay }) {
  return (
    <motion.div
      {...fadeUp(delay)}
      className="feature-cell"
      style={{
        background: C.surfaceLow,
        position:   'relative',
        overflow:   'hidden',
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ background: '#181818' }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94], delay }}
    >
      {/* Left border reveal */}
      <motion.div
        style={{
          position:   'absolute',
          top:        0,
          left:       0,
          width:      2,
          background: C.primary,
          height:     0,
        }}
        whileHover={{ height: '100%' }}
        transition={{ duration: 0.35 }}
      />

      <div style={{ marginBottom: 28 }}>{feature.icon}</div>
      <span style={{
        fontFamily:    "'Manrope', sans-serif",
        fontSize:      10,
        fontWeight:    700,
        letterSpacing: '0.22em',
        color:         C.onDim,
        display:       'block',
        marginBottom:  20,
      }}>{feature.num}</span>
      <h3 style={{
        fontFamily:    CINZEL,
        fontSize:      16,
        fontWeight:    600,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        marginBottom:  14,
      }}>{feature.title}</h3>
      <p style={{ fontSize: 14, color: C.onVariant, lineHeight: 1.78 }}>{feature.body}</p>
    </motion.div>
  );
}
