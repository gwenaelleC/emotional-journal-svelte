import type { Mood } from "./Mood";

export interface EmotionEntry {
  id: string;
  content: string;
  intensity: number;
  mood: Mood;
  timestamp?: Date | string;
}