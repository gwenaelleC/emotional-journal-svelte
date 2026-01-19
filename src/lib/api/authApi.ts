import { http } from "./httpClient";

export interface SigninRequest {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
}

export interface LoginRequest {
  username: string;
  password: string;
  grant_type: 'password';
}

export interface TokenResponse {
  access_token: string;
  token_type: 'bearer';
}

export function signin(payload: SigninRequest) {
  return http<TokenResponse>('/auth', {
    method: 'POST',
    body: JSON.stringify(payload)
  });
}

export function login(payload: LoginRequest) {
  const params = new URLSearchParams();
  params.append('grant_type', payload.grant_type);
  params.append('username', payload.username);
  params.append('password', payload.password);
  if ((payload as any).client_id) params.append('client_id', (payload as any).client_id);
  if ((payload as any).client_secret) params.append('client_secret', (payload as any).client_secret);

  return http<TokenResponse>('/auth/token', {
    method: 'POST',
    body: params.toString(),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });
}
