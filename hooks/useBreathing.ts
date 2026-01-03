import { useState, useEffect } from 'react';
import { BreathReminder } from '@/types';
import contentData from '@/data/content.json';

export function useBreathing() {
  const [currentReminder, setCurrentReminder] = useState<BreathReminder | null>(null);
  const [relatedReminders, setRelatedReminders] = useState<BreathReminder[]>([]);
  const [showRelated, setShowRelated] = useState(false);
  const [stayDuration, setStayDuration] = useState(0);

  // 选择主咒语（随机 + 时间权重）
  const selectMainReminder = () => {
    const reminders = contentData.breath_reminders;
    const coreReminders = reminders.filter(r => r.category === 'core_mantra');

    // 简单随机选择（未来可加入时间权重）
    const randomIndex = Math.floor(Math.random() * coreReminders.length);
    const selected = coreReminders[randomIndex];

    setCurrentReminder(selected);
    setRelatedReminders([]);
    setShowRelated(false);
    setStayDuration(0);
  };

  // 加载相关内容
  const loadRelatedContent = (mainReminder: BreathReminder) => {
    const allReminders = contentData.breath_reminders;
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
    selectMainReminder();
  };

  return {
    currentReminder,
    relatedReminders,
    showRelated,
    stayDuration,
    nextReminder,
  };
}
