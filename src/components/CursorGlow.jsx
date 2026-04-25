import { useEffect, useRef, useState } from 'react';

export default function CursorGlow() {
  const dotRef       = useRef(null);
  const glowRef      = useRef(null);
  const mouse        = useRef({ x: -100, y: -100 });
  const glow         = useRef({ x: -100, y: -100 });
  const touchTimer   = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const isTouchDevice = () => window.matchMedia('(hover: none)').matches;

    const onMove = (e) => {
      if (isTouchDevice()) return;
      mouse.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + 'px';
        dotRef.current.style.top  = e.clientY + 'px';
      }
      if (!visible) setVisible(true);
    };
    const onEnter = () => { if (!isTouchDevice()) setVisible(true); };
    const onLeave = () => { if (!isTouchDevice()) setVisible(false); };

    const onTouch = (e) => {
      const touch = e.touches[0];
      if (!touch) return;
      const x = touch.clientX;
      const y = touch.clientY;
      mouse.current = { x, y };
      glow.current  = { x, y };
      if (dotRef.current) {
        dotRef.current.style.left = x + 'px';
        dotRef.current.style.top  = y + 'px';
      }
      if (glowRef.current) {
        glowRef.current.style.left = x + 'px';
        glowRef.current.style.top  = y + 'px';
      }
      setVisible(true);
      clearTimeout(touchTimer.current);
      touchTimer.current = setTimeout(() => setVisible(false), 700);
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseenter', onEnter);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('touchstart', onTouch, { passive: true });

    const scaleDot   = () => { if (dotRef.current) dotRef.current.style.transform = 'translate(-50%,-50%) scale(3)'; };
    const unscaleDot = () => { if (dotRef.current) dotRef.current.style.transform = 'translate(-50%,-50%) scale(1)'; };

    const addHoverListeners = () => {
      document.querySelectorAll('a, button, .interactive').forEach(el => {
        el.addEventListener('mouseenter', scaleDot);
        el.addEventListener('mouseleave', unscaleDot);
      });
    };
    addHoverListeners();
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    let rafId;
    const tick = () => {
      glow.current.x += (mouse.current.x - glow.current.x) * 0.07;
      glow.current.y += (mouse.current.y - glow.current.y) * 0.07;
      if (glowRef.current) {
        glowRef.current.style.left = glow.current.x + 'px';
        glowRef.current.style.top  = glow.current.y + 'px';
      }
      rafId = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseenter', onEnter);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('touchstart', onTouch);
      cancelAnimationFrame(rafId);
      clearTimeout(touchTimer.current);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        style={{
          position:       'fixed',
          width:          5,
          height:         5,
          borderRadius:   '50%',
          background:     'rgba(255,255,255,0.85)',
          pointerEvents:  'none',
          zIndex:         10000,
          transform:      'translate(-50%,-50%)',
          opacity:        visible ? 1 : 0,
          transition:     'transform 0.15s cubic-bezier(0.34,1.56,0.64,1), opacity 0.3s',
          willChange:     'left, top',
          left:           -100,
          top:            -100,
        }}
      />
      <div
        ref={glowRef}
        style={{
          position:      'fixed',
          width:         240,
          height:        240,
          borderRadius:  '50%',
          background:    'radial-gradient(circle, rgba(0,122,255,0.38) 0%, rgba(0,122,255,0.12) 40%, transparent 68%)',
          pointerEvents: 'none',
          zIndex:        9998,
          transform:     'translate(-50%,-50%)',
          opacity:       visible ? 1 : 0,
          mixBlendMode:  'screen',
          willChange:    'left, top',
          transition:    'opacity 0.6s ease',
          left:          -100,
          top:           -100,
        }}
      />
    </>
  );
}
