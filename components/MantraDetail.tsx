'use client';

import { BreathReminder, Language } from '@/types';

interface MantraDetailProps {
  reminder: BreathReminder;
  language: Language;
  isVisible: boolean;
  onClose: () => void;
}

export default function MantraDetail({
  reminder,
  language,
  isVisible,
  onClose,
}: MantraDetailProps) {
  const text = language === 'cn' ? reminder.text_cn : reminder.text_en;
  const visual = reminder.visual;

  // 获取颜色
  const getAccentColor = () => {
    const colors: Record<string, string> = {
      purple: '#a855f7',
      cyan: '#22d3ee',
      emerald: '#10b981',
      amber: '#fbbf24',
      blue: '#3b82f6',
      fuchsia: '#e879f9',
    };
    return visual?.glow ? colors[visual.glow] : '#a855f7';
  };

  const accentColor = getAccentColor();

  return (
    <div
      className={`
        fixed inset-0 z-40
        bg-black/95 backdrop-blur-md
        transition-all duration-700 ease-in-out
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}
      `}
      onClick={onClose}
    >
      <div className="min-h-screen flex flex-col items-center justify-center p-8 relative">
        {/* 向下箭头提示 */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 opacity-30 animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>

        {/* 主标题 */}
        <div
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-light mb-12 text-center"
          style={{
            color: accentColor,
            textShadow: `0 0 60px ${accentColor}80, 0 0 120px ${accentColor}40`,
          }}
        >
          {text}
        </div>

        {/* 使用场景 */}
        <div className="max-w-2xl mb-16 space-y-8">
          <div className="space-y-4">
            <div
              className="text-sm uppercase tracking-widest opacity-50"
              style={{ color: accentColor }}
            >
              {language === 'cn' ? '使用时机' : 'When to Use'}
            </div>
            <div className="text-2xl md:text-3xl text-gray-200 font-light leading-relaxed">
              {reminder.context}
            </div>
          </div>

          {/* 分隔线 */}
          <div
            className="h-px w-32 mx-auto opacity-30"
            style={{ backgroundColor: accentColor }}
          />

          {/* 详细说明 */}
          <div className="space-y-4">
            <div
              className="text-sm uppercase tracking-widest opacity-50"
              style={{ color: accentColor }}
            >
              {language === 'cn' ? '深入理解' : 'Understanding'}
            </div>
            <div className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
              {reminder.elaboration}
            </div>
          </div>
        </div>

        {/* 底部提示 */}
        <div className="text-xs opacity-20 text-center">
          {language === 'cn' ? '向下滑动返回' : 'Scroll down to return'}
        </div>
      </div>
    </div>
  );
}
