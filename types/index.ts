export interface VisualStyle {
  gradient?: string;
  glow?: string;
  size?: 'small' | 'medium' | 'large';
  backgroundColor?: string;
}

export interface BilingualText {
  cn: string;
  en: string;
}

export interface SceneExample {
  title: BilingualText;
  description: BilingualText;
}

export interface PracticeMethod {
  step: BilingualText;
  description: BilingualText;
}

export interface BreathReminder {
  id: string;
  category: 'core_mantra' | 'principle' | 'parenting' | 'theory' | 'daily';
  text_cn: string;
  text_en: string;
  related: string[];
  context: BilingualText;
  elaboration: BilingualText;
  visual?: VisualStyle;
  // 扩展字段
  coreUnderstanding?: BilingualText;
  scenes?: SceneExample[];
  practices?: PracticeMethod[];
  keyInsight?: BilingualText;
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
