const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function http<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    credentials: 'include',
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers ?? {})
    }
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(error || 'API error');
  }

  return response.json() as Promise<T>;
}
