import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import {
    CheckIcon,
    ChevronRightIcon,
    DotFilledIcon,
} from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";

const DropdownMenu = DropdownMenuPrimitive.Root;

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

const DropdownMenuGroup = DropdownMenuPrimitive.Group;

const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

const DropdownMenuSub = DropdownMenuPrimitive.Sub;

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

const DropdownMenuSubTrigger = React.forwardRef<
    React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
    React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
        inset?: boolean;
    }
>(({ className, inset, children, ...props }, ref) => (
    <DropdownMenuPrimitive.SubTrigger
        ref={ref}
        className={cn(
            "tailwind.config.mjsflex tailwind.config.mjscursor-default tailwind.config.mjsselect-none tailwind.config.mjsitems-center tailwind.config.mjsrounded-sm tailwind.config.mjspx-2 tailwind.config.mjspy-1.5 tailwind.config.mjstext-sm tailwind.config.mjsoutline-none focus:tailwind.config.mjsbg-accent data-[state=open]:tailwind.config.mjsbg-accent",
            inset && "tailwind.config.mjspl-8",
            className,
        )}
        {...props}
    >
        {children}
        <ChevronRightIcon className="tailwind.config.mjsml-auto tailwind.config.mjsh-4 tailwind.config.mjsw-4" />
    </DropdownMenuPrimitive.SubTrigger>
));
DropdownMenuSubTrigger.displayName =
    DropdownMenuPrimitive.SubTrigger.displayName;

const DropdownMenuSubContent = React.forwardRef<
    React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
    React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
    <DropdownMenuPrimitive.SubContent
        ref={ref}
        className={cn(
            "tailwind.config.mjsz-50 tailwind.config.mjsmin-w-[8rem] tailwind.config.mjsoverflow-hidden tailwind.config.mjsrounded-md tailwind.config.mjsborder tailwind.config.mjsbg-popover tailwind.config.mjsp-1 tailwind.config.mjstext-popover-foreground tailwind.config.mjsshadow-lg data-[state=open]:tailwind.config.mjsanimate-in data-[state=closed]:tailwind.config.mjsanimate-out data-[state=closed]:tailwind.config.mjsfade-out-0 data-[state=open]:tailwind.config.mjsfade-in-0 data-[state=closed]:tailwind.config.mjszoom-out-95 data-[state=open]:tailwind.config.mjszoom-in-95 data-[side=bottom]:tailwind.config.mjsslide-in-from-top-2 data-[side=left]:tailwind.config.mjsslide-in-from-right-2 data-[side=right]:tailwind.config.mjsslide-in-from-left-2 data-[side=top]:tailwind.config.mjsslide-in-from-bottom-2",
            className,
        )}
        {...props}
    />
));
DropdownMenuSubContent.displayName =
    DropdownMenuPrimitive.SubContent.displayName;

const DropdownMenuContent = React.forwardRef<
    React.ElementRef<typeof DropdownMenuPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
    <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Content
            ref={ref}
            sideOffset={sideOffset}
            className={cn(
                "tailwind.config.mjsz-50 tailwind.config.mjsmin-w-[8rem] tailwind.config.mjsoverflow-hidden tailwind.config.mjsrounded-md tailwind.config.mjsborder tailwind.config.mjsbg-popover tailwind.config.mjsp-1 tailwind.config.mjstext-popover-foreground tailwind.config.mjsshadow-md",
                "data-[state=open]:tailwind.config.mjsanimate-in data-[state=closed]:tailwind.config.mjsanimate-out data-[state=closed]:tailwind.config.mjsfade-out-0 data-[state=open]:tailwind.config.mjsfade-in-0 data-[state=closed]:tailwind.config.mjszoom-out-95 data-[state=open]:tailwind.config.mjszoom-in-95 data-[side=bottom]:tailwind.config.mjsslide-in-from-top-2 data-[side=left]:tailwind.config.mjsslide-in-from-right-2 data-[side=right]:tailwind.config.mjsslide-in-from-left-2 data-[side=top]:tailwind.config.mjsslide-in-from-bottom-2",
                className,
            )}
            {...props}
        />
    </DropdownMenuPrimitive.Portal>
));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

const DropdownMenuItem = React.forwardRef<
    React.ElementRef<typeof DropdownMenuPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
        inset?: boolean;
    }
>(({ className, inset, ...props }, ref) => (
    <DropdownMenuPrimitive.Item
        ref={ref}
        className={cn(
            "tailwind.config.mjsrelative tailwind.config.mjsflex tailwind.config.mjscursor-default tailwind.config.mjsselect-none tailwind.config.mjsitems-center tailwind.config.mjsrounded-sm tailwind.config.mjspx-2 tailwind.config.mjspy-1.5 tailwind.config.mjstext-sm tailwind.config.mjsoutline-none tailwind.config.mjstransition-colors focus:tailwind.config.mjsbg-accent focus:tailwind.config.mjstext-accent-foreground data-[disabled]:tailwind.config.mjspointer-events-none data-[disabled]:tailwind.config.mjsopacity-50",
            inset && "tailwind.config.mjspl-8",
            className,
        )}
        {...props}
    />
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;

const DropdownMenuCheckboxItem = React.forwardRef<
    React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
    React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
    <DropdownMenuPrimitive.CheckboxItem
        ref={ref}
        className={cn(
            "tailwind.config.mjsrelative tailwind.config.mjsflex tailwind.config.mjscursor-default tailwind.config.mjsselect-none tailwind.config.mjsitems-center tailwind.config.mjsrounded-sm tailwind.config.mjspy-1.5 tailwind.config.mjspl-8 tailwind.config.mjspr-2 tailwind.config.mjstext-sm tailwind.config.mjsoutline-none tailwind.config.mjstransition-colors focus:tailwind.config.mjsbg-accent focus:tailwind.config.mjstext-accent-foreground data-[disabled]:tailwind.config.mjspointer-events-none data-[disabled]:tailwind.config.mjsopacity-50",
            className,
        )}
        checked={checked}
        {...props}
    >
        <span className="tailwind.config.mjsabsolute tailwind.config.mjsleft-2 tailwind.config.mjsflex tailwind.config.mjsh-3.5 tailwind.config.mjsw-3.5 tailwind.config.mjsitems-center tailwind.config.mjsjustify-center">
            <DropdownMenuPrimitive.ItemIndicator>
                <CheckIcon className="tailwind.config.mjsh-4 tailwind.config.mjsw-4" />
            </DropdownMenuPrimitive.ItemIndicator>
        </span>
        {children}
    </DropdownMenuPrimitive.CheckboxItem>
));
DropdownMenuCheckboxItem.displayName =
    DropdownMenuPrimitive.CheckboxItem.displayName;

const DropdownMenuRadioItem = React.forwardRef<
    React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
    React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
    <DropdownMenuPrimitive.RadioItem
        ref={ref}
        className={cn(
            "tailwind.config.mjsrelative tailwind.config.mjsflex tailwind.config.mjscursor-default tailwind.config.mjsselect-none tailwind.config.mjsitems-center tailwind.config.mjsrounded-sm tailwind.config.mjspy-1.5 tailwind.config.mjspl-8 tailwind.config.mjspr-2 tailwind.config.mjstext-sm tailwind.config.mjsoutline-none tailwind.config.mjstransition-colors focus:tailwind.config.mjsbg-accent focus:tailwind.config.mjstext-accent-foreground data-[disabled]:tailwind.config.mjspointer-events-none data-[disabled]:tailwind.config.mjsopacity-50",
            className,
        )}
        {...props}
    >
        <span className="tailwind.config.mjsabsolute tailwind.config.mjsleft-2 tailwind.config.mjsflex tailwind.config.mjsh-3.5 tailwind.config.mjsw-3.5 tailwind.config.mjsitems-center tailwind.config.mjsjustify-center">
            <DropdownMenuPrimitive.ItemIndicator>
                <DotFilledIcon className="tailwind.config.mjsh-4 tailwind.config.mjsw-4 tailwind.config.mjsfill-current" />
            </DropdownMenuPrimitive.ItemIndicator>
        </span>
        {children}
    </DropdownMenuPrimitive.RadioItem>
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;

const DropdownMenuLabel = React.forwardRef<
    React.ElementRef<typeof DropdownMenuPrimitive.Label>,
    React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
        inset?: boolean;
    }
>(({ className, inset, ...props }, ref) => (
    <DropdownMenuPrimitive.Label
        ref={ref}
        className={cn(
            "tailwind.config.mjspx-2 tailwind.config.mjspy-1.5 tailwind.config.mjstext-sm tailwind.config.mjsfont-semibold",
            inset && "tailwind.config.mjspl-8",
            className,
        )}
        {...props}
    />
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;

const DropdownMenuSeparator = React.forwardRef<
    React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
    React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
    <DropdownMenuPrimitive.Separator
        ref={ref}
        className={cn(
            "tailwind.config.mjs-mx-1 tailwind.config.mjsmy-1 tailwind.config.mjsh-px tailwind.config.mjsbg-muted",
            className,
        )}
        {...props}
    />
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

const DropdownMenuShortcut = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
    return (
        <span
            className={cn(
                "tailwind.config.mjsml-auto tailwind.config.mjstext-xs tailwind.config.mjstracking-widest tailwind.config.mjsopacity-60",
                className,
            )}
            {...props}
        />
    );
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

export {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuCheckboxItem,
    DropdownMenuRadioItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuGroup,
    DropdownMenuPortal,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuRadioGroup,
};
