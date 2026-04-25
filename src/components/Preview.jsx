import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { C, CINZEL, fadeUp, scaleIn, containerStyle } from '../tokens';
import pantallaPlanner from '/assets/pantalla_Planner.png';
import pantallaEntrena from '/assets/pantalla_Entrena.png';
import pantallaProgress from '/assets/pantalla_Progress.jpeg';

const screens = [
  {
    src:     pantallaPlanner,
    alt:     'Planner semanal',
    title:   'Planificación semanal',
    caption: 'Organizá tu semana con rutinas asignadas a cada día. Claro, sin fricción.',
    floatClass: 'float-a',
    parallaxFactor: 0.04,
    marginTop: 0,
  },
  {
    src:     pantallaEntrena,
    alt:     'Entrenamiento activo',
    title:   'Entrenamiento en vivo',
    caption: 'Controlá el timer, las series y los pesos en tiempo real. Sin distracciones.',
    floatClass: 'float-b',
    parallaxFactor: 0.065,
    marginTop: 40,
  },
  {
    src:     pantallaProgress,
    alt:     'Progreso y métricas',
    title:   'Progreso y métricas',
    caption: 'Tus PRs, tu racha, tu actividad. Todo en un solo lugar, sin ruido.',
    floatClass: 'float-c',
    parallaxFactor: 0.03,
    marginTop: 16,
  },
];

function PhoneCard({ screen, delay }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -(screen.parallaxFactor * 600)]);

  return (
    <motion.div
      ref={ref}
      {...scaleIn(delay)}
      className={screen.marginTop ? `phone-mt-${screen.marginTop}` : undefined}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 28 }}
    >
      {/* Mid layer: parallax on phone */}
      <motion.div style={{ y, width: 228, height: 493, position: 'relative' }}>
        <div className={screen.floatClass} style={{ width: '100%', height: '100%' }}>
          <div style={{
            width:        '100%',
            height:       '100%',
            borderRadius: 36,
            background:   '#080808',
            border:       '1.5px solid rgba(255,255,255,0.1)',
            overflow:     'hidden',
            boxShadow:    'inset 0 0 0 1px rgba(255,255,255,0.04), 0 40px 80px rgba(0,0,0,0.75), 0 0 60px rgba(0,122,255,0.07)',
          }}>
            <img
              src={screen.src}
              alt={screen.alt}
              style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
            />
          </div>
        </div>
      </motion.div>

      {/* Caption */}
      <div style={{ textAlign: 'center', maxWidth: 220 }}>
        <div style={{ fontFamily: CINZEL, fontSize: 12, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 6 }}>
          {screen.title}
        </div>
        <p style={{ fontSize: 12, color: C.onVariant, lineHeight: 1.65 }}>{screen.caption}</p>
      </div>
    </motion.div>
  );
}

export default function Preview() {
  return (
    <section id="preview" className="s-pad" style={{ background: C.surfaceLow, borderTop: `1px solid ${C.border}`, overflow: 'hidden' }}>
      <div style={containerStyle}>
        <motion.div {...fadeUp(0)} style={{ marginBottom: 72 }}>
          <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', color: C.primary, display: 'block', marginBottom: 20 }}>Interfaz</span>
          <h2 style={{ fontFamily: CINZEL, fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', lineHeight: 1.1, marginBottom: 20 }}>Diseñado para el gym</h2>
          <div style={{ width: 36, height: 1, background: C.primary }} />
        </motion.div>

        <div className="preview-phones">
          {screens.map((s, i) => (
            <PhoneCard key={s.title} screen={s} delay={i * 0.14} />
          ))}
        </div>
      </div>
    </section>
  );
}
