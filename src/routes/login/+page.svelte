<script lang="ts">
	import { Button } from "$lib/components/ui/button/index.js";
	import { login } from "$lib/api/authApi";
	import { setToken } from "$lib/stores/auth";
	import { goto } from "$app/navigation";
	import { Label } from "$lib/components/ui/label/index.js";
	import { Input } from "$lib/components/ui/input/index.js";
	import * as Card from "$lib/components/ui/card/index.js";

	let username = "test@mail.com";
	let password = "test";
	let error: string | null = null;

	async function handleLogin() {
		error = null;
		try {
			const res = await login({
				username,
				password,
				grant_type: "password",
			});
			setToken(res);
			goto("/home");
		} catch (e) {
			console.error("Login failed", e);
			error = (e as Error).message || "Login failed";
		}
	}

	console.log(import.meta.env.VITE_API_BASE_URL);
</script>

<div class="min-h-screen flex items-center justify-center px-4">
	<Card.Root class="-my-4 w-full max-w-sm">
		<Card.Header>
			<Card.Title>Login to your account</Card.Title>
			<Card.Description
				>Enter your email below to login to your account</Card.Description
			>
			<Card.Action>
				<Button variant="link" onclick={() => goto("/signin")}>Sign Up</Button>
			</Card.Action>
		</Card.Header>
		<Card.Content>
			<form>
				<div class="flex flex-col gap-6">
					<div class="grid gap-2">
						<Label for="email">Email</Label>
						<Input
							id="email"
							name="username"
							type="email"
							placeholder="m@example.com"
							required
							bind:value={username}
						/>
					</div>
					<div class="grid gap-2">
						<div class="flex items-center">
							<Label for="password">Password</Label>
							<a
								href="##"
								class="ms-auto inline-block text-sm underline-offset-4 hover:underline"
							>
							</a>
						</div>
						<Input
							id="password"
							name="password"
							type="password"
							required
							bind:value={password}
							class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
							placeholder="Enter your password"
						/>
					</div>
				</div>
			</form>
		</Card.Content>
		<Card.Footer class="flex-col gap-2">
			<Button type="submit" class="w-full" onclick={handleLogin}>Login</Button>
			<Button variant="outline" class="w-full">Login with Google</Button>
		</Card.Footer>
	</Card.Root>
</div>
