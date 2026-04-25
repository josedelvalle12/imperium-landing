import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  GiImperialCrown,
  GiLaurels,
  GiGladius,
  GiSpartanHelmet,
  GiShieldReflect,
  GiLaurelsTrophy,
  GiCrownCoin,
  GiEagleEmblem,
} from 'react-icons/gi';
import { C, CINZEL, fadeUp, scaleIn, containerStyle, sectionPad } from '../tokens';

const PRIMARY = '#007AFF';

/* ─── Symbol cards ──────────────────────────────────────── */

const symbols = [
  {
    tag:     'Corona',
    concept: 'Tus mejores marcas',
    desc:    'Cada vez que superás tu récord personal en un ejercicio, ganás una corona. Es la evidencia de que creciste.',
    Icon:    GiImperialCrown,
  },
  {
    tag:     'Laureles',
    concept: 'Tu constancia',
    desc:    'Los laureles representan las rachas sostenidas. No la intensidad de un día — la disciplina de muchos.',
    Icon:    GiLaurels,
  },
  {
    tag:     'Gladiador',
    concept: 'Cada entrenamiento',
    desc:    'Cada sesión completada es un combate ganado. El gladiador representa la acción diaria — la base del Imperium.',
    Icon:    GiGladius,
  },
];

/* ─── Rank cards ─────────────────────────────────────────── */

const ranks = [
  {
    level:   'Nv. 1',
    name:    'Miles',
    meaning: 'Soldado de base',
    color:   '#4d90f0',
    bg:      'rgba(0,114,240,0.08)',
    border:  'rgba(0,114,240,0.2)',
    desc:    'El comienzo de todo Imperio. Entrás al sistema y empezás a construir tu historia.',
    Icon:    GiGladius,
  },
  {
    level:   'Nv. 3',
    name:    'Centurio',
    meaning: 'Comandante de cien',
    color:   '#22c55e',
    bg:      'rgba(34,197,94,0.08)',
    border:  'rgba(34,197,94,0.2)',
    desc:    'Disciplina operativa demostrada. Liderás por el ejemplo dentro de la legión.',
    Icon:    GiSpartanHelmet,
  },
  {
    level:   'Nv. 6',
    name:    'Tribune',
    meaning: 'Protector de la legión',
    color:   '#818cf8',
    bg:      'rgba(129,140,248,0.10)',
    border:  'rgba(129,140,248,0.25)',
    desc:    'Estructura y defensa. Mantés la consistencia cuando otros ceden.',
    Icon:    GiShieldReflect,
  },
  {
    level:   'Nv. 9',
    name:    'Praetor',
    meaning: 'Victoria reconocida',
    color:   '#a78bfa',
    bg:      'rgba(167,139,250,0.12)',
    border:  'rgba(167,139,250,0.3)',
    desc:    'Liderás en batalla. Tus marcas hablan — cada PR es una declaración de dominio.',
    Icon:    GiLaurelsTrophy,
  },
  {
    level:   'Nv. 12',
    name:    'Consul',
    meaning: 'Poder y riqueza acumulada',
    color:   '#FFD700',
    bg:      'rgba(255,215,0,0.10)',
    border:  'rgba(255,215,0,0.3)',
    desc:    'Meses de trabajo sostenido. El Imperio reconoce tu autoridad dentro del sistema.',
    Icon:    GiCrownCoin,
  },
  {
    level:   'Nv. 16',
    name:    'Imperator',
    meaning: 'Máxima autoridad',
    color:   '#e2e8f0',
    bg:      'rgba(226,232,240,0.08)',
    border:  'rgba(226,232,240,0.3)',
    desc:    'El águila del Imperio. Llegaste a donde pocos llegan. El Imperium es tuyo.',
    Icon:    GiEagleEmblem,
  },
];

/* ─── Component ──────────────────────────────────────────── */

export default function Progression() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const colY = useTransform(scrollYProgress, [0, 1], [40, -140]);

  return (
    <section ref={ref} id="progression" style={{
      ...sectionPad,
      background:   C.surfaceLow,
      borderTop:    `1px solid ${C.border}`,
      borderBottom: `1px solid ${C.border}`,
      position:     'relative',
      overflow:     'hidden',
    }}>
      <div style={containerStyle}>

        {/* ── Intro ── */}
        <motion.div {...fadeUp(0)} style={{ maxWidth: 580, marginBottom: 80 }}>
          <span style={{
            fontSize: 10, fontWeight: 600, letterSpacing: '0.25em',
            textTransform: 'uppercase', color: PRIMARY, display: 'block', marginBottom: 20,
          }}>
            Sistema de progresión
          </span>
          <h2 style={{
            fontFamily: CINZEL, fontSize: 'clamp(26px, 3vw, 40px)',
            fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase',
            lineHeight: 1.1, marginBottom: 20,
          }}>
            Símbolos que significan algo
          </h2>
          <div style={{ width: 36, height: 1, background: PRIMARY, marginBottom: 24 }} />
          <p style={{ fontSize: 16, fontWeight: 300, color: C.onVariant, lineHeight: 1.8 }}>
            En Imperium, los logros no son notificaciones vacías. Cada símbolo representa una acción real, repetida, sostenida en el tiempo.
          </p>
        </motion.div>

        {/* ── Symbol cards ── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginBottom: 64 }}>
          {symbols.map((s, i) => (
            <motion.div
              key={s.tag}
              {...scaleIn(i * 0.12)}
              whileHover={{ borderColor: 'rgba(0,122,255,0.3)', boxShadow: '0 0 48px rgba(0,122,255,0.07)', y: -4 }}
              style={{
                background:   C.surfaceMid,
                border:       `1px solid ${C.border}`,
                borderRadius: 6,
                padding:      '52px 36px',
                transition:   'border-color 0.3s',
                transform:    i === 1 ? 'scale(1.03)' : undefined,
                zIndex:       i === 1 ? 2 : undefined,
              }}
            >
              <div style={{ marginBottom: 28 }}>
                <s.Icon size={56} color={PRIMARY} />
              </div>
              <div style={{
                fontSize: 10, fontWeight: 600, letterSpacing: '0.22em',
                textTransform: 'uppercase', color: PRIMARY, marginBottom: 8,
              }}>
                {s.tag}
              </div>
              <div style={{
                fontFamily: CINZEL, fontSize: 20, fontWeight: 700,
                letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 16,
              }}>
                {s.concept}
              </div>
              <p style={{ fontSize: 13, color: C.onVariant, lineHeight: 1.78 }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* ── Journey banner ── */}
        <motion.div {...fadeUp(0)} style={{
          background:     C.surfaceHigh,
          border:         `1px solid ${C.border}`,
          borderRadius:   6,
          padding:        '40px 52px',
          display:        'flex',
          alignItems:     'center',
          justifyContent: 'space-between',
          gap:            40,
        }}>
          <div style={{
            fontFamily: CINZEL, fontSize: 'clamp(16px, 1.8vw, 22px)', fontWeight: 600,
            letterSpacing: '0.08em', textTransform: 'uppercase', lineHeight: 1.4,
          }}>
            Cada acción construye tu{' '}
            <em style={{ fontStyle: 'normal', color: PRIMARY }}>Imperium.</em>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
            {[true, true, true, false, false].map((lit, i) => (
              <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{
                  display: 'inline-block', width: 7, height: 7, borderRadius: '50%',
                  background: lit ? PRIMARY : C.onDim,
                }} />
                {i < 4 && <span style={{
                  display: 'inline-block', width: 24, height: 1, background: C.onDim,
                }} />}
              </span>
            ))}
          </div>
        </motion.div>

        {/* ── Ranks header ── */}
        <motion.div {...fadeUp(0)} style={{ marginTop: 80, marginBottom: 48 }}>
          <span style={{
            fontSize: 10, fontWeight: 600, letterSpacing: '0.25em',
            textTransform: 'uppercase', color: PRIMARY, display: 'block', marginBottom: 20,
          }}>
            Sistema de rangos
          </span>
          <h2 style={{
            fontFamily: CINZEL, fontSize: 'clamp(26px, 3vw, 40px)',
            fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase',
            lineHeight: 1.1, marginBottom: 20,
          }}>
            Tu lugar en el Imperio
          </h2>
          <div style={{ width: 36, height: 1, background: PRIMARY, marginBottom: 24 }} />
          <p style={{ fontSize: 15, fontWeight: 300, color: C.onVariant, lineHeight: 1.8, maxWidth: 520 }}>
            El progreso tiene nombre. Cada nivel alcanzado refleja semanas de trabajo acumulado — no un logro vacío, sino una posición ganada.
          </p>
        </motion.div>

        {/* ── Rank cards ── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {ranks.map((r, i) => (
            <motion.div
              key={r.name}
              {...fadeUp(i * 0.07)}
              whileHover={{ y: -5, boxShadow: '0 16px 48px rgba(0,0,0,0.35)', borderColor: r.color }}
              style={{
                background:   r.bg,
                border:       `1px solid ${r.border}`,
                borderRadius: 8,
                padding:      '36px 28px',
                position:     'relative',
                overflow:     'hidden',
                transition:   'border-color 0.28s',
              }}
            >
              {/* Top accent line */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0,
                height: 2, background: r.color, opacity: 0.7,
              }} />

              <div style={{
                fontFamily: "'Manrope', sans-serif", fontSize: 10, fontWeight: 700,
                letterSpacing: '0.2em', textTransform: 'uppercase', color: r.color, marginBottom: 16,
              }}>
                {r.level}
              </div>

              <div style={{ marginBottom: 16, color: r.color, display: 'flex', alignItems: 'center' }}>
                <r.Icon size={28} />
              </div>

              <div style={{
                fontFamily: CINZEL, fontSize: 18, fontWeight: 700,
                letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 4,
              }}>
                {r.name}
              </div>
              <div style={{
                fontSize: 11, fontWeight: 500, letterSpacing: '0.1em',
                textTransform: 'uppercase', color: r.color, marginBottom: 14, opacity: 0.8,
              }}>
                {r.meaning}
              </div>
              <p style={{ fontSize: 13, color: C.onVariant, lineHeight: 1.72 }}>{r.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
