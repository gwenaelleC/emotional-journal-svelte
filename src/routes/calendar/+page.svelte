<script lang="ts">
  import { getLocalTimeZone, today } from "@internationalized/date";
  import { Calendar } from "$lib/components/ui/calendar/index.js";
  import * as CalendarComponent from "$lib/components/ui/calendar/index.js";
  import type { EmotionEntry } from "../../models/EmotionEntry";

  let value = today(getLocalTimeZone());
  export let data: { emotions: EmotionEntry[] };
  $: emotions = data.emotions;
  console.log("emotions", emotions);
</script>

<!-- add a point if an emotion  -->
<Calendar
  type="single"
  bind:value
  class="rounded-md border shadow-sm"
  captionLayout="dropdown"
  maxValue={today(getLocalTimeZone())}
>
  {#snippet day({ day: date, outsideMonth })}
    <CalendarComponent.Day>
      {date.day}
      {#if emotions && emotions.some((e) => {
        if (!e.timestamp) return false;
        const entryDate = new Date(e.timestamp);
        return entryDate.toDateString() === new Date(date.year, date.month - 1, date.day).toDateString();
      })}
      <span class="size-1.5 rounded-full bg-red-500"></span>
    {/if}
    </CalendarComponent.Day>
  {/snippet}
</Calendar>
