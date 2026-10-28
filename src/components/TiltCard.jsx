import { useRef } from 'react';

/**
 * Cartão com leve efeito 3D que acompanha o mouse.
 * Usa ref + CSS variables para não causar re-render a cada movimento.
 * Só ativa em dispositivos com mouse (pointer: fine).
 */
export default function TiltCard({ children }) {
  const ref = useRef(null);

  function handleMove(event) {
    if (!window.matchMedia('(pointer: fine)').matches) return;
    const el = ref.current;
    const rect = el.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    el.style.setProperty('--ry', `${x * 4}deg`);
    el.style.setProperty('--rx', `${-y * 4}deg`);
  }

  function handleLeave() {
    const el = ref.current;
    el.style.setProperty('--ry', '0deg');
    el.style.setProperty('--rx', '0deg');
  }

  return (
    <main ref={ref} className="card" onMouseMove={handleMove} onMouseLeave={handleLeave}>
      {children}
    </main>
  );
}
