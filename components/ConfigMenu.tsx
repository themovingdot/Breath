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
        className="bg-white/95 rounded-2xl p-6 shadow-2xl min-w-[280px] text-gray-800"
        onClick={e => e.stopPropagation()}
      >
        <h2 className="text-lg font-serif mb-4 text-center text-gray-900">设置</h2>

        {/* 主题选择 */}
        <div className="mb-4">
          <label className="block text-xs mb-1.5 opacity-60">主题</label>
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
                {theme === 'dark' && '深色'}
                {theme === 'light' && '浅色'}
                {theme === 'blue' && '深蓝'}
              </button>
            ))}
          </div>
        </div>

        {/* 语言选择 */}
        <div className="mb-4">
          <label className="block text-xs mb-1.5 opacity-60">语言</label>
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
          <label className="block text-xs mb-1.5 opacity-60">呼吸速度</label>
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
                {speed === 'slow' && '慢'}
                {speed === 'medium' && '中'}
                {speed === 'fast' && '快'}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full mt-3 py-2 bg-gray-200 hover:bg-gray-300 rounded-md transition-colors text-gray-800 text-xs"
        >
          关闭
        </button>
      </div>
    </div>
  );
}
