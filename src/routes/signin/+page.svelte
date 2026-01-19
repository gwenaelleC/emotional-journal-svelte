<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import { signin, type SigninRequest } from "$lib/api/authApi";
    import { Label } from "$lib/components/ui/label/index.js";
    import { Input } from "$lib/components/ui/input/index.js";
    import * as Card from "$lib/components/ui/card/index";
    import { goto } from "$app/navigation";

    let email = "";
    let first_name = "";
    let last_name = "";
    let password = "";

    let status = "ko";

    async function handleSignin() {
        const payload: SigninRequest = {
            email,
            password,
            first_name,
            last_name,
        };
        console.log("signing in with payload", payload);
        const token = await signin(payload);
    }
</script>

<div class="min-h-screen flex items-center justify-center bg-gray-50">
    <Card.Root class="-my-4 w-full max-w-sm">
        <Card.Header>
            <Card.Title>Sign in to your account</Card.Title>
            <Card.Action>
                <Button variant="link" onclick={() => goto("/login")}
                    >Login</Button
                >
            </Card.Action>
        </Card.Header>
        <Card.Content>
            <form on:submit|preventDefault={handleSignin}>
                <div class="flex flex-col gap-6">
                    <div class="grid gap-2">
                        <Label for="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="m@example.com"
                            required
                            bind:value={email}
                        />
                    </div>
                    <div>
                        <label
                            for="first_name"
                            class="block text-sm font-medium text-gray-700"
                        >
                            First Name
                        </label>
                        <Input
                            id="first_name"
                            name="first_name"
                            type="text"
                            required
                            bind:value={first_name}
                            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter your First Name"
                        />
                    </div>

                    <div>
                        <label
                            for="last_name"
                            class="block text-sm font-medium text-gray-700"
                        >
                            Last Name
                        </label>
                        <Input
                            id="last_name"
                            name="last_name"
                            type="text"
                            required
                            bind:value={last_name}
                            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter your First Name"
                        />
                    </div>
                    <div class="grid gap-2">
                        <div class="flex items-center">
                            <Label for="password">Password</Label>
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
            <Button type="submit" class="w-full">Login</Button>
            <Button variant="outline" class="w-full">Login with Google</Button>
        </Card.Footer>
    </Card.Root>
</div>
