import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface SpaceBackgroundProps {
  className?: string;
}

export const SpaceBackground: React.FC<SpaceBackgroundProps> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d')!;
    let animationFrameId: number;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Star class
    class Star {
      x: number;
      y: number;
      size: number;
      speed: number;
      opacity: number;
      twinkleSpeed: number;
      twinklePhase: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speed = Math.random() * 0.05 + 0.01;
        this.opacity = Math.random();
        this.twinkleSpeed = Math.random() * 0.02 + 0.005;
        this.twinklePhase = Math.random() * Math.PI * 2;
      }

      update() {
        this.twinklePhase += this.twinkleSpeed;
        this.opacity = 0.3 + Math.sin(this.twinklePhase) * 0.7;
      }

      draw() {
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();

        // Add glow for larger stars
        if (this.size > 1.5) {
          ctx.shadowBlur = 3;
          ctx.shadowColor = 'rgba(255, 255, 255, 0.5)';
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }
    }

    // Meteor class
    class Meteor {
      x: number;
      y: number;
      length: number;
      speed: number;
      angle: number;
      opacity: number;
      active: boolean;

      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = -50;
        this.length = Math.random() * 80 + 40;
        this.speed = Math.random() * 8 + 4;
        this.angle = Math.PI / 4 + Math.random() * 0.5; // Diagonal fall
        this.opacity = 1;
        this.active = true;
      }

      update() {
        if (!this.active) return;

        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        this.opacity -= 0.01;

        if (this.opacity <= 0 || this.y > canvas.height + 50) {
          this.active = false;
        }
      }

      draw() {
        if (!this.active) return;

        const gradient = ctx.createLinearGradient(
          this.x,
          this.y,
          this.x - Math.cos(this.angle) * this.length,
          this.y - Math.sin(this.angle) * this.length,
        );
        gradient.addColorStop(0, `rgba(255, 255, 255, ${this.opacity})`);
        gradient.addColorStop(0.5, `rgba(147, 197, 253, ${this.opacity * 0.6})`);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(
          this.x - Math.cos(this.angle) * this.length,
          this.y - Math.sin(this.angle) * this.length,
        );
        ctx.stroke();
      }
    }

    // Planet class
    class Planet {
      x: number;
      y: number;
      radius: number;
      color: string;
      glowColor: string;
      rings: boolean;

      constructor(
        x: number,
        y: number,
        radius: number,
        color: string,
        glowColor: string,
        rings = false,
      ) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.glowColor = glowColor;
        this.rings = rings;
      }

      draw() {
        // Planet body
        const gradient = ctx.createRadialGradient(
          this.x - this.radius / 3,
          this.y - this.radius / 3,
          this.radius / 4,
          this.x,
          this.y,
          this.radius,
        );
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(1, this.color.replace('0.3', '0.1'));

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();

        // Glow effect
        ctx.shadowBlur = 30;
        ctx.shadowColor = this.glowColor;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Rings
        if (this.rings) {
          ctx.strokeStyle = `rgba(255, 255, 255, 0.15)`;
          ctx.lineWidth = this.radius * 0.15;
          ctx.beginPath();
          ctx.ellipse(
            this.x,
            this.y,
            this.radius * 1.8,
            this.radius * 0.4,
            -Math.PI / 6,
            0,
            Math.PI * 2,
          );
          ctx.stroke();

          ctx.strokeStyle = `rgba(255, 255, 255, 0.08)`;
          ctx.lineWidth = this.radius * 0.1;
          ctx.beginPath();
          ctx.ellipse(
            this.x,
            this.y,
            this.radius * 2,
            this.radius * 0.5,
            -Math.PI / 6,
            0,
            Math.PI * 2,
          );
          ctx.stroke();
        }
      }
    }

    // Create stars
    const stars: Star[] = [];
    for (let i = 0; i < 300; i++) {
      stars.push(new Star());
    }

    // Create meteors (spawned occasionally)
    const meteors: Meteor[] = [];
    let meteorSpawnTimer = 0;

    // Create planets (static)
    const planets = [
      new Planet(
        canvas.width * 0.15,
        canvas.height * 0.25,
        60,
        'rgba(99, 102, 241, 0.3)',
        'rgba(99, 102, 241, 0.4)',
        true,
      ),
      new Planet(
        canvas.width * 0.85,
        canvas.height * 0.7,
        40,
        'rgba(168, 85, 247, 0.3)',
        'rgba(168, 85, 247, 0.4)',
      ),
      new Planet(
        canvas.width * 0.08,
        canvas.height * 0.8,
        25,
        'rgba(6, 182, 212, 0.3)',
        'rgba(6, 182, 212, 0.4)',
      ),
    ];

    // Animation loop
    const animate = () => {
      // Black background
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw planets first (background)
      planets.forEach((planet) => planet.draw());

      // Update and draw stars
      stars.forEach((star) => {
        star.update();
        star.draw();
      });

      // Spawn meteors occasionally
      meteorSpawnTimer++;
      if (meteorSpawnTimer > 180 && Math.random() < 0.02) {
        meteors.push(new Meteor());
        meteorSpawnTimer = 0;
      }

      // Update and draw meteors
      for (let i = meteors.length - 1; i >= 0; i--) {
        meteors[i].update();
        meteors[i].draw();
        if (!meteors[i].active) {
          meteors.splice(i, 1);
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className={`fixed top-0 left-0 w-full h-full ${className}`}
        style={{ display: 'block' }}
      />
      {/* Additional nebula effects using CSS */}
      <div className="fixed inset-0 pointer-events-none opacity-30">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.12) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, transparent 70%)',
            filter: 'blur(100px)',
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>
    </>
  );
};
