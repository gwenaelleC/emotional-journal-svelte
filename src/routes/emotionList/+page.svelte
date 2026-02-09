<script lang="ts">
    import type { EmotionEntry } from "../../models/EmotionEntry";
    import { columns } from "./columns";
    import DataTable from "./data-table.svelte";

    export let data: { emotions: EmotionEntry[] };
    $: emotions = data.emotions;

</script>

<div class="min-h-screen flex items-center justify-center bg-gray-50">
    <DataTable data={emotions} {columns} />
</div>
