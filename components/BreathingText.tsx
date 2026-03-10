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

  // 获取颜色（从渐变中提取或使用默认）
  const getTextColor = () => {
    if (!isMain || !visual?.glow) return '';

    const colors: Record<string, string> = {
      purple: 'text-purple-300',
      cyan: 'text-cyan-300',
      emerald: 'text-emerald-300',
      amber: 'text-amber-300',
      blue: 'text-blue-300',
      fuchsia: 'text-fuchsia-300',
    };

    return colors[visual.glow] || 'text-gray-200';
  };

  // 光晕效果
  const getGlowStyle = () => {
    if (!isMain || !visual?.glow) return {};

    const glowColors: Record<string, string> = {
      purple: '0 0 40px rgba(168,85,247,0.6), 0 0 80px rgba(168,85,247,0.3)',
      cyan: '0 0 40px rgba(34,211,238,0.6), 0 0 80px rgba(34,211,238,0.3)',
      emerald: '0 0 40px rgba(16,185,129,0.6), 0 0 80px rgba(16,185,129,0.3)',
      amber: '0 0 40px rgba(251,191,36,0.6), 0 0 80px rgba(251,191,36,0.3)',
      blue: '0 0 40px rgba(59,130,246,0.6), 0 0 80px rgba(59,130,246,0.3)',
      fuchsia: '0 0 40px rgba(232,121,249,0.6), 0 0 80px rgba(232,121,249,0.3)',
    };

    return {
      textShadow: glowColors[visual.glow] || 'none',
    };
  };

  // Effective breath duration = mantra's natural rhythm × speed multiplier
  const speedMultiplier: Record<BreathSpeed, number> = { slow: 1.4, medium: 1.0, fast: 0.65 };
  const baseDuration = visual?.breathDuration ?? 15;
  const breathDur = `${Math.round(baseDuration * speedMultiplier[breathSpeed])}s`;

  // Bell-curve scale per character: centre grows the most, edges barely move
  const getCharScale = (index: number, total: number): number => {
    const maxScale = isMain ? 1.12 : 1.06;
    const minScale = 1.005;
    if (total <= 1) return maxScale;
    const centre = (total - 1) / 2;
    const dist = Math.abs(index - centre) / centre; // 0 at centre, 1 at edges
    const factor = Math.pow(Math.cos((dist * Math.PI) / 2), 2); // cos² bell curve
    return minScale + (maxScale - minScale) * factor;
  };

  const chars = text.split('');

  return (
    <div
      className={`
        ${breathClass}
        ${sizeClass}
        ${opacityClass}
        ${getTextColor()}
        ${isPaused ? 'paused' : ''}
        smooth-transition
        no-select
        font-serif
        tracking-wide
        font-light
      `}
      style={{ ...getGlowStyle(), '--breath-dur': breathDur } as React.CSSProperties}
    >
      {chars.map((char, i) => (
        <span
          key={i}
          className="breathe-char-span"
          style={
            {
              display: 'inline-block',
              '--char-scale': getCharScale(i, chars.length),
            } as React.CSSProperties
          }
        >
          {char}
        </span>
      ))}
    </div>
  );
}
