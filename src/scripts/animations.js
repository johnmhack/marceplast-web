import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Inicializa todas las animaciones GSAP de la página.
 * Se llama una vez que el DOM está listo.
 */
export function initAnimations() {
  // ===========================================
  // 1. HERO: entrada con stagger + parallax de fondo
  // ===========================================
  const heroTitle = document.querySelector('[data-anim="hero-title"]');
  const heroText = document.querySelector('[data-anim="hero-text"]');
  const heroBtn = document.querySelector('[data-anim="hero-btn"]');
  const heroBg = document.querySelector('[data-anim="hero-bg"]');

  if (heroTitle) {
    gsap.timeline()
      .fromTo(heroTitle, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' })
      .fromTo(heroText, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.5')
      .fromTo(heroBtn, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, '-=0.4');
  }

  // Parallax del fondo del hero al hacer scroll
  if (heroBg) {
    gsap.to(heroBg, {
      yPercent: 25,
      ease: 'none',
      scrollTrigger: {
        trigger: heroBg.closest('section'),
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });
  }

  // ===========================================
  // 2. REVEAL genérico al hacer scroll
  //    Cualquier elemento con [data-anim="reveal"]
  // ===========================================
  document.querySelectorAll('[data-anim="reveal"]').forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  });

  // ===========================================
  // 3. STAGGER para grids de tarjetas
  //    Contenedor con [data-anim="stagger-group"]
  //    e hijos directos como tarjetas
  // ===========================================
  document.querySelectorAll('[data-anim="stagger-group"]').forEach((group) => {
    const items = group.children;
    gsap.fromTo(
      items,
      { opacity: 0, y: 60, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.15,
        scrollTrigger: {
          trigger: group,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  });

  // ===========================================
  // 4. TRANSICIÓN entre secciones (efecto "pin" suave)
  //    Secciones con [data-anim="section-pin"] crecen
  //    levemente de escala al entrar en viewport
  // ===========================================
  document.querySelectorAll('[data-anim="section-pin"]').forEach((section) => {
    gsap.fromTo(
      section,
      { scale: 0.96, opacity: 0.6 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 90%',
          end: 'top 40%',
          scrub: true,
        },
      }
    );
  });

  // ===========================================
  // 5. PARALLAX de imágenes individuales
  //    Imagen con [data-anim="parallax-img"]
  // ===========================================
  document.querySelectorAll('[data-anim="parallax-img"]').forEach((img) => {
    gsap.to(img, {
      yPercent: -15,
      ease: 'none',
      scrollTrigger: {
        trigger: img.closest('div') || img,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  });

  // ===========================================
  // 6. Líneas de texto que entran una a una
  //    Contenedor con [data-anim="text-lines"]
  // ===========================================
  document.querySelectorAll('[data-anim="text-lines"]').forEach((container) => {
    const lines = container.querySelectorAll(':scope > *');
    gsap.fromTo(
      lines,
      { opacity: 0, y: 25 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: container,
          start: 'top 85%',
        },
      }
    );
  });
}
