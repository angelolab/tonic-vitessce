"use client";

import type { ColumnDef } from "@tanstack/react-table";
import clsx from "clsx";

import {
    localizationOptions,
    timepointOptions,
    fovRefs,
} from "@/lib/table/definitions";
import { DataTableColumnHeader } from "@/lib/table/data-table-column-header";
// import { DataTableRowActions } from "@/lib/table/data-table-row-actions";
import type { FieldofView } from "@/lib/types";

export const columns: ColumnDef<FieldofView>[] = [
    {
        accessorKey: "fov",
        header: ({ column }) => (
            <DataTableColumnHeader
                column={column}
                title={"Field of View (click to view)"}
            />
        ),
        cell: ({ row }) => {
            const fovhref = fovRefs.find(
                (fov) => fov.value === row.getValue("fov"),
            );
            if (!fovhref) {
                return null;
            }
            return (
                <div className="font-medium">
                    <a href={fovhref.href}>{fovhref.label}</a>
                </div>
            );
        },
    },
    {
        accessorKey: "localization",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title={"Localization"} />
        ),
        cell: ({ row }) => {
            const localization = localizationOptions.find(
                (localization) =>
                    localization.value === row.getValue("localization"),
            );
            if (!localization) {
                return null;
            }

            return (
                <div className={clsx("flex w-[100px] items-center")}>
                    <span>{localization.label}</span>
                </div>
            );
        },
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id));
        },
    },
    {
        accessorKey: "timepoint",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title={"Timepoint"} />
        ),
        cell: ({ row }) => {
            const timepoint = timepointOptions.find(
                (timepoint) => timepoint.value === row.getValue("timepoint"),
            );
            if (!timepoint) {
                return null;
            }

            return (
                <div className={clsx("flex w-[100px] items-center")}>
                    <span>{timepoint.label}</span>
                </div>
            );
        },
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id));
        },
    },
    // {
    //     id: "actions",
    //     cell: ({ row }) => <DataTableRowActions row={row} />
    // }
];
