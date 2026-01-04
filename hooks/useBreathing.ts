import { useState, useEffect } from 'react';
import { BreathReminder, ContentData } from '@/types';
import contentDataRaw from '@/data/content.json';

// Type assertion for JSON import
const contentData = contentDataRaw as ContentData;

export function useBreathing() {
  const [currentReminder, setCurrentReminder] = useState<BreathReminder | null>(null);
  const [relatedReminders, setRelatedReminders] = useState<BreathReminder[]>([]);
  const [showRelated, setShowRelated] = useState(false);
  const [stayDuration, setStayDuration] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [recentHistory, setRecentHistory] = useState<string[]>([]); // Track last 2 IDs

  // 选择主咒语（随机 + 避免重复最近2个）
  const selectMainReminder = () => {
    const reminders = contentData.breath_reminders as BreathReminder[];
    const coreReminders = reminders.filter(r => r.category === 'core_mantra');

    // Filter out recently shown mantras
    const availableReminders = coreReminders.filter(
      r => !recentHistory.includes(r.id)
    );

    // If we've filtered out too many (shouldn't happen with 7 mantras), reset
    const candidates = availableReminders.length > 0 ? availableReminders : coreReminders;

    // Random selection from available candidates
    const randomIndex = Math.floor(Math.random() * candidates.length);
    const selected = candidates[randomIndex];

    // Update history: keep only last 2
    setRecentHistory(prev => {
      const newHistory = [selected.id, ...prev].slice(0, 2);
      return newHistory;
    });

    setCurrentReminder(selected);
    setRelatedReminders([]);
    setShowRelated(false);
    setStayDuration(0);
    setIsFading(false);
  };

  // 加载相关内容
  const loadRelatedContent = (mainReminder: BreathReminder) => {
    const allReminders = contentData.breath_reminders as BreathReminder[];
    const related = mainReminder.related
      .map(id => allReminders.find(r => r.id === id))
      .filter(Boolean)
      .slice(0, 5) as BreathReminder[]; // 最多5条

    setRelatedReminders(related);
  };

  // 初始化
  useEffect(() => {
    selectMainReminder();
  }, []);

  // 停留时间计时器
  useEffect(() => {
    if (!currentReminder) return;

    const timer = setInterval(() => {
      setStayDuration(prev => {
        const newDuration = prev + 1;

        // 10秒后开始加载相关内容
        if (newDuration === 10 && !relatedReminders.length) {
          loadRelatedContent(currentReminder);
        }

        // 12秒后开始显示相关内容
        if (newDuration === 12) {
          setShowRelated(true);
        }

        return newDuration;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentReminder, relatedReminders.length]);

  const nextReminder = () => {
    // 先淡出
    setIsFading(true);

    // 600ms 后切换内容并淡入
    setTimeout(() => {
      selectMainReminder();
    }, 600);
  };

  return {
    currentReminder,
    relatedReminders,
    showRelated,
    stayDuration,
    isFading,
    nextReminder,
  };
}
