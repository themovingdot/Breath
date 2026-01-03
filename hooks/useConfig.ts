import { useState, useEffect } from 'react';
import { AppConfig, Theme, Language, BreathSpeed } from '@/types';

const DEFAULT_CONFIG: AppConfig = {
  theme: 'dark',
  language: 'cn',
  breathSpeed: 'medium',
};

const CONFIG_KEY = 'breath-app-config';

export function useConfig() {
  const [config, setConfig] = useState<AppConfig>(DEFAULT_CONFIG);

  // 从 localStorage 加载配置
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const saved = localStorage.getItem(CONFIG_KEY);
    if (saved) {
      try {
        setConfig(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to load config:', e);
      }
    }
  }, []);

  // 保存配置到 localStorage
  const saveConfig = (newConfig: AppConfig) => {
    setConfig(newConfig);
    if (typeof window !== 'undefined') {
      localStorage.setItem(CONFIG_KEY, JSON.stringify(newConfig));
    }
  };

  const setTheme = (theme: Theme) => {
    saveConfig({ ...config, theme });
  };

  const setLanguage = (language: Language) => {
    saveConfig({ ...config, language });
  };

  const setBreathSpeed = (breathSpeed: BreathSpeed) => {
    saveConfig({ ...config, breathSpeed });
  };

  return {
    config,
    setTheme,
    setLanguage,
    setBreathSpeed,
  };
}
