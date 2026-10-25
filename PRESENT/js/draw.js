/**
 * Interactive Touch Whiteboard & Laser Pointer for Touch-screen TV
 * Fixed z-index and event blocking so pen can be easily toggled on/off
 */

class PresentationCanvas {
  constructor() {
    this.canvas = document.getElementById('annotationCanvas');
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.mode = 'none'; // 'none', 'pen', 'eraser', 'laser'
    this.color = '#EC4899'; // default radiant pink
    this.lineWidth = 4;
    this.isDrawing = false;
    this.lastX = 0;
    this.lastY = 0;
    this.laserDot = document.getElementById('laserPointerDot');
    this.laserTimeout = null;

    this.resize();
    window.addEventListener('resize', () => this.resize());
    this.bindEvents();
  }

  resize() {
    if (!this.canvas) return;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  setMode(newMode) {
    this.mode = newMode;
    const body = document.body;
    const penPalette = document.getElementById('penFloatingPalette');
    const penBtn = document.getElementById('drawerPenBtn');
    const laserBtn = document.getElementById('drawerLaserBtn');

    // Canvas interactivity
    if (newMode === 'pen' || newMode === 'eraser') {
      this.canvas.style.pointerEvents = 'auto';
      if (penPalette) penPalette.classList.remove('hidden');
      if (penBtn) penBtn.classList.add('tool-active');
      if (laserBtn) laserBtn.classList.remove('tool-active');
      if (this.laserDot) this.laserDot.style.display = 'none';

      if (newMode === 'eraser') {
        this.ctx.globalCompositeOperation = 'destination-out';
        this.lineWidth = 28;
      } else {
        this.ctx.globalCompositeOperation = 'source-over';
        this.lineWidth = 4;
      }
    } else if (newMode === 'laser') {
      this.canvas.style.pointerEvents = 'none';
      if (penPalette) penPalette.classList.add('hidden');
      if (penBtn) penBtn.classList.remove('tool-active');
      if (laserBtn) laserBtn.classList.add('tool-active');
      if (this.laserDot) this.laserDot.style.display = 'block';
    } else {
      // none
      this.canvas.style.pointerEvents = 'none';
      if (penPalette) penPalette.classList.add('hidden');
      if (penBtn) penBtn.classList.remove('tool-active');
      if (laserBtn) laserBtn.classList.remove('tool-active');
      if (this.laserDot) this.laserDot.style.display = 'none';
    }

    body.classList.remove('mode-pen', 'mode-laser');
    if (newMode === 'pen' || newMode === 'eraser') body.classList.add('mode-pen');
    if (newMode === 'laser') body.classList.add('mode-laser');

    if (window.soundEngine) window.soundEngine.playClick();
  }

  setColor(hex) {
    this.mode = 'pen';
    this.ctx.globalCompositeOperation = 'source-over';
    this.lineWidth = 4;
    this.color = hex;

    // Update active color dot styling
    const dots = document.querySelectorAll('.pen-color-dot');
    dots.forEach(d => {
      d.classList.toggle('active', d.getAttribute('data-color') === hex);
    });

    if (window.soundEngine) window.soundEngine.playClick();
  }

  setEraser() {
    this.setMode('eraser');
  }

  clear() {
    if (!this.ctx) return;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    if (window.soundEngine) window.soundEngine.playClick();
  }

  exitPen() {
    this.setMode('none');
  }

  bindEvents() {
    // Laser pointer movement
    const handleMove = (x, y) => {
      if (this.mode === 'laser' && this.laserDot) {
        this.laserDot.style.left = `${x}px`;
        this.laserDot.style.top = `${y}px`;
        this.laserDot.style.opacity = '1';

        clearTimeout(this.laserTimeout);
        this.laserTimeout = setTimeout(() => {
          if (this.laserDot) this.laserDot.style.opacity = '0';
        }, 1500);
      }
    };

    window.addEventListener('mousemove', (e) => handleMove(e.clientX, e.clientY));
    window.addEventListener('touchmove', (e) => {
      if (e.touches.length > 0) {
        handleMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    }, { passive: true });

    // Drawing helpers
    const isUIElement = (target) => {
      return target.closest('.top-presentation-bar') ||
             target.closest('.pen-floating-palette') ||
             target.closest('.bottom-presentation-dock') ||
             target.closest('.speaker-notes-drawer') ||
             target.closest('.modal-overlay') ||
             target.closest('.minimized-top-badge');
    };

    const startDraw = (e, x, y) => {
      if (this.mode !== 'pen' && this.mode !== 'eraser') return;
      if (isUIElement(e.target)) return;

      this.isDrawing = true;
      this.lastX = x;
      this.lastY = y;
    };

    const draw = (e, x, y) => {
      if (!this.isDrawing || (this.mode !== 'pen' && this.mode !== 'eraser')) return;
      if (isUIElement(e.target)) return;

      this.ctx.beginPath();
      this.ctx.moveTo(this.lastX, this.lastY);
      this.ctx.lineTo(x, y);
      this.ctx.strokeStyle = this.color;
      this.ctx.lineWidth = this.lineWidth;
      this.ctx.lineCap = 'round';
      this.ctx.lineJoin = 'round';
      this.ctx.stroke();
      this.lastX = x;
      this.lastY = y;
    };

    const stopDraw = () => {
      this.isDrawing = false;
    };

    this.canvas.addEventListener('mousedown', (e) => startDraw(e, e.clientX, e.clientY));
    this.canvas.addEventListener('mousemove', (e) => draw(e, e.clientX, e.clientY));
    this.canvas.addEventListener('mouseup', stopDraw);
    this.canvas.addEventListener('mouseleave', stopDraw);

    this.canvas.addEventListener('touchstart', (e) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        startDraw(e, touch.clientX, touch.clientY);
      }
    }, { passive: false });

    this.canvas.addEventListener('touchmove', (e) => {
      if (this.mode === 'pen' || this.mode === 'eraser') {
        e.preventDefault();
      }
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        draw(e, touch.clientX, touch.clientY);
      }
    }, { passive: false });

    this.canvas.addEventListener('touchend', stopDraw);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.canvasApp = new PresentationCanvas();
});
