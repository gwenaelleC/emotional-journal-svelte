import type { Mood } from "./Mood";

export interface EmotionEntryProps {
  content: string;
  intensity: number;
  mood: Mood;
}