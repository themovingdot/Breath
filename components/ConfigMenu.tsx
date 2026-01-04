'use client';

import { AppConfig, Theme, Language, BreathSpeed } from '@/types';

interface ConfigMenuProps {
  config: AppConfig;
  onThemeChange: (theme: Theme) => void;
  onLanguageChange: (language: Language) => void;
  onBreathSpeedChange: (speed: BreathSpeed) => void;
  onClose: () => void;
}

export default function ConfigMenu({
  config,
  onThemeChange,
  onLanguageChange,
  onBreathSpeedChange,
  onClose,
}: ConfigMenuProps) {
  const t = {
    title: config.language === 'cn' ? '设置' : 'Settings',
    theme: config.language === 'cn' ? '主题' : 'Theme',
    language: config.language === 'cn' ? '语言' : 'Language',
    breathSpeed: config.language === 'cn' ? '呼吸速度' : 'Breath Speed',
    close: config.language === 'cn' ? '关闭' : 'Close',
    themeDark: config.language === 'cn' ? '深色' : 'Dark',
    themeLight: config.language === 'cn' ? '浅色' : 'Light',
    themeBlue: config.language === 'cn' ? '深蓝' : 'Blue',
    speedSlow: config.language === 'cn' ? '慢' : 'Slow',
    speedMedium: config.language === 'cn' ? '中' : 'Medium',
    speedFast: config.language === 'cn' ? '快' : 'Fast',
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 bg-black/30 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white/95 rounded-2xl p-6 shadow-2xl min-w-[280px] text-gray-800"
        onClick={e => e.stopPropagation()}
      >
        <h2 className="text-lg font-serif mb-4 text-center text-gray-900">{t.title}</h2>

        {/* 主题选择 */}
        <div className="mb-4">
          <label className="block text-xs mb-1.5 opacity-60">{t.theme}</label>
          <div className="flex gap-1.5">
            {(['dark', 'light', 'blue'] as Theme[]).map(theme => (
              <button
                key={theme}
                onClick={() => onThemeChange(theme)}
                className={`
                  px-3 py-1.5 rounded-md transition-all text-xs
                  ${
                    config.theme === theme
                      ? 'bg-gray-800 text-white scale-105'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }
                `}
              >
                {theme === 'dark' && t.themeDark}
                {theme === 'light' && t.themeLight}
                {theme === 'blue' && t.themeBlue}
              </button>
            ))}
          </div>
        </div>

        {/* 语言选择 */}
        <div className="mb-4">
          <label className="block text-xs mb-1.5 opacity-60">{t.language}</label>
          <div className="flex gap-1.5">
            {(['cn', 'en'] as Language[]).map(lang => (
              <button
                key={lang}
                onClick={() => onLanguageChange(lang)}
                className={`
                  px-3 py-1.5 rounded-md transition-all text-xs
                  ${
                    config.language === lang
                      ? 'bg-gray-800 text-white scale-105'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }
                `}
              >
                {lang === 'cn' && '中文'}
                {lang === 'en' && 'English'}
              </button>
            ))}
          </div>
        </div>

        {/* 呼吸速度选择 */}
        <div className="mb-4">
          <label className="block text-xs mb-1.5 opacity-60">{t.breathSpeed}</label>
          <div className="flex gap-1.5">
            {(['slow', 'medium', 'fast'] as BreathSpeed[]).map(speed => (
              <button
                key={speed}
                onClick={() => onBreathSpeedChange(speed)}
                className={`
                  px-3 py-1.5 rounded-md transition-all text-xs
                  ${
                    config.breathSpeed === speed
                      ? 'bg-gray-800 text-white scale-105'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }
                `}
              >
                {speed === 'slow' && t.speedSlow}
                {speed === 'medium' && t.speedMedium}
                {speed === 'fast' && t.speedFast}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full mt-3 py-2 bg-gray-200 hover:bg-gray-300 rounded-md transition-colors text-gray-800 text-xs"
        >
          {t.close}
        </button>
      </div>
    </div>
  );
}
