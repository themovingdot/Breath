'use client';

import { useState, useEffect } from 'react';
import BreathingText from '@/components/BreathingText';
import ConfigMenu from '@/components/ConfigMenu';
import { useBreathing } from '@/hooks/useBreathing';
import { useConfig } from '@/hooks/useConfig';

export default function Home() {
  const { currentReminder, relatedReminders, showRelated, nextReminder } = useBreathing();
  const { config, setTheme, setLanguage, setBreathSpeed } = useConfig();

  const [isPaused, setIsPaused] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [longPressTimer, setLongPressTimer] = useState<NodeJS.Timeout | null>(null);

  // 主题类名
  const themeClass = `theme-${config.theme}`;

  // 点击切换下一条
  const handleClick = () => {
    if (!isPaused) {
      nextReminder();
    }
  };

  // 长按暂停
  const handleMouseDown = () => {
    const timer = setTimeout(() => {
      setIsPaused(true);
    }, 800); // 800ms 长按
    setLongPressTimer(timer);
  };

  const handleMouseUp = () => {
    if (longPressTimer) {
      clearTimeout(longPressTimer);
      setLongPressTimer(null);
    }
  };

  // 键盘快捷键
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // 空格键 - 切换下一条
      if (e.code === 'Space') {
        e.preventDefault();
        nextReminder();
      }
      // M键 - 显示菜单（需要按 Ctrl/Cmd）
      if ((e.ctrlKey || e.metaKey) && e.key === 'm') {
        e.preventDefault();
        setShowMenu(prev => !prev);
      }
      // P键 - 暂停/恢复
      if (e.key === 'p' || e.key === 'P') {
        setIsPaused(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [nextReminder]);

  // 触摸事件处理（移动端）
  const handleTouchStart = () => {
    const timer = setTimeout(() => {
      setIsPaused(true);
    }, 800);
    setLongPressTimer(timer);
  };

  const handleTouchEnd = () => {
    if (longPressTimer) {
      clearTimeout(longPressTimer);
      setLongPressTimer(null);
    }
  };

  if (!currentReminder) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${themeClass}`}>
        <div className="text-2xl opacity-50">加载中...</div>
      </div>
    );
  }

  return (
    <main
      className={`
        min-h-screen
        flex flex-col items-center justify-center
        ${themeClass}
        smooth-transition
        cursor-pointer
        relative
        overflow-hidden
      `}
      onClick={handleClick}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* 主咒语 */}
      <div className="flex items-center justify-center mb-8">
        <BreathingText
          reminder={currentReminder}
          language={config.language}
          breathSpeed={config.breathSpeed}
          isPaused={isPaused}
          isMain={true}
        />
      </div>

      {/* 相关内容 - 渐进显示 */}
      {showRelated && (
        <div className="absolute inset-0 pointer-events-none">
          {relatedReminders.map((reminder, index) => {
            // 计算位置（分散在四周）
            const positions = [
              'top-[15%] left-[10%]',
              'top-[20%] right-[12%]',
              'bottom-[25%] left-[15%]',
              'bottom-[20%] right-[10%]',
              'top-[60%] left-[8%]',
            ];

            return (
              <div
                key={reminder.id}
                className={`absolute ${positions[index]} animate-fade-in`}
                style={{
                  animationDelay: `${index * 2}s`,
                }}
              >
                <BreathingText
                  reminder={reminder}
                  language={config.language}
                  breathSpeed={config.breathSpeed}
                  isPaused={isPaused}
                  isMain={false}
                />
              </div>
            );
          })}
        </div>
      )}

      {/* 暂停提示 */}
      {isPaused && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 text-sm opacity-30">
          已暂停 · 点击恢复
        </div>
      )}

      {/* 提示：点击切换 */}
      <div className="fixed bottom-4 right-4 text-xs opacity-20 pointer-events-none">
        点击切换 · 长按暂停 · ⌘M 设置
      </div>

      {/* 配置菜单 */}
      {showMenu && (
        <ConfigMenu
          config={config}
          onThemeChange={setTheme}
          onLanguageChange={setLanguage}
          onBreathSpeedChange={setBreathSpeed}
          onClose={() => setShowMenu(false)}
        />
      )}
    </main>
  );
}
