import * as React from "react";
import {
    CaretSortIcon,
    CheckIcon,
    ChevronDownIcon,
    ChevronUpIcon,
} from "@radix-ui/react-icons";
import * as SelectPrimitive from "@radix-ui/react-select";

import { cn } from "@/lib/utils";

const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

const SelectTrigger = React.forwardRef<
    React.ElementRef<typeof SelectPrimitive.Trigger>,
    React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
    <SelectPrimitive.Trigger
        ref={ref}
        className={cn(
            "tailwind.config.mjsflex tailwind.config.mjsh-9 tailwind.config.mjsw-full tailwind.config.mjsitems-center tailwind.config.mjsjustify-between tailwind.config.mjswhitespace-nowrap tailwind.config.mjsrounded-md tailwind.config.mjsborder tailwind.config.mjsborder-input tailwind.config.mjsbg-transparent tailwind.config.mjspx-3 tailwind.config.mjspy-2 tailwind.config.mjstext-sm tailwind.config.mjsshadow-sm tailwind.config.mjsring-offset-background placeholder:tailwind.config.mjstext-muted-foreground focus:tailwind.config.mjsoutline-none focus:tailwind.config.mjsring-1 focus:tailwind.config.mjsring-ring disabled:tailwind.config.mjscursor-not-allowed disabled:tailwind.config.mjsopacity-50 [&>span]:tailwind.config.mjsline-clamp-1",
            className,
        )}
        {...props}
    >
        {children}
        <SelectPrimitive.Icon asChild>
            <CaretSortIcon className="tailwind.config.mjsh-4 tailwind.config.mjsw-4 tailwind.config.mjsopacity-50" />
        </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectScrollUpButton = React.forwardRef<
    React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
    React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
    <SelectPrimitive.ScrollUpButton
        ref={ref}
        className={cn(
            "tailwind.config.mjsflex tailwind.config.mjscursor-default tailwind.config.mjsitems-center tailwind.config.mjsjustify-center tailwind.config.mjspy-1",
            className,
        )}
        {...props}
    >
        <ChevronUpIcon />
    </SelectPrimitive.ScrollUpButton>
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

const SelectScrollDownButton = React.forwardRef<
    React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
    React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
    <SelectPrimitive.ScrollDownButton
        ref={ref}
        className={cn(
            "tailwind.config.mjsflex tailwind.config.mjscursor-default tailwind.config.mjsitems-center tailwind.config.mjsjustify-center tailwind.config.mjspy-1",
            className,
        )}
        {...props}
    >
        <ChevronDownIcon />
    </SelectPrimitive.ScrollDownButton>
));
SelectScrollDownButton.displayName =
    SelectPrimitive.ScrollDownButton.displayName;

const SelectContent = React.forwardRef<
    React.ElementRef<typeof SelectPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
    <SelectPrimitive.Portal>
        <SelectPrimitive.Content
            ref={ref}
            className={cn(
                "tailwind.config.mjsrelative tailwind.config.mjsz-50 tailwind.config.mjsmax-h-96 tailwind.config.mjsmin-w-[8rem] tailwind.config.mjsoverflow-hidden tailwind.config.mjsrounded-md tailwind.config.mjsborder tailwind.config.mjsbg-popover tailwind.config.mjstext-popover-foreground tailwind.config.mjsshadow-md data-[state=open]:tailwind.config.mjsanimate-in data-[state=closed]:tailwind.config.mjsanimate-out data-[state=closed]:tailwind.config.mjsfade-out-0 data-[state=open]:tailwind.config.mjsfade-in-0 data-[state=closed]:tailwind.config.mjszoom-out-95 data-[state=open]:tailwind.config.mjszoom-in-95 data-[side=bottom]:tailwind.config.mjsslide-in-from-top-2 data-[side=left]:tailwind.config.mjsslide-in-from-right-2 data-[side=right]:tailwind.config.mjsslide-in-from-left-2 data-[side=top]:tailwind.config.mjsslide-in-from-bottom-2",
                position === "popper" &&
                    "data-[side=bottom]:tailwind.config.mjstranslate-y-1 data-[side=left]:tailwind.config.mjs-translate-x-1 data-[side=right]:tailwind.config.mjstranslate-x-1 data-[side=top]:tailwind.config.mjs-translate-y-1",
                className,
            )}
            position={position}
            {...props}
        >
            <SelectScrollUpButton />
            <SelectPrimitive.Viewport
                className={cn(
                    "tailwind.config.mjsp-1",
                    position === "popper" &&
                        "tailwind.config.mjsh-[var(--radix-select-trigger-height)] tailwind.config.mjsw-full tailwind.config.mjsmin-w-[var(--radix-select-trigger-width)]",
                )}
            >
                {children}
            </SelectPrimitive.Viewport>
            <SelectScrollDownButton />
        </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = React.forwardRef<
    React.ElementRef<typeof SelectPrimitive.Label>,
    React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
    <SelectPrimitive.Label
        ref={ref}
        className={cn(
            "tailwind.config.mjspx-2 tailwind.config.mjspy-1.5 tailwind.config.mjstext-sm tailwind.config.mjsfont-semibold",
            className,
        )}
        {...props}
    />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = React.forwardRef<
    React.ElementRef<typeof SelectPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
    <SelectPrimitive.Item
        ref={ref}
        className={cn(
            "tailwind.config.mjsrelative tailwind.config.mjsflex tailwind.config.mjsw-full tailwind.config.mjscursor-default tailwind.config.mjsselect-none tailwind.config.mjsitems-center tailwind.config.mjsrounded-sm tailwind.config.mjspy-1.5 tailwind.config.mjspl-2 tailwind.config.mjspr-8 tailwind.config.mjstext-sm tailwind.config.mjsoutline-none focus:tailwind.config.mjsbg-accent focus:tailwind.config.mjstext-accent-foreground data-[disabled]:tailwind.config.mjspointer-events-none data-[disabled]:tailwind.config.mjsopacity-50",
            className,
        )}
        {...props}
    >
        <span className="tailwind.config.mjsabsolute tailwind.config.mjsright-2 tailwind.config.mjsflex tailwind.config.mjsh-3.5 tailwind.config.mjsw-3.5 tailwind.config.mjsitems-center tailwind.config.mjsjustify-center">
            <SelectPrimitive.ItemIndicator>
                <CheckIcon className="tailwind.config.mjsh-4 tailwind.config.mjsw-4" />
            </SelectPrimitive.ItemIndicator>
        </span>
        <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = React.forwardRef<
    React.ElementRef<typeof SelectPrimitive.Separator>,
    React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
    <SelectPrimitive.Separator
        ref={ref}
        className={cn(
            "tailwind.config.mjs-mx-1 tailwind.config.mjsmy-1 tailwind.config.mjsh-px tailwind.config.mjsbg-muted",
            className,
        )}
        {...props}
    />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export {
    Select,
    SelectGroup,
    SelectValue,
    SelectTrigger,
    SelectContent,
    SelectLabel,
    SelectItem,
    SelectSeparator,
    SelectScrollUpButton,
    SelectScrollDownButton,
};
