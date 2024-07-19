"use client";

import { Cross2Icon } from "@radix-ui/react-icons";
import type { Table } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { DataTableFacetedFilter } from "@/lib/table/data-table-faceted-filter";
import { DataTableViewOptions } from "@/lib/table/data-table-view-options";
import { localizationOptions, timepointOptions } from "./definitions";

interface DataTableToolbarProps<TData> {
    table: Table<TData>;
}

export function DataTableToolbar<TData>({
    table,
}: DataTableToolbarProps<TData>) {
    const isFiltered = table.getState().columnFilters.length > 0;

    return (
        <div className="flex w-full items-center justify-between">
            <div className="flex flex-1 items-center space-x-2">
                <Input
                    placeholder={"Search FOVs"}
                    value={
                        (table.getColumn("fov")?.getFilterValue() as string) ??
                        ""
                    }
                    onChange={(event) =>
                        table
                            .getColumn("fov")
                            ?.setFilterValue(event.target.value)
                    }
                    className="h-8 w-[150px] lg:w-[250px]"
                />

                {table.getColumn("timepoint") && (
                    <DataTableFacetedFilter
                        column={table.getColumn("timepoint")}
                        title={"Timepoint"}
                        options={timepointOptions}
                    />
                )}
                {table.getColumn("localization") && (
                    <DataTableFacetedFilter
                        column={table.getColumn("localization")}
                        title={"Localization"}
                        options={localizationOptions}
                    />
                )}
                {isFiltered && (
                    <Button
                        variant="outline"
                        onClick={() => table.resetColumnFilters()}
                        className="h-8 px-2 lg:px-3"
                    >
                        {"Clean Filters"}
                        <Cross2Icon className="ml-2 h-4 w-4" />
                    </Button>
                )}
            </div>
            <DataTableViewOptions table={table} />
        </div>
    );
}
