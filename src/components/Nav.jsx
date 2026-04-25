import { motion } from 'framer-motion';
import { C, CINZEL } from '../tokens';

export default function Nav() {
  return (
    <nav className="nav-pad" style={{
      position:             'fixed',
      top: 0, left: 0, right: 0,
      zIndex:               100,
      height:               64,
      display:              'flex',
      alignItems:           'center',
      justifyContent:       'space-between',
      background:           'rgba(14,14,14,0.80)',
      backdropFilter:       'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderBottom:         `1px solid ${C.border}`,
    }}>
      <a href="#">
        <img src="/assets/Logo_Imperium-horizontal.svg" alt="Imperium" style={{ height: 28, display: 'block' }} />
      </a>
      <motion.a
        href="#cta-final"
        whileHover={{
          scale:      1.05,
          background: 'rgba(0,122,255,0.09)',
          borderColor:'rgba(0,122,255,0.6)',
          boxShadow:  '0 0 20px rgba(0,122,255,0.15)',
        }}
        transition={{ duration: 0.2 }}
        style={{
          fontSize:       12,
          fontWeight:     500,
          letterSpacing:  '0.08em',
          textTransform:  'uppercase',
          color:          C.primary,
          textDecoration: 'none',
          padding:        '8px 22px',
          border:         '1px solid rgba(0,122,255,0.3)',
          borderRadius:   6,
          fontFamily:     CINZEL,
          display:        'inline-block',
        }}
      >
        Empieza ahora
      </motion.a>
    </nav>
  );
}
