import { writable, derived } from 'svelte/store';
import type { TokenResponse } from '$lib/api/authApi';

const token = writable<TokenResponse | null>(null);

const isAuthenticated = derived(token, ($token) => !!$token?.access_token);

function setToken(t: TokenResponse) {
  token.set(t);
}

function clearToken() {
  token.set(null);
}

export { token, isAuthenticated, setToken, clearToken };
