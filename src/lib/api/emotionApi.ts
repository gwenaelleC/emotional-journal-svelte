import { http } from "./httpClient";

export enum Mood {
  joy = 'joy',
  sadness = 'sadness',
}

export interface EmotionEntryProps {
  content: string;
  intensity: number;
  mood: Mood;
}

export interface EmotionEntry {
  id: string;
  content: string;
  intensity: number;
  mood: Mood;
  created_at?: string;
}

// POST an emotion. Returns the created EmotionEntry from the API.
export function postEmotion(payload: EmotionEntryProps) {
  return http<EmotionEntry>('/emotion', {
    method: 'POST',
    body: JSON.stringify(payload)
  });
}