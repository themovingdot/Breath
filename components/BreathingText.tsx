'use client';

import { BreathReminder, BreathSpeed } from '@/types';

interface BreathingTextProps {
  reminder: BreathReminder;
  language: 'cn' | 'en';
  breathSpeed: BreathSpeed;
  isPaused: boolean;
  isMain?: boolean;
}

export default function BreathingText({
  reminder,
  language,
  breathSpeed,
  isPaused,
  isMain = false,
}: BreathingTextProps) {
  const text = language === 'cn' ? reminder.text_cn : reminder.text_en;

  const breathClass = isMain
    ? `breathe-${breathSpeed}`
    : `breathe-delayed-${breathSpeed}`;

  const sizeClass = isMain
    ? 'text-6xl md:text-8xl lg:text-9xl'
    : 'text-xl md:text-2xl lg:text-3xl';

  const opacityClass = isMain ? 'opacity-100' : 'opacity-40';

  return (
    <div
      className={`
        ${breathClass}
        ${sizeClass}
        ${opacityClass}
        ${isPaused ? 'paused' : ''}
        smooth-transition
        no-select
        font-serif
        tracking-wide
      `}
    >
      {text}
    </div>
  );
}
