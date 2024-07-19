import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";

import { cn } from "@/lib/utils";

const Popover = PopoverPrimitive.Root;

const PopoverTrigger = PopoverPrimitive.Trigger;

const PopoverAnchor = PopoverPrimitive.Anchor;

const PopoverContent = React.forwardRef<
    React.ElementRef<typeof PopoverPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
    <PopoverPrimitive.Portal>
        <PopoverPrimitive.Content
            ref={ref}
            align={align}
            sideOffset={sideOffset}
            className={cn(
                "tailwind.config.mjsz-50 tailwind.config.mjsw-72 tailwind.config.mjsrounded-md tailwind.config.mjsborder tailwind.config.mjsbg-popover tailwind.config.mjsp-4 tailwind.config.mjstext-popover-foreground tailwind.config.mjsshadow-md tailwind.config.mjsoutline-none data-[state=open]:tailwind.config.mjsanimate-in data-[state=closed]:tailwind.config.mjsanimate-out data-[state=closed]:tailwind.config.mjsfade-out-0 data-[state=open]:tailwind.config.mjsfade-in-0 data-[state=closed]:tailwind.config.mjszoom-out-95 data-[state=open]:tailwind.config.mjszoom-in-95 data-[side=bottom]:tailwind.config.mjsslide-in-from-top-2 data-[side=left]:tailwind.config.mjsslide-in-from-right-2 data-[side=right]:tailwind.config.mjsslide-in-from-left-2 data-[side=top]:tailwind.config.mjsslide-in-from-bottom-2",
                className,
            )}
            {...props}
        />
    </PopoverPrimitive.Portal>
));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor };
