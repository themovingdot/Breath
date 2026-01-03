export interface VisualStyle {
  gradient?: string;
  glow?: string;
  size?: 'small' | 'medium' | 'large';
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
