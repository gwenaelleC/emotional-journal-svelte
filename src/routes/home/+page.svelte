<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { isAuthenticated } from '$lib/stores/auth';

	let authed = false;

	const unsubscribe = isAuthenticated.subscribe((v) => (authed = v));

	onMount(() => {
		if (!authed) {
			goto('/login');
		}
	});

	// cleanup subscription if component destroyed later
	// (Svelte will call the returned function automatically if exported)
	export function onDestroy() {
		unsubscribe();
	}
</script>

<div class="min-h-screen flex items-center justify-center bg-gray-50">
	Home
</div>
