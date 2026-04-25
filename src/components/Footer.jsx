import { C, CINZEL } from '../tokens';
import logoHorizontal from '../assets/Logo_Imperium-horizontal.svg';

export default function Footer() {
  return (
    <footer className="footer-inner" style={{
      background: C.surfaceLow,
      borderTop:  `1px solid ${C.border}`,
    }}>
      <img
        src={logoHorizontal}
        alt="Imperium"
        style={{ height: 20, opacity: 0.35, filter: 'grayscale(1)' }}
      />
      <span style={{
        fontFamily:    CINZEL,
        fontSize:      10,
        letterSpacing: '0.2em',
        color:         'rgba(255,255,255,0.18)',
        textTransform: 'uppercase',
      }}>
        No entrenas. Conquistás. &nbsp;©&nbsp;2026
      </span>
    </footer>
  );
}
