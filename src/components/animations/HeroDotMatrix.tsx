import { useEffect, useRef } from 'react';

export function HeroDotMatrix() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let mouse = { x: -1000, y: -1000 };

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      } else {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    
    const handleTouchMove = (e: TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.touches[0].clientX - rect.left;
      mouse.y = e.touches[0].clientY - rect.top;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    
    const handleMouseOut = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };
    window.addEventListener('mouseout', handleMouseOut);

    const DOT_SIZE = 1;
    const SPACING = 24;
    const MAX_DISTANCE = 200;
    const COLOR = '#BE1111';

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cols = Math.floor(canvas.width / SPACING) + 1;
      const rows = Math.floor(canvas.height / SPACING) + 1;

      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          const x = i * SPACING;
          const y = j * SPACING;

          const dx = mouse.x - x;
          const dy = mouse.y - y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          let currentSize = DOT_SIZE;
          let opacity = 0.2;

          if (distance < MAX_DISTANCE) {
            const ratio = 1 - distance / MAX_DISTANCE;
            currentSize = DOT_SIZE + ratio * 2;
            opacity = 0.2 + ratio * 0.8;
          }

          ctx.beginPath();
          ctx.arc(x, y, currentSize, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(190, 17, 17, ${opacity})`;
          
          if (distance < MAX_DISTANCE) {
             ctx.shadowBlur = 10 * (1 - distance / MAX_DISTANCE);
             ctx.shadowColor = COLOR;
          } else {
             ctx.shadowBlur = 0;
          }
          
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('mouseout', handleMouseOut);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 z-0 pointer-events-none w-full h-full"
      style={{ display: 'block' }}
    />
  );
}
