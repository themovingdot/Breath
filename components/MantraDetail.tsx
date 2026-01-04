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
        overflow-y-auto hide-scrollbar
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}
      `}
      onClick={onClose}
    >
      <div className="min-h-screen flex flex-col items-center justify-start p-8 py-16 relative" onClick={(e) => e.stopPropagation()}>
        {/* 向下箭头提示 */}
        <div className="fixed top-8 left-1/2 -translate-x-1/2 opacity-20 animate-bounce cursor-pointer" onClick={onClose}>
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
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-light mb-8 text-center"
          style={{
            color: accentColor,
            textShadow: `0 0 60px ${accentColor}80, 0 0 120px ${accentColor}40`,
          }}
        >
          {text}
        </div>

        {/* 核心理解 */}
        {reminder.coreUnderstanding && (
          <div className="max-w-3xl mb-12 text-center">
            <div className="text-lg md:text-xl text-gray-300 font-light leading-relaxed italic">
              {reminder.coreUnderstanding}
            </div>
          </div>
        )}

        {/* 主要内容区域 */}
        <div className="max-w-4xl w-full space-y-16">
          {/* 使用场景 */}
          <div className="space-y-6">
            <div
              className="text-sm uppercase tracking-widest opacity-40 text-center"
              style={{ color: accentColor }}
            >
              {language === 'cn' ? '使用时机' : 'When to Use'}
            </div>
            <div className="text-xl md:text-2xl text-gray-200 font-light leading-relaxed text-center px-4">
              {reminder.context}
            </div>
          </div>

          {/* 分隔线 */}
          <div
            className="h-px w-48 mx-auto opacity-20"
            style={{ backgroundColor: accentColor }}
          />

          {/* 应用场景 */}
          {reminder.scenes && reminder.scenes.length > 0 && (
            <div className="space-y-6">
              <div
                className="text-sm uppercase tracking-widest opacity-40 text-center"
                style={{ color: accentColor }}
              >
                {language === 'cn' ? '应用场景' : 'Scenarios'}
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {reminder.scenes.map((scene, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-lg backdrop-blur-sm border border-white/5 hover:border-white/10 transition-all"
                    style={{
                      backgroundColor: `${accentColor}08`,
                    }}
                  >
                    <div
                      className="text-sm font-medium mb-2"
                      style={{ color: accentColor }}
                    >
                      {scene.title}
                    </div>
                    <div className="text-gray-400 text-sm leading-relaxed">
                      {scene.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 分隔线 */}
          <div
            className="h-px w-48 mx-auto opacity-20"
            style={{ backgroundColor: accentColor }}
          />

          {/* 实践方法 */}
          {reminder.practices && reminder.practices.length > 0 && (
            <div className="space-y-6">
              <div
                className="text-sm uppercase tracking-widest opacity-40 text-center"
                style={{ color: accentColor }}
              >
                {language === 'cn' ? '实践方法' : 'Practice'}
              </div>
              <div className="space-y-4">
                {reminder.practices.map((practice, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-lg backdrop-blur-sm border border-white/5"
                  >
                    <div
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium"
                      style={{
                        backgroundColor: `${accentColor}20`,
                        color: accentColor,
                      }}
                    >
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="text-gray-200 font-medium mb-1">
                        {practice.step}
                      </div>
                      <div className="text-gray-400 text-sm leading-relaxed">
                        {practice.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 分隔线 */}
          <div
            className="h-px w-48 mx-auto opacity-20"
            style={{ backgroundColor: accentColor }}
          />

          {/* 深入理解 */}
          <div className="space-y-6">
            <div
              className="text-sm uppercase tracking-widest opacity-40 text-center"
              style={{ color: accentColor }}
            >
              {language === 'cn' ? '深入理解' : 'Understanding'}
            </div>
            <div className="text-lg md:text-xl text-gray-300 font-light leading-relaxed text-center px-4">
              {reminder.elaboration}
            </div>
          </div>

          {/* 关键洞察 */}
          {reminder.keyInsight && (
            <>
              <div
                className="h-px w-48 mx-auto opacity-20"
                style={{ backgroundColor: accentColor }}
              />
              <div className="space-y-6">
                <div
                  className="text-sm uppercase tracking-widest opacity-40 text-center"
                  style={{ color: accentColor }}
                >
                  {language === 'cn' ? '关键洞察' : 'Key Insight'}
                </div>
                <div
                  className="text-xl md:text-2xl text-center font-light leading-relaxed px-6 py-8 rounded-lg border border-white/10"
                  style={{
                    color: accentColor,
                    backgroundColor: `${accentColor}05`,
                  }}
                >
                  {reminder.keyInsight}
                </div>
              </div>
            </>
          )}
        </div>

        {/* 底部提示 */}
        <div className="mt-16 text-xs opacity-15 text-center">
          {language === 'cn' ? '向下滑动或点击任意处返回' : 'Scroll down or click to return'}
        </div>
      </div>
    </div>
  );
}
