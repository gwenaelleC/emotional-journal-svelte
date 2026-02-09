<script lang="ts">
  import { isAuthenticated, token, clearToken } from '$lib/stores/auth';
  import { onDestroy } from 'svelte';
  import { goto } from '$app/navigation';

  let authed = false;
  let currentToken: any = null;

  const unsubAuth = isAuthenticated.subscribe((v) => (authed = v));
  const unsubToken = token.subscribe((t) => (currentToken = t));

  function handleLogout() {
    clearToken();
    goto('/login');
  }

  onDestroy(() => {
    unsubAuth();
    unsubToken();
  });
</script>

<header class="w-full bg-white shadow-sm">
  <div class="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
    <div class="text-lg font-semibold">Emotional Journal</div>
    <nav class="space-x-4">
      {#if authed}
        <a class="text-sm text-blue-600 hover:underline" href="/calendar">Calendar</a>
        <a class="text-sm text-blue-600 hover:underline" href="/emotionList">Emotions</a>
        <a class="text-sm text-blue-600 hover:underline" href="/emotionForm">Emotion</a>
        <span class="text-sm text-gray-700">Logged in</span>
        {#if currentToken}
          <span class="text-sm text-gray-500">{currentToken.access_token ? '● token present' : ''}</span>
        {/if}
        <button class="text-sm text-red-600 hover:underline" on:click={handleLogout}>Logout</button>
      {:else}
        <a class="text-sm text-blue-600 hover:underline" href="/login">Login</a>
        <a class="text-sm text-blue-600 hover:underline" href="/signin">Sign up</a>
      {/if}
    </nav>
  </div>
</header>
