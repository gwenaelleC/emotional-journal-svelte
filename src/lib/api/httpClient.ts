import { get } from 'svelte/store';
import { token } from '../stores/auth';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function http<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const currentToken = get(token);
  
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(options.headers as Record<string, string> ?? {})
  };

  // Add Authorization header if token exists
  if (currentToken?.access_token) {
    headers['Authorization'] = `Bearer ${currentToken.access_token}`;
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    credentials: 'include',
    ...options,
    headers
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(error || 'API error');
  }

  return response.json() as Promise<T>;
}
