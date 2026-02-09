import type { EmotionEntry } from "../../models/EmotionEntry";
import type { EmotionEntryProps } from "../../models/EmotionEntryProps";
import { http } from "./httpClient";

// POST an emotion. Returns the created EmotionEntry from the API.
export function postEmotion(payload: EmotionEntryProps) {
  return http<EmotionEntry>('/emotion', {
    method: 'POST',
    body: JSON.stringify(payload)
  });
}

export function getEmotions() {
  return http<EmotionEntry[]>('/emotions', {
    method: 'GET'
  });
}