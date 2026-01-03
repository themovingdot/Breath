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
  const visual = reminder.visual;

  const breathClass = isMain
    ? `breathe-${breathSpeed}`
    : `breathe-delayed-${breathSpeed}`;

  // 根据咒语的视觉配置决定字体大小
  const getSizeClass = () => {
    if (!isMain) return 'text-lg md:text-xl lg:text-2xl'; // 相关内容统一较小

    // 主咒语根据visual.size配置
    const size = visual?.size || 'medium';
    switch (size) {
      case 'small':
        return 'text-5xl md:text-6xl lg:text-7xl';
      case 'medium':
        return 'text-6xl md:text-7xl lg:text-8xl';
      case 'large':
        return 'text-7xl md:text-8xl lg:text-9xl';
      default:
        return 'text-6xl md:text-7xl lg:text-8xl';
    }
  };

  const sizeClass = getSizeClass();
  const opacityClass = isMain ? 'opacity-100' : 'opacity-35';

  // 渐变色类名
  const gradientClass = visual?.gradient
    ? `bg-gradient-to-r ${visual.gradient} bg-clip-text text-transparent`
    : '';

  // 光晕效果
  const getGlowClass = () => {
    if (!isMain || !visual?.glow) return '';

    const glowColors: Record<string, string> = {
      purple: 'drop-shadow-[0_0_30px_rgba(168,85,247,0.4)]',
      cyan: 'drop-shadow-[0_0_30px_rgba(34,211,238,0.4)]',
      emerald: 'drop-shadow-[0_0_30px_rgba(16,185,129,0.4)]',
      amber: 'drop-shadow-[0_0_30px_rgba(251,191,36,0.4)]',
      blue: 'drop-shadow-[0_0_30px_rgba(59,130,246,0.4)]',
      fuchsia: 'drop-shadow-[0_0_30px_rgba(232,121,249,0.4)]',
    };

    return glowColors[visual.glow] || '';
  };

  return (
    <div
      className={`
        ${breathClass}
        ${sizeClass}
        ${opacityClass}
        ${gradientClass}
        ${getGlowClass()}
        ${isPaused ? 'paused' : ''}
        smooth-transition
        no-select
        font-serif
        tracking-wide
        font-light
      `}
      style={{
        textShadow: isMain ? '0 2px 40px rgba(0, 0, 0, 0.1)' : 'none',
      }}
    >
      {text}
    </div>
  );
}
