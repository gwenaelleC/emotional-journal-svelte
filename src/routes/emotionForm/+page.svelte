<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import { Input } from "$lib/components/ui/input/index.js";
    import * as Card from "$lib/components/ui/card/index";
    import { Mood, postEmotion, type EmotionEntryProps } from "$lib/api/emotionApi";
    import Label from "$lib/components/ui/label/label.svelte";

    let content = "content";
    let intensity = 1;
    let mood: Mood = Mood.joy;



    async function handleEmotionPost() {
        const payload: EmotionEntryProps = {
            content,
            intensity,
            mood,
        };
        console.log("post emotion payload", payload);
        try {
            const created = await postEmotion(payload);
            alert(`Emotion created: ${created.id} - ${created.mood} (${created.intensity})\n${created.content}`);
        } catch (e) {
            console.error('Failed to create emotion', e);
            alert('Failed to create emotion');
        }
    }
</script>

<div class="min-h-screen flex items-center justify-center bg-gray-50">
    <Card.Root class="-my-4 w-full max-w-sm">
        <Card.Header>
            <Card.Title>Create an emotion</Card.Title>
        </Card.Header>
        <Card.Content>
            <form on:submit|preventDefault={handleEmotionPost}>
                <div class="flex flex-col gap-6">
                    <div>
                        <Label
                            for="content"
                            class="block text-sm font-medium text-gray-700"
                        >
                            Content
                        </Label>
                        <Input
                            id="content"
                            name="content"
                            type="text"
                            required
                            bind:value={content}
                            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter your First Content"
                        />
                    </div>

                    <div>
                        <Label
                            for="intensity"
                            class="block text-sm font-medium text-gray-700"
                        >
                            Intensity
                        </Label>
                        <Input
                            id="intensity"
                            name="intensity"
                            type="text"
                            required
                            bind:value={intensity}
                            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter the intensity"
                        />
                    </div>
                     <div>
                        <Label
                            for="mood"
                            class="block text-sm font-medium text-gray-700"
                        >
                            Mood
                        </Label>
                        <Input
                            id="mood"
                            name="mood"
                            type="text"
                            required
                            bind:value={mood}
                            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter the mood"
                        />
                    </div>
                </div>
            </form>
        </Card.Content>
        <Card.Footer class="flex-col gap-2">
            <Button type="submit" class="w-full" onclick={handleEmotionPost}>Create</Button>
        </Card.Footer>
    </Card.Root>
</div>
