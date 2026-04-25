export const EASE = [0.25, 0.46, 0.45, 0.94];

export const C = {
  surface:       '#0e0e0e',
  surfaceLow:    '#131313',
  surfaceMid:    '#1a1a1a',
  surfaceHigh:   '#202020',
  surfaceHighest:'#262626',
  primary:       '#007AFF',
  onSurface:     '#ffffff',
  onVariant:     'rgba(255,255,255,0.45)',
  onDim:         'rgba(255,255,255,0.18)',
  border:        'rgba(255,255,255,0.07)',
};

export const CINZEL  = "'Cinzel', serif";
export const INTER   = "'Inter', sans-serif";
export const MANROPE = "'Manrope', sans-serif";

export const fadeUp = (delay = 0) => ({
  initial:     { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition:  { duration: 0.5, ease: EASE, delay },
  viewport:    { once: true, margin: '-40px' },
});

export const scaleIn = (delay = 0) => ({
  initial:     { opacity: 0, scale: 0.93, y: 24 },
  whileInView: { opacity: 1, scale: 1,    y: 0 },
  transition:  { duration: 0.55, ease: EASE, delay },
  viewport:    { once: true, margin: '-40px' },
});

export const containerStyle = {
  maxWidth: 1100,
  margin: '0 auto',
  position: 'relative',
  zIndex: 1,
};

export const sectionPad = { padding: '120px 56px' };
