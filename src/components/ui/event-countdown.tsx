import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin } from 'lucide-react';

interface EventCountdownProps {
  eventName: string;
  eventDate: Date;
  location?: string;
  description?: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const EventCountdown: React.FC<EventCountdownProps> = ({
  eventName,
  eventDate,
  location,
  description,
}) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +eventDate - +new Date();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [eventDate]);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <motion.div
      className="relative bg-gradient-to-br from-slate-900/50 to-blue-900/30 backdrop-blur-xl border border-cyan-500/30 rounded-3xl p-8 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 blur-xl" />

      <div className="relative z-10">
        {/* Event header */}
        <div className="flex items-center gap-3 mb-6">
          <motion.div
            className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 backdrop-blur-sm border border-cyan-500/30 rounded-xl flex items-center justify-center"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            <Calendar className="w-6 h-6 text-cyan-400" />
          </motion.div>
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {eventName}
            </h3>
            {description && <p className="text-sm text-slate-400 mt-1">{description}</p>}
          </div>
        </div>

        {/* Countdown timer */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          {timeUnits.map((unit, index) => (
            <motion.div
              key={unit.label}
              className="text-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.1, type: 'spring' }}
            >
              <motion.div
                className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-4 mb-2"
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(6, 182, 212, 0.1)',
                    '0 0 30px rgba(6, 182, 212, 0.2)',
                    '0 0 20px rgba(6, 182, 212, 0.1)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <motion.span
                  className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
                  key={unit.value}
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {String(unit.value).padStart(2, '0')}
                </motion.span>
              </motion.div>
              <span className="text-sm text-slate-400 font-medium uppercase tracking-wide">
                {unit.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Event details */}
        <div className="flex flex-wrap gap-4 text-sm text-slate-300">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-cyan-400" />
            <span>
              {eventDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
            </span>
          </div>
          {location && (
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-cyan-400" />
              <span>{location}</span>
            </div>
          )}
        </div>
      </div>

      {/* Animated particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-cyan-400/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.4,
          }}
        />
      ))}
    </motion.div>
  );
};
