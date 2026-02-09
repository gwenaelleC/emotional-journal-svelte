import type { ColumnDef } from "@tanstack/table-core";
import type { EmotionEntry } from "../../models/EmotionEntry";

export const columns: ColumnDef<EmotionEntry>[] = [
  {
    accessorKey: "content",
    header: "Content",
  },
  {
    accessorKey: "intensity",
    header: "Intensity",
  },
  {
    accessorKey: "mood",
    header: "Mood",
  },
  {
    accessorKey: "timestamp",
    header: "Date",
    cell: (info) => {
      const timestamp = info.getValue() as string;
      return new Date(timestamp).toLocaleString();
    }
  }
];