import { useEffect, useRef } from "react";
import kasoLogo from "@/assets/kaso-logo.png";
import heroBg from "@/assets/hero-bg.jpg";
import { Play } from "lucide-react";
const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Particle system
    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      pulse: number;
    }> = [];
    const createParticle = () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 3 + 1,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5 - 0.3,
      opacity: Math.random() * 0.5 + 0.2,
      pulse: Math.random() * Math.PI * 2
    });

    // Create initial particles
    for (let i = 0; i < 50; i++) {
      particles.push(createParticle());
    }
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle, index) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.pulse += 0.02;
        const currentOpacity = particle.opacity * (0.5 + Math.sin(particle.pulse) * 0.5);

        // Orange glow effect
        const gradient = ctx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, particle.size * 3);
        gradient.addColorStop(0, `rgba(255, 106, 0, ${currentOpacity})`);
        gradient.addColorStop(1, "rgba(255, 106, 0, 0)");
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Core particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 140, 51, ${currentOpacity})`;
        ctx.fill();

        // Reset particle if out of bounds
        if (particle.y < -10 || particle.x < -10 || particle.x > canvas.width + 10) {
          particles[index] = {
            ...createParticle(),
            y: canvas.height + 10,
            x: Math.random() * canvas.width
          };
        }
      });
      requestAnimationFrame(animate);
    };
    animate();
    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);
  const scrollToMusic = () => {
    const element = document.querySelector("#music");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden shadow-none">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroBg})`
    }} />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Particles Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-10" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-20" />

      {/* Content */}
      <div className="relative z-30 text-center px-4 max-w-4xl mx-auto">
        {/* Logo with Pulse Glow */}
        <div className="mb-8 animate-fade-up">
          <img src={kasoLogo} alt="Kaso - كاسو" className="w-[300px] h-auto mx-auto animate-pulse-glow-slow" />
        </div>

        {/* Tagline */}
        <h1 dir="ltr" className="text-2xl md:text-4xl lg:text-[42px] font-bold text-foreground leading-relaxed mb-10 animate-fade-up opacity-0 animation-delay-200 text-center font-mono">
          يحكي قصتك قبل ما تكتبها
        </h1>

        {/* Play Button */}
        <button onClick={scrollToMusic} className="group inline-flex items-center gap-3 bg-primary hover:bg-primary/80 text-primary-foreground px-10 py-4 rounded-full font-arabic text-xl font-bold transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_hsl(24_100%_50%/0.5)] animate-fade-up opacity-0 animation-delay-400">
          <Play className="w-6 h-6 fill-current" />
          <span>Play</span>
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 animate-float">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>;
};
export default HeroSection;