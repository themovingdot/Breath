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
  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 bg-black/30 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white/95 rounded-2xl p-8 shadow-2xl min-w-[320px] text-gray-800"
        onClick={e => e.stopPropagation()}
      >
        <h2 className="text-2xl font-serif mb-6 text-center text-gray-900">设置</h2>

        {/* 主题选择 */}
        <div className="mb-6">
          <label className="block text-sm mb-2 opacity-70">主题</label>
          <div className="flex gap-2">
            {(['dark', 'light', 'blue'] as Theme[]).map(theme => (
              <button
                key={theme}
                onClick={() => onThemeChange(theme)}
                className={`
                  px-4 py-2 rounded-lg transition-all
                  ${
                    config.theme === theme
                      ? 'bg-gray-800 text-white scale-105'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }
                `}
              >
                {theme === 'dark' && '深色'}
                {theme === 'light' && '浅色'}
                {theme === 'blue' && '深蓝'}
              </button>
            ))}
          </div>
        </div>

        {/* 语言选择 */}
        <div className="mb-6">
          <label className="block text-sm mb-2 opacity-70">语言</label>
          <div className="flex gap-2">
            {(['cn', 'en'] as Language[]).map(lang => (
              <button
                key={lang}
                onClick={() => onLanguageChange(lang)}
                className={`
                  px-4 py-2 rounded-lg transition-all
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
        <div className="mb-6">
          <label className="block text-sm mb-2 opacity-70">呼吸速度</label>
          <div className="flex gap-2">
            {(['slow', 'medium', 'fast'] as BreathSpeed[]).map(speed => (
              <button
                key={speed}
                onClick={() => onBreathSpeedChange(speed)}
                className={`
                  px-4 py-2 rounded-lg transition-all
                  ${
                    config.breathSpeed === speed
                      ? 'bg-gray-800 text-white scale-105'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }
                `}
              >
                {speed === 'slow' && '慢'}
                {speed === 'medium' && '中'}
                {speed === 'fast' && '快'}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full mt-4 py-3 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors text-gray-800"
        >
          关闭
        </button>
      </div>
    </div>
  );
}
