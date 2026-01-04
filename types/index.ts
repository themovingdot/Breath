export interface VisualStyle {
  gradient?: string;
  glow?: string;
  size?: 'small' | 'medium' | 'large';
  backgroundColor?: string;
}

export interface SceneExample {
  title: string;
  description: string;
}

export interface PracticeMethod {
  step: string;
  description: string;
}

export interface BreathReminder {
  id: string;
  category: 'core_mantra' | 'principle' | 'parenting' | 'theory' | 'daily';
  text_cn: string;
  text_en: string;
  related: string[];
  context: string;
  elaboration: string;
  visual?: VisualStyle;
  // 扩展字段
  coreUnderstanding?: string;
  scenes?: SceneExample[];
  practices?: PracticeMethod[];
  keyInsight?: string;
}

export interface ContentData {
  breath_reminders: BreathReminder[];
}

export type Theme = 'dark' | 'light' | 'blue';
export type Language = 'cn' | 'en';
export type BreathSpeed = 'slow' | 'medium' | 'fast';

export interface AppConfig {
  theme: Theme;
  language: Language;
  breathSpeed: BreathSpeed;
}
