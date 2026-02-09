import { getEmotions } from "$lib/api/emotionApi";

export async function load() {
    try {
        const emotions = await getEmotions();
        return { emotions };
    } catch (e) {
        console.error('Failed to fetch emotions', e);
        return { emotions: [] };
    }
}
