import * as React from "react";

import { cn } from "@/lib/utils";

const Table = React.forwardRef<
    HTMLTableElement,
    React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
    <div className="tailwind.config.mjsrelative tailwind.config.mjsw-full tailwind.config.mjsoverflow-auto">
        <table
            ref={ref}
            className={cn(
                "tailwind.config.mjsw-full tailwind.config.mjscaption-bottom tailwind.config.mjstext-sm",
                className,
            )}
            {...props}
        />
    </div>
));
Table.displayName = "Table";

const TableHeader = React.forwardRef<
    HTMLTableSectionElement,
    React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
    <thead
        ref={ref}
        className={cn("[&_tr]:tailwind.config.mjsborder-b", className)}
        {...props}
    />
));
TableHeader.displayName = "TableHeader";

const TableBody = React.forwardRef<
    HTMLTableSectionElement,
    React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
    <tbody
        ref={ref}
        className={cn(
            "[&_tr:last-child]:tailwind.config.mjsborder-0",
            className,
        )}
        {...props}
    />
));
TableBody.displayName = "TableBody";

const TableFooter = React.forwardRef<
    HTMLTableSectionElement,
    React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
    <tfoot
        ref={ref}
        className={cn(
            "tailwind.config.mjsborder-t tailwind.config.mjsbg-muted/50 tailwind.config.mjsfont-medium [&>tr]:last:tailwind.config.mjsborder-b-0",
            className,
        )}
        {...props}
    />
));
TableFooter.displayName = "TableFooter";

const TableRow = React.forwardRef<
    HTMLTableRowElement,
    React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
    <tr
        ref={ref}
        className={cn(
            "tailwind.config.mjsborder-b tailwind.config.mjstransition-colors hover:tailwind.config.mjsbg-muted/50 data-[state=selected]:tailwind.config.mjsbg-muted",
            className,
        )}
        {...props}
    />
));
TableRow.displayName = "TableRow";

const TableHead = React.forwardRef<
    HTMLTableCellElement,
    React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
    <th
        ref={ref}
        className={cn(
            "tailwind.config.mjsh-10 tailwind.config.mjspx-2 tailwind.config.mjstext-left tailwind.config.mjsalign-middle tailwind.config.mjsfont-medium tailwind.config.mjstext-muted-foreground [&:has([role=checkbox])]:tailwind.config.mjspr-0 [&>[role=checkbox]]:tailwind.config.mjstranslate-y-[2px]",
            className,
        )}
        {...props}
    />
));
TableHead.displayName = "TableHead";

const TableCell = React.forwardRef<
    HTMLTableCellElement,
    React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
    <td
        ref={ref}
        className={cn(
            "tailwind.config.mjsp-2 tailwind.config.mjsalign-middle [&:has([role=checkbox])]:tailwind.config.mjspr-0 [&>[role=checkbox]]:tailwind.config.mjstranslate-y-[2px]",
            className,
        )}
        {...props}
    />
));
TableCell.displayName = "TableCell";

const TableCaption = React.forwardRef<
    HTMLTableCaptionElement,
    React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
    <caption
        ref={ref}
        className={cn(
            "tailwind.config.mjsmt-4 tailwind.config.mjstext-sm tailwind.config.mjstext-muted-foreground",
            className,
        )}
        {...props}
    />
));
TableCaption.displayName = "TableCaption";

export {
    Table,
    TableHeader,
    TableBody,
    TableFooter,
    TableHead,
    TableRow,
    TableCell,
    TableCaption,
};
